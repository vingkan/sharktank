export type Origin = "humble" | "influential" | "accidental";

export type Outcome = "acquired" | "scaled" | "revolutionized";

export type BioTemplate = {
  origin: Origin;
  name: string;
  template: string;
  outcomes: Record<Outcome, string>;
  skills: string;
};

export type Industry = {
  name: string;
  skills: Record<Outcome, string>;
};

export type LabeledOption<T> = {
  id: T;
  display: string;
};

export type SharkId =
  | "mark"
  | "kevin"
  | "lori"
  | "daymond"
  | "robert"
  | "barbara";

export type Shark = {
  id: SharkId;
  name: string;
  image: string;
  questions: Record<Outcome, string>;
  turnOffs: Record<Origin, string>;
};

export const ORIGINS: LabeledOption<Origin>[] = [
  { id: "humble", display: "Humble Beginnings" },
  { id: "influential", display: "Influential Position" },
  { id: "accidental", display: "Accidental Opportunity" },
];

export const OUTCOMES: LabeledOption<Outcome>[] = [
  { id: "acquired", display: "Sold my company" },
  { id: "scaled", display: "Scaled my business" },
  { id: "revolutionized", display: "Revolutionized my industry" },
];

export const BIO_TEMPLATES: BioTemplate[] = [
  {
    origin: "humble",
    name: "Farmer",
    template:
      "I grew up in a small, rural town, but used my knowledge of [Industry] to super charge our family farm. Eventually, our farm [Outcome].",
    outcomes: {
      acquired: "was acquired by a multinational corporation",
      scaled: "grew to acquire over 50 other farms across the region",
      revolutionized: "revolutionized the way people think about corn",
    },
    skills: "Scaling up production and supply chain logistics",
  },
  {
    origin: "humble",
    name: "Street vendor",
    template:
      "I was a street vendor in a busy city, talking to anyone who would listen about [Industry]. One day, I met a burnt out executive and we started a company that [Outcome].",
    outcomes: {
      acquired: "was acquired by the investment bank they used to work for",
      scaled: "grew to a multi-million dollar business",
      revolutionized: "revolutionized the startup ecosystem in that city",
    },
    skills: "Building a network and negotiating deals",
  },
  {
    origin: "humble",
    name: "Salesman",
    template:
      "I started out cold-calling customers for a sketchy [Industry] company. I climbed up the ranks and when the CEO was arrested, I took over the company and it [Outcome].",
    outcomes: {
      acquired:
        "was acquired by our biggest competitor in a multi-million dollar deal",
      scaled:
        "grew from under 10% market share to over 50% of the market in under three years",
      revolutionized: "revolutionized business-to-business sales in our market",
    },
    skills: "Selling to large corporations and building a sales team",
  },
  {
    origin: "influential",
    name: "Athlete",
    template:
      "I was a world-class athlete, but after a career-ending injury, I started a company in [Industry]. After that company [Outcome], I started investing on behalf of busy athletes.",
    outcomes: {
      acquired: "was bought out by a private equity firm",
      scaled: "expanded into six different verticals",
      revolutionized: "was named the number one brand in sports",
    },
    skills: "Persevering through adversity as a solo founder",
  },
  {
    origin: "influential",
    name: "Songwriter spouse",
    template:
      "My spouse is a top-charts singer/songwriter whose record label [Outcome]. They secretly want to retire and pursue their love of [Industry], so it's my job to finance it.",
    outcomes: {
      acquired: "was acquired by one of the world's largest music producers",
      scaled: "has broken into the biggest music markets all over the globe",
      revolutionized: "has produced hundreds of GRAMMY award-winning artists",
    },
    skills: "Managing cash flow and accounting best practices",
  },
  {
    origin: "influential",
    name: "Government employee",
    template:
      "I used to work in federal government, regulating [Industry], but then I got an offer I couldn't refuse from a firm that [Outcome]. Now, I invest in startups.",
    outcomes: {
      acquired: "bought out all their major competitors",
      scaled: "scaled to multi-billion dollar revenues",
      revolutionized: "spent hundreds of millions on lobbying",
    },
    skills: "Navigating the regulatory landscape and government contracts",
  },
  {
    origin: "accidental",
    name: "Janitor",
    template:
      "I was a janitor for a [Industry] company, but I had the same name as the CEO, so our biggest competitor brought me on as a consultant before they [Outcome].",
    outcomes: {
      acquired: "led a hostile takeover of my original firm",
      scaled: "stole all of our biggest customers",
      revolutionized:
        "promoted me as the first Fortune 500 CFO with a degree from Greendale Community College",
    },
    skills: "Improving public speaking skills",
  },
  {
    origin: "accidental",
    name: "Inventor",
    template:
      "I accidentally stumbled on a new product idea while working in [Industry]. What started as a side project grew into a company that [Outcome].",
    outcomes: {
      acquired: "was acquired by the biggest player in our space",
      scaled: "oversees five divisions across four different continents",
      revolutionized: "is now studied in business schools across the country",
    },
    skills: "Patent and intellectual property filings",
  },
  {
    origin: "accidental",
    name: "Recruiter",
    template:
      "I originally created a staffing agency for part-time workers in [Industry], but when I realized that I should just hire them directly, we created a startup that [Outcome].",
    outcomes: {
      acquired:
        "was acquired by one of the top companies in our industry so that they could get the best talent.",
      scaled: "serves hundreds of millions of customers all over the world",
      revolutionized:
        "then spawned many other successful startups that I could invest in",
    },
    skills: "Improving hiring and training practices",
  },
] as const;

