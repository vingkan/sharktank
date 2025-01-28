import {
  Avatar,
  Blockquote,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Grid,
} from "@radix-ui/themes";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PERSPECTIVES } from "../data/perspectives";
import { INVESTOR_BIOS } from "../data/bios";
import type { InvestorBio, PerspectiveType } from "../data/types";

function findMatchingBio(perspectives: PerspectiveType[]): InvestorBio | null {
  const sortedPerspectives = [...perspectives].sort();

  return (
    INVESTOR_BIOS.find((bio) => {
      const sortedBioKey = [...bio.key].sort();
      return (
        sortedBioKey.length === sortedPerspectives.length &&
        sortedBioKey.every((k, i) => k === sortedPerspectives[i])
      );
    }) || null
  );
}

export default function OldBioBuilder() {
  const [selectedPerspectives, setSelectedPerspectives] = useState<
    PerspectiveType[]
  >(() => {
    const saved = localStorage.getItem("selectedPerspectives");
    return saved ? JSON.parse(saved) : [];
  });

  const [showResults, setShowResults] = useState(() => {
    const saved = localStorage.getItem("showResults");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem(
      "selectedPerspectives",
      JSON.stringify(selectedPerspectives)
    );
  }, [selectedPerspectives]);

  useEffect(() => {
    localStorage.setItem("showResults", JSON.stringify(showResults));
  }, [showResults]);

  const canContinue = selectedPerspectives.length === 3;
  const bio = findMatchingBio(selectedPerspectives);

  const handleClear = () => {
    setSelectedPerspectives([]);
    setShowResults(false);
    localStorage.removeItem("selectedPerspectives");
    localStorage.removeItem("showResults");
  };

  const handleBack = () => {
    setShowResults(false);
    localStorage.setItem("showResults", "false");
  };

  if (showResults) {
    if (!bio) {
      return (
        <Box>
          <Flex justify="start" align="center" gap="4" mb="4">
            <Link to="/">
              <img
                src="../sharktank/icon.png"
                alt="logo"
                width={64}
                height={64}
              />
            </Link>
            <Heading size="8">Your Investor Bio</Heading>
          </Flex>
          <Text as="p" size="5" mb="4" color="gray">
            No matching bio found.
          </Text>
          <Button size="4" variant="soft" onClick={handleBack}>
            Back
          </Button>
        </Box>
      );
    }

    return (
      <Box>
        <Flex justify="start" align="center" gap="4" mb="4">
          <Link to="/">
            <img
              src="../sharktank/icon.png"
              alt="logo"
              width={64}
              height={64}
            />
          </Link>
          <Heading size="8">Your Investor Bio</Heading>
        </Flex>

        <Card size="3" mb="4">
          <Heading size="6" mb="2">
            How did you make your money?
          </Heading>
          <Text as="p" size="5" color="gray" mt="4">
            {bio.background}
          </Text>
        </Card>

        <Card size="3" mb="4">
          <Heading size="6" mb="2">
            What industries do you like to invest in?
          </Heading>
          <Text as="p" size="5" color="gray" mt="4">
            {bio.favorites}
          </Text>
        </Card>

        <Card size="3" mb="4">
          <Heading size="6" mb="2">
            How do you add value to the companies you invest in?
          </Heading>
          <Text as="p" size="5" color="gray" mt="4">
            {bio.valueAdds}
          </Text>
        </Card>

        <Card size="3" mb="4">
          <Heading size="6" mb="2">
            What makes you not want to invest?
          </Heading>
          <Text as="p" size="5" color="gray" mt="4">
            {bio.turnOffs}
          </Text>
        </Card>

        <Card size="3" mb="4">
          <Heading size="6" mb="2">
            What questions do you ask founders?
          </Heading>
          <Flex direction="column" gap="2">
            {bio.questions.map((question, index) => (
              <Blockquote key={index} size="5" color="gray">
                {question}
              </Blockquote>
            ))}
          </Flex>
        </Card>

        <Flex justify="between">
          <Button size="4" variant="soft" onClick={handleBack}>
            Back
          </Button>
          <Link to="/">
            <Button size="4">Done</Button>
          </Link>
        </Flex>
      </Box>
    );
  }

  return (
    <Box>
      <Flex justify="start" align="center" gap="4" mb="4">
        <Link to="/">
          <img src="../sharktank/icon.png" alt="logo" width={64} height={64} />
        </Link>
        <Heading size="8">Bio Creator</Heading>
      </Flex>

      <Text size="5" my="4" color="gray">
        Choose three perspectives that resonate most with your investment style:
      </Text>

      <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap="4" my="4">
        {PERSPECTIVES.map((perspective) => {
          const isSelected = selectedPerspectives.includes(perspective.type);
          const isDisabled = !isSelected && selectedPerspectives.length >= 3;

          return (
            <Card
              key={perspective.type}
              style={{
                cursor: isDisabled ? "not-allowed" : "pointer",
                opacity: isDisabled ? 0.5 : 1,
                transition: "all 0.2s ease-in-out",
                backgroundColor: isSelected ? "var(--accent-7)" : "transparent",
              }}
              onClick={() => {
                if (isDisabled) return;
                if (isSelected) {
                  setSelectedPerspectives(
                    selectedPerspectives.filter((p) => p !== perspective.type)
                  );
                } else {
                  setSelectedPerspectives([
                    ...selectedPerspectives,
                    perspective.type,
                  ]);
                }
              }}
            >
              <Flex align="center" gap="4">
                <Avatar
                  size="7"
                  src={perspective.image}
                  fallback={perspective.investor[0]}
                  radius="small"
                />
                <Flex direction="column" gap="1">
                  <Heading size="5">{perspective.investor}</Heading>
                  <Text size="3" color="gray">
                    {perspective.text}
                  </Text>
                </Flex>
              </Flex>
            </Card>
          );
        })}
      </Grid>

      <Flex justify="between" mt="4">
        <Button size="4" variant="soft" onClick={handleClear}>
          Clear
        </Button>
        <Button
          size="4"
          disabled={!canContinue}
          onClick={() => setShowResults(true)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}
