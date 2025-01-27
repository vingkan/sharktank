import { Link } from "react-router-dom";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";

export default function Home() {
  return (
    <Box>
      <Flex justify="start" align="center" gap="4" mb="4">
        <img src="../sharktank/icon.png" alt="logo" width={64} height={64} />
        <Heading size="8">Hello, Sharks!</Heading>
      </Flex>

      <Flex direction="column" gap="4" my="4">
        <Link to="/pitch" style={{ textDecoration: "none", color: "black" }}>
          <Card size="2" style={{ cursor: "pointer" }}>
            <Heading size="7" mb="2">
              Founders
            </Heading>
            <Text as="p" size="5">
              Choose a company and build your pitch step by step.
            </Text>
          </Card>
        </Link>

        <Link to="/bio" style={{ textDecoration: "none", color: "black" }}>
          <Card size="2" style={{ cursor: "pointer" }}>
            <Heading size="7" mb="2">
              Investors
            </Heading>
            <Text as="p" size="5">
              Choose your Shark influences and discover your investor
              personality.
            </Text>
          </Card>
        </Link>
      </Flex>
    </Box>
  );
}
