import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    cplus,
    csharp,
    reactjs,
    aws,
    firebase,
    ignition,
    python,
    git,
    storybook,
    markforged,
    allium,
    portfolio,
    wireframe,
    componentlibrary,

  } from '../assets';
  
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
      title: "Developing advanced industrial software solutions.",
      icon: web,
    },
    {
      title: "Designing user-friendly interfaces.",
      icon: mobile,
    },
    {
      title: "Building high-performance tools.",
      icon: backend,
    },
    {
      title: "Collaborating with diverse teams.",
      icon: creator,
    },
  ];
  
  const languages = [
    {
      name: "java",
      icon: java,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "javaScript",
      icon: javascript,
    },
    {
      name: "typeScript",
      icon: typescript,
    },
    {
      name: "c++",
      icon: cplus,
    },
    {
      name: "c#",
      icon: csharp,
    },
  ];

  const frameworks = [
    {
      name: "react JS",
      icon: reactjs,
    },
    {
      name: "storybook JS",
      icon: storybook,
    },
  ];

  const automation = [
    {
      name: "ignition",
      icon: ignition,
    },
  ];

  const cloud = [
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "aws",
      icon: aws,
    },
  ];

  const vc = [
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      id: 1,
      title: "Automations Engineer",
      company_name: "Allium Engineering",
      icon: allium,
      iconBg: "#383E56",
      date: "April 2024 - October 2024",
      points: [
        "Designed, developed, and delivered an end-to-end software application tailored to client specifications, enabling  automated processing of laser sensor data for operators.",
        "Engineered complex mathematical computations, data visualization, and an intuitive GUI using Python with Poetry.", 
        "Built robust C++ applications using CMake and vcpkg for seamless controller communication and real-time sensor  data acquisition.", 
        "Initially utilized pybind11 for integrating Python and C++ but transitioned to Qt for the final product to enhance  functionality and user experience.",
        "Implemented a scalable database system using PostgreSQL with TimescaleDB to handle high-frequency sensor  data efficiently."
      ],
    },
    {
      id: 2,
      title: "Front-End Developer",
      company_name: "Markforged",
      icon: markforged,
      iconBg: "#383E56",
      date: "June 2023 - November 2023",
      points: [
        "Designed and implemented user interfaces, ensuring a seamless and visually appealing experience for customers interacting with our cutting-edge 3D printing and additive manufacturing solutions.",
        "Spearheaded the development and maintenance of React components in Storybook, elevating the user interface  to new levels of functionality and visual appeal.",
        "Orchestrated seamless collaboration within cross-functional teams, fostering synergy among designers, product  managers, and fellow developers to consistently deliver high-quality products.",
        "Executed the implementation of responsive design strategies, guaranteeing a flawless user experience across  various devices, and ensured cross-browser compatibility to enhance accessibility and user engagement.",
        "Played a pivotal role in code reviews, offering constructive feedback to fellow developers, contributing to a culture  of continuous improvement and code excellence.",
      ],
    },
    {
      id: 3,
      title: "Software Developer",
      company_name: "Markforged",
      icon: markforged,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - May 2023",
      points: [
        "Designed, developed, and maintained innovative software solutions that drive the functionality and performance of our advanced 3D printing and additive manufacturing systems, contributing to the ongoing evolution of our industry-leading  technology.",
        "Built applications for manufacturing process control operations and data collection.",
        "Wrote queries with the application to add/update data in SQL database.",
        "Wrote Python scripts to modify the behavior of the application.",
        "Used responsive design practices to make the UI suitable for multiple devices.",
        "Wrote SQL to modify tables in the database, including creating and altering tables.",
        "Gained firsthand experience in software engineering, database management, and responsive design.",
        "Developed proficiency in SQL and Python, which enabled me to write complex queries and scripts to modify the application's behavior.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "This Website",
      description:
        "",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      sourceCodeLink: "https://github.com/LucidApparition/LucidApparition.github.io",
    },
    {
      name: "DrinkersApp",
      description: "This is a mobile app for ordering alcohol and having it be delivered to your location",
      tags: [
        {
          name: "Android Studio",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "blue-text-gradient"
        },
      ],
      image: wireframe,
      sourceCodeLink: "https://github.com/LucidApparition/DrinkersApp",
    },
    {
      name: "React Component Library",
      description: "This is my personal sandbox for creating and testing react components",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient"
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient"
        },
      ],
      image: componentlibrary,
      sourceCodeLink: "https://github.com/LucidApparition/react-typescript",
    },
  ];
  
  export { services, languages, frameworks, automation, cloud, vc, experiences, projects };