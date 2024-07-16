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
  prism_logo,
  bel_logo,
  sail,
  stock,
  aisaas,
  hackhub,
  paradox,
  paradox22,
  java,
 
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
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Ui/Ux Designer",
    icon: backend,
  },
  {
    title: "Ros Developer",
    icon: creator,
  }
  
];

const technologies = [
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "java",
    icon: java,
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
    title: "AI Research Intern",
    company_name: "Bharat Electronics Limited, Bangalore",
    icon: bel_logo,
    iconBg: "#E6DEDD",
    date: "September 2023 - October 2023",
    points: [
      "Implemented UNet CNN for audio denoising using TensorFlow, achieving 15\% noise reduction",
      "Learned UNet model optimization, TensorFlow proficiency, and Librosa for audio processing, resulting in a 20\% reduction in processing time and a 10\% increase in accuracy",
      "Emphasized best practices in version control using Git, ensuring efficient collaboration and code management",
      "Utilized Docker for containerization, streamlining deployment, and ensuring consistency across different environments",
      "Collaborated with a team to design, develop, and optimize the audio denoising pipeline, contributing to the project’s overall success.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "SAIL-BSP",
    icon: sail,
    iconBg: "#E6DEDD",
    date: "November 2023 - December 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Developed website designs for home and department websites on the intranet, enhancing the overall user experience and streamlining departmental communication processes.",
      "created creative intranet website design templates by utilizing reactjs and Bootstrap, Figma, and other tools to improve departmental collaboration and user experience",
    ],
  },
  {
    title: "Prism Project Intern",
    company_name: "Samsung R&D Institute Bangalore",
    icon: prism_logo,
    iconBg: "#E6DEDD",
    date: "July 2023 - Jan 2024",
    points: [
      "Developed a computational framework for automatic room detection and algorithmic corner recognition in AR systems on Android devices, achieving approximately 95% accuracy",
      "Leveraged Unity AR Foundation’s technology to map 5+ rooms and detect corners in real-time, integrating digital content into physical environments",
      "Gained hands-on experience in core technology domains such as computer vision, spatial mapping, and AR/VR development",
      "Reduced manual intervention in AR setup by 85%, enhancing user experience and deployment efficiency",
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
    name: "Stock Analysis Project",
    description:
      "This project aims to predict the stock price of Apple Inc. (AAPL) using data from Yahoo Finance via the Rapid API. The prediction models are based on SARIMA (Seasonal Autoregressive Integrated Moving Average) and LSTM (Long Short-Term Memory) implemented using TensorFlow. The project also utilizes Grafana for data visualization, PostgreSQL for data storage, FastAPI for REST endpoints, and Docker for containerization.",
    tags: [
      {
        name: "PostgreSQL",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Adi-404/stock-analysis-project",
  },
  {
    name: "AI SaaS Platform",
    description:
      "Developed a SaaS AI platform using Next.js 13, React, Tailwind, Prisma, and Stripe. The project involved setting up the application architecture, designing responsive UI with Tailwind, integrating payment processing with Stripe, and managing data with Prisma. The platform allows users to access AI-driven services seamlessly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
    ],
    image: aisaas,
    source_code_link: "https://github.com/",
  },
  {
    name: "movie-recommender-system",
    description:
      "A comprehensive movie recommending platform that allows users to get movie suggestions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "numpy",
        color: "green-text-gradient",
      },
      {
        name: "pandas",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
];

const design = [
  {
    name: "Hackhub'22",
    description:
      "",
    tags: [
      {
        name: "UI",
        color: "blue-text-gradient",
      },
      {
        name: "Website",
        color: "green-text-gradient",
      },
      {
        name: "Hackathon",
        color: "pink-text-gradient",
      },
    ],
    image: hackhub,
    source_code_link: "https://www.figma.com/design/EitOtJGrG0pyM2xPlgF7tc/HackHub-2022-(mine)?node-id=228-2&t=q1LHf4OE2IfkG7tL-1",
  },
  {
    name: "Paradox'23",
    description:
      "",
    tags: [
      {
        name: "UI",
        color: "blue-text-gradient",
      },
      {
        name: "website",
        color: "green-text-gradient",
      },
      {
        name: "Game",
        color: "pink-text-gradient",
      },
      {
        name: "Cryptic-Hunt",
        color: "golden-text-gradient",
      },

    ],
    image: paradox,
    source_code_link: "https://github.com/",
  },
  {
    name: "paradox22",
    description:
      "",
    tags: [
      {
        name: "UI",
        color: "blue-text-gradient",
      },
      {
        name: "Website",
        color: "green-text-gradient",
      },
      {
        name: "Game",
        color: "pink-text-gradient",
      },

      {
        name: "Cryptic-Hunt",
        color: "golden-text-gradient",
      },

    ],
    image: paradox22,
    source_code_link: "https://www.figma.com/design/Z3HVSQ18AqlITZu9kjvBZ9/Paradox-(Copy)?node-id=112-8678&t=0zt0xeQX93HWcr53-1",
  },
];

export { services, technologies, experiences, testimonials, projects, design };
