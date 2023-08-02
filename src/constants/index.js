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
    carrent,
    jobit,
    tripguide,
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
      title: "Responsive Web Design",
      icon: web,
    },
    {
      title: "React Component Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Management Systems",
      icon: creator,
    },
  ];
  
  const technologies = [
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
    {
      name: "react JS",
      icon: reactjs,
    },
    {
      name: "storybook JS",
      icon: storybook,
    },
    {
      name: "ignition",
      icon: ignition,
    },
    {
      name: "firebase",
      icon: firebase,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.tsx Developer",
      company_name: "Markforged",
      icon: markforged,
      iconBg: "#383E56",
      date: "June 2023 - Current",
      points: [
        "Developing and maintaining React components in Storybook.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Ignition Developer",
      company_name: "Markforged",
      icon: markforged,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - May 2023",
      points: [
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
      name: "",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "",
      description: "",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
    {
      name: "",
      description: "",
      tags: [
        {
          name: "",
          color: "blue-text-gradient",
        },
      ],
      image: "",
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };