import type { Company } from "./types";

export const COMPANIES: Company[] = [
  {
    company: {
      name: "Moodswell",
      industry: "Beverages",
      oneSentence:
        "Moodswell is a soft drink with adaptogens tailored to your desired mood.",
      ask: "We are seeking $400,000 for 10% of our company.",
      revenue: "We did $150,000 in sales in our first year.",
    },
    unitEconomics: {
      unitOfSales: "cans",
      costPerUnitCents: 200,
      pricePerUnitCents: 400,
      unitsSold: 37500,
      yearOneSalesCents: 15000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Open with a question",
            text: "Hello Sharks. What if your drink could do more than just quench your thirst? That’s what Moodswell is all about.",
          },
          {
            name: "Call out your competitor",
            text: "Move aside, Olipop! Our new drink Moodswell is going to be the hit soft beverage of 2025.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Health enthusiast",
            text: "I am a long-time health enthusiast with a background in wellness. On days at the gym or yoga studio, I looked around me and realized that people were coming in to make their mind and body healthier, and then after their workout, filling their body with something unhealthy.",
          },
          {
            name: "Former corporate employee",
            text: "I worked as a stressed-out employee in the corporate restaurant management industry for ten years, but now I am using my master’s degree in nutrition to create something that will help people manage their stress in a natural and delicious way.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Health-conscious consumers, young professionals, and athletes",
            text: "We focus on health-conscious consumers, young professionals, and athletes. They are looking for healthy drinks with all natural ingredients that taste good, but what really gets them is identifying with what mood they want to be in and drinking something that gets them there without harming their body.",
          },
          {
            name: "People seeking alternatives to energy drinks, sodas, and supplements",
            text: "We focus on people seeking alternatives to energy drinks, sodas, and supplements. Our pricing is competitive with those products and all our ingredients are natural. Instead of putting trash in your body, you can pick the mood you want to be in and drink something good that makes you feel good.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Visual product lineup",
            text: "Here is our lineup of drinks: Calm, Focus, and Energy. The packaging has both a recognizable identity on store shelves while also appealing to each mood our customers want to tap into.",
          },
          {
            name: "Tasting session for the Sharks",
            text: "We have some samples for you to try, Sharks! This is one of our most popular drinks, Focus, to help you focus on making a great deal with us.",
          },
          {
            name: "Highlight specific adaptogens used",
            text: "We use all-natural adaptogens in our drinks. For relaxation, ashwagandha; for energy, rhodiola; for focus, lion’s mane.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Created the first batch at home",
            text: "I created the first batch of Moodswell drinks at home. Through my own experimentation, I was able to simplify the recipe to be half the cost and require fewer steps to make it more suitable for production.",
          },
          {
            name: "Share a co-packing facility with other health beverages",
            text: "Currently, our drinks are produced, bottled, and shipped from a co-packing facility that specializes in health beverages. This ensures high quality through consistent handling of our all-natural ingredients. And it allows us to save on costs by sharing production with other companies.",
          },
          {
            name: "Work with reliable suppliers of adaptogens",
            text: "We work with reliable suppliers of high-quality adaptogens to ensure consumers always know where our ingredients come from. Our suppliers have no minimum purchase order, so we have kept up with demand from both consumers and retail and are positioned to expand.",
          },
          {
            name: "Quality test every drink for adaptogen potency",
            text: "We have established a rigorous quality assurance and testing process to ensure adaptogen potency in each drink. Buyers love the way they feel when they drink Moodswell and so we will ensure that each drink gets them in the mood they want.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Online platforms",
            text: "We sell Moodswell through our own website as well as through Amazon. Customers can purchase in packs of six, 12, or 24 cans. Customers pay for shipping.",
          },
          {
            name: "Specialty health food stores",
            text: "Specialty health food stores stock our product, selling it alongside other all-natural foods. We are the first and only mood-oriented soft beverage for our retail partners.",
          },
          {
            name: "Gyms, yoga studios, wellness centers",
            text: "Customers can also buy Moodswell from their gym, yoga studio, or wellness center. You can see our cans prominently featured in their fridges near the entrance and see others drinking them after a workout or class.",
          },
          {
            name: "Cafes and tea shops",
            text: "Moodswell is also available in select cafes and tea shops, where customers love to see our all-natural ingredients and can conveniently pick up a can near the register.",
          },
          {
            name: "In talks to close a big box retail store",
            text: "We are in talks to close a deal with a big box retail store in their soft beverages section. This will be a huge step to getting our drinks to millions of consumers and becoming the breakout drink of the summer.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Positive customer reviews",
            text: "We have glowing customer reviews, with an average rating of 4.7 stars online, helping attract new orders and get our brand out there.",
          },
          {
            name: "Large average online order",
            text: "We are averaging 18 cans per purchase on our online orders, showing that consumers want large order sizes. Our cans are a hit for parties, picnics, and post-workout drinks.",
          },
          {
            name: "Featured in blogs and magazines",
            text: "We have received features in wellness blogs and health magazines, so that buyers hear from a trusted source that our products are healthy and mood-inspiring.",
          },
          {
            name: "Expanded from free testing to orders stocked",
            text: "In many of our in-person locations where people drink Moodswell after a workout or a class, we started with just free tastings. But our drinks are so popular that people are always asking for more. These places call us afterwards and stock up on our drinks so they can sell them.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Increase production capacity",
            text: "We are seeking your investment to increase our production capacity and keep up with demand. This funding will allow us to open a new bottling and packaging facility as well as buy our all-natural ingredients at much more favorable bulk pricing from our established suppliers.",
          },
          {
            name: "New marketing campaign",
            text: "We are seeking your investment to launch a new marketing campaign that will position us as the breakout drink of the summer. We will sign health and wellness influencers, place samples of our drinks at concerts and events, and target people who drink our competitors’ products on social media.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "In the mood to make money",
            text: "So Sharks: Are you in the mood to make money with Moodswell?",
          },
          {
            name: "Breakout drink of the summer",
            text: "Join us, Sharks, and help make Moodswell the breakout drink of the summer!",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer: "It costs us $2 per can and we sell it for $4 per can.",
      },
      {
        question: "Question: How many units have you sold?",
        answer:
          "We sold 37,500 cans in our first year and we are projecting to quadruple that this year.",
      },
      {
        question:
          "What kind of regulations are there around using adaptogens in drinks?",
        answer:
          "Our ingredients are all-natural and customers embrace our drinks because they know they can trust the authenticity of the ingredients. We do not make any health claims that are subject to FDA regulation. Some people want to feel their desired mood but are nervous about a drink that helps them get there. But our online reviews emphasize that this is much healthier than alcohol, soda, nootropics, or harmful energy drinks.",
      },
    ],
  },
  {
    company: {
      name: "Adaptive Threads",
      industry: "Apparel",
      oneSentence:
        "Our adaptive apparel uses magnets and velcro closures to make getting dressed easier and faster for people with disabilities and their caregivers.",
      ask: "We are seeking $400,000 for 15% of our company.",
      revenue:
        "We sold 5,000 garments in our first year, generating $250,000 in revenue.",
    },
    unitEconomics: {
      unitOfSales: "garments",
      costPerUnitCents: 2200,
      pricePerUnitCents: 7500,
      unitsSold: 5000,
      yearOneSalesCents: 25000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Empathy-driven hook",
            text: "Hello Sharks. Getting dressed is something most of us take for granted, but for millions of people with disabilities, it's a daily struggle. What if clothing could be as adaptive as it is stylish?",
          },
          {
            name: "Inclusivity-driven hook",
            text: "Hello Sharks. Fashion should be for everyone. Our adaptive apparel makes dressing effortless for people with disabilities, while looking just as stylish as mainstream clothing.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Inspired by a personal connection",
            text: "I was inspired to start this company because my [family member/friend] struggled every day with getting dressed. Seeing how much time and frustration it caused, I knew there had to be a better way to help people like them regain their independence.",
          },
          {
            name: "Healthcare professional insight",
            text: "As someone with a professional background in healthcare, I saw countless patients with disabilities struggling to dress themselves or needing help from their caregivers. This inspired me to create stylish, functional clothing that empowers people to feel confident and independent.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "People with disabilities and caregivers",
            text: "Our primary customers are individuals with disabilities and their caregivers who need functional, easy-to-use clothing. These customers are seeking innovative solutions that make everyday tasks like getting dressed simpler and more dignified.",
          },
          {
            name: "Aging population with limited mobility",
            text: "Our primary customers are older adults with limited mobility who want stylish, functional clothing. This growing population values independence and comfort while maintaining a sense of personal style.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Shirt with magnetic closures",
            text: "Here is one of our most popular designs: a shirt with magnetic closures that looks like traditional buttons. It’s functional, stylish, and easy to use for anyone with limited dexterity.",
          },
          {
            name: "Pants with velcro side openings",
            text: "Our pants are designed with velcro side openings, making them easy to remove for caregivers or patients with limited mobility. This is a game-changer for people who need adaptive solutions.",
          },
          {
            name: "Soft, stretchy fabrics",
            text: "All of our garments use soft, stretchy fabrics to provide maximum comfort while being easy to wear and maintain. Customers rave about how good these feel and how easy they are to use.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Collaborative design process",
            text: "We design our clothing in collaboration with occupational therapists and fashion experts to ensure that every piece is both functional and stylish.",
          },
          {
            name: "High-quality adaptive fabrics",
            text: "Our garments are made with high-quality, adaptive fabrics sourced from reliable suppliers. These materials ensure durability and comfort for our customers.",
          },
          {
            name: "Factories for adaptive assembly",
            text: "We work with factories that specialize in assembling adaptive apparel with magnets and velcro closures, ensuring consistent quality and scalability.",
          },
          {
            name: "Sustainable materials",
            text: "We incorporate eco-friendly materials into our production process to appeal to customers who value sustainability alongside functionality.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Rehabilitation center partnership",
            text: "We have partnered with a large rehabilitation center to provide adaptive clothing for patients post-surgery and during recovery, validating the demand for our products.",
          },
          {
            name: "Usability testing",
            text: "We conducted usability testing with over 100 individuals with disabilities and their caregivers, allowing us to refine our designs based on real-world feedback.",
          },
          {
            name: "Conference showcase",
            text: "Our clothing line was showcased at a national disability and inclusion conference, where we received overwhelming interest from attendees.",
          },
          {
            name: "Media features",
            text: "We’ve been featured in accessibility-focused blogs and lifestyle publications, building our credibility and raising awareness about our adaptive apparel.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Direct-to-consumer sales",
            text: "We sell our adaptive clothing directly to consumers through our branded website, where customers can easily find, customize, and order the garments they need.",
          },
          {
            name: "Retail partnerships",
            text: "We are partnering with large retail chains like Target and Walmart to place our adaptive apparel in stores nationwide, making it accessible to millions of customers.",
          },
          {
            name: "Disability-focused stores",
            text: "We are working with disability-focused and medical supply stores to distribute our products where customers and caregivers already shop for specialized items.",
          },
          {
            name: "Institutional sales",
            text: "We collaborate with hospitals, rehabilitation centers, and nursing homes to provide adaptive clothing directly to patients and residents in need.",
          },
          {
            name: "Bulk sales to caregiving organizations",
            text: "We sell in bulk to caregiving organizations, allowing them to offer our clothing as part of their services to individuals with disabilities or limited mobility.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Scale production",
            text: "We are seeking your investment to scale production and keep up with growing demand. With your help, we can produce more inventory and reduce costs by optimizing our supply chain.",
          },
          {
            name: "Marketing campaigns",
            text: "We are seeking your investment to launch targeted marketing campaigns, particularly to reach caregivers, healthcare providers, and retail partners.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Inclusive fashion for all",
            text: "Sharks, join us in making fashion more inclusive for everyone. Together, we can empower millions of people with disabilities to dress with ease and confidence.",
          },
          {
            name: "Empowering people one outfit at a time",
            text: "Join us, Sharks, and help us empower people with disabilities to live more independently—one outfit at a time. Together, we can make a difference.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "It costs us $17-$27 per garment to produce, and we sell them for $50-$100 depending on the type of clothing.",
      },
      {
        question: "Who is your biggest competitor?",
        answer:
          "Our biggest competitors are brands like Tommy Hilfiger’s adaptive clothing line. However, we focus more on affordability and inclusive styles, making our products accessible to a broader audience.",
      },
      {
        question: "How are you marketing your product?",
        answer:
          "We target our customers through digital ads, partnerships with occupational therapists, and direct outreach to caregiving organizations and healthcare providers.",
      },
    ],
  },
  {
    company: {
      name: "Magnetic Road Sweeper",
      industry: "Auto Parts",
      oneSentence:
        "Our magnetic road sweeper is a simple, attachable device that picks up metal debris before your tires ever reach it, preventing flat tires and improving road safety.",
      ask: "We are seeking $250,000 for 15% of our company.",
      revenue:
        "We sold 3,000 units in our first year, generating $360,000 in revenue.",
    },
    unitEconomics: {
      unitOfSales: "Magnetic road sweeper",
      costPerUnitCents: 3800,
      pricePerUnitCents: 12000,
      unitsSold: 3000,
      yearOneSalesCents: 36000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Highlight the problem",
            text: "Hello Sharks. Millions of flat tires happen every year because of nails and screws on the road. What if your car could clean the road before your tires ever reached them?",
          },
          {
            name: "Focus on the solution",
            text: "Hello Sharks. Flat tires are frustrating, expensive, and dangerous. Our magnetic sweeper makes sure you never have to deal with one again.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Personal frustration",
            text: "I was inspired to create this solution after having multiple flat tires myself. I knew there had to be a better way to stop this problem before it happens.",
          },
          {
            name: "Engineer solving a gap",
            text: "With a background in automotive engineering, I identified a gap in the market for preventative tire solutions. I created the magnetic road sweeper to solve this hidden problem for everyone, from individual drivers to commercial fleets.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Individual drivers and families",
            text: "Our primary customers are individual drivers and families who want peace of mind on the road. They value the safety, convenience, and cost savings that our product provides.",
          },
          {
            name: "Fleet operators",
            text: "Our primary customers are fleet operators looking to save money and reduce downtime caused by flat tires. For them, every minute counts, and our product ensures their vehicles stay on the road longer.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Easy installation",
            text: "Our magnetic sweeper is easy to install. It attaches securely to the undercarriage or rear of a vehicle in less than a minute, with no special tools required.",
          },
          {
            name: "Real-time debris pickup",
            text: "Watch as our powerful magnet picks up screws, nails, and other metal debris from a simulated road surface. This demonstration shows exactly how it prevents flat tires.",
          },
          {
            name: "Simple cleaning mechanism",
            text: "Our device features a simple cleaning mechanism that makes it easy to remove and safely dispose of the collected debris. Maintenance is quick and hassle-free.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Auto parts manufacturer partnership",
            text: "We have partnered with an auto parts manufacturer to ensure durable and scalable production of our magnetic road sweepers.",
          },
          {
            name: "High-strength magnets sourced from trusted suppliers",
            text: "We source high-strength magnets and weather-resistant casing from trusted suppliers to ensure quality and durability.",
          },
          {
            name: "Rigorous testing for road conditions",
            text: "Our product undergoes rigorous testing under different road and weather conditions to guarantee long-term performance.",
          },
          {
            name: "Quick and simple cleaning design",
            text: "The magnetic sweeper is designed for quick and simple cleaning, making it easy for users to maintain and dispose of debris.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Fleet trial success",
            text: "We partnered with a local delivery company to test our device, reducing flat tire incidents by 80% in just three months.",
          },
          {
            name: "Patent pending",
            text: "We have filed a patent for our magnetic attachment system and cleaning mechanism, ensuring our innovation is protected.",
          },
          {
            name: "Auto expo demonstration",
            text: "We conducted live demonstrations at a major auto expo, generating significant interest and pre-orders from attendees.",
          },
          {
            name: "Positive beta testing feedback",
            text: "Over 100 beta testers, including mechanics and fleet managers, have praised our product for its durability and performance in real-world conditions.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Direct-to-consumer online",
            text: "We sell our product through our own website and automotive e-commerce platforms like Amazon. Customers can order directly with fast shipping.",
          },
          {
            name: "Retail partnerships",
            text: "We are building partnerships with major auto parts stores, such as AutoZone and O’Reilly Auto Parts, to make our product widely available.",
          },
          {
            name: "Fleet contracts",
            text: "We are securing bulk contracts with fleet operators, delivery companies, and ride-sharing services to bring our product to their entire vehicle networks.",
          },
          {
            name: "Repair shop collaborations",
            text: "We are collaborating with auto repair shops to recommend and sell our product during routine maintenance visits.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Scale manufacturing",
            text: "We are seeking your investment to finalize our product design and scale manufacturing. This funding will allow us to meet growing demand and reduce costs through bulk production.",
          },
          {
            name: "Launch marketing campaign",
            text: "We are seeking your investment to launch a major marketing campaign targeting fleet operators and individual drivers. This will include digital ads, partnerships, and product demonstrations.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Safer roads, fewer flats",
            text: "Sharks, with your help, we can create safer roads and ensure fewer flat tires for drivers everywhere. Join us in making this game-changing device a success.",
          },
          {
            name: "Clean roads, better driving",
            text: "Join us, Sharks, and help drivers everywhere enjoy cleaner roads, safer driving, and fewer flat tires. Together, we can make every journey smoother.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "It costs us $38 per unit to produce, and we sell them for $120 per unit. Bulk orders for fleets start at $90 per unit.",
      },
      {
        question: "Who are your competitors?",
        answer:
          "We are unique in offering a device that prevents flat tires by removing debris before it causes damage. Most competitors focus on post-damage solutions, like tire repair kits.",
      },
      {
        question: "How do you plan to scale your production?",
        answer:
          "We are working with an automotive parts manufacturer to streamline production and ensure scalability. This investment will allow us to reduce costs through bulk material sourcing and increased production runs.",
      },
    ],
  },
] as const;
