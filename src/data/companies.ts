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
        question: "How many units have you sold?",
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
      name: "Escape Room in a Box",
      industry: "Entertainment",
      oneSentence:
        "Escape Room in a Box brings the thrill of escape rooms to your home with immersive, story-driven DIY kits.",
      ask: "We are seeking $300,000 for 15% of our company.",
      revenue: "We did $200,000 in sales in our first year.",
    },
    unitEconomics: {
      unitOfSales: "kits",
      costPerUnitCents: 1000,
      pricePerUnitCents: 4000,
      unitsSold: 5000,
      yearOneSalesCents: 20000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Excitement of escape rooms at home",
            text: "Imagine bringing the excitement of an escape room right to your living room. Escape Room in a Box makes it possible.",
          },
          {
            name: "Affordable fun alternative",
            text: "Why spend hundreds on an escape room experience when you can have the same thrill at home for a fraction of the cost?",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Lifelong puzzle lover",
            text: "I’ve always loved puzzles and immersive storytelling. When I saw how expensive and logistically tricky escape rooms could be, I decided to create a solution that was affordable and easy to enjoy at home.",
          },
          {
            name: "Game designer turned entrepreneur",
            text: "With my background in game design, I saw an opportunity to take the fun and challenge of escape rooms and turn it into something anyone can enjoy at home, any time.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Families and game night enthusiasts",
            text: "We cater to families, game night enthusiasts, and anyone looking for screen-free, interactive entertainment. Our kits are perfect for bonding and creating unforgettable memories.",
          },
          {
            name: "Corporate team-building",
            text: "We also target corporate clients for team-building activities, offering customizable kits that encourage collaboration and problem-solving.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Showcase physical kit",
            text: "Here is one of our kits. You’ll see it includes lockable boxes, secret codes, and beautifully designed props that immerse players in the story.",
          },
          {
            name: "Sample puzzle demonstration",
            text: "Let me show you a simple puzzle from one of our kits. This riddle leads to a hidden compartment, giving you a taste of the thrill.",
          },
          {
            name: "Highlight themes and variety",
            text: "We offer themes like spy missions, haunted mansions, and treasure hunts—each with multiple difficulty levels to suit any group.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Collaborate with writers and puzzle experts",
            text: "We work with game designers and writers to craft original storylines and puzzles that provide a seamless and exciting game flow.",
          },
          {
            name: "Eco-friendly materials",
            text: "Our kits are made with eco-friendly packaging and reusable components, appealing to environmentally conscious consumers.",
          },
          {
            name: "Local assembly",
            text: "While we outsource production of components, all kits are assembled and quality-tested locally to ensure high standards.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "E-commerce platforms",
            text: "We sell through our website and Amazon, offering convenient online purchases with shipping options.",
          },
          {
            name: "Retail partnerships",
            text: "We’ve partnered with toy stores, bookstores, and big-box retailers to reach a wider audience.",
          },
          {
            name: "Subscription model",
            text: "We’re introducing a subscription model where customers receive new themed kits monthly or quarterly.",
          },
          {
            name: "Corporate sales",
            text: "Corporate clients use our kits for team-building, with customization options available for unique branding.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Positive customer reviews",
            text: "We’ve received glowing reviews for ease of setup, immersive quality, and the replayability of our kits.",
          },
          {
            name: "Growing online sales",
            text: "Our online sales have grown steadily, driven by repeat customers and word-of-mouth recommendations.",
          },
          {
            name: "Featured by influencers",
            text: "Influencers in the gaming and family entertainment space have showcased our kits, driving brand awareness and sales.",
          },
          {
            name: "Strong holiday sales",
            text: "The holiday season has been especially successful, with kits being a popular gift for families and friends.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Diversify themes and difficulty levels",
            text: "We want to create new storylines and higher difficulty levels to cater to a broader range of players.",
          },
          {
            name: "Scale production",
            text: "We’ll use the investment to scale production, improve kit quality, and ensure we can meet growing demand.",
          },
          {
            name: "Expand marketing efforts",
            text: "We plan to invest in targeted marketing campaigns to reach new audiences and expand our online presence.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Unlock the fun",
            text: "Sharks, are you ready to unlock the fun and bring escape rooms to homes everywhere?",
          },
          {
            name: "The thrill is yours",
            text: "Join us in making Escape Room in a Box the ultimate at-home adventure experience!",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "It costs us $10 to produce each kit, and we sell them for $40 each.",
      },
      {
        question: "How many units have you sold?",
        answer:
          "We sold 5,000 kits in our first year and are on track to double that this year.",
      },
      {
        question:
          "What’s your plan for competing with other at-home entertainment options?",
        answer:
          "Our kits offer something unique: immersive, story-driven experiences that engage players on a deeper level than board games or VR. Our variety of themes and difficulty levels also set us apart.",
      },
      {
        question:
          "How do you ensure quality control with outsourced manufacturing?",
        answer:
          "We assemble and test all kits locally to maintain high standards and ensure every customer has a great experience.",
      },
    ],
  },
  {
    company: {
      name: "EcoEvent Solutions",
      industry: "Sustainability and Events",
      oneSentence:
        "EcoEvent Solutions offers pre-packaged waste management kits to simplify cleanup and reduce waste at outdoor events.",
      ask: "We are seeking $200,000 for 20% of our company.",
      revenue:
        "$75,000 in initial sales from pilot programs and direct orders.",
    },
    unitEconomics: {
      unitOfSales: "waste management kits",
      costPerUnitCents: 600,
      pricePerUnitCents: 1500,
      unitsSold: 5000,
      yearOneSalesCents: 7500000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Event waste chaos to order",
            text: "Outdoor events are fun, but the waste they generate is anything but. We’ve created a pre-packaged waste management kit to turn chaos into order—helping event organizers, attendees, and the planet all at once!",
          },
          {
            name: "Simplify cleanup",
            text: "Picture festivals, marathons, or concerts leaving behind mountains of trash. Our kits simplify cleanup and reduce landfill waste, one event at a time.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Sustainability advocate",
            text: "As a passionate attendee of outdoor events, I was struck by the waste left behind. My background in environmental science inspired me to create a scalable solution for event waste management.",
          },
          {
            name: "Event volunteer turned entrepreneur",
            text: "After volunteering to clean up several events, I realized the issue wasn’t lack of effort—it was lack of tools. That’s why I created EcoEvent Solutions.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Event organizers",
            text: "We target event organizers such as festivals, marathons, and fairs, helping them manage waste more efficiently and reduce cleanup costs.",
          },
          {
            name: "Eco-conscious planners",
            text: "Our customers include eco-conscious planners looking for sustainable solutions to make their events cleaner and greener.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Kit contents showcase",
            text: "Each kit includes color-coded biodegradable bags, clear signage, gloves, and grabbers. These tools make waste segregation easy for attendees.",
          },
          {
            name: "Before-and-after visuals",
            text: "Here’s a before-and-after comparison of a festival that used our kits versus one that didn’t. The difference is night and day.",
          },
          {
            name: "Set-up demonstration",
            text: "Let us show you how easy it is to set up our kits at key event locations to encourage attendee participation.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Biodegradable components",
            text: "We source biodegradable bags, eco-friendly signage, and other components to ensure minimal environmental impact.",
          },
          {
            name: "Centralized assembly",
            text: "Our kits are assembled at a centralized facility, ensuring quality control and scalability.",
          },
          {
            name: "Custom branding",
            text: "We offer custom-branded signage and instructions for larger event organizers, making our kits adaptable to their needs.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Online store",
            text: "Our kits are available for direct purchase through our website, ideal for small to mid-sized events.",
          },
          {
            name: "Bulk orders",
            text: "We cater to large-scale events with bulk order options, offering significant cost savings.",
          },
          {
            name: "Retail partnerships",
            text: "We are working on placing our kits in event supply stores and sustainability-focused retailers.",
          },
          {
            name: "Event planning companies",
            text: "We partner with event planning companies and waste management firms to bundle our kits with their services.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Successful pilot programs",
            text: "Our kits reduced landfill-bound waste by 40% at two local music festivals, saving organizers significant cleanup costs.",
          },
          {
            name: "Revenue growth",
            text: "We’ve generated $75,000 in sales through pilot programs and direct orders in our first year.",
          },
          {
            name: "Partnerships secured",
            text: "We’ve partnered with two event-planning companies and a waste management firm to streamline post-event disposal.",
          },
          {
            name: "Positive feedback",
            text: "Event organizers and attendees alike have praised the simplicity and eco-conscious nature of our kits.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Scale production",
            text: "We plan to invest in increasing production capacity to meet growing demand and develop kits for niche markets like weddings and corporate events.",
          },
          {
            name: "Expand marketing",
            text: "Funds will be used to launch targeted marketing campaigns aimed at large-scale festivals and other major events.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Cleaner events, greener future",
            text: "Sharks, let’s make every event cleaner and greener together with EcoEvent Solutions.",
          },
          {
            name: "The waste management revolution",
            text: "Join us in revolutionizing event waste management and creating a more sustainable future.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "Our kits cost $5-$6 to produce, and we sell them for $15-$20 depending on the size of the event.",
      },
      {
        question: "What kind of events have you worked with so far?",
        answer:
          "We’ve worked with music festivals, marathons, and local fairs, and we’re looking to expand into corporate events and weddings.",
      },
      {
        question: "How do you ensure attendee participation?",
        answer:
          "Our kits include clear signage and simple instructions, making it easy for attendees to know where and how to dispose of waste.",
      },
      {
        question: "What’s your plan for scaling?",
        answer:
          "We plan to partner with more event planners and waste management firms while increasing production capacity to handle larger order volumes.",
      },
    ],
  },
  {
    company: {
      name: "DriveAds",
      industry: "Advertising and Technology",
      oneSentence:
        "DriveAds transforms cars into moving billboards, enabling drivers to earn passive income and businesses to reach hyper-local audiences.",
      ask: "We are seeking $500,000 for 12% of our company.",
      revenue:
        "$270/month per driver in ad and lease revenue based on updated impressions and pricing assumptions.",
    },
    unitEconomics: {
      unitOfSales: "digital display units",
      costPerUnitCents: 20000,
      pricePerUnitCents: 50000,
      unitsSold: 400,
      yearOneSalesCents: 270000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Earn while you drive",
            text: "Imagine your car making money for you while you drive, just by displaying digital ads. DriveAds makes it possible.",
          },
          {
            name: "Turn cars into billboards",
            text: "What if your daily commute could earn you passive income? DriveAds transforms vehicles into moving billboards for businesses.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Rideshare driver inspiration",
            text: "As a former rideshare driver, I saw the untapped advertising potential on cars. That’s why I created DriveAds to help drivers earn more while they’re on the road.",
          },
          {
            name: "Ad tech entrepreneur",
            text: "With my background in advertising technology, I knew there was an opportunity to connect businesses and drivers for mutual benefit. DriveAds is the result.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Drivers seeking passive income",
            text: "Our primary customers are drivers—rideshare drivers, delivery workers, and commuters—who want to earn passive income without extra effort.",
          },
          {
            name: "Businesses seeking geo-targeted ads",
            text: "We also target businesses looking for hyper-local advertising that stands out and delivers measurable ROI.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Sleek digital display",
            text: "Our sleek, weatherproof digital displays mount easily on a car’s roof or rear window, blending seamlessly with vehicle aesthetics.",
          },
          {
            name: "Companion app",
            text: "Drivers can track their earnings and ad performance through our intuitive companion app, which also handles payments.",
          },
          {
            name: "Dynamic ad targeting",
            text: "Using GPS technology, we deliver geo-targeted ads that rotate dynamically to maximize exposure for businesses.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Durable digital displays",
            text: "We partner with manufacturers to produce durable, weatherproof digital screens with energy-efficient LED technology.",
          },
          {
            name: "Integrated GPS and Wi-Fi",
            text: "Each unit comes pre-assembled with GPS and Wi-Fi modules for seamless integration into our advertising platform.",
          },
          {
            name: "Quality control",
            text: "Our displays undergo rigorous testing for durability, weather resistance, and compatibility with various vehicle models.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Direct-to-consumer sales",
            text: "Drivers can purchase or lease display units directly through our website or mobile app.",
          },
          {
            name: "Partnerships with rideshare companies",
            text: "We collaborate with rideshare and delivery companies to incentivize their drivers to adopt DriveAds.",
          },
          {
            name: "Ad agency partnerships",
            text: "We work with ad agencies to include DriveAds in their media offerings, expanding our reach to more businesses.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Successful pilot program",
            text: "Our pilot program with 50 drivers across two cities generated $80,000 in ad sales and showed strong ROI for businesses.",
          },
          {
            name: "Positive driver feedback",
            text: "70% of drivers from our pilot opted to continue using DriveAds, earning an average of $250/month in ad revenue.",
          },
          {
            name: "Business demand growth",
            text: "We’ve received increasing inquiries from regional businesses interested in hyper-local advertising through DriveAds.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Scale production",
            text: "We’ll use investment funds to scale production of display units and improve display technology.",
          },
          {
            name: "Grow driver and business network",
            text: "We’ll invest in marketing to onboard more drivers and businesses, expanding our presence in major cities.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Turn drive time into dollar signs",
            text: "Sharks, help us turn drive time into dollar signs and revolutionize outdoor advertising with DriveAds.",
          },
          {
            name: "Join the advertising evolution",
            text: "Join us in transforming cars into moving billboards and creating a win-win for drivers and businesses alike.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "Our displays cost $200 to produce, and we sell them for $500 or lease them for $20/month. Drivers earn $250/month in ad revenue.",
      },
      {
        question: "How do drivers earn money?",
        answer:
          "Drivers earn $250/month from ad impressions and retain 70% of that revenue, plus the opportunity to earn more in high-traffic areas.",
      },
      {
        question: "What’s your plan for scaling?",
        answer:
          "We plan to scale by partnering with rideshare companies, expanding driver incentives, and targeting businesses in additional cities.",
      },
      {
        question: "How do you ensure ads reach the right audience?",
        answer:
          "Our GPS technology ensures ads are shown in targeted locations, maximizing relevance and ROI for businesses.",
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
      name: "Apology.com",
      industry: "E-commerce",
      oneSentence:
        'Apology.com makes it easy to say "I\'m sorry" with curated gifts tailored to specific apology situations.',
      ask: "We are seeking $400,000 for 15% of our company.",
      revenue:
        "We received 10,000 visitors in our first two months with a 12% conversion rate.",
    },
    unitEconomics: {
      unitOfSales: "gift packages",
      costPerUnitCents: 9000,
      pricePerUnitCents: 15000,
      unitsSold: 5000,
      yearOneSalesCents: 75000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Apologies made easy",
            text: "Apologizing is hard, but shopping for the perfect apology gift shouldn’t be. Apology.com makes it easy to say 'I’m sorry' in the most thoughtful way possible.",
          },
          {
            name: "Remorse meets retail",
            text: "What if shopping for a gift didn’t start with the product but with the reason you’re buying it? Apology.com turns remorse into retail.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Inspired by awkward apologies",
            text: "As someone who has struggled with awkward apologies, I created Apology.com to simplify the process and make it meaningful.",
          },
          {
            name: "E-commerce meets emotion",
            text: "With my background in marketing, I saw an opportunity to combine emotion and e-commerce to help people repair relationships with thoughtful gifts.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Men seeking thoughtful gifts",
            text: "Our primary audience is men who want convenient, thoughtful ways to apologize to their partners, friends, or colleagues.",
          },
          {
            name: "Couples and individuals repairing relationships",
            text: "We also target couples and divorced individuals who are looking for ways to repair strained relationships with thoughtful gestures.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Browse apology categories",
            text: "Our platform allows users to browse gifts based on the reason for the apology, such as 'Missed an Anniversary' or 'Said Something Hurtful.'",
          },
          {
            name: "Highlight premium products",
            text: "We feature premium products, including jewelry, spa kits, and custom gifts, tailored to the apology type.",
          },
          {
            name: "Seamless checkout",
            text: "Our intuitive checkout process includes options for handwritten notes, gift wrapping, and rush shipping.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Premium suppliers",
            text: "We partner with trusted suppliers for high-quality products like flowers, jewelry, and spa kits.",
          },
          {
            name: "Dropshipping for scalability",
            text: "We utilize dropshipping for non-perishable items, ensuring flexibility and scalability without high inventory costs.",
          },
          {
            name: "Personalization at scale",
            text: "We collaborate with local fulfillment centers to offer handwritten notes, gift wrapping, and custom packaging.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Direct-to-consumer platform",
            text: "Our primary sales channel is the Apology.com website, where users can explore curated gift options.",
          },
          {
            name: "Affiliate partnerships",
            text: "We collaborate with influencers, bloggers, and relationship coaches to drive targeted traffic to our platform.",
          },
          {
            name: "Corporate gifting",
            text: "We provide apology gift packages for corporate clients, catering to HR teams and professional contexts.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Viral TikTok campaign",
            text: "Our TikTok campaign featuring 'apology fails' garnered over 2 million views, driving significant traffic to our site.",
          },
          {
            name: "Exclusive luxury brand partnerships",
            text: "We’ve partnered with luxury jewelry brands to offer exclusive, high-end apology gifts.",
          },
          {
            name: "Positive customer feedback",
            text: "80% of male customers reported that Apology.com made shopping for gifts significantly easier.",
          },
          {
            name: "Featured in relationship blogs",
            text: "We’ve been featured in top relationship advice blogs as a leading solution for repairing relationships through thoughtful gifting.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Expand marketing",
            text: "We plan to use investment funds to scale our marketing efforts, focusing on social media campaigns and targeted advertising.",
          },
          {
            name: "Build inventory and partnerships",
            text: "We’ll invest in expanding our product categories and forging more partnerships with high-end brands.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Simplify apologies",
            text: "Sharks, let’s simplify the art of apologizing together and help people say 'I’m sorry' with Apology.com.",
          },
          {
            name: "Turn remorse into revenue",
            text: "Join us in turning remorse into revenue and making heartfelt gifting effortless with Apology.com.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "Our gifts cost $60-$120 to produce, and we sell them for $80-$500 depending on the category and personalization.",
      },
      {
        question: "How do you differentiate from competitors?",
        answer:
          "We are the first platform to organize gifts by apology type, offering curated, premium products with seamless personalization.",
      },
      {
        question: "What’s your customer acquisition strategy?",
        answer:
          "Our strategy includes viral social media campaigns, partnerships with relationship coaches, and targeted ads aimed at men and couples.",
      },
      {
        question: "How do you ensure personalization at scale?",
        answer:
          "We work with fulfillment centers that specialize in handwritten notes, custom packaging, and same-day shipping to maintain quality at scale.",
      },
    ],
  },
  {
    company: {
      name: "Soundscape Panels",
      industry: "Home Improvement",
      oneSentence:
        "Soundscape Panels offer stylish, soundproofing wall art to transform noisy spaces into peaceful, beautiful environments.",
      ask: "We are seeking $300,000 for 12% of our company.",
      revenue: "We did $100,000 in sales in our first 8 months.",
    },
    unitEconomics: {
      unitOfSales: "panels",
      costPerUnitCents: 3200,
      pricePerUnitCents: 12500,
      unitsSold: 3000,
      yearOneSalesCents: 37500000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Stress relief and beauty",
            text: "Noise is one of the biggest stressors in our homes today. What if your walls could block sound and beautify your space?",
          },
          {
            name: "Say goodbye to ugly soundproofing",
            text: "Say goodbye to ugly soundproofing! Our panels reduce noise and turn your walls into art.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "City dweller with noise struggles",
            text: "As a city dweller, I struggled with constant noise pollution and couldn’t find an aesthetically pleasing solution. That’s why I created Soundscape Panels.",
          },
          {
            name: "Interior designer inspiration",
            text: "With my background in interior design, I saw how many clients wanted functional decor that also looked beautiful—Soundscape Panels were born to meet that need.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Urban professionals and families",
            text: "We target urban professionals and families seeking quieter, more peaceful living spaces without sacrificing style.",
          },
          {
            name: "Interior designers and architects",
            text: "We cater to interior designers and architects looking for innovative, dual-purpose solutions that combine soundproofing with decor.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Decibel reduction demo",
            text: "Using a sound meter, we demonstrate how our panels significantly reduce noise levels in real-time.",
          },
          {
            name: "Show design options",
            text: "Here are our design options, ranging from abstract art to custom images, ensuring a fit for any interior style.",
          },
          {
            name: "Easy installation",
            text: "We demonstrate how lightweight and easy-to-mount our panels are, requiring no special tools or professional installation.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Partner with artists for exclusive designs",
            text: "We collaborate with artists to create exclusive, visually stunning panel designs.",
          },
          {
            name: "Acoustic foam technology",
            text: "Our panels use high-density acoustic foam or fiberboard to deliver top-tier soundproofing performance.",
          },
          {
            name: "Eco-friendly materials",
            text: "Our panels are made with eco-friendly materials, appealing to sustainability-conscious buyers.",
          },
        ],
      },
      distribution: {
        section: "distribution",
        options: [
          {
            name: "Direct-to-consumer sales",
            text: "We sell directly to customers through our website, with options for customizable panels.",
          },
          {
            name: "Retail partnerships",
            text: "We partner with home improvement and boutique furniture stores to reach a broader audience.",
          },
          {
            name: "E-commerce platforms",
            text: "Our panels are available on major platforms like Amazon and Wayfair, expanding our online reach.",
          },
          {
            name: "Corporate sales",
            text: "We provide soundproofing solutions for offices, co-working spaces, and commercial studios.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "$100,000 in early sales",
            text: "We’ve achieved $100,000 in revenue within the first 8 months, demonstrating strong early demand.",
          },
          {
            name: "Highly rated by customers",
            text: "Over 500 customers have rated us 4.8 stars on average, highlighting both functionality and aesthetics.",
          },
          {
            name: "Featured in media",
            text: "Our panels have been featured in lifestyle blogs and home improvement magazines as a stylish solution to noisy spaces.",
          },
          {
            name: "Interior design partnerships",
            text: "We’ve partnered with two major interior design firms to integrate our panels into residential and commercial projects.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Scale production",
            text: "We need investment to scale manufacturing, ensuring we meet the growing demand for our panels.",
          },
          {
            name: "Expand marketing",
            text: "We’ll use funds to launch targeted marketing campaigns aimed at urban professionals and interior designers.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Peaceful homes, stylish spaces",
            text: "Sharks, let’s transform homes into peaceful, stylish spaces together with Soundscape Panels.",
          },
          {
            name: "The art of quiet",
            text: "Join us in creating the ultimate solution to noise and design challenges—Soundscape Panels.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "It costs us $32 to produce each panel, and we sell them for $100-$150 depending on the size and design.",
      },
      {
        question: "How many units have you sold?",
        answer:
          "We sold 3,000 panels in our first year and are projecting to double that in year two.",
      },
      {
        question: "How do you differentiate from competitors?",
        answer:
          "Our panels combine soundproofing with decorative art, making them both functional and stylish. Additionally, we offer custom designs for a personalized touch.",
      },
      {
        question: "How do you ensure quality control?",
        answer:
          "Each panel is locally assembled and tested for soundproofing performance and durability before shipment.",
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
