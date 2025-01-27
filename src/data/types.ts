export type SectionType =
  | "hook"
  | "founder"
  | "customer"
  | "demo"
  | "production"
  | "distribution"
  | "traction"
  | "investment"
  | "closing";

export interface SectionMetadata {
  section: SectionType;
  title: string;
  description: string;
  type: "pickOne" | "pickTwo";
}

export interface PitchSection {
  section: SectionType;
  options: PitchOption[];
}

export interface PitchOption {
  name: string;
  text: string;
}

export interface QAndA {
  question: string;
  answer: string;
}

export interface Company {
  company: {
    name: string;
    industry: string;
    oneSentence: string;
    ask: string;
    revenue: string;
  };
  unitEconomics: {
    unitOfSales: string;
    costPerUnitCents: number;
    pricePerUnitCents: number;
    unitsSold: number;
    yearOneSalesCents: number;
  };
  pitchSections: {
    hook: PitchSection;
    founder: PitchSection;
    customer: PitchSection;
    demo: PitchSection;
    production: PitchSection;
    distribution: PitchSection;
    traction: PitchSection;
    investment: PitchSection;
    closing: PitchSection;
  };
  questionsAndAnswers: QAndA[];
}

export type PerspectiveType =
  | "brand"
  | "market"
  | "revenue"
  | "cashflow"
  | "founder"
  | "idea";

export type SharkPerspective = {
  type: PerspectiveType;
  investor: string;
  text: string;
  image: string;
};

export type InvestorBio = {
  key: [PerspectiveType, PerspectiveType, PerspectiveType];
  background: string;
  favorites: string;
  valueAdds: string;
  turnOffs: string;
  questions: string[];
};
