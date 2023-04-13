import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    Quantumware,
  devineai,
  arltech,
  rec,
  hotel,
  arl,
    threejs,
    meblue1,
    Bootstrap,
    PHP,
  Python,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Single Page Website",
      icon: web,
      price: "4,999",
    },
    {
      title: "6 Page Website",
      icon: mobile,
      price: "6,999",
    },
    {
      title: "Ecommerce Website",
      icon: backend,
      price: "12,999",
    },
    {
      title: "Application Development",
      icon: creator,
      price: "39,999",
    },
  ];

  const Aboutme = [
    {
      title: "Subhashree sahoo",
      icon: meblue1,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Bootstrap",
      icon: Bootstrap,
    },
    {
      name: "PHP",
      icon: PHP,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React Native & React.js Developer",
      company_name: "Arl-Tech",
      icon: arltech,
      iconBg: "#383E56",
      date: "August 2022 - April 2023",
      points: [
        "As a front-end developer, I have designed and developed a website, customer app, supplier app, and transporter app with clean and intuitive interfaces, ensuring a smooth user experience.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Utilized technologies - ReactJS, React Native.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Devine-AI",
      icon: devineai,
      iconBg: "#E6DEDD",
      date: "June 2021 - August 2022",
      points: [
        "Developed a hotel management system, allowing hotel staff to manage room reservations, guest information, and payment transactions.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Collaborate with other development teams.",
        "Lang - HTML,CSS, Bootstrap,JS",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Quantumware Technical Services",
      icon: Quantumware,
      iconBg: "#383E56",
      date: "Jan 2021 - June 2022",
      points: [
        "Successfully designed and developed a school project management system for Scholars School, Berhampur and a responsive and dynamic college website for REC College, bbsr.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Lang - HTML,CSS, Bootstrap,JS, PHP",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Application",
      description:
        "The app's main purpose is to help users find and order construction materials quickly and easily. This can save time and money by streamlining the purchasing process and reducing the need for multiple trips to different stores.",
      tags: [
        {
          name: "react native",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
      ],
      image: arl,
      source_code_link: "https://play.google.com/store/apps/details?id=com.alrtech.alrtech",
    },
    {
      name: "Hotel Website",
      description:
        "The Petal Regency Hotel website is a digital platform that provides information about the hotel, its amenities. The website features a clean and modern design with a prominent header image showcasing the hotel's exterior inviting visitors to book a stay.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: hotel,
      source_code_link: "http://hotel.petalregency.com/",
    },
    {
      name: "College Website",
      description:
        "Overall, REC, Bhubaneswar college website serves as a central hub for the college community to access important information, stay up-to-date on news and events, and connect with various resources and services.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
      ],
      image: rec,
      source_code_link: "http://www.rec.ac.in/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, Aboutme };