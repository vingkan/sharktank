import {
  Avatar,
  Blockquote,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Progress,
  RadioCards,
  Text,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ORIGINS,
  OUTCOMES,
  INDUSTRIES,
  SHARKS,
  BIO_TEMPLATES,
  Origin,
  Outcome,
  SharkId,
  Industry,
  BioTemplate,
} from "../data/investors";

type Step =
  | "origin"
  | "outcome"
  | "industry"
  | "sharks"
  | "template"
  | "result";

interface BioBuilderState {
  origin?: Origin;
  outcome?: Outcome;
  industry?: Industry;
  sharks: SharkId[];
  template?: BioTemplate;
}

const STORAGE_PREFIX = "bioBuilder__";
const STORAGE_KEYS = {
  currentStep: `${STORAGE_PREFIX}currentStep`,
  origin: `${STORAGE_PREFIX}origin`,
  outcome: `${STORAGE_PREFIX}outcome`,
  industry: `${STORAGE_PREFIX}industry`,
  sharks: `${STORAGE_PREFIX}sharks`,
  template: `${STORAGE_PREFIX}template`,
} as const;

const ResultView = ({
  state,
  handleBack,
  handleStartOver,
}: {
  state: BioBuilderState;
  handleBack: () => void;
  handleStartOver: () => void;
}) => {
  const { origin, outcome, industry, sharks, template } = state;
  if (!template || !outcome || !industry)
    return (
      <Box>
        <Flex direction="column" align="center" mt="4">
          <Text as="p" size="5" color="gray" my="4">
            Something went wrong. Please start over.
          </Text>
          <Button
            size="4"
            variant="soft"
            color="red"
            my="4"
            onClick={handleStartOver}
          >
            Start Over
          </Button>
        </Flex>
      </Box>
    );

  const bio = template.template
    .replace("[Industry]", industry.name)
    .replace("[Outcome]", template.outcomes[outcome]);

  const questions = sharks
    .map((sharkId) => SHARKS.find((s) => s.id === sharkId)?.questions[outcome])
    .filter(Boolean);

  const turnOffs = sharks
    .map((sharkId) => SHARKS.find((s) => s.id === sharkId)?.turnOffs[origin!])
    .filter(Boolean);

  return (
    <>
      <Flex justify="between" my="4" mb="6">
        <Button
          size="4"
          variant="ghost"
          onClick={handleBack}
          style={{ width: "100px" }}
        >
          Back
        </Button>
        <Link to="/deal">
          <Button size="4" variant="ghost" style={{ width: "100px" }}>
            Deals
          </Button>
        </Link>
        <Button
          size="4"
          variant="ghost"
          color="red"
          onClick={handleStartOver}
          style={{ width: "100px" }}
        >
          Start Over
        </Button>
      </Flex>

      <Card size="3" mb="4">
        <Heading size="6" mb="2">
          Investor Bio
        </Heading>
        <Text as="p" size="4" color="gray">
          This is the origin story of how you made a name for yourself.
        </Text>
        <Blockquote mt="4">
          <Text as="p" size="5">
            {bio}
          </Text>
        </Blockquote>
      </Card>

      <Card size="3" mb="4">
        <Heading size="6" mb="2">
          Questions
        </Heading>
        <Text as="p" size="4" color="gray">
          You like to ask these questions to founders after (or during) their
          pitch.
        </Text>
        {questions.map((question, index) => (
          <Blockquote key={index} mt="4">
            <Text as="p" size="5">
              {question}
            </Text>
          </Blockquote>
        ))}
      </Card>

      <Card size="3" mb="4">
        <Heading size="6" mb="2">
          For That Reason, I'm Out
        </Heading>
        <Text as="p" size="4" color="gray">
          These issues cause you to walk away from a deal.
        </Text>
        {turnOffs.map((turnOff, index) => (
          <Blockquote key={index} mt="4">
            <Text as="p" size="5">
              {turnOff}
            </Text>
          </Blockquote>
        ))}
      </Card>

      <Card size="3" mb="4">
        <Heading size="6" mb="2">
          Value-Add
        </Heading>
        <Text as="p" size="4" color="gray">
          These are ways you can help the founders you invest in succeed.
        </Text>
        <Blockquote mt="4">
          <Text as="p" size="5">
            {template.skills}
          </Text>
        </Blockquote>
        <Blockquote mt="4">
          <Text as="p" size="5">
            {industry.skills[outcome]}
          </Text>
        </Blockquote>
      </Card>
    </>
  );
};

export default function BioBuilder() {
  const [currentStep, setCurrentStep] = useState<Step | "start">(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.currentStep);
    return (saved as Step | "start") || "start";
  });

  const [state, setState] = useState<BioBuilderState>(() => {
    return {
      origin:
        (localStorage.getItem(STORAGE_KEYS.origin) as Origin) || undefined,
      outcome:
        (localStorage.getItem(STORAGE_KEYS.outcome) as Outcome) || undefined,
      industry: INDUSTRIES.find(
        (i) => i.name === localStorage.getItem(STORAGE_KEYS.industry)
      ),
      sharks: JSON.parse(localStorage.getItem(STORAGE_KEYS.sharks) || "[]"),
      template: BIO_TEMPLATES.find(
        (t) => t.name === localStorage.getItem(STORAGE_KEYS.template)
      ),
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.currentStep, currentStep);
  }, [currentStep]);

  useEffect(() => {
    if (state.origin) {
      localStorage.setItem(STORAGE_KEYS.origin, state.origin);
    } else {
      localStorage.removeItem(STORAGE_KEYS.origin);
    }
  }, [state.origin]);

  useEffect(() => {
    if (state.outcome) {
      localStorage.setItem(STORAGE_KEYS.outcome, state.outcome);
    } else {
      localStorage.removeItem(STORAGE_KEYS.outcome);
    }
  }, [state.outcome]);

  useEffect(() => {
    if (state.industry) {
      localStorage.setItem(STORAGE_KEYS.industry, state.industry.name);
    } else {
      localStorage.removeItem(STORAGE_KEYS.industry);
    }
  }, [state.industry]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.sharks, JSON.stringify(state.sharks));
  }, [state.sharks]);

  useEffect(() => {
    if (state.template) {
      localStorage.setItem(STORAGE_KEYS.template, state.template.name);
    } else {
      localStorage.removeItem(STORAGE_KEYS.template);
    }
  }, [state.template]);

  const clearStoredData = () => {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key);
    });
  };

  const handleStartOver = () => {
    setCurrentStep("start");
    setState({
      origin: undefined,
      outcome: undefined,
      industry: undefined,
      sharks: [],
      template: undefined,
    });
    clearStoredData();
  };

  const steps: Step[] = [
    "origin",
    "outcome",
    "industry",
    "sharks",
    "template",
    "result",
  ];

  const handleNext = () => {
    const currentIndex = steps.indexOf(currentStep as Step);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.indexOf(currentStep as Step);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
    } else {
      // Go back to start view from first step
      setCurrentStep("start");
      setState({ sharks: [] });
    }
  };

  const canProgress = () => {
    switch (currentStep) {
      case "origin":
        return !!state.origin;
      case "outcome":
        return !!state.outcome;
      case "industry":
        return !!state.industry;
      case "sharks":
        return state.sharks.length === 2;
      case "template":
        return !!state.template;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    const availableTemplates = BIO_TEMPLATES.filter(
      (template) => template.origin === state.origin
    );

    switch (currentStep) {
      case "origin":
        return (
          <>
            <Heading size="8" mb="2">
              Origin Story
            </Heading>
            <Text as="p" size="5" mb="4" color="gray">
              Choose how you got started in business:
            </Text>
            <RadioCards.Root
              columns="1"
              value={state.origin}
              onValueChange={(value) =>
                setState({ ...state, origin: value as Origin })
              }
              size="3"
            >
              {ORIGINS.map((origin) => (
                <RadioCards.Item key={origin.id} value={origin.id}>
                  <Text as="p" size="5">
                    {origin.display}
                  </Text>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </>
        );

      case "outcome":
        return (
          <>
            <Heading size="8" mb="2">
              Claim to Fame
            </Heading>
            <Text as="p" size="5" mb="4" color="gray">
              Choose the accomplishment that made you financially successful:
            </Text>
            <RadioCards.Root
              columns="1"
              value={state.outcome}
              onValueChange={(value) =>
                setState({ ...state, outcome: value as Outcome })
              }
              size="3"
            >
              {OUTCOMES.map((outcome) => (
                <RadioCards.Item key={outcome.id} value={outcome.id}>
                  <Text as="p" size="5">
                    {outcome.display}
                  </Text>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </>
        );

      case "industry":
        return (
          <>
            <Heading size="8" mb="2">
              Industry
            </Heading>
            <Text as="p" size="5" mb="4" color="gray">
              Choose where you made your mark:
            </Text>
            <RadioCards.Root
              value={state.industry?.name}
              onValueChange={(value) =>
                setState({
                  ...state,
                  industry: INDUSTRIES.find((i) => i.name === value),
                })
              }
              size="3"
            >
              {INDUSTRIES.map((industry) => (
                <RadioCards.Item key={industry.name} value={industry.name}>
                  <Text as="p" size="5" style={{ width: "100%" }}>
                    {industry.name}
                  </Text>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </>
        );

      case "sharks":
        return (
          <>
            <Heading size="8" mb="2">
              Influences
            </Heading>
            <Text as="p" size="5" mb="4" color="gray">
              Select two Sharks who fit your vibe:
            </Text>
            <Grid columns={{ initial: "2", sm: "2", md: "3" }} gap="4" my="4">
              {SHARKS.map((shark) => {
                const isSelected = state.sharks.includes(shark.id);
                const isDisabled = !isSelected && state.sharks.length >= 2;

                return (
                  <Card
                    key={shark.id}
                    style={{
                      cursor: isDisabled ? "not-allowed" : "pointer",
                      opacity: isDisabled ? 0.5 : 1,
                      transition: "all 0.2s ease-in-out",
                      backgroundColor: isSelected
                        ? "var(--accent-7)"
                        : "transparent",
                    }}
                    onClick={() => {
                      if (isDisabled) return;
                      if (isSelected) {
                        setState({
                          ...state,
                          sharks: state.sharks.filter((id) => id !== shark.id),
                        });
                      } else {
                        setState({
                          ...state,
                          sharks: [...state.sharks, shark.id],
                        });
                      }
                    }}
                  >
                    <Flex direction="column" align="center" gap="2">
                      <Avatar
                        size="8"
                        src={shark.image}
                        fallback={shark.name[0]}
                        radius="small"
                      />
                      <Text size="5">{shark.name}</Text>
                    </Flex>
                  </Card>
                );
              })}
            </Grid>
          </>
        );

      case "template":
        return (
          <>
            <Heading size="8" mb="2">
              Founding Story
            </Heading>
            <Text as="p" size="5" mb="4" color="gray">
              Choose a founding story:
            </Text>
            <RadioCards.Root
              columns="1"
              value={state.template?.name}
              onValueChange={(value) =>
                setState({
                  ...state,
                  template: availableTemplates.find((t) => t.name === value),
                })
              }
              size="3"
            >
              {availableTemplates.map((template) => (
                <RadioCards.Item key={template.name} value={template.name}>
                  <Text as="p" size="5">
                    {template.name}
                  </Text>
                </RadioCards.Item>
              ))}
            </RadioCards.Root>
          </>
        );

      case "result":
        return (
          <ResultView
            state={state}
            handleBack={handleBack}
            handleStartOver={handleStartOver}
          />
        );
    }
  };

  return (
    <Box>
      {currentStep === "start" ? (
        <>
          <Flex justify="start" align="center" gap="4" mb="4">
            <Link to="/">
              <img
                src="../sharktank/icon.png"
                alt="logo"
                width={64}
                height={64}
              />
            </Link>
            <Heading size="8" mb="2">
              Bio Creator
            </Heading>
          </Flex>
          <Text as="p" size="5" my="4" color="gray">
            Hello Sharks! It's time to create your investor bio.
          </Text>
          <Text as="p" size="5" my="4" color="gray">
            Answer a few questions to discover your unique investment style and
            personality.
          </Text>
          <Flex justify="center" mt="6">
            <Button size="4" onClick={() => setCurrentStep("origin")}>
              Let's Go
            </Button>
          </Flex>
        </>
      ) : (
        <>
          <Flex justify="between" align="center" gap="4" mb="4">
            <Link to="/">
              <img
                src="../sharktank/icon.png"
                alt="logo"
                width={48}
                height={48}
              />
            </Link>
            <Progress
              value={Math.min(
                100,
                ((steps.indexOf(currentStep) + 1) / (steps.length - 1)) * 100
              )}
            />
            <Text size="4" color="gray">
              {currentStep !== "result"
                ? `${steps.indexOf(currentStep) + 1} of ${steps.length - 1}`
                : "Complete"}
            </Text>
          </Flex>

          {renderStepContent()}

          {currentStep !== "result" && (
            <Flex justify="between" gap="2" mt="4">
              <Button size="4" variant="soft" onClick={handleBack}>
                Back
              </Button>
              <Button size="4" onClick={handleNext} disabled={!canProgress()}>
                {currentStep === "template" ? "View Profile" : "Continue"}
              </Button>
            </Flex>
          )}
        </>
      )}
    </Box>
  );
}
