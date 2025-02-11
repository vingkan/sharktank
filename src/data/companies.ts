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
            text: "Hello Sharks. What if your drink could do more than just quench your thirst? That's what Moodswell is all about.",
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
            text: "I worked as a stressed-out employee in the corporate restaurant management industry for ten years, but now I am using my master's degree in nutrition to create something that will help people manage their stress in a natural and delicious way.",
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
            text: "We use all-natural adaptogens in our drinks. For relaxation, ashwagandha; for energy, rhodiola; for focus, lion's mane.",
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
            text: "We are seeking your investment to launch a new marketing campaign that will position us as the breakout drink of the summer. We will sign health and wellness influencers, place samples of our drinks at concerts and events, and target people who drink our competitors' products on social media.",
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
        question: "What is your profit margin?",
        answer: "We make $2 per can, so our profit margin is 50%.",
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
      name: "Boxed Escape",
      industry: "Entertainment",
      oneSentence:
        "Boxed Escape offers DIY kits to bring the magic of an escape room into your living room.",
      ask: "We are seeking $300,000 for 15% of our company.",
      revenue: "We did $250,000 in sales in our first year.",
    },
    unitEconomics: {
      unitOfSales: "kits",
      costPerUnitCents: 1000,
      pricePerUnitCents: 5000,
      unitsSold: 5000,
      yearOneSalesCents: 25000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Excitement of escape rooms at home",
            text: "Imagine bringing the excitement of an escape room right to your living room. Boxed Escape Room makes it possible.",
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
            text: "I've always loved puzzles and immersive storytelling. When I saw how expensive and logistically tricky escape rooms could be, I decided to create a solution that was affordable and easy to enjoy at home.",
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
            text: "Here is one of our kits. You'll see it includes lockable boxes, secret codes, and beautifully designed props that immerse players in the story.",
          },
          {
            name: "Sample puzzle demonstration",
            text: "Let me show you a simple puzzle from one of our kits. In our museum heist kit, we send you a painting to hang up on your wall. Later on, you realize that the eyes in the painting are moving and always helping point you towards the next clue.",
          },
          {
            name: "Highlight themes and variety",
            text: "We offer themes like spy missions, haunted mansions, and treasure hunts, each with multiple difficulty levels to suit any group.",
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
            text: "Our kits are made with eco-friendly packaging and reusable components, appealing to environmentally-conscious consumers.",
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
            name: "Online platforms",
            text: "We sell through our website and Amazon, making it easy for customers to discover and purchase our kits with convenient shipping options.",
          },
          {
            name: "Toy stores and bookstores",
            text: "Our kits are available in specialty toy stores and bookstores, where customers can see and feel the quality of our products firsthand.",
          },
          {
            name: "Dedicated online form for corporate sales",
            text: "We've streamlined corporate sales with a dedicated online form, making it easy for businesses to order customized kits for team-building events.",
          },
          {
            name: "In talks to close a big box retail store",
            text: "We are in final negotiations with a major big box retailer to stock our kits nationwide, which would significantly expand our reach.",
          },
          {
            name: "Party planning company partnership",
            text: "We recently partnered with a party planning company that features our kits as an entertainment option for their events, opening up a new sales channel.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Sucessfully increased prices",
            text: "We successfully increased our price from $35 to $50 per kit due to strong demand and positive customer feedback, maintaining our sales velocity.",
          },
          {
            name: "Positive customer reviews",
            text: "Our kits consistently receive 4.8-star reviews online, with customers specifically praising the ease of setup, high-quality puzzles, and ability to replay with different groups.",
          },
          {
            name: "At-home entertainment trend",
            text: "We're capitalizing on the growing trend of at-home entertainment, with our monthly sales increasing 40% as more people seek engaging activities they can enjoy from home.",
          },
          {
            name: "Social media success",
            text: "Our partnerships with social media influencers have generated over 2 million views and directly contributed to a 60% increase in website traffic.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Diversify themes and difficulty levels",
            text: "With your investment, we will be able to create new storylines and higher difficulty levels to cater to a broader range of players.",
          },
          {
            name: "Scale production",
            text: "We will use the investment to scale production, improve kit quality, and ensure we can meet growing demand.",
          },
          {
            name: "Expand marketing efforts",
            text: "We plan to invest this funding in targeted marketing campaigns to reach new audiences and expand our online presence.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Escape velocity",
            text: "Sharks, are you ready to help us reach escape velocity?",
          },
          {
            name: "Join us",
            text: "Join us in making Boxed Escape the ultimate at-home adventure experience!",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "It costs us $10 to produce each kit, and we sell them for $50 each.",
      },
      {
        question: "What is your profit margin?",
        answer: "On average, we make $40 per kit, so our profit margin is 80%.",
      },
      {
        question: "How many units have you sold?",
        answer:
          "We sold 5,000 kits in our first year and are on track to double that this year.",
      },
      {
        question:
          "What's your plan for competing with other at-home entertainment options?",
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
      name: "TidyPlanet",
      industry: "Environment and Waste Management",
      oneSentence:
        "TidyPlanet offers pre-packaged waste management kits to simplify cleanup and reduce waste at outdoor events.",
      ask: "We are seeking $200,000 for 20% of our company.",
      revenue: "We did $75,000 in sales in our first year.",
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
            name: "Help event organizers and the planet",
            text: "Outdoor events are fun, but the waste they generate is anything but. We've created a pre-packaged waste management kit to turn chaos into order; helping event organizers, attendees, and the planet all at once!",
          },
          {
            name: "Picture mountains of trash",
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
            text: "After volunteering to clean up several events, I realized the issue wasn't lack of effort, it was lack of tools. That's why I created TidyPlanet.",
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
            text: "Here's a before-and-after comparison of a festival that used our kits versus one that didn't. The difference is night and day.",
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
            text: "We've generated $75,000 in sales through pilot programs and direct orders in our first year.",
          },
          {
            name: "Partnerships secured",
            text: "We've partnered with two event-planning companies and a waste management firm to streamline post-event disposal.",
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
            text: "We plan to invest this funding in increasing production capacity to meet growing demand and develop kits for niche markets like weddings and corporate events.",
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
            name: "Cleaner and greener",
            text: "Sharks, let's make every event cleaner and greener together with TidyPlanet.",
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
        question: "What is your profit margin?",
        answer: "On average, we make $9 per kit, so our profit margin is 60%.",
      },
      {
        question: "What kind of events have you worked with so far?",
        answer:
          "We've worked with music festivals, marathons, and local fairs, and we're looking to expand into corporate events and weddings.",
      },
      {
        question: "Why would event organizers buy this?",
        answer:
          "Many outdoor venues provided limited waste disposal options and event organizers have to hire a dedicated team or waste disposal company. With TidyPlanet, you estimate the number of attendees, buy kits based on that, and then you have a simple solution to waste management.",
      },
      {
        question: "What's your plan for scaling?",
        answer:
          "We plan to partner with more event planners and waste management firms while increasing production capacity to handle larger order volumes.",
      },
    ],
  },
  {
    company: {
      name: "Motion Ads",
      industry: "Advertising and Technology",
      oneSentence:
        "Motion Ads transforms cars into moving billboards, enabling drivers to earn passive income and businesses to reach hyper-local audiences.",
      ask: "We are seeking $500,000 for 12% of our company.",
      revenue: "We generated $1.2 million in revenue in our first year.",
    },
    unitEconomics: {
      unitOfSales: "one driver per year",
      costPerUnitCents: 240000,
      pricePerUnitCents: 324000,
      unitsSold: 400,
      yearOneSalesCents: 129600000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Earn while you drive",
            text: "What if you could earn while you drive? Motion Ads transforms your daily commute into a passive earning opportunity with a digital billboard for your car.",
          },
          {
            name: "Turn cars into billboards",
            text: "Trying to reach customers who are always on the move? Motion Ads transforms vehicles into moving billboards for businesses.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Rideshare driver inspiration",
            text: "As a former rideshare driver, I saw the untapped advertising potential on cars. That's why I created Motion Ads to help drivers earn more while they're on the road.",
          },
          {
            name: "Ad tech entrepreneur",
            text: "With my background in advertising technology, I knew there was an opportunity to connect businesses and drivers for mutual benefit. Motion Ads is the result.",
          },
        ],
      },
      customer: {
        section: "customer",
        options: [
          {
            name: "Drivers seeking passive income",
            text: "Our primary customers are drivers, rideshare drivers, delivery workers, and commuters, who want to earn passive income without extra effort.",
          },
          {
            name: "Businesses seeking geo-targeted ads",
            text: "We target businesses looking for hyper-local advertising that stands out and delivers measurable ROI.",
          },
        ],
      },
      demo: {
        section: "demo",
        options: [
          {
            name: "Sleek digital display",
            text: "Our sleek, weatherproof digital displays mount easily on a car's roof or rear window, blending seamlessly with vehicle aesthetics.",
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
            name: "Lease or own model",
            text: "Drivers can either lease our units for $20/month or purchase them outright for $720.",
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
            text: "We collaborate with rideshare and delivery companies to incentivize their drivers to adopt Motion Ads.",
          },
          {
            name: "Ad agency partnerships",
            text: "We work with ad agencies to include Motion Ads in their media offerings, expanding our reach to more businesses.",
          },
        ],
      },
      traction: {
        section: "traction",
        options: [
          {
            name: "Successful pilot program",
            text: "Our three-month pilot program with 50 drivers across two cities generated $40,000 in ad sales and showed strong ROI for businesses, enabling us to expand.",
          },
          {
            name: "Positive driver feedback",
            text: "70% of drivers from our pilot opted to continue using Motion Ads, earning an average of $175/month in ad revenue.",
          },
          {
            name: "Business demand growth",
            text: "We've received increasing inquiries from regional businesses interested in hyper-local advertising through Motion Ads.",
          },
        ],
      },
      investment: {
        section: "investment",
        options: [
          {
            name: "Scale production",
            text: "We'll use investment funds to scale production of display units and improve display technology.",
          },
          {
            name: "Grow driver and business network",
            text: "With your invesment, we will  increase marketing to onboard more drivers and businesses, expanding our presence in major cities.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Turn drive time into dollar signs",
            text: "Sharks, invest in Motion Ads and help us turn drive time into dollar signs!",
          },
          {
            name: "Drive to succeed",
            text: "Motion Ads is growing fast and I have the drive to succeed!",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "The cost to produce each unit is $200, $100 for the LED screen, $50 for the GPS/Wi-Fi module, and $50 for the mount. We make that cost back within 10 months, unless the driver buys the unit, at which point we make back almost four times the cost. We take a 25% cut of the ad revenue, and could make that even higher.",
      },
      {
        question: "What is your profit margin?",
        answer:
          "We keep 25% of ad revenue and most drivers lease their units which helps us recoup the cost and our software costs scale well, so our aggregate margin will get even better over time.",
      },
      {
        question: "How do drivers earn money?",
        answer:
          "On average, drivers earn $175/month in ad revenue. They can use their earnings to buy or lease the unit. And we allow them to cash out at the end of each month.",
      },
      {
        question: "What's your plan for scaling?",
        answer:
          "We plan to scale by partnering with rideshare companies, expanding driver incentives, and targeting businesses in additional cities.",
      },
      {
        question: "How do you track whether an ad was actually seen?",
        answer:
          "We use a combination of GPS and Wi-Fi tracking to ensure ads are shown in targeted locations. We also conservatively discount impressions by a factor of ten to account for the fleeting nature of ads on moving vehicles.",
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
        "Our adaptive apparel makes getting dressed easier for people with disabilities.",
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
            text: "Here is one of our most popular designs: a shirt with magnetic closures that looks like traditional buttons. It's functional, stylish, and easy to use for anyone with limited dexterity.",
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
            text: "We've been featured in accessibility-focused blogs and lifestyle publications, building our credibility and raising awareness about our adaptive apparel.",
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
            text: "Join us, Sharks, and help us empower people with disabilities to live more independently: one outfit at a time. Together, we can make a difference.",
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
        question: "What is your profit margin?",
        answer:
          "We make anywhere from $33 to $73 per garment, so our profit margin is roughly 60-70%.",
      },
      {
        question: "Who is your biggest competitor?",
        answer:
          "Our biggest competitors are brands like Tommy Hilfiger's adaptive clothing line. However, we focus more on affordability and inclusive styles, making our products accessible to a broader audience.",
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
        "Apology.com is the only e-commerce site for curated gifts tailored to specific apology situations.",
      ask: "We are seeking $400,000 for 15% of our company.",
      revenue:
        "We drove traffic to the tune of over 40,000 sessions, with a 12% conversion rate, leading to $750,000 in sales in our first year.",
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
            name: "Apologizing is hard",
            text: "Sharks, apologizing is hard, but shopping for the perfect apology gift shouldn't be. Apology.com makes it easy to say 'I'm sorry' in the most thoughtful way possible.",
          },
          {
            name: "Turn remorse into retail",
            text: "Has your partner, friend, or coworker ever done something wrong to you and apologized only in words? Apology.com turns remorse into retail.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "Inspired by awkward apologies",
            text: "As someone who has witnessed many awkward and downright cringe-worthy apologies, I created Apology.com to simplify the process and make it meaningful.",
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
            name: "People looking to apologize",
            text: "Our primary audience is people who want convenient, thoughtful ways to apologize to their partners, friends, or colleagues.",
          },
          {
            name: "Couples in conflict",
            text: "We target couples who are looking for ways to repair strained relationships with thoughtful gestures.",
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
            name: "Personalization at checkout",
            text: "Our intuitive checkout process includes options for handwritten notes, gift wrapping, and rush shipping.",
          },
        ],
      },
      production: {
        section: "production",
        options: [
          {
            name: "Premium suppliers",
            text: "We partner with trusted suppliers for high-quality products like flowers, jewelry, and spa kits, ensuring a luxury experience.",
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
            name: "Men",
            text: "All kinds of people shop on Apology.com, but an exciting segment for us is: men! We have almost triple the industry average of men shopping for jewelry because we are the only site positioned for when they do wrong, not just when they want to get married.",
          },
          {
            name: "Divorced couples",
            text: "We have even re-ignited the market for gift-giving after divorce. For those who regularly interact with their ex, apologizing is a regular part of life and we are there to support them.",
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
            text: "We've partnered with luxury jewelry brands to offer exclusive, high-end apology gifts.",
          },
          {
            name: "Positive customer feedback",
            text: "80% of male customers reported that Apology.com made shopping for gifts significantly easier.",
          },
          {
            name: "Featured in relationship blogs",
            text: "We've been featured in top relationship advice blogs as a leading solution for repairing relationships through thoughtful gifting.",
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
            text: "With your help, we'll invest in expanding our product categories and forging more partnerships with high-end brands.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "I'm sorry",
            text: "Sharks, I'm sorry. Sorry for bringing you the best deal of the night!",
          },
          {
            name: "Turn remorse into retail",
            text: "Join us in turning remorse into retail and making heartfelt gifting effortless with Apology.com.",
          },
        ],
      },
    },
    questionsAndAnswers: [
      {
        question: "How much does it cost you and how much do you sell it for?",
        answer:
          "Our luxury gifts cost $60-$120 to produce, and we sell them for $80-$500 depending on the category and personalization.",
      },
      {
        question: "What is your profit margin?",
        answer:
          "Margin varies by gift type, for example we make just 25% margin on spa kits, but over 70% margin on jewelry. Average margin is closer to 30%.",
      },
      {
        question: "How do you have such a large inventory?",
        answer:
          "We don't own most of our inventory, instead we aggregate across our partners.",
      },
      {
        question: "How do you differentiate from competitors?",
        answer:
          "We are the first platform to organize gifts by apology type, offering curated, premium products with seamless personalization.",
      },
      {
        question: "What's your customer acquisition strategy?",
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
      industry: "Home Furnishings",
      oneSentence:
        "Soundscape Panels offer soundproofing panels that double as wall art.",
      ask: "We are seeking $300,000 for 12% of our company.",
      revenue: "We did $300,000 in sales in our first year.",
    },
    unitEconomics: {
      unitOfSales: "panels",
      costPerUnitCents: 3200,
      pricePerUnitCents: 10000,
      unitsSold: 3000,
      yearOneSalesCents: 30000000,
    },
    pitchSections: {
      hook: {
        section: "hook",
        options: [
          {
            name: "Block sound and beautify your space",
            text: "Noise is one of the biggest stressors in our homes today. What if your walls could block sound and beautify your space?",
          },
          {
            name: "Imagine this",
            text: "Imagine this: you moved into a brand new apartment, but the construction next door is too loud. Or your new roommate has a mechanical keyboard! Luckily for you, we have a stylish way to restore your peace.",
          },
        ],
      },
      founder: {
        section: "founder",
        options: [
          {
            name: "City dweller with noise struggles",
            text: "As a city dweller, I struggled with constant noise pollution and couldn't find an aesthetically pleasing solution. That's why I created Soundscape Panels.",
          },
          {
            name: "Interior designer inspiration",
            text: "With my background in interior design, I saw how many clients wanted functional decor that also looked beautiful. Soundscape Panels were born to meet that need.",
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
            text: "Using this sound meter, allow me to demonstrate how our panels significantly reduce noise levels in real-time.",
          },
          {
            name: "Show design options",
            text: "Here are our design options, ranging from abstract art to custom images, ensuring a fit for any interior style.",
          },
          {
            name: "Easy installation",
            text: "Look how lightweight and easy-to-mount our panels are, requiring no special tools or professional installation.",
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
            name: "Highly rated by customers",
            text: "Over 500 customers have rated us 4.8 stars on average, highlighting both functionality and aesthetics.",
          },
          {
            name: "Featured in media",
            text: "Our panels have been featured in lifestyle blogs and home improvement magazines as a stylish solution to noisy spaces.",
          },
          {
            name: "Interior design partnerships",
            text: "We've partnered with two major interior design firms to integrate our panels into residential and commercial projects.",
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
            text: "We'll use your funds to launch targeted marketing campaigns aimed at urban professionals and interior designers.",
          },
        ],
      },
      closing: {
        section: "closing",
        options: [
          {
            name: "Peaceful homes, stylish spaces",
            text: "With SoundScape panels, you get peaceful homes and stylish spaces. Invest today!",
          },
          {
            name: "The art of quiet",
            text: "Sharks, join us in creating the art of quiet.",
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
        question: "What is your profit margin?",
        answer:
          "We make anywhere from $68 to $130 per panel, for an average margin of 70%.",
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
      name: "MagSweep",
      industry: "Auto Parts",
      oneSentence:
        "MagSweep attaches to your car and picks up metal debris before they pop your tires.",
      ask: "We are seeking $250,000 for 15% of our company.",
      revenue:
        "We sold 3,000 units in our first year, generating $360,000 in revenue.",
    },
    unitEconomics: {
      unitOfSales: "devices",
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
            text: "We are building partnerships with major auto parts stores, such as AutoZone and O'Reilly Auto Parts, to make our product widely available.",
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
            name: "Prevention is protection",
            text: "Sharks, remember: prevention is protection. With your help, we can create safer roads and ensure fewer flat tires for drivers everywhere.",
          },
          {
            name: "Magnetic attraction",
            text: "Let's do a deal to make MagSweep a huge success. Sharks, I can already feel a magnetic attraction!",
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
        question: "What is your profit margin?",
        answer:
          "We have a 68% margin on each unit we produce. Bulk pricing eats into this a bit, but long-run it will make our production cheaper so both margin and scale will improve.",
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
