export const projects = [
    {
      title: 'Next JS Portfolio Website',
      description: "I've developed my portfolio which you are looking with the help of Next js which is the best react js framework in the market right now. I've learned so many stuffs including the state management and many more. Everything which is done in this project is done using the best practises that i've learned so far by developing multiple projects.",
      image: '/images/portfoliowebsite.png',
      tags: ['Next JS', 'Tailwind CSS', 'Javascript'],
      status: 'Completed',
      id: 0,
    },
    {
      title: 'Next JS E-Commerce Website Client Side',
      description: "Worked on an e-commerce website developed using Next JS Framework and MYSQL as the database. I've used typescript to work on this project so that i could get a basic idea of how typescript work, and what are the differences in Javascript and Typescript. and I've used tailwind css to design the entire website.",
      image: '/images/ecommerce_client_side.png',
      tags: ['Next JS', 'Tailwind CSS', 'Typescript', 'MYSQL'],
      status: 'In Progress',
      id: 1,
    },
    {
      title: 'Next JS E-Commerce Admin Panel',
      description: "I've developed an admin panel for the e-commerce project i've been working on. this admin panel tought me how to seamlessly communicate with the e-commerce client side with just an api created using this admin panel. i've had the ability to learn react hook form, zod, cloudinary and an ORM named prisma",
      image: '/images/ecommerce_admin_panel.png',
      tags: ['Next JS', 'Typescript', 'MYSQL', 'Prisma', 'Cloudinary'],
      status: 'In Progress',
      id: 2,
    },
  ];


  export const Aboutme = [
    {
      id: 1,
      description: 'I am a passionate software engineer with two and half years of experience. With expertise in a wide range of technologies, including React, React Native, PHP, Node.js, HTML, Bootstrap, MySQL, jQuery, JavaScript, MongoDB and Tailwind CSS, I am dedicated to delivering exceptional web and mobile applications.'
    },
    {
      id: 2,
      description: 'Throughout my career, I have developed a deep understanding of modern software development practices and possess a strong problem-solving mindset. My proficiency in React allows me to create dynamic and interactive user interfaces, while React Native enables me to build cross-platform mobile applications that run smoothly on both iOS and Android devices.'
    }
  ];

  export const NavLinks = [
    { key: 'home', text: 'Home'},
    { key: 'aboutme', text: 'About Me'},
    { key: 'projects', text: 'Projects'},
    { key: 'contact', text: 'Contact'},
  ];

  export const ContactDetails = [
    {key: 'location', type: 'Location', details: 'Station Road Maggona Kaluthara Sri Lanka', image: '/location.svg'},
    {key: 'email', type: 'Mail', details: 'anochdissanayake@gmail.com', image: '/email.svg'}
  ];