export const SHARKS: Shark[] = [
  {
    id: "mark",
    name: "Mark Cuban",
    image: "../sharktank/mark.jpg",
    questions: {
      acquired: "Do you own the patent or intellectual property?",
      scaled: "What's your break-even point?",
      revolutionized:
        "How are you going to handle competition from the biggest player in the market?",
    },
    turnOffs: {
      humble: "The founder asks for an unrealistic valuation",
      influential: "The market is too small or too niche",
      accidental: "The product or technology is unproven",
    },
  },
  {
    id: "kevin",
    name: "Kevin O'Leary",
    image: "../sharktank/kevin.jpg",
    questions: {
      acquired:
        "What is your current valuation and how did you arrive at that figure?",
      scaled: "How am I going to make my money back on this deal?",
      revolutionized:
        "Why should I invest in you rather than your competitors?",
    },
    turnOffs: {
      humble: "The business is losing money or has thin margins",
      influential: "The pitch is overly idealistic rather than practical",
      accidental: "The founder does not seem open to my advice",
    },
  },
  {
    id: "lori",
    name: "Lori Greiner",
    image: "../sharktank/lori.jpg",
    questions: {
      acquired: "What problem does this product solve?",
      scaled: "What's your margin per unit?",
      revolutionized: "What's your packaging strategy?",
    },
    turnOffs: {
      humble:
        "The founder has not validated that customers want or need the product",
      influential: "The product does not have mass-market appeal",
      accidental: "The product does not look good or polished for retail",
    },
  },
  {
    id: "daymond",
    name: "Daymond John",
    image: "../sharktank/daymond.jpg",
    questions: {
      acquired:
        "How much time have you personally invested into this business?",
      scaled: "How much of your sales are direct-to-consumer versus wholesale?",
      revolutionized: "What makes your product or brand unique?",
    },
    turnOffs: {
      humble: "The business has not generated enough sales traction",
      influential:
        "The founder does not have a clear plan for how to achieve their vision",
      accidental: "The idea seems too complicated or inefficient",
    },
  },
  {
    id: "robert",
    name: "Robert Herjavec",
    image: "../sharktank/robert.jpg",
    questions: {
      acquired: "What are your sales to date?",
      scaled: "What would you do if I invest but things don't go as planned?",
      revolutionized: "How do you manufacture or produce your product?",
    },
    turnOffs: {
      humble:
        "The founder does not seem to understand their own product or industry",
      influential: "I have already invested in a similar product or business",
      accidental:
        "The product seems like it would not sell well in a bad economy",
    },
  },
  {
    id: "barbara",
    name: "Barbara Corcoran",
    image: "../sharktank/barbara.jpg",
    questions: {
      acquired: "How do you plan to use the money I'd invest?",
      scaled:
        "What is the biggest challenge you have overcome in running this business?",
      revolutionized: "What are your customers saying about your product?",
    },
    turnOffs: {
      humble:
        "The business has low or inconsistent sales with no clear plan to improve",
      influential: "The founder demonstrates weak communication skills",
      accidental: "The founder lacks a compelling story",
    },
  },
];

