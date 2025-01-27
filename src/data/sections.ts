import type { SectionMetadata } from "./types";

export const SECTIONS: SectionMetadata[] = [
  {
    section: "hook",
    title: "Hook",
    description: "Choose how you will grab the attention of the Sharks:",
    type: "pickOne",
  },
  {
    section: "founder",
    title: "Founder Story",
    description: "Choose your founding story:",
    type: "pickOne",
  },
  {
    section: "customer",
    title: "Target Customer",
    description: "Choose your target customer profile:",
    type: "pickOne",
  },
  {
    section: "demo",
    title: "Product Demo",
    description: "Choose moments to include in your demo:",
    type: "pickTwo",
  },
  {
    section: "production",
    title: "Production",
    description: "Choose key parts for the process for making your product:",
    type: "pickTwo",
  },
  {
    section: "traction",
    title: "Traction",
    description: "Choose accomplishments to highlight your business momentum:",
    type: "pickTwo",
  },
  {
    section: "distribution",
    title: "Distribution",
    description: "Choose distribution methods you use to reach your customers:",
    type: "pickTwo",
  },
  {
    section: "investment",
    title: "Investment Purpose",
    description:
      "Choose the main reason you are seeking funding from the Sharks:",
    type: "pickOne",
  },
  {
    section: "closing",
    title: "Closing",
    description: "Choose how to end your pitch:",
    type: "pickOne",
  },
];
