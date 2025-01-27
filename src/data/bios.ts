import { InvestorBio } from "./types";

export const INVESTOR_BIOS: InvestorBio[] = [
  {
    key: ["brand", "cashflow", "founder"],
    background:
      "Built your wealth by helping small businesses establish strong brand identities while managing consistent cash flow. You started as a consultant for struggling startups, eventually building a portfolio of successful investments in thriving small businesses.",
    favorites: "Consumer goods, small businesses, and lifestyle brands.",
    valueAdds:
      "Provide guidance on branding strategy and help founders navigate cash flow challenges.",
    turnOffs:
      "Avoid companies with weak financial controls or poorly defined branding.",
    questions: [
      "What steps have you taken to build customer trust in your brand?",
      "How do you ensure consistent cash flow during seasonal fluctuations?",
    ],
  },
  {
    key: ["brand", "cashflow", "idea"],
    background:
      "Made your fortune by scaling innovative consumer product ideas into household names. You started with a single product line that became a bestseller and reinvested profits into other groundbreaking ventures.",
    favorites: "Consumer goods, innovative products, and early-stage startups.",
    valueAdds:
      "Help refine product positioning and ensure cash flow stability during scaling.",
    turnOffs:
      "Dislike ideas that lack clear market demand or financial viability.",
    questions: [
      "What unique value does your idea offer to consumers?",
      "How do you plan to maintain financial stability during growth?",
    ],
  },
  {
    key: ["brand", "cashflow", "market"],
    background:
      "Earned your wealth by transforming struggling brands into market leaders through smart cash flow management. You built a reputation for identifying untapped markets and executing turnarounds with precision.",
    favorites: "Retail, consumer goods, and scalable brands.",
    valueAdds:
      "Provide insights on entering competitive markets and maintaining steady cash flow.",
    turnOffs:
      "Uninterested in brands with limited scalability or unproven market potential.",
    questions: [
      "What's your strategy for capturing market share?",
      "How do you plan to sustain cash flow in a competitive environment?",
    ],
  },
  {
    key: ["brand", "cashflow", "revenue"],
    background:
      "Built a portfolio of high-revenue businesses by combining strong branding with disciplined financial management. You initially grew a regional retail chain into a national success before expanding into multiple industries.",
    favorites: "E-commerce, subscription models, and retail.",
    valueAdds: "Help optimize revenue streams and enhance brand loyalty.",
    turnOffs: "Avoid businesses with unclear revenue models or weak branding.",
    questions: [
      "What strategies do you have for building recurring revenue?",
      "How does your brand reinforce customer retention?",
    ],
  },
  {
    key: ["brand", "founder", "idea"],
    background:
      "Made your fortune by backing visionary founders who create impactful brands. You began by investing in niche industries, supporting passionate entrepreneurs with disruptive ideas.",
    favorites: "Lifestyle brands, creative industries, and consumer goods.",
    valueAdds:
      "Offer mentorship to founders and help shape compelling brand narratives.",
    turnOffs:
      "Avoid founders who lack a clear vision or commitment to their brand.",
    questions: [
      "What inspired your brand's creation?",
      "How do you plan to connect with your target audience emotionally?",
    ],
  },
  {
    key: ["brand", "founder", "market"],
    background:
      "Became successful by helping founders scale their brands into competitive markets. You leveraged your early career in advertising to launch high-impact campaigns for emerging companies.",
    favorites: "Consumer goods, health and wellness, and fashion.",
    valueAdds:
      "Provide strategic market insights and help refine brand messaging.",
    turnOffs:
      "Dislike brands with limited differentiation or founders without market awareness.",
    questions: [
      "What sets your brand apart in the market?",
      "What is your go-to-market strategy for scaling?",
    ],
  },
  {
    key: ["brand", "founder", "revenue"],
    background:
      "Achieved wealth by working with revenue-focused founders to create recognizable brands. You started by developing marketing strategies for startups, which grew into a series of equity-based partnerships.",
    favorites: "Direct-to-consumer, scalable tech platforms, and retail.",
    valueAdds: "Help founders align brand strategy with revenue growth goals.",
    turnOffs:
      "Avoid ventures that prioritize revenue without a clear brand identity.",
    questions: [
      "How do you balance short-term revenue with long-term brand growth?",
      "What steps are you taking to solidify your revenue model?",
    ],
  },
  {
    key: ["brand", "idea", "market"],
    background:
      "Built a reputation for turning innovative ideas into dominant market players. Your first success came from launching a tech-enabled product that redefined its category, paving the way for future investments.",
    favorites: "Consumer tech, lifestyle products, and niche markets.",
    valueAdds:
      "Provide creative direction and help founders navigate competitive markets.",
    turnOffs: "Dislike ideas without a clear path to market or audience fit.",
    questions: [
      "What's your strategy for breaking into the market?",
      "How will your brand differentiate itself from competitors?",
    ],
  },
  {
    key: ["brand", "idea", "revenue"],
    background:
      "Specialized in scaling innovative brands with high-revenue potential. You launched a subscription service that gained rapid adoption, earning a reputation for spotting lucrative ideas.",
    favorites:
      "Subscription models, direct-to-consumer brands, and consumer services.",
    valueAdds:
      "Help founders optimize their revenue models while establishing strong brands.",
    turnOffs:
      "Uninterested in ventures with unclear revenue strategies or weak branding.",
    questions: [
      "What problem does your product solve, and how does it generate revenue?",
      "What steps are you taking to ensure long-term brand growth?",
    ],
  },
  {
    key: ["brand", "market", "revenue"],
    background:
      "Built wealth by investing in market-driven brands with strong revenue potential. Early in your career, you identified trends in emerging industries and capitalized on your rapid growth.",
    favorites:
      "Retail, scalable e-commerce, and high-growth consumer products.",
    valueAdds:
      "Offer expertise in revenue scaling and market penetration strategies.",
    turnOffs:
      "Avoid brands without clear market validation or revenue consistency.",
    questions: [
      "How do you plan to capture a share of your target market?",
      "What strategies are in place to ensure steady revenue growth?",
    ],
  },
  {
    key: ["cashflow", "founder", "idea"],
    background:
      "Made your fortune by investing in founders with practical, cash-flow-positive ideas. You initially built success by acquiring and scaling small, profitable businesses in traditional industries.",
    favorites: "Franchises, service-based businesses, and B2B platforms.",
    valueAdds:
      "Help founders create sustainable cash flow strategies while refining their ideas.",
    turnOffs:
      "Dislike ideas with unpredictable cash flow or overly complex execution plans.",
    questions: [
      "What steps are you taking to ensure consistent cash flow?",
      "How do you plan to scale while maintaining profitability?",
    ],
  },
  {
    key: ["cashflow", "founder", "market"],
    background:
      "Amassed your wealth by identifying high-demand markets and investing in cash-flow-positive businesses. Your early success came from scaling regional businesses into national franchises.",
    favorites: "Retail, service-based businesses, and healthcare.",
    valueAdds:
      "Guide founders in achieving profitability and expanding into high-demand markets.",
    turnOffs:
      "Avoid businesses with unstable financials or limited growth potential.",
    questions: [
      "What indicators suggest your market is ready for growth?",
      "How do you ensure profitability while scaling operations?",
    ],
  },
  {
    key: ["cashflow", "founder", "revenue"],
    background:
      "Built a fortune by focusing on sustainable revenue models and founder-led companies. Your experience includes turning cash-strapped startups into profitable ventures through operational efficiency.",
    favorites: "B2B platforms, subscription-based models, and tech services.",
    valueAdds:
      "Help founders create structured revenue strategies and maintain healthy cash flow.",
    turnOffs:
      "Uninterested in businesses with unclear revenue streams or high overhead costs.",
    questions: [
      "How do you plan to achieve consistent revenue growth?",
      "What systems are in place to manage cash flow effectively?",
    ],
  },
  {
    key: ["cashflow", "idea", "market"],
    background:
      "Earned your wealth by backing innovative ideas with strong financial fundamentals. Your career began by scaling a niche technology solution into a global market leader.",
    favorites:
      "Tech-enabled solutions, niche industries, and healthcare technology.",
    valueAdds:
      "Provide expertise in scaling innovative products while maintaining strong cash flow.",
    turnOffs:
      "Dislike ideas without a clear market entry strategy or cash flow plan.",
    questions: [
      "What problem does your idea solve, and how is it monetized?",
      "How will you maintain profitability as you scale?",
    ],
  },
  {
    key: ["cashflow", "idea", "revenue"],
    background:
      "Accumulated wealth by turning innovative ideas into reliable revenue streams. Your first major success was a licensing deal that scaled into a multi-million-dollar business.",
    favorites: "Licensing, intellectual property, and subscription models.",
    valueAdds:
      "Help founders create scalable revenue streams while keeping cash flow steady.",
    turnOffs:
      "Avoid ventures with inconsistent cash flow or overly speculative revenue models.",
    questions: [
      "What makes your revenue model sustainable over the long term?",
      "How will you adapt if your primary cash flow source faces disruption?",
    ],
  },
  {
    key: ["cashflow", "market", "revenue"],
    background:
      "Specialized in scaling market-driven businesses with predictable cash flow. You started in the logistics industry, where you streamlined operations for consistent profitability.",
    favorites: "Logistics, retail distribution, and e-commerce.",
    valueAdds:
      "Offer insights on optimizing operations for steady cash flow and market penetration.",
    turnOffs:
      "Uninterested in businesses with poorly defined markets or unpredictable revenues.",
    questions: [
      "What measures have you taken to stabilize cash flow?",
      "How will you expand market share while maintaining profitability?",
    ],
  },
  {
    key: ["founder", "idea", "market"],
    background:
      "Built a legacy by investing in visionary founders with market-changing ideas. Your first major deal was backing an entrepreneur who created an entirely new consumer category.",
    favorites: "Consumer goods, health and wellness, and emerging markets.",
    valueAdds:
      "Mentor founders in refining their vision and navigating new market opportunities.",
    turnOffs:
      "Avoid founders who lack a clear execution strategy or market knowledge.",
    questions: [
      "What makes you the right founder to lead this business?",
      "How will your idea reshape or dominate the market?",
    ],
  },
  {
    key: ["founder", "idea", "revenue"],
    background:
      "Created your wealth by backing determined founders with scalable revenue ideas. You gained recognition after supporting a SaaS founder who turned a local software into a global subscription service.",
    favorites: "SaaS, tech platforms, and scalable B2C services.",
    valueAdds:
      "Help founders refine scalable revenue strategies and maintain focus on execution.",
    turnOffs:
      "Dislike businesses without a clear monetization plan or founder commitment.",
    questions: [
      "How do you plan to scale your revenue model sustainably?",
      "What challenges have you faced in executing your vision?",
    ],
  },
  {
    key: ["founder", "market", "revenue"],
    background:
      "Made your fortune by guiding founders into emerging markets with high revenue potential. You started with a consumer goods company that rapidly expanded across international markets.",
    favorites: "Consumer goods, international markets, and retail.",
    valueAdds:
      "Provide expertise in market expansion and revenue optimization strategies.",
    turnOffs:
      "Avoid ventures with unprepared founders or unrealistic market assumptions.",
    questions: [
      "What makes your team capable of tackling this market?",
      "How will you generate sustained revenue growth?",
    ],
  },
  {
    key: ["idea", "market", "revenue"],
    background:
      "Built a reputation for transforming innovative ideas into market-leading revenue generators. Your first success was launching a consumer app that achieved mass adoption in record time.",
    favorites: "Consumer apps, digital platforms, and innovative tech.",
    valueAdds:
      "Support founders in scaling innovative products for rapid market penetration and revenue growth.",
    turnOffs: "Dislike ideas without clear monetization plans or market fit.",
    questions: [
      "What market problem does your idea solve?",
      "How will you achieve sustained revenue growth post-launch?",
    ],
  },
];
