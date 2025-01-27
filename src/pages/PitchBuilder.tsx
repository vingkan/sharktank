import {
  Card,
  Grid,
  Heading,
  Text,
  Box,
  Button,
  Flex,
  RadioCards,
  CheckboxCards,
  Progress,
  Badge,
} from "@radix-ui/themes";
import { useState } from "react";
import type { Company } from "../data/types";
import { COMPANIES } from "../data/companies";
import { SECTIONS } from "../data/sections";

type Step = "select" | "build" | "review";
type Choices = Record<string, string[]>;

export default function PitchBuilder() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [currentStep, setCurrentStep] = useState<Step>("select");
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [choices, setChoices] = useState<Choices>({});

  const handleSelectCompany = (company: Company) => {
    setSelectedCompany(company);
    setCurrentStep("build");
    setChoices({});
    setCurrentSectionIndex(0);
  };

  const handleOptionSelect = (sectionName: string, value: string) => {
    setChoices((prev) => ({
      ...prev,
      [sectionName]: [value],
    }));
  };

  const handleNext = () => {
    if (!selectedCompany) return;

    if (currentSectionIndex < SECTIONS.length - 1) {
      setCurrentSectionIndex((prev) => prev + 1);
    } else {
      setCurrentStep("review");
    }
  };

  const handleBack = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex((prev) => prev - 1);
    } else {
      setCurrentStep("select");
      setSelectedCompany(null);
      setChoices({});
    }
  };

  if (currentStep === "select") {
    return (
      <Box>
        <Heading size="8" mb="4">
          Choose Your Company
        </Heading>
        <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4">
          {COMPANIES.map((company, index) => (
            <Card
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => handleSelectCompany(company)}
            >
              <Heading size="6" mb="2">
                {company.company.name}
              </Heading>
              <Badge size="3" mb="2">
                {company.company.industry}
              </Badge>
              <Text as="p" size="5">
                {company.company.oneSentence}
              </Text>
            </Card>
          ))}
        </Grid>
      </Box>
    );
  }

  if (currentStep === "build" && selectedCompany) {
    const currentSection = SECTIONS[currentSectionIndex];
    const sectionData = selectedCompany.pitchSections[currentSection.section];
    const currentChoices = choices[currentSection.section] || [];
    const canProgress =
      currentChoices.length > 0 &&
      (currentSection.type === "pickOne"
        ? currentChoices.length === 1
        : currentChoices.length === 2);

    return (
      <Box>
        <Flex justify="between" align="center" gap="4" mb="4">
          <img src="./sharktank/icon.png" alt="logo" width={48} height={48} />
          <Progress
            value={((currentSectionIndex + 1) / SECTIONS.length) * 100}
          />
          <Text size="4" color="gray">
            {currentSectionIndex + 1} of {SECTIONS.length}
          </Text>
        </Flex>

        <Heading size="8" mb="2">
          {currentSection.title}
        </Heading>
        <Text as="p" size="5" mb="4" color="gray">
          {currentSection.description}
        </Text>

        {currentSection.type === "pickOne" ? (
          <Flex direction="column" gap="3">
            <RadioCards.Root
              size="3"
              columns="1"
              value={currentChoices[0]}
              onValueChange={(value) =>
                handleOptionSelect(currentSection.section, value)
              }
            >
              {sectionData?.options.map((option, index) => (
                <RadioCards.Item key={index} value={option.name}>
                  <Text as="p" size="5">
                    {option.name}
                  </Text>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </Flex>
        ) : (
          <CheckboxCards.Root
            size="3"
            value={currentChoices}
            onValueChange={(value) => {
              if (value.length <= 2) {
                setChoices((prev) => ({
                  ...prev,
                  [currentSection.section]: value,
                }));
              }
            }}
          >
            {sectionData?.options.map((option, index) => (
              <CheckboxCards.Item
                key={index}
                value={option.name}
                disabled={
                  !currentChoices.includes(option.name) &&
                  currentChoices.length >= 2
                }
              >
                <Text as="p" size="5">
                  {option.name}
                </Text>
              </CheckboxCards.Item>
            ))}
          </CheckboxCards.Root>
        )}

        <Flex justify="between" mt="4">
          <Button size="4" variant="outline" onClick={handleBack}>
            Back
          </Button>
          <Button size="4" disabled={!canProgress} onClick={handleNext}>
            {currentSectionIndex === SECTIONS.length - 1 ? "Review" : "Next"}
          </Button>
        </Flex>
      </Box>
    );
  }

  if (currentStep === "review" && selectedCompany) {
    const buildFullPitch = () => {
      const pitch: string[] = [];

      // Add each section's selected text
      SECTIONS.forEach((section) => {
        const sectionData = selectedCompany.pitchSections[section.section];
        const sectionChoices = choices[section.section] || [];

        // Insert company intro after the hook
        if (section.section === "hook") {
          const hookOption = sectionData.options.find(
            (opt) => opt.name === sectionChoices[0]
          );
          if (hookOption) {
            pitch.push(hookOption.text);
            pitch.push(selectedCompany.company.oneSentence);
            pitch.push(selectedCompany.company.ask);
          }
          return;
        }

        // Add selected options text
        sectionData.options
          .filter((opt) => sectionChoices.includes(opt.name))
          .forEach((opt) => pitch.push(opt.text));
      });

      return pitch;
    };

    const fullPitch = buildFullPitch();

    return (
      <Box>
        <Flex justify="between" align="center" mb="4">
          <Button
            size="3"
            variant="ghost"
            onClick={() => setCurrentStep("build")}
          >
            Back
          </Button>
          <Button
            variant="ghost"
            size="3"
            color="red"
            onClick={() => {
              setCurrentStep("select");
              setSelectedCompany(null);
              setChoices({});
            }}
          >
            Start Over
          </Button>
        </Flex>

        <Heading size="8" mb="4">
          {selectedCompany.company.name}
        </Heading>

        <Heading size="7" mb="4">
          Pitch
        </Heading>
        <Box mb="6">
          {fullPitch.map((paragraph, index) => (
            <Text as="p" size="5" mb="4" key={index}>
              {paragraph}
            </Text>
          ))}
        </Box>

        <Heading size="7" mb="4">
          Q&A
        </Heading>
        {selectedCompany.questionsAndAnswers.map((qa, index) => (
          <Box key={index} mb="4">
            <Text as="p" size="5" weight="bold" mb="2">
              {qa.question}
            </Text>
            <Text as="p" size="5">
              {qa.answer}
            </Text>
          </Box>
        ))}
      </Box>
    );
  }

  // We'll implement the review step next
  return <div>Review pitch for {selectedCompany?.company.name}</div>;
}