export const INDUSTRIES: Industry[] = [
  {
    name: "Beverages",
    skills: {
      acquired: "Retail expansion and distributor partnerships",
      scaled:
        "Negotiating purchase orders and optimizing supply chain logistics",
      revolutionized: "Innovative branding and unique packaging strategies",
    },
  },
  {
    name: "Entertainment",
    skills: {
      acquired: "Content licensing and distribution deals",
      scaled: "Building a fan base and monetizing through multiple channels",
      revolutionized:
        "Leveraging new platforms and interactive engagement strategies",
    },
  },
  {
    name: "Waste Management",
    skills: {
      acquired: "Establishing contracts with municipalities",
      scaled: "Building efficient waste processing and recycling networks",
      revolutionized: "Adopting sustainable and eco-friendly waste solutions",
    },
  },
  {
    name: "Advertising",
    skills: {
      acquired: "Client acquisition through impactful campaigns",
      scaled: "Managing large-scale campaigns and media buys",
      revolutionized:
        "Leveraging data analytics and performance-based advertising",
    },
  },
  {
    name: "Technology",
    skills: {
      acquired: "IP licensing and technology transfer",
      scaled: "Building and managing scalable SaaS platforms",
      revolutionized:
        "Driving innovation through AI and disruptive technologies",
    },
  },
  {
    name: "Real Estate",
    skills: {
      acquired: "Negotiating profitable property deals",
      scaled: "Building a portfolio of income-generating properties",
      revolutionized:
        "Using technology to disrupt traditional real estate markets",
    },
  },
  {
    name: "Healthcare",
    skills: {
      acquired: "Navigating regulatory approvals and certifications",
      scaled: "Building hospital or clinic networks",
      revolutionized:
        "Implementing telemedicine and personalized healthcare solutions",
    },
  },
  {
    name: "Apparel",
    skills: {
      acquired: "Establishing partnerships with retail chains",
      scaled: "Managing global supply chains and inventory",
      revolutionized:
        "Creating direct-to-consumer brands with strong social media presence",
    },
  },
  {
    name: "Automotive",
    skills: {
      acquired: "Securing OEM partnerships",
      scaled: "Building efficient manufacturing and distribution systems",
      revolutionized: "Advancing EV or autonomous vehicle technologies",
    },
  },
  {
    name: "E-Commerce",
    skills: {
      acquired: "Optimizing for SEO and conversion rates",
      scaled: "Managing fulfillment logistics and customer service",
      revolutionized:
        "Leveraging personalization and AI-driven recommendations",
    },
  },
  {
    name: "Education",
    skills: {
      acquired: "Securing institutional contracts",
      scaled: "Expanding online course offerings globally",
      revolutionized:
        "Gamifying learning and using adaptive learning technologies",
    },
  },
  {
    name: "Travel",
    skills: {
      acquired: "Partnering with airlines and travel agencies",
      scaled: "Building global brand recognition and loyalty programs",
      revolutionized:
        "Implementing tech-driven booking and customer experiences",
    },
  },
  {
    name: "Home Furnishings",
    skills: {
      acquired: "Breaking into big-box retailers",
      scaled: "Scaling manufacturing operations and delivery networks",
      revolutionized: "Incorporating smart home technology into designs",
    },
  },
  {
    name: "Music",
    skills: {
      acquired: "Licensing songs for TV, film, and ads",
      scaled: "Building platforms for global streaming and distribution",
      revolutionized: "Utilizing blockchain and NFTs for artist compensation",
    },
  },
  {
    name: "Fitness",
    skills: {
      acquired: "Building partnerships with gyms and fitness chains",
      scaled: "Launching franchise models and subscription services",
      revolutionized: "Creating interactive and virtual fitness experiences",
    },
  },
  {
    name: "Hotels",
    skills: {
      acquired: "Partnering with travel platforms for visibility",
      scaled: "Standardizing operations across multiple locations",
      revolutionized:
        "Implementing eco-friendly and smart hospitality solutions",
    },
  },
  {
    name: "Restaurant",
    skills: {
      acquired: "Optimizing food costs and supply contracts",
      scaled: "Franchising and scaling multiple locations",
      revolutionized: "Leveraging ghost kitchens and delivery apps",
    },
  },
  {
    name: "Toys and Games",
    skills: {
      acquired: "Securing licensing deals with popular franchises",
      scaled: "Managing global manufacturing and distribution networks",
      revolutionized: "Developing interactive and tech-driven toys",
    },
  },
  {
    name: "Footwear",
    skills: {
      acquired: "Partnering with major retail chains",
      scaled: "Building global supply chains and reducing production costs",
      revolutionized:
        "Incorporating sustainable materials and direct-to-consumer models",
    },
  },
  {
    name: "Jewelry",
    skills: {
      acquired: "Building relationships with luxury retailers",
      scaled: "Creating scalable production while maintaining quality",
      revolutionized: "Adopting lab-grown diamonds and sustainable practices",
    },
  },
  {
    name: "Pet Supplies",
    skills: {
      acquired: "Partnering with pet store chains",
      scaled: "Expanding distribution through e-commerce platforms",
      revolutionized:
        "Creating personalized pet products and subscription models",
    },
  },
];
