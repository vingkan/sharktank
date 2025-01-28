import { useState } from "react";
import {
  Box,
  Card,
  Flex,
  Heading,
  Text,
  TextField,
  Button,
  Grid,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";

const LABEL_STYLE = { width: "170px" };
const INPUT_STYLE = { flex: 1, fontSize: "1.25rem" };
const MAX_NUMBER = 1_000_000_000_000;

export default function DealBuilder() {
  // Input state as strings
  const [investmentAsk, setInvestmentAsk] = useState<string>("");
  const [equityPercentage, setEquityPercentage] = useState<string>("");
  const [annualRevenue, setAnnualRevenue] = useState<string>("");
  const [investmentReturnRate, setInvestmentReturnRate] = useState<string>("");

  // Optional royalty inputs
  const [royaltyPercentage, setRoyaltyPercentage] = useState<string>("");
  const [royaltyYears, setRoyaltyYears] = useState<string>("");
  const [royaltyMaximum, setRoyaltyMaximum] = useState<string>("");

  // UI state
  const [showRoyalties, setShowRoyalties] = useState<boolean>(false);
  const [showRoyaltyYears, setShowRoyaltyYears] = useState<boolean>(false);
  const [showRoyaltyMaximum, setShowRoyaltyMaximum] = useState<boolean>(false);

  // Constants
  const INVESTMENT_YEARS = 5;

  // Parse numeric values
  const parseNumber = (value: string, allowZero = false): number | null => {
    const num = parseFloat(value);
    if (isNaN(num) || (!allowZero && num <= 0) || (allowZero && num < 0)) {
      return null;
    }
    return num;
  };

  // Derived numeric values
  const investmentAskNum = parseNumber(investmentAsk);
  const equityPercentageNum = parseNumber(equityPercentage);
  const annualRevenueNum = parseNumber(annualRevenue);
  const investmentReturnRateNum = parseNumber(investmentReturnRate);
  const royaltyPercentageNum = parseNumber(royaltyPercentage, true);
  const royaltyYearsNum = showRoyaltyYears
    ? parseNumber(royaltyYears)
    : Infinity;
  const royaltyMaximumNum = showRoyaltyMaximum
    ? parseNumber(royaltyMaximum)
    : Infinity;

  // Calculated values
  const cappedRoyaltyYears = Math.min(
    INVESTMENT_YEARS,
    royaltyYearsNum ?? Infinity
  );

  const annualRoyalty =
    royaltyPercentageNum != null && annualRevenueNum != null
      ? (royaltyPercentageNum / 100) * annualRevenueNum
      : null;

  const uncappedRoyaltyGross =
    annualRoyalty != null ? annualRoyalty * cappedRoyaltyYears : null;

  const cappedRoyaltyGross =
    uncappedRoyaltyGross != null
      ? Math.min(uncappedRoyaltyGross, royaltyMaximumNum ?? Infinity)
      : null;

  const currentValuation =
    investmentAskNum != null && equityPercentageNum != null
      ? investmentAskNum / (equityPercentageNum / 100)
      : null;

  const targetEquityValue =
    investmentAskNum != null && investmentReturnRateNum != null
      ? investmentAskNum *
        Math.pow(1 + investmentReturnRateNum / 100, INVESTMENT_YEARS)
      : null;

  const royaltyAdjustedTargetEquityValue =
    targetEquityValue != null
      ? Math.max(0, targetEquityValue - (cappedRoyaltyGross ?? 0))
      : null;

  const targetValuation =
    royaltyAdjustedTargetEquityValue != null && equityPercentageNum != null
      ? royaltyAdjustedTargetEquityValue / (equityPercentageNum / 100)
      : null;

  const targetMultiple =
    targetValuation != null && annualRevenueNum != null
      ? Math.max(0, targetValuation / annualRevenueNum)
      : null;

  const targetAnnualGrowthRate =
    targetValuation != null && annualRevenueNum != null
      ? Math.max(
          0,
          Math.pow(targetValuation / annualRevenueNum, 1 / INVESTMENT_YEARS) - 1
        )
      : null;

  const yearsToRecoup =
    investmentAskNum != null &&
    annualRoyalty != null &&
    cappedRoyaltyYears != null &&
    cappedRoyaltyGross != null &&
    cappedRoyaltyGross >= investmentAskNum
      ? Math.ceil(investmentAskNum / annualRoyalty)
      : null;

  const willRecoup =
    yearsToRecoup != null &&
    yearsToRecoup <= INVESTMENT_YEARS &&
    yearsToRecoup <= cappedRoyaltyYears;

  // Handler to toggle royalties and set values
  const revealRoyaltyMaximum = () => {
    setShowRoyaltyMaximum(true);
    setRoyaltyMaximum(investmentAsk);
  };

  const hideRoyalties = () => {
    setShowRoyalties(false);
    setShowRoyaltyYears(false);
    setShowRoyaltyMaximum(false);
    setRoyaltyPercentage("");
    setRoyaltyYears("");
    setRoyaltyMaximum("");
  };

  // Handlers for individual inputs
  const hideRoyaltyYears = () => {
    setShowRoyaltyYears(false);
    setRoyaltyYears("");
  };

  const hideRoyaltyMaximum = () => {
    setShowRoyaltyMaximum(false);
    setRoyaltyMaximum("");
  };

  // Add this new helper function near the other utility functions
  const formatInputNumber = (value: string): string => {
    // Remove any existing commas
    const cleanValue = value.replace(/,/g, "");
    // If it's a valid number, format with commas, otherwise return the original input
    const num = parseFloat(cleanValue);
    return !isNaN(num) ? num.toLocaleString() : cleanValue;
  };

  // Update the handleNumberInput function
  const handleNumberInput = (
    value: string,
    setter: (value: string) => void,
    options?: { maxValue?: number; allowZero?: boolean }
  ) => {
    const { maxValue = MAX_NUMBER, allowZero = false } = options ?? {};
    // Remove commas for validation
    const cleanValue = value.replace(/,/g, "");
    // Allow empty string or valid numbers
    if (
      cleanValue === "" ||
      (!isNaN(parseFloat(cleanValue)) &&
        (allowZero ? parseFloat(cleanValue) >= 0 : parseFloat(cleanValue) > 0))
    ) {
      if (cleanValue === "") {
        setter("");
      } else {
        const validRange = Math.min(maxValue, parseFloat(cleanValue));
        setter(validRange.toString());
      }
    }
  };

  // Format number for display
  const formatNumber = (value: number | null, digits: number = 0): string => {
    if (value === null) return "?";
    return value.toLocaleString(undefined, {
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
    });
  };

  return (
    <Box>
      <Flex justify="start" align="center" gap="4" mb="4">
        <Link to="/">
          <img src="../sharktank/icon.png" alt="logo" width={64} height={64} />
        </Link>
        <Heading size="8">Deal Calculator</Heading>
      </Flex>

      <Card size="2" mb="4">
        <Heading size="5" mb="4">
          Investment Terms
        </Heading>
        <Flex direction="column" gap="4">
          <Flex justify="between" align="center" gap="4">
            <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
              Cash Ask
            </Text>
            <TextField.Root
              size="3"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              value={formatInputNumber(investmentAsk)}
              onChange={(e) =>
                handleNumberInput(e.target.value, setInvestmentAsk)
              }
              style={INPUT_STYLE}
            >
              <TextField.Slot>$</TextField.Slot>
            </TextField.Root>
          </Flex>

          <Flex justify="between" align="center" gap="4">
            <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
              Equity Stake
            </Text>
            <TextField.Root
              size="3"
              type="number"
              value={equityPercentage}
              onChange={(e) =>
                handleNumberInput(e.target.value, setEquityPercentage, {
                  maxValue: 100,
                })
              }
              style={INPUT_STYLE}
            >
              <TextField.Slot>%</TextField.Slot>
            </TextField.Root>
          </Flex>

          <Flex justify="between" align="center" gap="4">
            <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
              Annual Revenue
            </Text>
            <TextField.Root
              size="3"
              type="text"
              inputMode="numeric"
              pattern="\d*"
              value={formatInputNumber(annualRevenue)}
              onChange={(e) =>
                handleNumberInput(e.target.value, setAnnualRevenue)
              }
              style={INPUT_STYLE}
            >
              <TextField.Slot>$</TextField.Slot>
            </TextField.Root>
          </Flex>

          <Flex justify="between" align="center" gap="4">
            <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
              Target Growth Rate
            </Text>
            <TextField.Root
              size="3"
              type="number"
              value={investmentReturnRate}
              onChange={(e) =>
                handleNumberInput(e.target.value, setInvestmentReturnRate)
              }
              style={INPUT_STYLE}
            >
              <TextField.Slot>%</TextField.Slot>
            </TextField.Root>
          </Flex>
        </Flex>
      </Card>

      {showRoyalties ? (
        <Card size="2" mb="4">
          <Heading size="5" mb="4">
            Royalty Terms
          </Heading>
          <Flex direction="column" gap="4">
            <Flex justify="between" align="center" gap="4">
              <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
                Percentage
              </Text>
              <Flex gap="2" style={{ flex: 1 }} align="center">
                <TextField.Root
                  size="3"
                  type="number"
                  value={royaltyPercentage}
                  onChange={(e) =>
                    handleNumberInput(e.target.value, setRoyaltyPercentage, {
                      maxValue: 100,
                      allowZero: true,
                    })
                  }
                  style={INPUT_STYLE}
                >
                  <TextField.Slot>%</TextField.Slot>
                </TextField.Root>
                <Button
                  size="4"
                  color="red"
                  variant="ghost"
                  onClick={hideRoyalties}
                >
                  ✕
                </Button>
              </Flex>
            </Flex>

            {showRoyaltyYears ? (
              <Flex justify="between" align="center" gap="4">
                <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
                  Max Years
                </Text>
                <Flex gap="2" style={{ flex: 1 }} align="center">
                  <TextField.Root
                    size="3"
                    type="number"
                    value={royaltyYears}
                    onChange={(e) =>
                      handleNumberInput(e.target.value, setRoyaltyYears)
                    }
                    style={INPUT_STYLE}
                  >
                    <TextField.Slot>yr</TextField.Slot>
                  </TextField.Root>
                  <Button
                    size="4"
                    color="red"
                    variant="ghost"
                    onClick={hideRoyaltyYears}
                  >
                    ✕
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Button
                size="4"
                my="1"
                variant="ghost"
                onClick={() => setShowRoyaltyYears(true)}
              >
                End royalties after X years
              </Button>
            )}

            {showRoyaltyMaximum ? (
              <Flex justify="between" align="center" gap="4">
                <Text as="p" size="4" weight="medium" style={LABEL_STYLE}>
                  Max Amount
                </Text>
                <Flex gap="2" style={{ flex: 1 }} align="center">
                  <TextField.Root
                    size="3"
                    type="text"
                    inputMode="numeric"
                    pattern="\d*"
                    value={formatInputNumber(royaltyMaximum)}
                    onChange={(e) =>
                      handleNumberInput(e.target.value, setRoyaltyMaximum)
                    }
                    style={INPUT_STYLE}
                  >
                    <TextField.Slot>$</TextField.Slot>
                  </TextField.Root>
                  <Button
                    size="4"
                    color="red"
                    variant="ghost"
                    onClick={hideRoyaltyMaximum}
                  >
                    ✕
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Button
                size="4"
                my="1"
                variant="ghost"
                onClick={revealRoyaltyMaximum}
              >
                End royalties after $X
              </Button>
            )}
          </Flex>
        </Card>
      ) : (
        <Flex justify="center">
          <Button
            size="4"
            variant="ghost"
            onClick={() => setShowRoyalties(true)}
            mb="4"
          >
            Add Royalties
          </Button>
        </Flex>
      )}

      {investmentAskNum != null && equityPercentageNum != null && (
        <Card size="2" mb="4">
          <Flex justify="between" align="end" gap="4" mb="4">
            <Heading size="5">Deal Analysis</Heading>
            <Text as="p" size="3" color="gray">
              (over {INVESTMENT_YEARS} years)
            </Text>
          </Flex>
          <Flex direction="column" gap="4">
            {investmentReturnRateNum != null && (
              <Text as="p" size="5" color="gray">
                <span>For your money to grow </span>
                <Text as="span" weight="bold">
                  {investmentReturnRate}%
                </Text>
                <span> annually, the company valuation must grow:</span>
              </Text>
            )}

            <Grid columns="2" gap="1" style={{ textAlign: "center" }}>
              <Box>
                <Text as="p" size="3" color="gray">
                  Current Valuation
                </Text>
                <Text as="p" size="5" weight="bold">
                  {currentValuation != null
                    ? `$${formatNumber(currentValuation)}`
                    : "?"}
                </Text>
              </Box>

              <Box>
                <Text as="p" size="3" color="gray">
                  Target Valuation
                </Text>
                <Text as="p" size="5" weight="bold">
                  {targetValuation != null
                    ? `$${formatNumber(targetValuation)}`
                    : "?"}
                </Text>
              </Box>
            </Grid>

            {annualRevenueNum != null && (
              <Text as="p" size="5" color="gray">
                <span>That is</span>
                <span> </span>
                <Text as="span" weight="bold">
                  {targetMultiple !== null
                    ? `${targetMultiple.toFixed(1)}x`
                    : "?x"}
                </Text>
                <span> current revenue, which would be </span>
                <span> </span>
                <Text as="span" weight="bold">
                  {targetAnnualGrowthRate !== null
                    ? `${(targetAnnualGrowthRate * 100).toFixed(1)}%`
                    : "?"}
                </Text>
                <span> growth each year.</span>
              </Text>
            )}

            {royaltyPercentageNum != null && royaltyPercentageNum > 0 && (
              <Text as="p" size="5" color="gray">
                <span>You would earn </span>
                <Text as="span" weight="bold">
                  ${formatNumber(cappedRoyaltyGross)}
                </Text>
                <span> in royalties, which </span>
                {willRecoup ? (
                  <>
                    <span>repays your money in </span>
                    <Text as="span" weight="bold">
                      {yearsToRecoup} year{yearsToRecoup > 1 ? "s" : ""}.
                    </Text>
                  </>
                ) : (
                  <>
                    <Text as="span" weight="bold">
                      does not repay
                    </Text>
                    <span> your money.</span>
                  </>
                )}
              </Text>
            )}
          </Flex>
        </Card>
      )}

      <Text as="p" size="3" color="gray" style={{ textAlign: "center" }}>
        This is just a silly game and not financial advice.
      </Text>
    </Box>
  );
}
