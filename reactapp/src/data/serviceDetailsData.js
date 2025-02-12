import React from "react";

const serviceDetailsData = [
  {
    id: "furniture-assembly-details",
    title: "Furniture Assembly",
    banner: {
      heading: "Furniture Assembly", // Title for the banner
      description:
        "Need someone to put together furniture? Hire a Tasker to assemble your furniture and leave the building to them.", // Description text
      buttonText: "Book now", // Call-to-action button text
      backgroundImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyeGgD2ugWcrB0crzT9b1Q69yfEL0xQ7AJA&s", // URL of the background image
    },
    serviceInfo: {
      heading: "Furniture Assembly Services",
      description: [
        "Let’s be honest: you were never going to read that furniture assembly manual. No matter how the instructions are laid out, furniture assembly is not necessarily a user-friendly task.",
        "Taskers frequently assemble beds, bunk beds, dressers, desks, couches, tables, chairs, wardrobes—you name it.",
        "Taskers bring their tools so that they can help you as quickly and efficiently as possible. TaskRabbit also offers furniture disassembly services, and Taskers can help you move or haul away your old furniture!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get it Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through One Click.",
      },
    ],
    faq: [
      {
        question: "Can I hire someone to put furniture together?",
        answer:
          "Yes, you can hire professionals to assemble your furniture for you.",
      },
      {
        question: "How much does it cost to assemble furniture?",
        answer:
          "The cost depends on the furniture type and complexity. TaskRabbit offers affordable pricing.",
      },
      {
        question: "How long does it take to assemble furniture?",
        answer: "Time varies based on complexity, but Taskers are efficient.",
      },
      {
        question: "Is flat pack furniture easy to assemble?",
        answer:
          "Flat pack furniture can be tricky; professionals make it hassle-free.",
      },
      {
        question:
          "Do I need to provide tools to Taskers for furniture assembly?",
        answer: "No, Taskers bring their own tools to complete the job.",
      },
    ],
  },
  {
    id: "home-repairs-details",
    title: "Home Repairs",
    banner: {
      heading: "Minor Home Repairs",
      description:
        "Jacks (and Jills) of all trades can handle most of your minor home repairs.",
      buttonText: "Book now",
      backgroundImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlmEoVcTEjsRL5py1_Ileq-TwG7Dtt1t--w&s", // URL of the background image
    },
    serviceInfo: {
      heading: "Home Repair Services",
      description: [
        "Hole in the drywall? Door off the hinges? Say hello to TaskRabbit. Taskers are your go-to solution for local home repair services you can trust.",
        "Background-checked Taskers are reliable, courteous, and reviewed by hundreds of other TaskRabbit users.",
        "With TaskRabbit, you'll get:",
        "Skilled Taskers to complete your major or minor home repairs.",
        "A transparent online platform that makes it easy and secure to find, hire, and pay your Tasker.",
        "A comprehensive Happiness Pledge to put your mind at ease.",
        "Note: If your project requires a licensed contractor, confirm your Tasker has the licenses needed when describing the job.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get it Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through One Click.",
      },
    ],
    faq: [
      {
        question: "Do Taskers only do minor home repairs?",
        answer:
          "No. While you’ll have to find a Tasker with the skill set to suit your unique project, Taskers handle all types of jobs - both large and small. Find a Tasker for help with everything from minor painting jobs to plumbing repairs.",
      },
      {
        question: "How quickly can I get a Tasker to do my home repair job?",
        answer:
          "Taskrabbit’s mission is to help you get the job done quickly and get on with your life. While the exact time frame depends on the scope of your job and your Tasker’s availability, Taskers finish most home repair projects in just a few days.",
      },
      {
        question: "How much do handyman services cost?",
        answer:
          "Home repair services in your area start at about $40 per hour, although prices vary from Tasker to Tasker and your location. To find the best prices Taskers offer near you, use our handyman locator.",
      },
      {
        question: "Will I be able to communicate directly with my Tasker?",
        answer:
          "Of course! After all, we want your home repair job to run as smoothly as possible. The TaskRabbit platform allows you to chat directly with your Tasker to confirm job details and get on the same page.",
      },
    ],
  },
  {
    id: "help-moving-details",
    title: "Help Moving",
    banner: {
      heading: "Help Moving",
      description:
        "Need help moving? Find moving assistance near you and get a Tasker to help with all your moving needs.",
      buttonText: "Book now",
      backgroundImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU75B6vViwdY4BfiVXsRKC0YDGPvNAI2JYmQ&s", // URL of the background image
    },
    serviceInfo: {
      heading: "Moving Services",
      description: [
        "Moving. It's a huge hassle, but can be so necessary when the time comes. If you need help moving and are struggling to find reliable help, consider hiring a Tasker.",
        "Taskers have experience providing moving assistance and can perform both loading and unloading tasks.",
        "If you need help moving, Taskers are able to help at an affordable price. They can move any item, large or small, and get you settled into your new place in a snap.",
        "Hiring a Tasker can help make moving a breeze! From packing to cleaning up after a move, Taskers can do it all!",
        "Don't do everything by yourself! Find the local moving help you need and take some of the stress out of moving.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get it Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through One Click.",
      },
    ],
    faq: [
      {
        question: "Can Taskers help with moving tasks?",
        answer:
          "Yes. Taskers have experience providing moving assistance and can handle both loading and unloading tasks efficiently.",
      },
      {
        question: "What types of items can Taskers move?",
        answer:
          "Taskers can move any item, large or small, and help get you settled into your new place quickly.",
      },
      {
        question: "Can Taskers assist with packing and cleaning after a move?",
        answer:
          "Absolutely! Taskers can help with packing, unpacking, and even cleaning up after a move to make the process smoother.",
      },
      {
        question: "Is hiring a Tasker for moving affordable?",
        answer:
          "Yes, Taskers provide moving help at an affordable price, making it easier to manage your relocation needs without breaking the bank.",
      },
    ],
  },
  {
    id: "heavy-lifting-details",
    title: "Heavy Furniture Moving",
    banner: {
      heading: "Heavy Furniture Moving",
      description:
        "Get help moving heavy furniture without sacrificing your back. From couches to beds, Taskers can move heavy furniture with ease.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.F6TAfrvaxFCgID_EoHOprQHaE8&pid=Api&P=0&h=180", // URL of the background image
    },
    serviceInfo: {
      heading: "Heavy Lifting Help",
      description: [
        "Upgrading your living space is so exciting! Maybe you’re swapping out that old couch with “character” for one with “back-support.” Or you finally found a vintage dresser that matches your bedroom and your budget. There’s only one thing left to do and it involves moving heavy furniture. That’s where we come in.",
        "Book a Tasker to help you move your old furniture out and bring your new furniture into its new home. We’re also happy to help you rearrange your existing spaces and help you completely transform them. Taskers will help with heavy lifting so you can spend time knocking out the rest of your to-do list (or maybe just relaxing).",
        "Don't do all the hard work on your own! Hire a Tasker for heavy lifting help today and take the stress out of your day.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Do Taskers have experience moving heavy furniture?",
        answer:
          "Yes, Taskers are skilled and experienced in safely moving heavy furniture.",
      },
      {
        question: "Can I find help moving furniture today?",
        answer:
          "Yes, you can quickly find Taskers in your area for same-day or next-day heavy furniture moving assistance.",
      },
      {
        question: "How much will it cost for heavy furniture moving?",
        answer:
          "The cost varies based on the size of the task and the Tasker’s rate. You can review pricing while booking to ensure affordability.",
      },
      {
        question: "Would I be able to hire two Taskers at once?",
        answer:
          "Yes, you can book multiple Taskers for your job if additional help is needed for heavy lifting.",
      },
      {
        question: "Can I get help moving large household appliances?",
        answer:
          "Absolutely! Taskers can assist with moving large appliances like refrigerators, washing machines, and more.",
      },
    ],
  },
  {
    id: "home-cleaning-details",
    title: "Home Cleaning Services",
    banner: {
      heading: "Home Cleaning Services",
      description:
        "Everyone deserves to come home to a clean house. Taskers can provide home cleaning services that make your home shine.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse3.mm.bing.net/th?id=OIP.HkGlamFuFE0RdD7Tn5GitgHaE7&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Housekeeping Services",
      description: [
        "Have you ever noticed the difference in how you feel when your house is clean and when it isn’t? The fact is, your environment can have a big impact on your mood, energy, clarity, and productivity. Keeping a clean home often helps you keep a clear mind, but don’t feel like you have to take on every chore yourself! Taskers can provide excellent home cleaning services at great prices.",
        "From scrubbing your floors to disinfecting your counters, or even just changing your bed sheets –– Taskers can do it all. Taskers can even deep clean your home or clean up after a move! Many Taskers are experienced cleaners who can provide amazing cleaning services in a flash.",
        "If you have cleaning supplies you’d like your Tasker to use, great! If not, Taskers can bring their own cleaning supplies. If you have any needs or preferences as to what sorts of cleaning products are used to clean your house, just let your Taskers know.",
        "Schedule local housekeeping services on a schedule that works for you. One-time, monthly, weekly, whatever you need, a Tasker can help.",
        "Don't waste your weekend cleaning dust out of the corners! Hire a Tasker instead and get back to doing what matters most to you.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Do I need to be home while cleaners come to my house?",
        answer:
          "No, you don’t have to be home while the cleaning is happening. You can leave instructions on how you want the job done and let the Tasker take care of it.",
      },
      {
        question: "How do I prepare my house for cleaning?",
        answer:
          "Make sure to pick up any personal items or valuables before the cleaning. You can also let your Tasker know if there are specific areas or items that need extra attention.",
      },
      {
        question: "What is included in a basic house cleaning?",
        answer:
          "Basic house cleaning typically includes dusting, vacuuming, sweeping, mopping, cleaning bathrooms and kitchen surfaces, and making beds. Let your Tasker know if you want additional services.",
      },
      {
        question: "Do cleaning services do laundry or dishes?",
        answer:
          "Some Taskers may be able to assist with laundry or dishes upon request, but this depends on the Tasker's skill set and your specific needs.",
      },
      {
        question: "How much do cleaning services cost?",
        answer:
          "Cleaning services typically start at around $40 per hour. Prices can vary based on your location and the scope of the work. You can check Taskers' rates before booking.",
      },
    ],
  },
  {
    id: "door-repair-details",
    title: "Door & Cabinet Repair",
    banner: {
      heading: "Door & Cabinet Repair",
      description:
        "Hire a Tasker to fix your doors, cabinets, and even furniture.",
      buttonText: "Book now",
      backgroundImage:
        "https://th.bing.com/th/id/OIP.6b6eX_g4dIJAktP1AwOlowHaE8?rs=1&pid=ImgDetMain",
    },
    serviceInfo: {
      heading: "Door, Cabinet, & Furniture Repair",
      description: [
        "Need a quick fix for that loose door or a wobbly cabinet? Taskers can help with all types of door and cabinet repairs. Whether it's fixing hinges, re-aligning doors, or repairing damaged cabinets, Taskers are here to help.",
        "From your kitchen cabinets to doors that don’t close properly, Taskers can provide reliable repair services to restore functionality and appearance.",
        "Taskers have the right tools and skills to repair or even restore your furniture to its former glory. Whether it's a minor fix or a major overhaul, get your door, cabinet, or furniture repaired in no time!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can Taskers fix my doors and cabinets?",
        answer:
          "Yes, Taskers specialize in door and cabinet repair services. Whether it's fixing loose hinges, re-aligning doors, or repairing damaged furniture, Taskers are skilled to handle it.",
      },
      {
        question:
          "How do I know if my Tasker has the right skills for the job?",
        answer:
          "You can browse Taskers by their skills, reviews, and price. You can also chat with them before booking to ensure they have the expertise required for your project.",
      },
      {
        question:
          "Do I need to provide tools for my Tasker to repair my door or cabinet?",
        answer:
          "No, Taskers bring their own tools to complete the job efficiently. If you have specific tools you'd like them to use, feel free to let them know.",
      },
      {
        question: "How much does it cost to repair a door or cabinet?",
        answer:
          "The cost varies based on the complexity of the job and your location. On average, door and cabinet repairs start at $40 per hour. You can check Taskers' rates before booking.",
      },
      {
        question: "Can Taskers fix broken furniture too?",
        answer:
          "Yes! Taskers can repair or restore furniture, including minor fixes like tightening screws, re-gluing parts, or fixing broken legs. Let them know the specific issue, and they'll take care of it.",
      },
    ],
  },
  {
    id: "appliance-repair-details",
    title: "Appliance Installation & Repairs",
    banner: {
      heading: "Appliance Installation & Repairs",
      description:
        "Whether it's a refrigerator, oven, or something else, trust a Tasker to manage all of your appliance needs.",
      buttonText: "Book now",
      backgroundImage:
        "http://www.prospecpg.com.au/wp-content/uploads/2020/06/application-11.jpg",
    },
    serviceInfo: {
      heading: "Appliance Installation & Repairs",
      description: [
        "Installing or repairing appliances like refrigerators, ovens, dishwashers, or washing machines? Taskers are here to help with all your appliance needs.",
        "From professional installation to fixing broken appliances, Taskers bring the tools and expertise needed to get your appliances working properly.",
        "Taskers can handle installation jobs for new appliances and ensure everything is set up and running smoothly. Whether you’re upgrading to a new appliance or need repairs on an existing one, TaskRabbit makes it simple and convenient.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question:
          "Can Taskers install appliances like refrigerators and ovens?",
        answer:
          "Yes, Taskers can install a wide range of appliances, including refrigerators, ovens, dishwashers, washing machines, and more.",
      },
      {
        question: "Do I need to provide tools for the installation?",
        answer:
          "No, Taskers bring their own tools and equipment to complete the installation or repair. However, if you have specific tools or parts you'd like them to use, just let them know.",
      },
      {
        question: "Can Taskers repair appliances if they're broken?",
        answer:
          "Yes, Taskers can help repair various household appliances. Let them know the problem you're experiencing, and they will diagnose and repair the issue.",
      },
      {
        question: "How much does it cost to install or repair an appliance?",
        answer:
          "Costs vary depending on the appliance and the complexity of the job. On average, appliance installation and repair start at around $40 per hour. You can check Taskers' rates before booking to get an estimate.",
      },
      {
        question: "Do Taskers provide appliance removal services?",
        answer:
          "Yes, many Taskers can also assist with removing old appliances. Be sure to specify if you need removal when booking the task.",
      },
    ],
  },
  {
    id: "tv-mounting-details",
    title: "TV Mounting & Installation",
    banner: {
      heading: "TV Mounting & Installation",
      description:
        "Taskers can help with TV mount installation to get you the best views.",
      buttonText: "Book now",
      backgroundImage:
        "https://callalliedelectric.com/wp-content/uploads/2023/10/TV-Mount-Installation-Services-Prescott-AZ.webp",
    },
    serviceInfo: {
      heading: "TV Mounting & Installation",
      description: [
        "TV screens keep getting bigger and bigger, and TV mounts keep getting better and better. Whether you want to mount your TV on the living room wall, into steel studs, or even onto an outdoor brick wall, there’s a mount that can support your TV and a Tasker that can handle the installation for you at a reasonable rate.",
        "Mounting your TV ensures the best view for everyone in the room, and many mounts even allow you to tilt or angle the screen for optimal viewing.",
        "One of the biggest benefits of wall mounting your TV is safety. It keeps your TV out of reach of children and pets, and many mounts include cable management features to keep wires off the floor.",
        "No tools? No problem! Taskers bring all the tools necessary to install your TV, but you’ll need to provide the mount. Taskers will also clean up after the task is complete, leaving your home just the way it was but with your TV exactly where you want it.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can Taskers help with TV mounting?",
        answer:
          "Yes, Taskers can install your TV on walls made of drywall, metal studs, brick, and concrete. They will bring the necessary tools to complete the installation.",
      },
      {
        question: "Do I need to provide a TV mount?",
        answer:
          "Yes, you need to provide the TV mount. Taskers will bring all the tools needed for the installation, but the mount itself must be supplied by you.",
      },
      {
        question: "What if I don’t know what type of wall I have?",
        answer:
          "It’s best to confirm the wall type with your Tasker beforehand to ensure they bring the correct tools. Common wall types include drywall and lathe and plaster. Taskers can also handle more complex installations like mounting on brick or concrete walls.",
      },
      {
        question: "Do Taskers clean up after the installation?",
        answer:
          "Yes, Taskers will clean up after the installation, leaving your home just as it was—only with your TV mounted exactly where you want it.",
      },
      {
        question: "How much does TV mounting cost?",
        answer:
          "TV mounting costs can vary based on your location, the wall type, and the complexity of the job. Typically, TV mounting services start at around $100. You can check Taskers’ rates before booking for a specific price.",
      },
    ],
  },
  {
    id: "electrical-help-details",
    title: "Electrical Help & Services",
    banner: {
      heading: "Electrical Help & Services",
      description:
        "Taskers can provide electrical help so you can clear your schedule and rest easy. Hire an electrical helper today!",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.gOCCkRIEYnIju1wgwqfhswHaEK&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Electrical Help & Services",
      description: [
        "You need to find someone to lend a hand with electrical help, but you don’t want to hire someone you can’t trust. After all, your home or office’s electrical system is important, and you can’t afford to gamble with it. Don’t worry—TaskRabbit is here!",
        "With TaskRabbit’s easy-to-use platform, you’ll find Taskers with electrical experience who can help with almost any electrical project you need—whether it’s rewiring a wall, replacing light fixtures, or even installing a new outlet.",
        "Don’t short-circuit your plans trying to do it all yourself. Hire a Tasker for electrical help today!",
        "Note: If your project requires a licensed electrician, confirm your Tasker has the required licenses when describing the job.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can Taskers handle electrical work?",
        answer:
          "Yes, Taskers can help with various electrical tasks, such as replacing light fixtures, installing outlets, or rewiring. Be sure to confirm the complexity of your task with your Tasker before booking.",
      },
      {
        question: "Do I need a licensed electrician for my project?",
        answer:
          "If your project requires specialized work, such as major rewiring or dealing with the electrical panel, you may need a licensed electrician. Be sure to confirm the Tasker’s qualifications when describing the job.",
      },
      {
        question: "How quickly can I get electrical help?",
        answer:
          "TaskRabbit aims to help you get your electrical work done quickly. The exact timing depends on the scope of your project, but most electrical tasks can be completed in a day or two.",
      },
      {
        question: "How much does electrical help cost?",
        answer:
          "The cost of electrical help varies depending on your location and the complexity of the job. You can check Taskers' rates and select one within your budget before booking.",
      },
      {
        question: "What kind of electrical tasks can Taskers perform?",
        answer:
          "Taskers can handle a variety of electrical tasks, including light fixture replacements, installing outlets, minor rewiring, and more. Be sure to check with your Tasker for any specific requirements.",
      },
    ],
  },
  {
    id: "plumbing-details",
    title: "Plumbing Services",
    banner: {
      heading: "Local Plumber Services",
      description:
        "Taskers can provide plumbing services to unclog, fix, install, replace, repair, and more! Find help today.",
      buttonText: "Book now",
      backgroundImage:
        "https://www.slicemiami.com/wp-content/uploads/2021/02/bigstock-Plumber-Tools-And-Equipment-On-305185702.jpg",
    },
    serviceInfo: {
      heading: "Local Plumber Services",
      description: [
        "Plumbing issues can be complicated and expensive. Fortunately, TaskRabbit can connect you to skilled, experienced Taskers who can solve your plumbing problems. When it comes to finding a plumber, look no further than TaskRabbit!",
        "From fixing clogged toilets to repairing dripping sinks, don't try to tackle the task on your own. Hire an experienced, background-checked Tasker you can rely on. Taskers are independent contractors, and their skill sets may vary—be sure to be specific in your task description and check Tasker profiles to book the right person for the job!",
        "Don't try to fix it all on your own! Hire a Tasker for plumbing services today and put your mind at ease.",
        "Note: If your project requires a licensed plumber, confirm your Tasker has the necessary licenses when describing the job.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can Taskers install my washing machine?",
        answer:
          "Yes, Taskers can help install washing machines, along with other plumbing tasks such as connecting appliances and ensuring proper water connections. Be sure to specify your needs when booking a Tasker.",
      },
      {
        question: "How quickly can I get local plumbing services at my home?",
        answer:
          "The timing for plumbing services varies based on your location and the complexity of the job. You can find Taskers available same-day or within a few days to suit your schedule.",
      },
      {
        question: "How much will I pay for plumbing services?",
        answer:
          "The cost of plumbing services depends on the nature and complexity of the task. Taskers set their rates based on their experience and the specific job required. You can review pricing and choose a Tasker that fits your budget.",
      },
      {
        question: "Can Taskers deal with small leaks and other problems?",
        answer:
          "Yes, Taskers can assist with minor plumbing issues such as leaks, drips, and clogged drains. For more complex plumbing issues, such as pipe replacements or sewer line repairs, make sure to confirm the Tasker's experience and qualifications.",
      },
      {
        question: "Are Taskers licensed and insured for plumbing services?",
        answer:
          "Taskers are independent contractors, and while many have experience in plumbing, some may not be licensed. If your project requires a licensed plumber, please verify the Tasker's credentials when describing the job.",
      },
    ],
  },
  {
    id: "painting-details",
    title: "Interior Painters",
    banner: {
      heading: "Home Painting Services",
      description:
        "Taskers are happy to hop over and help with interior home painting.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.XQZ3pqSx3mT0VcLhQHgopQHaE7&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Home Painting Services",
      description: [
        "Are there buckets of paint sitting around that should be up on the wall right now? You probably had a great vision for how you wanted your space to look, it’s just… painting’s never as easy as we think it is. That's where Taskers come in: experienced painters for your home's interior.",
        "Taskers will take care to lay down the right tarps to protect your floors and furniture while painting. You may not have to worry about moving all that furniture around after all! (But if you ever do need to move or dispose of furniture, Taskers can help with that too!)",
        "Not that you need to hire an industrial painting company to help paint your home, but you do want to make sure you hire someone who knows which end of the brush to hold so that every coat is as even and smooth as can be.",
        "To the window, to the wall, Taskers can paint it all! Taskers are experienced home painters who can help you paint your home, apartment, office, garage, shed—you name it. Whether you’re adding an accent wall or painting the trim on a three-story Victorian townhouse, there's no job too big or small for Taskers!",
        "No paint? No problem. You can always ask your Tasker to pick some paint up for you, or let them use what you have!",
        "Taskers can do all the painting you need (and even clean up afterward). Hire a Tasker today!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "How much does it cost to hire someone to paint?",
        answer:
          "The cost of hiring a painter varies depending on the size of the job, the materials needed, and the Tasker’s hourly rate. You can browse Taskers to compare prices and select the best option that fits your budget.",
      },
      {
        question: "How can you tell if a paint job is bad?",
        answer:
          "A bad paint job may have streaks, uneven coverage, drips, or mismatched colors. If the paint peels or chips away quickly, it’s also a sign of poor quality work. Be sure to check Tasker reviews and ratings to ensure you hire a reliable professional.",
      },
      {
        question: "Do painters supply the paint?",
        answer:
          "Taskers can bring paint if needed, or you can provide your own paint. You can discuss your preferences with the Tasker before booking, so they know what to bring for your project.",
      },
      {
        question: "How long should it take to paint a room?",
        answer:
          "The time it takes to paint a room depends on the size of the room, the number of coats, and the complexity of the job. On average, it can take 4 to 8 hours to paint a standard-sized room. Taskers can give you an estimated time based on your specific needs.",
      },
    ],
  },
  {
    id: "truck-assisted-moving-details",
    title: "Moving with a Truck",
    banner: {
      heading: "Truck Assisted Help Moving",
      description:
        "Need a truck to help you move? Taskrabbit is here to help! Hire a Tasker for complete moving services.",
      buttonText: "Book now",
      backgroundImage:
        "https://www.neighbor.com/storage-blog/wp-content/uploads/2021/01/Family-loading-boxes-into-the-back-portion-of-a-moving-truck.jpg",
    },
    serviceInfo: {
      heading: "Truck Assisted Help Moving",
      description: [
        "Why bother with the hassle of a DIY move when you can enlist the help of our skilled Taskers? With Truck Assisted Help Moving, you can leave the heavy lifting and vehicle logistics to the experts, allowing you to focus on settling into your new space.",
        "Whether you're moving a single item or an entire household, no job is too big or too small for your dedicated Tasker. Say goodbye to moving stress and hello to a hassle-free experience. With their vehicles, our Taskers specialize in making your move effortless.",
        "Book a Truck Assisted Help Moving task today and make your move a walk in the park!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Are Taskers equipped with their own moving trucks?",
        answer:
          "Yes, many Taskers have their own moving trucks or vehicles. You can choose Taskers with trucks suitable for your move and discuss details before booking.",
      },
      {
        question: "How does pricing work for Truck Assisted Help Moving tasks?",
        answer:
          "Pricing for Truck Assisted Help Moving tasks varies based on factors such as the distance, duration, and the number of Taskers required. Taskers set their rates, and you can compare prices before confirming your booking.",
      },
      {
        question:
          "How do I choose the right Truck Assisted Help Moving Tasker for my move?",
        answer:
          "You can browse Taskers based on their reviews, ratings, skills, and price. Be sure to check their experience with similar moves and confirm the details of your task through chat before finalizing your booking.",
      },
      {
        question:
          "What services do TaskRabbit's Truck Assisted Help Moving Taskers offer?",
        answer:
          "Taskers offer a wide range of services including loading and unloading, transporting items in their trucks, and even helping with packing or organizing your belongings. You can discuss specific needs with the Tasker beforehand.",
      },
      {
        question: "Can I leave a tip for my Truck Assisted Help Moving Tasker?",
        answer:
          "Yes, you can leave a tip for your Tasker if you’re satisfied with the service. Tipping is optional, but it’s a great way to show appreciation for a job well done!",
      },
    ],
  },
  {
    id: "packing-services-details",
    title: "Packing Services & Help",
    banner: {
      heading: "House Packing Services",
      description:
        "Find packing services near you and prepare for a stress-free move! Hire a Tasker to help with packing and get moving in a snap.",
      buttonText: "Book now",
      backgroundImage:
        "https://didusa.org/wp-content/uploads/2020/08/373994-PBCHWY-372-1536x1024.jpg",
    },
    serviceInfo: {
      heading: "House Packing Services",
      description: [
        "Sometimes packing is the most overwhelming part of the move. Something might suffer damage in transit, you might not be able to fit everything in one trip, and it’s going to be just as difficult unpacking and knowing where everything is once you arrive at your new place.",
        "Packing services can make all of that stress disappear for you. A Tasker will be able to help you evaluate what sorts of boxes or equipment you’ll need to move your belongings and then prepare them for safe transport.",
        "That can mean stacking plates vertically instead of horizontally, fitting the maximum number of books in a box, wrapping dressers so that the drawers are secured, and rolling out furniture without leaving so much as a scratch on your floor.",
        "In addition to packing services, you can also hire a Tasker to unpack your boxes. Protect your belongings and get the move done in one trip! Find a Tasker to help today.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when, and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What is a packing service?",
        answer:
          "A packing service is where a Tasker helps you prepare your belongings for safe transport. This includes organizing, wrapping, and packing items into boxes to prevent damage during a move.",
      },
      {
        question: "How much do packing services cost?",
        answer:
          "The cost of packing services can vary depending on the size of your move, the number of boxes required, and the time needed. You can browse Taskers based on their pricing and get an estimate before booking.",
      },
      {
        question: "Do packing services include unpacking?",
        answer:
          "Yes! Many Taskers also offer unpacking services to help you settle in after your move. You can specify whether you'd like help with unpacking when you book a Tasker.",
      },
      {
        question: "What is the best day of the week to move?",
        answer:
          "The best day to move depends on your availability and the Taskers' schedules. Weekends tend to be popular, but weekday moves may be more affordable and less busy. Try to book in advance for the best availability.",
      },
      {
        question: "How far in advance should you schedule packing services?",
        answer:
          "It's a good idea to book packing services at least a week before your move, but last-minute bookings are often available depending on Tasker availability. The earlier you book, the more likely you are to secure your preferred date and time.",
      },
    ],
  },
  {
    id: "local-movers-details",
    title: "Local Moving Help",
    banner: {
      heading: "Local Moving Help",
      description:
        "Find a Tasker with a truck for local moving help. Plenty of small local movers are available to help!",
      buttonText: "Book now",
      backgroundImage:
        "https://res.cloudinary.com/updater-marketing/image/upload/f_auto,q_auto/r_32/Dolly_Photo_HelpersCarryingTable_17134ffd24.jpg",
    },
    serviceInfo: {
      heading: "Local Moving Help",
      description: [
        "A short distance move is usually a small operation that’s within an hour or two drive and involves moving belongings that could fit in a pickup truck or van. Many Taskers will be able to use their own vehicle to help you with your local move, which is perfect if you’re just transporting a single large item!",
        "A local mover can help you haul your belongings in or out of storage units whenever you need. You can usually find Taskers available for same-day local moving services with trucks. Whatever your needs are, Taskers are happy to help (even if the move ends up being a little bigger than planned).",
        "Find local moving help near you for your local move! Don't do it all on your own, just task!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What distance is considered a local move?",
        answer:
          "A local move is typically within a 1-2 hour drive, or less than 50 miles. This includes moves from one home to another or to a storage unit within the same area.",
      },
      {
        question: "How much does a local move cost?",
        answer:
          "The cost of a local move can vary depending on the number of Taskers and the amount of time it takes to complete the move. Typically, it’s an hourly rate for moving services, which can be found by browsing Taskers' pricing.",
      },
      {
        question: "How do I find a local mover?",
        answer:
          "You can find a local mover by browsing TaskRabbit for available Taskers near your location. Filter by skills, reviews, and pricing to find the right person for your move.",
      },
      {
        question: "How far in advance should you schedule local movers?",
        answer:
          "You can usually find Taskers for same-day service, but it’s recommended to book a few days in advance to ensure availability during busy times.",
      },
      {
        question:
          "What is the cheapest way to move furniture a short distance?",
        answer:
          "The cheapest way to move furniture a short distance is to hire a Tasker who uses their own vehicle. You can also reduce costs by packing items yourself and only hiring Taskers for loading, unloading, or transportation.",
      },
    ],
  },
  {
    id: "full-service-moving-details",
    title: "Full Service Movers",
    banner: {
      heading: "Full Service Movers",
      description:
        "Looking for full service movers? Look no further than Taskrabbit! Hire a Tasker for complete moving services.",
      buttonText: "Book now",
      backgroundImage:
        "https://hometriangle.com/blogs/content/images/2023/02/AdobeStock_458017513.jpeg",
    },
    serviceInfo: {
      heading: "Full Service Help Moving",
      description: [
        "Want to move without moving a muscle? We get it, and we’re here to help. With TaskRabbit, expert movers will provide full service moving for you, so you can focus on getting settled into your new space. Why DIY it when you could hire a Tasker to handle the job instead?",
        "Taskers can help make this your easiest move yet. They can help you get out of your old place and transition smoothly to your new one, without the headache of wrestling boxes on your own. Hiring full service movers can quickly take the stress out of your move.",
        "No job is too big or too small for your Tasker! Book a task today!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can Taskers help me move from a walk-up?",
        answer:
          "Yes, Taskers can help you move from a walk-up! Be sure to mention any specifics about stairs or access points when describing your task so that the Tasker is prepared.",
      },
      {
        question: "How much does Full Service Moving cost?",
        answer:
          "The cost for full service moving depends on the size and complexity of your move, including the number of Taskers required, the distance, and whether you need additional services like a truck or packing assistance. You can browse Taskers by price and skills to find the right fit for your budget.",
      },
      {
        question: "Can my Tasker bring a truck?",
        answer:
          "Yes, many Taskers come equipped with their own trucks. Be sure to confirm with your Tasker beforehand to ensure they have the appropriate vehicle for your move.",
      },
      {
        question: "Can a Tasker help me move out of my city?",
        answer:
          "Yes, Taskers can assist with moving outside your city, but please confirm details with your Tasker, as there may be additional costs for long-distance travel or logistics.",
      },
      {
        question: "Can a Tasker move my whole house?",
        answer:
          "Absolutely! Taskers are available for full-service moves, including handling everything from packing to transportation to unpacking. Just be sure to provide as much detail as possible about the size and scope of your move so they can plan accordingly.",
      },
    ],
  },
  {
    id: "desk-assembly-details",
    title: "Desk Assembly",
    banner: {
      heading: "Desk Assembly",
      description:
        "Need desk assembly services? Hire a Tasker, and get your furniture set up in a snap.",
      buttonText: "Book now",
      backgroundImage: "https://i.ytimg.com/vi/p5mt1WTp2bA/maxresdefault.jpg",
    },
    serviceInfo: {
      heading: "Desk Assembly Service",
      description: [
        "These days, we’re all working from home a lot more, which may require desk assembly for your new office space. With Taskrabbit, you can hire a Tasker for desk assembly and get your home office set up in a flash.",
        "Taskers can help assemble almost any piece of furniture you have. Just hand them the instructions, and let them work their magic. Taskers can help get that desk out of its box and into the office you've been dreaming of.",
        "Take the hassle out of creating your home office by finding reliable desk assembly services near you. Don't do it all yourself. Just task!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "When can I get desk assembly service?",
        answer:
          "You can often get desk assembly service as soon as the same day or within a few days, depending on availability. Check with your Tasker to confirm the timing that works best for you.",
      },
      {
        question: "How much do desk assembly services cost?",
        answer:
          "The cost for desk assembly varies depending on factors such as the complexity of the desk, your location, and the Tasker's experience. You can browse Taskers by price to find the right fit for your budget.",
      },
      {
        question: "Can Taskers help assemble an L-shaped desk?",
        answer:
          "Yes, Taskers can assemble L-shaped desks! Just provide them with the instructions or details, and they will handle the assembly. Be sure to clarify any specific requirements when describing your task.",
      },
    ],
  },
  {
    id: "dresser-assembly-details",
    title: "Dresser Assembly",
    banner: {
      heading: "Dresser Assembly",
      description:
        "Taskers specialize in dresser assembly! No dresser is too big or too small to put together. Find help now.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.k-lkKVYSJpKzdwjcWmofdAHaFj&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Dresser Assembly Services",
      description: [
        "Think of Taskers as your magic dresser assembly fairies. With a few clicks in the app, you'll browse and book a Tasker. Then, before you know it, you'll have a brand new dresser—and a lovely new place for your clothes to call home.",
        "Taskers specialize in all types of furniture assembly, from simple pieces to large, complex ones. Instead of spending all afternoon dealing with dresser setup, consider hiring a Tasker to put it together instead. With help from a Tasker, you can get back to enjoying what really matters, like hobbies or time with your family and friends.",
        "Taskers can make dresser assembly a breeze, so don't do it all yourself. Just task!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "When can I get my dresser assembled?",
        answer:
          "You can usually get dresser assembly as soon as the same day or within a few days, depending on Tasker availability. Be sure to check the calendar when booking a Tasker.",
      },
      {
        question: "How much does it cost to assemble a dresser?",
        answer:
          "The cost to assemble a dresser depends on the complexity of the dresser, location, and the Tasker's experience. You can view pricing details for individual Taskers to find a price that fits your budget.",
      },
      {
        question:
          "Do I need to provide Taskers with tools to assemble my dresser?",
        answer:
          "Taskers typically bring their own tools for assembly, but it's always a good idea to check with them ahead of time to ensure they have everything needed for the job.",
      },
      {
        question:
          "I started to assemble my dresser and gave up. Can someone help me?",
        answer:
          "Yes, Taskers can help finish the dresser assembly if you've already started and need assistance. Just provide the current state of the assembly, and they will take it from there.",
      },
    ],
  },
  {
    id: "bed-assembly-details",
    title: "Bed Assembly",
    banner: {
      heading: "Bed Assembly",
      description:
        "Hire a Tasker to assemble your bed. From bunk beds to sleigh beds, Taskers can do it all! Same-day assembly available.",
      buttonText: "Book now",
      backgroundImage:
        "https://i5.walmartimages.com/asr/749c1fa5-cc3a-460a-8352-53574d6cc2b2.cd164508bf69d26c1b7a9191877e2357.jpeg",
    },
    serviceInfo: {
      heading: "Bed Assembly and Installation",
      description: [
        "They say you should get a new mattress every seven years, but what about your bed? While there may not be a handy guide for when to replace a bed, you know the time has come. Whether you're finally upgrading to the king-size you've been dreaming of, you've decided you're too old to be sleeping on a mattress on the floor, or your baby is graduating to a big-kid bed, assembling a bed frame is in your future.",
        "Now that you've picked out the perfect bed, it's time to get down to business and embrace that bed assembly. But maybe you've got a full plate, or you aren't the handy type. What to do? Why, hire a Tasker, of course! With just a few clicks, you'll be catching the restorative Zzzs you've been after.",
        "Hire a Tasker for bed assembly, including bunk bed assembly, pull-out bed assembly, and more. Don't do it all yourself. Just task.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What are the 3 parts of a bed?",
        answer:
          "The three main parts of a bed typically include the headboard, the bed frame (including rails and support structure), and the mattress. Some beds, like bunk beds or pull-out beds, may have additional parts like ladders or storage components.",
      },
      {
        question: "When can I get my new bed assembled?",
        answer:
          "You can usually get bed assembly as soon as the same day or within a few days, depending on Tasker availability. Be sure to check the calendar when booking a Tasker to ensure availability on your preferred date.",
      },
      {
        question: "How much does it cost to assemble a bed?",
        answer:
          "The cost of bed assembly varies based on the complexity of the bed, location, and the Tasker's experience. Pricing may also depend on whether you need additional services such as mattress placement or disassembling an old bed. You can check Tasker profiles for specific pricing details.",
      },
      {
        question: "Can Taskers help with bunk bed assembly?",
        answer:
          "Yes, Taskers can help assemble bunk beds, including both basic and more complex designs. If your bed has additional features like stairs, storage, or intricate parts, it's always a good idea to mention these details when booking to ensure the Tasker is equipped for the job.",
      },
    ],
  },
  {
    id: "bookshelf-assembly-details",
    title: "Bookshelf Assembly",
    banner: {
      heading: "Bookshelf Assembly",
      description:
        "Need bookshelf assembly services? Hand the instructions to a Tasker, and let them take care of it. Find the help you need today!",
      buttonText: "Book now",
      backgroundImage:
        "https://tse3.mm.bing.net/th?id=OIP.jgDnQbBFMjAc745pCZhc8gHaHa&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Find Bookshelf Assembly Services Near You",
      description: [
        "Bookshelf assembly has become even more necessary as we spend more time at home. Books can be a fantastic escape or even a way to learn new and valuable skills. It's important to have a place for all those books, and that's where Taskers come in.",
        "Taskers are skilled in bookshelf assembly and have the tools needed to get the job done in a snap. Efficiency is a key part of hiring a Tasker, as they're often able to put together furniture quickly and expertly. Taskers can even help mount the shelves to your wall!",
        "Don't waste your afternoon fumbling around with the small parts and pieces. Instead, just task.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "How much does bookshelf assembly cost?",
        answer:
          "The cost for bookshelf assembly can vary based on complexity and size. You can check Taskers' pricing through their profiles for accurate quotes.",
      },
      {
        question: "Do I need to provide tools for assembly?",
        answer:
          "No, Taskers bring the necessary tools to complete your bookshelf assembly. If you have any specific preferences or requirements, let your Tasker know beforehand.",
      },
      {
        question: "Can Taskers help mount bookshelves on the wall?",
        answer:
          "Yes, many Taskers can help with mounting bookshelves on the wall, depending on the type of wall and bookshelf. Be sure to discuss these details with your Tasker in advance.",
      },
      {
        question: "How long does bookshelf assembly take?",
        answer:
          "Assembly time depends on the complexity of the bookshelf. A basic bookshelf may take around 30 minutes, while more complex designs could take longer. Your Tasker will give you an estimated timeframe.",
      },
      {
        question: "What if I have trouble with assembling my bookshelf?",
        answer:
          "If you start assembling your bookshelf and need help, you can always hire a Tasker to finish the job. Just share the assembly progress with them so they can pick up from where you left off.",
      },
    ],
  },
  {
    id: "wardrobe-assembly-details",
    title: "Wardrobe Assembly",
    banner: {
      heading: "Wardrobe Assembly",
      description:
        "Wardrobe assembly can be complex and time-consuming. Leave it to a Tasker to complete the project to your satisfaction.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse2.mm.bing.net/th?id=OIP.PoVZcxM_bL-mMoI2kwJuwwHaCQ&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Wardrobe Assembly Services",
      description: [
        "Wardrobe assembly and installation can be time-consuming, stressful, and complicated. There are often a lot of different pieces, small parts, and complex instructions to follow. If you've ever found yourself struggling to assemble a closet or wardrobe, then TaskRabbit might be for you.",
        "Taskers are experienced with wardrobe assembly and are available to help at a price that works for your budget. Many Taskers have assembled IKEA furniture, and some can even put together unique wardrobes that require power tools or custom assembly.",
        "Find wardrobe installers near you and take the hassle out of wardrobe assembly! Don't do it all on your own. Just task.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "How much does wardrobe assembly cost?",
        answer:
          "The cost for wardrobe assembly can vary based on the complexity and size of the wardrobe. Taskers provide estimates based on their rates and the type of wardrobe you need assembled.",
      },
      {
        question: "Do I need to provide the tools for wardrobe assembly?",
        answer:
          "No, Taskers bring all the necessary tools to assemble your wardrobe. If you have specific preferences, let them know in advance.",
      },
      {
        question: "Can Taskers assemble custom wardrobes?",
        answer:
          "Yes, some Taskers are experienced in assembling custom wardrobes, including those that require power tools or specific instructions. Make sure to mention the details of your wardrobe when booking a Tasker.",
      },
      {
        question: "How long does it take to assemble a wardrobe?",
        answer:
          "The time it takes to assemble a wardrobe depends on its size and complexity. Simple wardrobes may take a few hours, while larger or custom designs may take longer. Your Tasker will provide an estimated timeframe.",
      },
      {
        question: "What if I have difficulty assembling my wardrobe myself?",
        answer:
          "If you've started assembling your wardrobe and need assistance, you can hire a Tasker to finish the job. Just provide them with the details of the assembly progress so they can pick up where you left off.",
      },
    ],
  },
  {
    id: "house-cleaning-services-details",
    title: "Home Cleaning Services",
    banner: {
      heading: "House Cleaning Services",
      description:
        "Everyone deserves to come home to a clean house. Taskers can provide home cleaning services that make your home shine.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse4.mm.bing.net/th?id=OIP.ejmQRzRakk1VVNRVKKo0BAHaE8&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Housekeeping Services",
      description: [
        "Have you ever noticed the difference in how you feel when your house is clean and when it isn’t? The fact is, your environment can have a big impact on your mood, energy, clarity, and productivity. Keeping a clean home often helps you keep a clear mind, but don’t feel like you have to take on every chore yourself! Taskers can provide excellent home cleaning services at great prices.",
        "From scrubbing your floors to disinfecting your counters, or even just changing your bed sheets –– Taskers can do it all. Taskers can even deep clean your home or clean up after a move! Many Taskers are experienced cleaners who can provide amazing cleaning services in a flash.",
        "If you have cleaning supplies you’d like your Tasker to use, great! If not, Taskers can bring their own cleaning supplies. If you have any needs or preferences as to what sorts of cleaning products are used to clean your house, just let your Taskers know.",
        "Schedule local housekeeping services on a schedule that works for you. One-time, monthly, weekly, whatever you need, a Tasker can help.",
        "Don't waste your weekend cleaning dust out of the corners! Hire a Tasker instead and get back to doing what matters most to you.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Do I need to be home while cleaners come to my house?",
        answer:
          "It's not required for you to be home while the cleaning takes place. However, if you have any specific instructions or areas you want to highlight, it’s best to be present or leave clear guidance.",
      },
      {
        question: "How do I prepare my house for cleaning?",
        answer:
          "To prepare for your cleaning session, it helps to clear clutter or personal items from the areas you'd like cleaned. If there are specific items that require attention, let your Tasker know in advance.",
      },
      {
        question: "What is included in a basic house cleaning?",
        answer:
          "A basic house cleaning typically includes dusting, vacuuming, sweeping, mopping, and cleaning surfaces like countertops, sinks, and toilets. You can customize your cleaning request based on your needs.",
      },
      {
        question: "Do cleaning services do laundry or dishes?",
        answer:
          "Laundry and dishes are not always included in basic house cleaning, but Taskers can assist with these tasks if specified. Be sure to request these services when booking if needed.",
      },
      {
        question: "How much do cleaning services cost?",
        answer:
          "The cost of cleaning services varies depending on the size of the home, the type of cleaning required, and the location. Taskers will provide estimates based on your needs and their hourly rates.",
      },
    ],
  },
  {
    id: "deep-cleaning-details",
    title: "Deep Cleaning Services",
    banner: {
      heading: "Deep Cleaning Services",
      description:
        "Looking for deep cleaning services? Hire a Tasker to get into those tough spots and make your house shine.",
      buttonText: "Book now",
      backgroundImage:
        "https://thepinoyofw.com/wp-content/uploads/2023/06/deep-clean.jpg",
    },
    serviceInfo: {
      heading: "Deep Cleaning Services",
      description: [
        "Dirt and grime can have a way of sneaking up on us while we’re too busy with the day-to-day life chores and surface level cleaning. But it’s important to attack deep cleaning regularly so that the buildup doesn’t lead to larger problems like unwelcome pests in your home. That's where Taskers and deep cleaning services come in.",
        "Deep cleaning is a great way to keep your food fresh and free of molds and bacteria that can start growing in those hard-to-reach areas of your fridge, freezer, and pantry. You might be wondering: what's the difference between regular cleaning and deep cleaning? Well, for one thing, a deep clean is a lot more intense and takes more time. A regular cleaning can take 1-2 hours, while deep cleaning can take up to 5!",
        "Deep cleaning typically includes services that aren't covered by a regular cleaning: scrubbing tile grout, disinfecting and dusting hard-to-reach areas, getting rid of ground-in stains. Every deep clean is different, but in general it's more than just a surface cleaning. Talk with your Tasker before the job to determine exactly what you need done!",
        "We all sweep things under the rug sometimes, but at some point we need to take care of deep cleaning services so that our houses don’t just look clean—they are clean. Whether it’s a renovation you’re recovering from, or just daily life, deep cleaning Taskers are ready to roll up their sleeves and get to work for you! Taskers can even clean up pre-move in (or after you move out).",
        "Don't do it all on your own. Just task!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What’s included in a house deep cleaning?",
        answer:
          "Deep cleaning typically includes tasks such as scrubbing tile grout, cleaning baseboards, cleaning under and behind furniture, disinfecting and dusting hard-to-reach areas, and eliminating ground-in stains.",
      },
      {
        question: "Do I need to provide cleaning supplies for my deep clean?",
        answer:
          "You can either provide your own cleaning supplies, or your Tasker can bring their own. Let your Tasker know your preference when booking.",
      },
      {
        question: "Do I need to be home during the cleaning?",
        answer:
          "It’s not required for you to be home during the deep cleaning, but if you have specific instructions or concerns, it’s helpful to be there or leave clear guidance.",
      },
      {
        question: "How long will a deep cleaning take?",
        answer:
          "Deep cleaning can take 3-5 hours depending on the size of your home and the scope of the work. It’s a more thorough cleaning compared to regular cleaning.",
      },
      {
        question: "How much does deep cleaning cost?",
        answer:
          "The cost of deep cleaning varies depending on the size of your home and the specific tasks involved. Taskers will provide a price estimate based on your needs.",
      },
    ],
  },
  {
    id: "disinfecting-services-details",
    title: "Disinfecting Services",
    banner: {
      heading: "Disinfecting Services",
      description:
        "Need disinfecting services? Hire a Tasker to take care of your disinfecting needs.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.VbNg2dAaCNxSr4ZoaIT1iwHaDp&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Disinfecting Services",
      description: [
        "Taking care of the spaces that we’re in every day goes beyond just tidying up. That’s especially true now. As the world prepares to open back up to social situations, disinfecting services have never been more important. Essential businesses are deep cleaning their spaces to continue providing for the community in responsible and safe ways.",
        "So whether you run a small business or are looking for disinfectant cleaning services as a precaution for your home, Taskers can help you breathe easy. They’ve got the products, tools, and time to safely clean every door knob, surface, and high-touch point area you need.",
        "Taskers use EPA-approved cleaning and disinfecting products to ensure that your space remains safe and hygienic, whether it’s to prevent the spread of germs or maintain a clean environment for your family and customers.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What should I do to prepare for disinfecting services?",
        answer:
          "Clear any personal items from surfaces to be disinfected. Make sure your Tasker can access all high-touch areas such as door handles, light switches, and counters.",
      },
      {
        question:
          "Can disinfecting services be performed with social distancing?",
        answer:
          "Yes! Taskers can maintain social distancing by wearing masks and gloves while disinfecting, ensuring a safe cleaning process.",
      },
      {
        question: "Can Taskers help with office disinfection?",
        answer:
          "Yes, Taskers are available to disinfect offices and commercial spaces, focusing on high-touch areas like desks, phones, and shared equipment.",
      },
      {
        question: "Are Taskers available for home sanitizing services today?",
        answer:
          "Yes, many Taskers offer same-day disinfecting services for homes. You can book a Tasker that fits your schedule.",
      },
      {
        question:
          "Do Taskers provide the cleaning supplies for disinfecting services?",
        answer:
          "Taskers can bring their own disinfecting supplies or use yours, depending on your preference. Make sure to specify your needs when booking.",
      },
    ],
  },
  {
    id: "one-time-cleaning-services-details",
    title: "One-Time Cleaning Services",
    banner: {
      heading: "One-Time Cleaning Services",
      description:
        "Looking for a professional clean? Book a Tasker to handle your one-time cleaning needs with ease.",
      buttonText: "Book now",
      backgroundImage:
        "https://homecleaning.com.sg/wp-content/uploads/2023/06/one-time-cleaning.jpg",
    },
    serviceInfo: {
      heading: "One-Time Cleaning Services",
      description: [
        "Whether you’re preparing for a special event, tackling a post-renovation mess, or just need a deep clean, our one-time cleaning services have got you covered. Taskers are here to handle every corner of your space with professionalism and efficiency.",
        "From kitchens and bathrooms to living rooms and bedrooms, a thorough cleaning will leave your space spotless and refreshed. Customize your cleaning preferences to ensure the service meets your exact needs.",
        "Taskers use high-quality cleaning products and equipment to remove dirt, dust, and grime, creating a clean and healthy environment for you and your family.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need cleaned, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What areas are included in one-time cleaning services?",
        answer:
          "Taskers can clean kitchens, bathrooms, living areas, and bedrooms. You can specify areas to focus on during the booking process.",
      },
      {
        question: "Do I need to provide cleaning supplies?",
        answer:
          "Taskers can bring their own supplies or use yours if you prefer. Make sure to clarify your needs during booking.",
      },
      {
        question: "Can I book a one-time cleaning service for today?",
        answer:
          "Yes, many Taskers offer same-day cleaning services. Check availability and book a Tasker that fits your schedule.",
      },
      {
        question: "What should I do to prepare for the cleaning service?",
        answer:
          "Remove any personal items or clutter from surfaces to allow Taskers to clean effectively. Let your Tasker know about any specific requests.",
      },
      {
        question: "Can Taskers help with post-renovation or move-out cleaning?",
        answer:
          "Yes, Taskers specialize in deep cleaning for post-renovation or move-out scenarios. Specify your requirements when booking.",
      },
    ],
  },
  {
    id: "laundry-help-details",
    title: "Laundry Help",
    banner: {
      heading: "Laundry Help",
      description:
        "Laundry basket overflowing? Taskers can wash, dry, fold, iron, and even pick up dry cleaning. Book a Tasker for laundry help today!",
      buttonText: "Book now",
      backgroundImage:
        "https://fee4bee.com/uploads/categories/laundry-help.jpg",
    },
    serviceInfo: {
      heading: "Laundry Help",
      description: [
        "Laundry day doesn’t have to be a chore. Taskers are here to help with all your laundry needs, whether it’s washing, drying, folding, ironing, or even picking up and dropping off dry cleaning.",
        "Busy schedule? No problem. Taskers bring their expertise, and you can have your laundry done without lifting a finger. They provide quick, efficient, and reliable service, ensuring your laundry is taken care of and returned clean and fresh.",
        "Whether you need help with a one-time laundry load or want to schedule regular laundry services, Taskers offer flexible options to fit your needs. They use the best laundry supplies and techniques, making sure your clothes are treated with care.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Do I need to provide laundry supplies?",
        answer:
          "Taskers can bring their own laundry supplies, or you can provide your preferred detergents and fabric softeners. Be sure to mention your preference when booking.",
      },
      {
        question: "Can Taskers iron clothes?",
        answer:
          "Yes! Taskers can iron your clothes as part of the laundry service. Simply let them know what needs ironing.",
      },
      {
        question: "Do Taskers offer dry cleaning services?",
        answer:
          "Yes, Taskers can help with picking up and dropping off dry cleaning, along with washing, drying, and folding your laundry.",
      },
      {
        question: "How long will laundry take?",
        answer:
          "The time required for laundry depends on the load size and specific tasks. A standard load may take around 1-2 hours, while larger or more complex jobs could take longer.",
      },
      {
        question: "Can Taskers do laundry on a regular schedule?",
        answer:
          "Yes, you can schedule recurring laundry services, whether it's weekly, bi-weekly, or monthly. Just let your Tasker know your preferred schedule.",
      },
    ],
  },
  {
    id: "gift-wrapping-services-details",
    title: "Gift Wrapping Services",
    banner: {
      heading: "Gift Wrapping Services",
      description:
        "Looking for professional gift wrappers to help out for the holidays? Hire a Tasker for gift wrapping services!",
      buttonText: "Book now",
      backgroundImage:
        "https://cdn.shopify.com/s/files/1/1526/7731/files/DSCF4792_2048x2048.JPG?v=1475783271",
    },
    serviceInfo: {
      heading: "Professional Gift Wrappers",
      description: [
        "If you need help with gift wrapping, you’ve come to the right place! Taskers can help with every stage of gift giving and wrapping. Consider the possibilities: you can hire a Tasker to buy gift wrap supplies, wrap gifts, prepare handwritten notes and cards, ship presents, break down boxes, and delight you and the gift’s recipient alike! If you’ve already purchased a gift and need a Tasker to pick it up at a store and request for it to be wrapped, that is also possible. With Taskrabbit, the gift wrapping possibilities are endless.",
        "Finding places that wrap gifts can be difficult, especially as it gets closer to the holidays. Why go out in the cold and try find professional gift wrappers when you can have one come straight to your door? Taskers will come to your home and provide exquisite gift wrapping services at a great price.",
        "In addition to being effective and affordable, Taskers can wrap gifts to your specifications or give it their own flair! Hiring a Tasker is the quickest way to take the stress out of the holidays.",
        "Don't do all the gift wrapping on your own! Hire A Tasker to help.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Should I provide gift wrap supplies?",
        answer:
          "Taskers can bring their own gift wrap supplies, or you can provide your preferred materials. Let your Tasker know if you have any specific wrapping paper, ribbon, or tags you’d like them to use.",
      },
      {
        question: "Can Taskers wrap corporate gifts?",
        answer:
          "Yes! Taskers can wrap corporate gifts, ensuring that they are beautifully presented. You can even request customized wrapping for your company’s needs.",
      },
      {
        question: "How much do gift wrapping services near me cost?",
        answer:
          "The cost of gift wrapping services varies depending on the number of gifts, type of wrapping, and location. Taskers will provide estimates based on the complexity and quantity of the task.",
      },
      {
        question: "Can you pay someone to wrap presents?",
        answer:
          "Yes, you can absolutely hire someone to wrap your gifts. Taskers are happy to help with wrapping, ensuring that your gifts are presented beautifully and with care.",
      },
    ],
  },
  {
    id: "holiday-decorating-details",
    title: "Holiday Decorating Services",
    banner: {
      heading: "Holiday Decorating Services",
      description:
        "Looking for holiday decorating services? Hire a Tasker to hang Christmas decorations and help get your home ready for the holidays!",
      buttonText: "Book now",
      backgroundImage:
        "https://i.pinimg.com/originals/37/a4/6f/37a46fff4cc78aed7dabd9d53936b4f0.jpg",
    },
    serviceInfo: {
      heading: "Holiday Decorating Services",
      description: [
        "The Holidays are the most wonderful time of the year, but decorating for them is no small task! If the thought of hanging Christmas decorations stresses you out, then maybe it's time to hire a Tasker!",
        "Taskers can help with Christmas decor setup, decorate your tree, hang lights, and more! No need to do it all on your own when you can hire a professional decorator for Christmas. While a Tasker decorates the inside of your home, you can focus on all the other holiday tasks: buying gifts, baking cookies, and making your guests feel welcome. Or maybe you can hire a Tasker for all those tasks and just focus on spending time with friends and family!",
        "Whatever your holiday needs are, Taskers are experienced and ready to help at any time. Don't delay! Hire a Tasker to help with Christmas decor today.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question:
          "How much does Christmas decoration installation near me cost?",
        answer:
          "The cost of Christmas decoration installation varies depending on the complexity of the decorations, the size of your home, and your location. Taskers will provide an estimate based on your needs and the type of decorations required.",
      },
      {
        question: "Can Taskers install Christmas lights?",
        answer:
          "Yes, Taskers can help with hanging Christmas lights both indoors and outdoors. Whether it’s string lights on your tree or along your roofline, Taskers have the tools and experience to get the job done safely.",
      },
      {
        question: "Can Taskers also take down Christmas decorations?",
        answer:
          "Yes, Taskers can help you take down your Christmas decorations after the holiday season. Simply book a Tasker to dismantle and store your decorations for next year.",
      },
      {
        question: "When should I start decorating for the holidays?",
        answer:
          "It’s up to you, but many people start decorating right after Thanksgiving or at the beginning of December. Taskers are available to assist at any time during the holiday season to make your home festive!",
      },
      {
        question: "Is it worth it to hire a decorator?",
        answer:
          "Hiring a decorator can save you time and reduce stress during the busy holiday season. Taskers are experienced and can handle all aspects of holiday decor, from lights to tree decorating, leaving you more time to enjoy the festivities.",
      },
      {
        question: "How soon is too soon to decorate for Christmas?",
        answer:
          "There's no right or wrong time to start decorating for Christmas! Some people like to begin right after Thanksgiving, while others wait until December. The holiday spirit is up to you!",
      },
    ],
  },
  {
    id: "party-cleaning-details",
    title: "Party Cleanup",
    banner: {
      heading: "Party Cleanup",
      description:
        "Beer spills, buffalo sauce on the carpet, nacho cheese disaster? Stuff happens. Hire a Tasker for a pre- or post-party deep cleaning.",
      buttonText: "Book now",
      backgroundImage:
        "https://homepluscleaning.com/media/images/Before-and-After-Party-Cleaning-Tips.jpg",
    },
    serviceInfo: {
      heading: "Party Cleanup",
      description: [
        "Hosting a party is fun, but cleaning up after it is never the highlight. Whether you’re dealing with spilled beer, food stains, or just a mess from guests, Taskers are here to help you get your space back to its original condition.",
        "From wiping down counters to tackling tough stains on the carpet, our Taskers are ready to handle all the cleanup so you can enjoy your time without worrying about the aftermath. Whether it's before or after your party, they will make sure your home or event space is spotless.",
        "No need to stress about the mess—Taskers come prepared with the right cleaning supplies to tackle any party-related chaos. Book your Tasker today and let them take care of the dirty work.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What should I do before the party cleanup?",
        answer:
          "To ensure your Tasker can clean effectively, clear away any large items and make sure they have access to all areas that need attention. Let them know about any specific stains or messes that require extra care.",
      },
      {
        question: "Can Taskers clean up after outdoor parties?",
        answer:
          "Yes, Taskers can help clean up after both indoor and outdoor parties. Be sure to mention any outdoor cleaning needs when booking, and they will come prepared.",
      },
      {
        question: "Can Taskers clean up food stains on carpets and upholstery?",
        answer:
          "Absolutely! Taskers can handle food and drink stains on carpets, upholstery, and other surfaces. Be sure to describe the mess when booking so they bring the appropriate cleaning supplies.",
      },
      {
        question: "How long will the cleanup take?",
        answer:
          "The time needed for cleanup depends on the size of the area and the extent of the mess. A standard cleanup may take 1-2 hours, while larger parties or tougher stains may require more time.",
      },
      {
        question: "Do Taskers bring their own cleaning supplies?",
        answer:
          "Yes, Taskers bring their own cleaning supplies, but you can provide specific products if you prefer. Just let your Tasker know when booking.",
      },
    ],
  },
  {
    id: "personal-assistant-details",
    title: "Personal Assistant Services",
    banner: {
      heading: "Personal Assistant Services",
      description:
        "Organized and efficient Taskers can be your extra pair of hands, handling any task. Hire a personal assistant today!",
      buttonText: "Book now",
      backgroundImage:
        "https://www.blueparasol.com/wp-content/uploads/2017/08/Consumer-Directed-Personal-Assistance-Program-BP.jpg",
    },
    serviceInfo: {
      heading: "Hire a Personal Assistant",
      description: [
        "If you could wave a magic wand and get a little extra help to make your job run more smoothly, what would you wish for? Whether you’re looking for on-going help or a one-time assist, Taskers have you covered.",
        "Personal assistant Taskers can help with a wide range of tasks! Popular personal assistant tasks include data entry, office assistance, creating labels and mailing packages, distributing flyers, sorting piles, organizing files, scanning, planning trips, planning a move, picking up dry cleaning, and even sewing. The possibilities are endless! You can hire a personal assistant Tasker once, occasionally, or ongoing–a popular solution for small business support.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can a personal assistant manage my inbox?",
        answer:
          "Yes, personal assistants can help manage your email inbox by sorting, responding to, and prioritizing emails based on your preferences.",
      },
      {
        question: "Can I hire a personal assistant for a few hours each week?",
        answer:
          "Yes, you can hire a personal assistant for a few hours a week, whether you need recurring help or just occasional support.",
      },
      {
        question: "How much does a personal assistant cost?",
        answer:
          "The cost of hiring a personal assistant depends on the tasks, location, and duration. Taskers will provide estimates based on their hourly rates.",
      },
      {
        question: "How Do I Hire A Personal Assistant?",
        answer:
          "Simply describe your task, choose a Tasker based on reviews, skills, and price, and schedule a time that works for you.",
      },
      {
        question: "Can a personal assistant Tasker pick up my dry cleaning?",
        answer:
          "Yes, personal assistants can help with errands such as picking up dry cleaning, making deliveries, or any other task you need.",
      },
      {
        question: "What does a personal assistant do?",
        answer:
          "A personal assistant can help with a variety of tasks, including office work, errands, organization, scheduling, travel planning, and more.",
      },
      {
        question: "Do personal assistants clean?",
        answer:
          "Personal assistants generally focus on administrative, organizational, and logistical tasks. For cleaning services, you would need a separate cleaning service Tasker.",
      },
      {
        question: "Is a personal assistant worth it?",
        answer:
          "Hiring a personal assistant can be incredibly valuable for busy professionals, small business owners, or anyone needing help staying organized and managing tasks efficiently.",
      },
    ],
  },
  {
    id: "organization-details",
    title: "Organization Services",
    banner: {
      heading: "Organization Services",
      description:
        "De-cluttering and getting organized can feel overwhelming. Use our Organization services to accomplish the feeling of being done!",
      buttonText: "Book now",
      backgroundImage:
        "https://tse3.mm.bing.net/th?id=OIP.ACUGj4x75Pa_fiHfwMm9dwHaDI&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Professional Organizers Can Declutter and Organize Your Home",
      description: [
        "TaskRabbit is a flexible solution for your organizing needs. Hire a Tasker to help you with any type of general organization project. Imagine: your garage de-cluttered, your boxes unpacked, your office papers filed, your closets organized, your for-sale items posted online, your space tidied up.",
        "Organization tasks can also include clearing out your email inbox, organizing your digital photos, and other online tasks. Give your home or work space a spa day with an organization task!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Do Taskers have organization experience?",
        answer:
          "Yes, Taskers have experience in organizing various spaces, including homes, offices, and digital files. You can browse reviews and skills to find the perfect organizer for your needs.",
      },
      {
        question: "How much do organization services cost?",
        answer:
          "The cost of organization services depends on the task complexity and duration. Taskers will provide an estimate based on their hourly rate and the project scope.",
      },
      {
        question: "Can TaskRabbit help me get organized after a move?",
        answer:
          "Yes, Taskers can help you unpack, sort, and organize your belongings after a move, making your new space functional and clutter-free.",
      },
      {
        question:
          "Can I book an Organization task for someone other than myself?",
        answer:
          "Yes, you can book an organization service for a friend, family member, or colleague to help them declutter and organize their space.",
      },
      {
        question:
          "Can I use TaskRabbit’s Organization services for a business?",
        answer:
          "Yes, Taskers can assist with organizing business spaces, filing documents, organizing office supplies, and more.",
      },
    ],
  },
  {
    id: "organize-home-details",
    title: "Home Organization Services",
    banner: {
      heading: "Home Organization Services",
      description:
        "Taskers can help you feel de-cluttered and maximize your space. They'll help you with storage solutions and organization systems throughout your home or office.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse4.mm.bing.net/th?id=OIP.bRjRy5MdbJ4mEhBK6UT4KwHaD9&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Professional Home Organizer",
      description: [
        "Hire a home organizer as a step toward making your space work best for you! Popular home organization services on TaskRabbit include help moving into a new place or getting set up after a remodel, identifying storage solutions such as bins or cabinets, finding storage space within your home, boxing up returns, and more.",
        "Home Organizing services can tailor to specific rooms, such as your bedroom, bathroom, kitchen, home office, kids’ rooms, garage, and closets. You can also ask a Tasker to focus on organizing specific storage areas, like kitchen cabinets, the medicine cabinet, etc., or for digital organization help such as scanning documents or photos, clearing out email boxes, and more.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question:
          "Can I book a Home Organizing task for someone other than myself?",
        answer:
          "Yes, you can book a home organizing service for a friend, family member, or colleague to help them declutter and organize their space.",
      },
      {
        question: "How much do home organizing services cost?",
        answer:
          "The cost of home organizing services depends on the task complexity and duration. Taskers will provide an estimate based on their hourly rate and the project scope.",
      },
      {
        question: "Can TaskRabbit help me get my home organized after a move?",
        answer:
          "Yes, Taskers can assist you with unpacking, sorting, and organizing your belongings after a move, making your new space functional and clutter-free.",
      },
      {
        question:
          "Can I use TaskRabbit’s Home Organizing services for a business?",
        answer:
          "Yes, Taskers can help organize office spaces, files, and storage areas for businesses. They can also assist in creating efficient work environments.",
      },
      {
        question: "Can a Tasker help me organize my garage?",
        answer:
          "Yes, Taskers can help with garage organization, including sorting tools, creating storage solutions, and making your garage a more functional space.",
      },
    ],
  },
  {
    id: "interior-design-service-details",
    title: "Interior Design Services",
    banner: {
      heading: "Interior Design Services",
      description:
        "Hire a Tasker to decorate your home. Our experienced Taskers will help you customize the interior of your home.",
      buttonText: "Book now",
      backgroundImage:
        "https://www.homedoo.com/wp-content/uploads/2020/12/services-of-an-interior-designer.jpg",
    },
    serviceInfo: {
      heading: "Interior Design Services",
      description: [
        "A new space can be a blank slate to design and decorate, pulling from a wide range of styles and inspirations. Upgrading your existing interior can also be a refreshing and exciting way to transform your space. But where to even begin? Trust an experienced Tasker to be your personal interior designer!",
        "Partner with TaskRabbit for a design consultation, a follow-up mood board pitch, and finally execution on decoration and installation to totally transform your living space into the cohesive and tasteful space of your dreams! We’ll help you build a space that will impress guests and bring you joy every day.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question:
          "What do I need to get started with interior design services?",
        answer:
          "To get started, it’s helpful to have an idea of your desired style and any budget considerations. You can also gather inspiration from design magazines or websites.",
      },
      {
        question:
          "Would Taskers be able to help with design consultation only?",
        answer:
          "Yes! Taskers can assist with design consultations, helping you create a vision for your space. From there, you can choose whether to proceed with decorating and installation.",
      },
      {
        question: "Are Taskers available today for a design consultation?",
        answer:
          "Yes, many Taskers offer same-day design consultations. You can check their availability when booking.",
      },
      {
        question: "Can I book a Tasker to help decorate multiple spaces?",
        answer:
          "Yes! Taskers can assist with decorating multiple rooms or areas within your home. Just provide the details when booking.",
      },
      {
        question: "How does it work?",
        answer:
          "You describe your project, choose a Tasker based on skills and reviews, and once you confirm the details, your Tasker will assist with the design consultation, mood board creation, and installation.",
      },
    ],
  },
  {
    id: "virtual-assistant-details",
    title: "Virtual Assistant Services",
    banner: {
      heading: "Virtual Assistant Services",
      description:
        "Get important tasks done efficiently today, from organizing files to managing your inbox and more.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse2.mm.bing.net/th?id=OIP.n67KgS8UONjya3fzplRAHgHaE8&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Virtual Assistant Services",
      description: [
        "You have a lot to get done, but you’re not stuck trying to do it all alone. Hire a Tasker to take care of your important tasks - virtually. Whether you’re looking for ongoing help or a one-time assist, Taskers have you covered.",
        "Browse virtual assistant Tasker profiles to find the best skillset for your needs, whether it’s schedule management, organization, or something else.",
        "Book a one-time or ongoing personal assistant - whatever works for you! Enjoy spending your time and energy on other things that are important to you.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What can a virtual assistant do for me?",
        answer:
          "A virtual assistant can help with tasks such as managing emails, scheduling appointments, organizing files, conducting research, handling social media, and much more.",
      },
      {
        question: "Can I hire a virtual assistant for a few hours each week?",
        answer:
          "Yes! You can hire a virtual assistant for as little as a few hours each week. It’s flexible, depending on your needs.",
      },
      {
        question: "How do I find the right virtual assistant for me?",
        answer:
          "Browse Tasker profiles based on their skills, reviews, and hourly rate. You can also chat with them to discuss your needs and find the right fit.",
      },
      {
        question: "Can I trust a Tasker to be my virtual assistant?",
        answer:
          "Yes, Taskers are vetted professionals, and you can browse their profiles to review past feedback from other clients to ensure they’re the right fit for you.",
      },
    ],
  },
  {
    id: "dog-walking-details",
    title: "Dog Walking",
    banner: {
      heading: "Dog Walking",
      description:
        "Need someone to help your pooch stretch its legs? Trusted Taskers can walk your dog while you're away.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse4.mm.bing.net/th?id=OIP.QwOYAFLR1nJ9f0eHcZKiywHaE8&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Dog Walking Services",
      description: [
        "If you need someone to take care of your dog's daily exercise while you're away, a trusted Tasker is here to help! Taskers can walk your dog according to your schedule, giving your pooch the exercise and attention it needs.",
        "Whether it's a quick walk around the block or a longer stroll through the park, Taskers will ensure your dog gets some fresh air and enjoys their time outside.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Can I hire a Tasker to walk my dog regularly?",
        answer:
          "Yes! You can book a Tasker for recurring dog walking services on a schedule that works for you and your dog.",
      },
      {
        question: "How long will the walk be?",
        answer:
          "The duration of the walk can be tailored to your needs. You can discuss with the Tasker how long you want the walk to be, whether it’s a quick 20-minute walk or a longer stroll.",
      },
      {
        question: "Do Taskers provide leashes or other walking accessories?",
        answer:
          "You can either provide the leash and other walking accessories, or your Tasker can bring their own. Be sure to confirm with your Tasker beforehand.",
      },
      {
        question:
          "Can Taskers walk my dog if it has special needs or is elderly?",
        answer:
          "Yes! Taskers can accommodate special needs dogs. Be sure to provide details about your dog’s specific needs or any limitations they might have, and the Tasker will tailor the walk accordingly.",
      },
      {
        question: "Can I trust a Tasker with my dog?",
        answer:
          "Yes, Taskers are vetted professionals with experience in dog walking. You can review their profiles, ratings, and feedback from previous clients to ensure they’re a good fit for your dog.",
      },
    ],
  },
  {
    id: "data-entry-details",
    title: "Data Entry",
    banner: {
      heading: "Data Entry",
      description:
        "Is your business an administrative nightmare? A dedicated data entry clerk is a dream come true.",
      buttonText: "Book now",
      backgroundImage: "http://content.timesjobs.com/img/61836079/Master.jpg",
    },
    serviceInfo: {
      heading: "Data Entry Services",
      description: [
        "Is your office full of desks cluttered with paperwork, files, and records? Most successful businesses excel at what they do, but simple organization often gets lost in the shuffle.",
        "If your business needs some administrative cleanup, hiring a data entry clerk is the right solution. Services can help with tasks such as research, data mining, organizing databases, redaction, and much more.",
        "Whether you're looking to get your office organized or move toward a paperless system, a reliable and experienced data entry Tasker can help streamline your processes.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "Why should I outsource data entry?",
        answer:
          "Outsourcing data entry allows you to focus on growing your business while an experienced Tasker handles time-consuming administrative tasks efficiently. It helps reduce errors and increases productivity.",
      },
      {
        question: "What can a data entry clerk do to help my business?",
        answer:
          "A data entry clerk can assist with various tasks such as inputting data into databases, research, organizing records, managing spreadsheets, redacting sensitive information, and more.",
      },
      {
        question: "Do I have to provide Taskers with technology or equipment?",
        answer:
          "In most cases, Taskers can bring their own equipment and software. However, if you have specific tools or systems you'd like them to use, you can provide those details when booking.",
      },
      {
        question:
          "Is there a lead time when scheduling data entry clerk services?",
        answer:
          "Taskers are often available to start quickly, but it's best to plan ahead and confirm the timing with your Tasker. Many can accommodate same-day or next-day service, depending on availability.",
      },
    ],
  },
  {
    id: "computer-help-details",
    title: "Computer Help",
    banner: {
      heading: "Computer Help",
      description:
        "Skilled Taskers can help solve your computer issues. Virtual same-day appointments available.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.swCPehwEi5SF1BMk21RfyAHaE7&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Computer Help Services",
      description: [
        "If you're facing technical difficulties or need assistance with your computer, don't worry. Skilled Taskers are available to solve your issues quickly and efficiently.",
        "Whether you're dealing with software troubleshooting, system updates, virus removal, or general computer setup, a Tasker can help you out. Virtual appointments are available, so you can get help without leaving home. Book a Tasker today for virtual or on-site computer support!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What kind of computer issues can Taskers help with?",
        answer:
          "Taskers can assist with a wide range of computer-related issues, including software troubleshooting, system optimization, virus removal, installing updates, and even setting up new devices.",
      },
      {
        question: "Do I need to provide software or tools for the Tasker?",
        answer:
          "Taskers can use their own tools and software, but if you have specific software or tools that you want them to use, be sure to provide those details when booking.",
      },
      {
        question: "Can Taskers assist with both PC and Mac computers?",
        answer:
          "Yes! Taskers are experienced with both PC and Mac computers, so you can book one for help with either type of system.",
      },
      {
        question: "Can I get same-day computer help?",
        answer:
          "Yes! Many Taskers offer same-day virtual appointments, so you can get help with your computer issues quickly.",
      },
      {
        question:
          "How do I know if a Tasker is qualified to help with my computer issues?",
        answer:
          "Taskers on TaskRabbit are vetted for their skills and experience. You can review their profiles, ratings, and reviews to ensure they have the expertise needed for your specific task.",
      },
    ],
  },
  {
    id: "office-cleaning-details",
    title: "Office Cleaning",
    banner: {
      heading: "Office Cleaning",
      description:
        "Hire office cleaning services to give your office a clean sweep.",
      buttonText: "Book now",
      backgroundImage:
        "https://lirp.cdn-website.com/9eecf9aa/dms3rep/multi/opt/Why+Every+Office+Needs+Commercial+Cleaning+Beyond+Aesthetics-min-1920w.jpg",
    },
    serviceInfo: {
      heading: "Office Cleaning Services that Sparkle",
      description: [
        "Working in a clean and organized workspace is important for the health and safety of your employees and customers. However, keeping up with cleaning an office can be a full-time job.",
        "Regardless of size or location, every business can benefit from commercial office cleaning services. Commercial office cleaning services can help keep your office fresh and clean. The best part? Office cleaning can be scheduled anytime.",
        "When employees work in a clean, sparkling environment, it shows in their work. Make sure your office sparkles and engenders a healthy, happy work environment. Hire a Tasker today!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What is included in commercial cleaning services?",
        answer:
          "Commercial office cleaning typically includes tasks like vacuuming, dusting, cleaning restrooms, wiping down surfaces, trash removal, and disinfecting high-touch areas. Specific services can be customized based on your needs.",
      },
      {
        question: "Do we need to supply the cleaning products or solutions?",
        answer:
          "No, you do not need to supply cleaning products. Taskers will bring their own professional-grade cleaning products unless you have specific preferences.",
      },
      {
        question:
          "What type of cleaning products or solutions do office cleaning services use?",
        answer:
          "Taskers use eco-friendly, commercial-grade cleaning products designed for efficiency and safety. If you have specific cleaning product preferences, please let them know when booking.",
      },
      {
        question: "When can I schedule office cleaning services?",
        answer:
          "Office cleaning services can be scheduled at a time that works best for you, including after hours or during weekends to minimize disruption to your business operations.",
      },
      {
        question:
          "Do I need to move office furniture before office cleaning Taskers arrive?",
        answer:
          "It's not necessary to move office furniture before the cleaning task, but it may help the Tasker reach areas that are typically harder to clean. If you have large items that need moving, discuss this with your Tasker in advance.",
      },
    ],
  },
  {
    id: "office-movers-details",
    title: "Office Movers",
    banner: {
      heading: "Office Movers",
      description:
        "Moving an office? Hire commercial moving services to do the heavy lifting for you.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse2.mm.bing.net/th?id=OIP.gLh_RPcEdZF4sZfIwF-BrwAAAA&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Commercial Movers Helping Businesses Make the Move",
      description: [
        "Moving can be stressful. Whether you are moving across town or down the hall, moving is hard work. However, by working with commercial moving services, you can ensure that your office furniture and equipment are moved quickly, safely, and efficiently.",
        "Finding a reliable and reputable office moving service is easy:",
        "1. Browse reviews to find qualified, trusted, and dependable commercial moving services conveniently located near your office.",
        "2. Book office movers at a date and time that is convenient for you and your business.",
        "3. Have your office furniture moved quickly and all in one shot.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "How long will it take to move my office?",
        answer:
          "The time it takes to move an office depends on the size of your office, the amount of equipment, and the distance between locations. A typical office move can take anywhere from a few hours to a full day.",
      },
      {
        question: "When is the best time to move my office?",
        answer:
          "The best time to move your office depends on your business needs. If possible, try to schedule the move during off-hours, weekends, or outside of busy seasons to minimize disruption.",
      },
      {
        question: "Do I need insurance for an office move?",
        answer:
          "It is advisable to have insurance for your office move to cover any potential damage to your furniture, equipment, or other items. Discuss insurance options with your Tasker or moving company.",
      },
      {
        question: "Am I responsible for packing?",
        answer:
          "It depends on your arrangement with the movers. You can either pack your office items yourself or hire the movers to handle packing. Make sure to clarify this before booking your service.",
      },
    ],
  },
  {
    id: "office-supply-snack-delivery-details",
    title: "Snack & Supply Delivery",
    banner: {
      heading: "Snack & Supply Delivery",
      description:
        "Get supplies and snacks delivered ASAP! Hire a Tasker to get everything you need.",
      buttonText: "Book now",
      backgroundImage:
        "https://www.washingtonpost.com/resizer/gTy8P6CGMEkntnDhEMu-XqkSJII=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PO5NELVKSY7XNFGOSOQ3ORBTCU.jpg",
    },
    serviceInfo: {
      heading: "Same Day Office Snack & Supply Delivery",
      description: [
        "Sometimes you need snacks and supplies ASAP--that's where TaskRabbit comes in. Taskers have the skills and equipment to get the things you need delivered in a flash. Whether it's healthy snacks or paper products, Taskers can get them to your office quickly and affordably.",
        "Working is already hectic enough without the burden of coordinating supply deliveries. Life can be so much easier with a little help from a Tasker. So next time you need snacks or supplies delivered, consider hiring a Tasker!",
        "Hire a Tasker today to get the items you need delivered right to your door! Don't do it all on your own, just task!",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What types of snack food delivery options are available?",
        answer:
          "Taskers can deliver a wide range of snack options, including healthy snacks, candy, chips, nuts, and beverages. You can specify the type of snacks you need when booking your Tasker.",
      },
      {
        question:
          "Are there gluten-free and/or vegetarian snack options available?",
        answer:
          "Yes, gluten-free, vegetarian, and other dietary preferences can be accommodated. Be sure to specify your needs when describing your task.",
      },
      {
        question: "How are office snacks delivered?",
        answer:
          "Snacks are delivered directly to your office via TaskRabbit. Taskers will bring the items to your specified location and ensure they are delivered promptly and safely.",
      },
      {
        question:
          "I need to change my office snack delivery schedule. How do I do that?",
        answer:
          "You can adjust your schedule by contacting your Tasker directly through the TaskRabbit platform. Make sure to update any details before the delivery date.",
      },
      {
        question: "Are office food delivery options expensive?",
        answer:
          "The cost of snack and supply delivery depends on the type of snacks and supplies, as well as the delivery distance. Taskers offer competitive rates, and you can browse different options to find one that fits your budget.",
      },
      {
        question:
          "What types of office supplies are available for same-day office supply delivery?",
        answer:
          "Office supplies such as paper, pens, notebooks, staplers, printer ink, and other essential office materials are available for same-day delivery. Specify your needs when describing your task.",
      },
      {
        question:
          "What if I’m not available when my office supply delivery arrives?",
        answer:
          "If you're not available, you can arrange for someone else at the office to receive the delivery. Alternatively, you can provide special instructions for leaving the items at a secure location.",
      },
    ],
  },
  {
    id: "office-setup-organization-details",
    title: "Office Setup",
    banner: {
      heading: "Office Setup",
      description:
        "Living and working in the fast lane? Make your work and life easier with office organization.",
      buttonText: "Book now",
      backgroundImage:
        "https://i.pinimg.com/originals/92/1a/c3/921ac332715f9ecb9f50155427aa8ffc.jpg",
    },
    serviceInfo: {
      heading: "Office Organization Services Made Easy",
      description: [
        "Success can be busy, overwhelming, and a little messy. Working in a cluttered or disorganized workspace can hinder creativity, productivity, and motivation. Change the way you work by organizing your office and workspace. By hiring TaskRabbit’s services, you can ensure that you can always find what you’re looking for and when you need it.",
        "A clean, organized, and professional office creates a positive work environment and experience. Whether you need help with organizing an existing office or designing a new office, you can find what you’re looking for with office organization and setup services.",
        "Don't spend your valuable time organizing those old papers and documents. Instead, hire a Tasker to do it for you! Taskers are experienced with office organization and can get your work area organized in a snap.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "How will office organization setup services help me?",
        answer:
          "Office organization services can help you create a more efficient, productive, and pleasant workspace. Whether you need help decluttering, setting up filing systems, organizing your office furniture, or even redesigning your entire workspace, Taskers can help streamline your workflow.",
      },
      {
        question: "What is included in office organization and setup services?",
        answer:
          "Services may include decluttering your workspace, sorting and filing documents, setting up office furniture, organizing supplies, and designing a more efficient layout for your office. Taskers can also assist with digital organization such as setting up systems for your files or managing email inboxes.",
      },
      {
        question: "What do office organization and setup services cost?",
        answer:
          "The cost depends on the scope of work and the time it takes to complete your task. You can browse different Tasker profiles based on their skills, experience, and rates to find a solution that fits your budget.",
      },
      {
        question:
          "Do office organization services include moving or rearranging furniture?",
        answer:
          "Yes, Taskers can assist with moving or rearranging office furniture as part of your office setup or organizational needs. Just be sure to specify this when describing your task.",
      },
    ],
  },
  {
    id: "office-interior-design-details",
    title: "Office Interior Design",
    banner: {
      heading: "Office Interior Design",
      description:
        "Hire a Tasker to help you design your workplace. Taskers will help turn your office dreams into reality.",
      buttonText: "Book now",
      backgroundImage:
        "https://i0.wp.com/homyhomee.com/wp-content/uploads/2020/02/Gorgeous-Modern-Office-Interior-Design-Ideas-You-Never-Seen-Before-21.jpg?ssl=1",
    },
    serviceInfo: {
      heading: "Office Interior Design Services",
      description: [
        "Whether you’re setting up a new office or redesigning an existing one, Taskers can assist with transforming your office into a creative, productive, and stylish space. With expert design skills, Taskers can help bring your vision to life, from choosing the right furniture to designing a functional layout and enhancing your office aesthetic.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What does an office interior designer do?",
        answer:
          "An office interior designer helps with designing and planning the layout of your office space. This includes selecting furniture, deciding on color schemes, arranging the space for optimal workflow, and ensuring the design aligns with your brand's image and functionality.",
      },
      {
        question: "How do I get started with office interior design?",
        answer:
          "To get started, simply describe your design needs, including any specific aesthetic or functional requirements. You can also share dimensions or layouts of your office if available. Based on this, Taskers will help guide you through the design process.",
      },
      {
        question: "Can Taskers help with both design and installation?",
        answer:
          "Yes, many Taskers can assist with both designing your office space and implementing the design. This includes sourcing furniture, arranging installation, and even decorating your office.",
      },
      {
        question: "What is the cost of hiring an office interior designer?",
        answer:
          "The cost varies based on the scope of the project, the design complexity, and the Tasker’s experience. Taskers’ rates can be browsed based on reviews and skill sets, giving you the flexibility to choose what fits your budget.",
      },
      {
        question: "Can I request a specific design style for my office?",
        answer:
          "Yes! Whether you're looking for modern, minimalist, industrial, or any other style, you can describe your preferred design style, and Taskers will work with you to bring it to life.",
      },
    ],
  },
  {
    id: "office-mounting-service-details",
    title: "Office Mounting Service",
    banner: {
      heading: "Office Mounting Service",
      description:
        "Need a whiteboard, TV or other office items mounted? Hire a Tasker to get it done.",
      buttonText: "Book now",
      backgroundImage:
        "https://tse1.mm.bing.net/th?id=OIP.Mc-JrTNvVx588oo9YdMpYgHaFj&pid=Api&P=0&h=180",
    },
    serviceInfo: {
      heading: "Mounting Office Items",
      description: [
        "Mounting TVs, whiteboards, and other office items can be tricky and time-consuming. Avoid the hassle by hiring a Tasker to take care of it for you. Taskers are experienced with various mounting tasks and will ensure everything is securely installed in no time.",
      ],
    },
    howItWorks: [
      {
        heading: "How it Works",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-1",
        alt: "Step 1",
        heading: "Describe Your Task",
        description:
          "Tell us what you need done, when and where it works for you.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-2",
        alt: "Step 2",
        heading: "Choose Your Tasker",
        description:
          "Browse trusted Taskers by skills, reviews, and price. Chat with them to confirm details.",
      },
      {
        image:
          "https://res.cloudinary.com/taskrabbit-com/image/upload/f_auto,q_auto/static/how-it-works-step-3",
        alt: "Step 3",
        heading: "Get It Done!",
        description:
          "Your Tasker arrives and gets the job done. Pay securely and leave a review, all through TaskRabbit.",
      },
    ],
    faq: [
      {
        question: "What types of items can be mounted?",
        answer:
          "Taskers can mount a variety of office items including TVs, whiteboards, shelving units, pictures, and even large monitors. If you have a specific item in mind, let your Tasker know and they will confirm if they can assist.",
      },
      {
        question: "Do I need to supply the mounting hardware?",
        answer:
          "It depends on the item being mounted. Some Taskers can bring their own tools and mounting hardware, but it’s a good idea to confirm with the Tasker beforehand to ensure everything is ready.",
      },
      {
        question: "How long does it take to mount an item?",
        answer:
          "The time required will depend on the size and complexity of the item being mounted. For example, mounting a TV may take longer than mounting a small whiteboard. Taskers can give you an estimated time based on your specific needs.",
      },
      {
        question: "What if my wall isn't suitable for mounting?",
        answer:
          "If your wall type (e.g., drywall, brick, etc.) isn't suitable for mounting, Taskers will assess the situation and recommend solutions, such as using anchors or finding alternative mounting options.",
      },
      {
        question: "Can Taskers mount heavy items?",
        answer:
          "Yes, Taskers are experienced in mounting both light and heavy items. For particularly heavy or complex installations, it’s important to describe the item and the wall type so Taskers can prepare appropriately.",
      },
    ],
  },
];

export default serviceDetailsData;
