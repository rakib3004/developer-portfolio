
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DevOPs",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Writer",
      icon: creator,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "DevOps Engineer",
      company_name: "The Terminals",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Proficient DevOps Engineer specializing in Docker, Docker Swarm, and Terraform for efficient containerization and AWS infrastructure management.",
        "Skilled in orchestrating EC2 instances, EBS volumes, and load balancers while optimizing performance through CloudFront and Autoscaling.",
        "Adept at utilizing AWS Lambda for seamless serverless computing, ensuring scalable application deployments.",
        "Demonstrated expertise in AWS services, complemented by a strong focus on streamlined DevOps practices.",
     ],
    },
    {
      title: "Trainee Software Engineer",
      company_name: "Cefalo Bangladesh Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
       "Skillfully develop dynamic web applications using React.js, Node.js, and JavaScript.",
       "Collaborate effectively with cross-functional teams to ensure responsive designs and seamless cross-browser compatibility.",
       "Contribute actively to code reviews, leveraging Figma and Jira for streamlined design and project management.",
       "Expertly deploy frontends on Netlify, backends on Render, showcasing proficiency in MySQL and Sequelize for robust database management."
      ],
    },
    {
      title: "Vue JS Developer Trainee",
      company_name: "Innova Tech",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jul 2021 - Feb 2022",
      points: [
        "Strong foundation in HTTP fundamentals, REST API concepts, and proficient knowledge of status codes and CORS for robust web application development.",
        "Expertise in JavaScript and ES6, with the ability to leverage these skills for creating dynamic and interactive user experiences.",
        "Familiarity with Vue.js basics, demonstrated through the development of a functional to-do app, showcasing hands-on experience in front-end frameworks.",
        "Well-versed in web protocols, emphasizing a holistic understanding of web technologies for effective and efficient development practices.",
      ],
    },
    {
      title: "Cheif Executive Officer",
      company_name: "Tarafder Informatics Ltd.",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Dec 2019 - Present",
      points: [
        "Extensive experience in UI/UX design, adeptly contributing to Research and Development initiatives for innovative user interfaces.",
        "Proficient in crafting comprehensive SRS documentation and leveraging React.js and Express.js to create dynamic and responsive web applications.",
        "Skilled in deploying AWS services, managing Redis, and optimizing software with Docker, showcasing prowess in cloud computing and containerization.",
        "Well-versed in networking, databases, operating systems, and machine learning, complemented by strong project management acumen in computer science and software engineering realms.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
      "DevOps virtuoso, transforming deployments with Docker and AWS mastery, while solving intricate networking and database challenges.",      name: "Sara Lee",
      name: "Mr. X",
      designation: "HR",
      company: "Renova IT",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
      "UX/UI maven, elevating experiences through React.js and Express.js brilliance, complemented by meticulous SRS documentation and stellar project management.",
      name: "Mr. Y",
      designation: "Web Developer",
      company: "Metasoft",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
      "Tech polymath, seamlessly navigating machine learning and software engineering realms, adeptly leveraging Redis, AWS, and a visionary mindset.",
      name: "Mr. Z",
      designation: "Tech Lead",
      company: "Skill Station 19",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Bloging Platform",
      description:
        "Empowering users to share thoughts and ideas through an intuitive and feature-rich online platform.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Campus Canteen",
      description:
        "Enhancing campus dining experiences by offering a seamless food delivery system tailored for students and staff.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nest-js",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Catering Express",
      description:
        "Catering Express: Streamlining catering operations with a comprehensive management system for efficient event planning and execution.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "sprint-boot",
          color: "green-text-gradient",
        },
        {
          name: "redis",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };