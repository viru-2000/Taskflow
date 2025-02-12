import React from "react";

const serviceData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbyeGgD2ugWcrB0crzT9b1Q69yfEL0xQ7AJA&s",
    alt: "Furniture Tasks",
    title: "Featured Tasks",
    description: "Let Taskers help tackle your to-do list.",
    tasks: [
      { name: "Furniture Assembly", taskId: "furniture-assembly-details" },
      { name: "Home Repairs", taskId: "home-repairs-details" },
      { name: "Help Moving", taskId: "help-moving-details" },
      { name: "Heavy Lifting", taskId: "heavy-lifting-details" },
      { name: "Home Cleaning", taskId: "home-cleaning-details" },
      { name: "Painting", taskId: "painting-details" },
    ],
  },
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.3l0lX853SZLBsG7xbhChFwHaD8&pid=Api&P=0&h=180",
    alt: "Handyman",
    title: "Handyman",
    description: "Hire a Tasker for help around the house.",
    tasks: [
      {
        name: "Door, Cabinet, & Furniture Repair",
        taskId: "door-repair-details",
      },
      {
        name: "Appliance Installation & Repairs",
        taskId: "appliance-repair-details",
      },
      { name: "Furniture Assembly", taskId: "furniture-assembly-details" },
      { name: "TV Mounting", taskId: "tv-mounting-details" },
      { name: "Electrical Help", taskId: "electrical-help-details" },
      { name: "Plumbing", taskId: "plumbing-details" },
      { name: "Painting", taskId: "painting-details" },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOftdvaqyZgIkQMsU7D2TLwqjMaTQPyQq1kw&s",
    alt: "Moving Services",
    title: "Moving Services",
    description:
      "Let One-Click handle everything from lifting to unpacking and organizing your move!.",
    tasks: [
      { name: "Help Moving", taskId: "help-moving-details" },
      {
        name: "Truck Assisted Help Moving",
        taskId: "truck-assisted-moving-details",
      },
      { name: "Packing Services & Help", taskId: "packing-services-details" },
      { name: "Heavy Lifting", taskId: "heavy-lifting-details" },
      { name: "Local Movers", taskId: "local-movers-details" },
      {
        name: "Full Service Help Moving",
        taskId: "full-service-moving-details",
      },
    ],
  },
  {
    image:
      "https://tse1.mm.bing.net/th?id=OIP.25zVLbefRolAj2DUFm-FeAHaDt&pid=Api&P=0&h=180",
    alt: "Furniture Tasks",
    title: "Furniture Assembly",
    description: "No more stress over furniture assembly.",
    tasks: [
      { name: "Furniture Assembly", taskId: "furniture-assembly-details" },
      { name: "Desk Assembly", taskId: "desk-assembly-details" },
      { name: "Dresser Assembly", taskId: "dresser-assembly-details" },
      { name: "Bed Assembly", taskId: "bed-assembly-details" },
      { name: "Bookshelf Assembly", taskId: "bookshelf-assembly-details" },
      { name: "Wardrobe Assembly", taskId: "wardrobe-assembly-details" },
    ],
  },
  {
    image:
      "https://www.dirtblastercleaningservices.com/wp-content/uploads/2021/05/Bungalow-Cleaning-Services-Pune.jpg",
    alt: "Cleaning",
    title: "Cleaning",
    description:
      "Get your home spotless with One-Click, from floor to ceiling cleaning!.",
    tasks: [
      {
        name: "House Cleaning Services",
        taskId: "house-cleaning-services-details",
      },
      { name: "Deep Cleaning", taskId: "deep-cleaning-details" },
      {
        name: "Disinfecting Services",
        taskId: "disinfecting-services-details",
      },
      {
        name: "One Time Cleaning Services",
        taskId: "one-time-cleaning-services-details",
      },
      { name: "Laundry Help", taskId: "laundry-help-details" },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdjrc6ODt7N_brAIc_LHemTb8qLHM6ZJFHxqUGNryO2hiKrapjZRlqI38xzR-Vrlpjvo&usqp=CAU",
    alt: "Holiday Help",
    title: "Holiday Help",
    description:
      "Make your holidays merry and bright with One-Click Holiday services at your help!",
    tasks: [
      {
        name: "Gift Wrapping Services",
        taskId: "gift-wrapping-services-details",
      },
      { name: "Holiday Decorating", taskId: "holiday-decorating-details" },
      { name: "Party Cleaning", taskId: "party-cleaning-details" },
    ],
  },
  {
    image:
      "https://studentprojectguide.com/wp-content/uploads/2017/12/Online-Personal-Assistant.png",
    alt: "Personal Assistant",
    title: "Personal Assistant",
    description:
      "Need a personal assistant? Hire a Tasker and get help whenever you need, hourly or ongoing.",
    tasks: [
      { name: "Personal Assistant", taskId: "personal-assistant-details" },
      { name: "Organization", taskId: "organization-details" },
      { name: "Organize Home", taskId: "organize-home-details" },
      {
        name: "Interior Design Service",
        taskId: "interior-design-service-details",
      },
      { name: "Virtual Assistant", taskId: "virtual-assistant-details" },
      { name: "Dog Walking", taskId: "dog-walking-details" },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtk1kW0kcxD2ahfmtF5dyzl48F517ukCZpYQ&s",
    alt: "Virtual Tasks",
    title: "Virtual Tasks",
    description: "Virtual assistance, organization, research, & more.",
    tasks: [
      { name: "Virtual Assistant", taskId: "virtual-assistant-details" },
      { name: "Organization", taskId: "organization-details" },
      { name: "Data Entry", taskId: "data-entry-details" },
      { name: "Computer Help", taskId: "computer-help-details" },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpWK2WhmJsLuKKefjv7YnjiCtsPOVOEGxbQ&s",
    alt: "Office Services",
    title: "Office Services",
    description:
      "Hire a Tasker to assist with office tasks and keep everything running smoothly!",
    tasks: [
      { name: "Office Cleaning", taskId: "office-cleaning-details" },
      { name: "Office Movers", taskId: "office-movers-details" },
      {
        name: "Office Supply & Snack Delivery",
        taskId: "office-supply-snack-delivery-details",
      },
      {
        name: "Office Setup & Organization",
        taskId: "office-setup-organization-details",
      },
      {
        name: "Office Interior Design",
        taskId: "office-interior-design-details",
      },
      {
        name: "Office Mounting Service",
        taskId: "office-mounting-service-details",
      },
    ],
  },
];

export default serviceData;
