import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "fleet-management",
    companyName: "Fleet Management Limited",
    type: "Professional",
    category: ["Software Developer", "Full Stack", "Web Dev"],
    shortDescription:
      "Role-based operational dashboards for maritime fleet managers, featuring real-time vessel insights, contract lifecycle tracking, and micro-frontend architecture.",
    websiteLink: "https://www.fleetship.com/",
    techStack: [
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Material UI",
      "Sass",
      "Jest",
      "AWS",
      "Typescript",
    ],
    startDate: new Date("2025-08-01"),
    endDate: new Date("2026-01-01"),
    companyLogoImg: "/projects/fleet-management/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Fleet Management Limited (PARIS 2.0) is a maritime operations platform built to serve role-based user groups including Fleet Personnel (POD) Managers and Technical/Vessel Managers. The goal was to deliver personalized dashboards that surface the most relevant operational information for each user role.",
        "I contributed to building AWS Lambda-based APIs for vessel insights and contract lifecycle tracking, developed real-time dashboards for large-scale metric visualization, and built reusable shared components as part of a micro-frontend architecture.",
      ],
      bullets: [
        "Built AWS Lambda-based APIs for vessel insights and contract lifecycle tracking, enabling reliable data processing for maritime operations.",
        "Developed real-time operational dashboards for large-scale metric visualization and analytics.",
        "Contributed to a micro-frontend architecture by building reusable shared components across multiple applications.",
        "Built high-performance data tables with infinite scrolling for efficient handling of large-scale datasets.",
        "Created detailed technical documentation and workflow guides in Confluence to support knowledge sharing and cross-team collaboration.",
      ],
    },
  },
  {
    id: "comviva-bluemarble",
    companyName: "Comviva BlueMarble",
    type: "Professional",
    category: ["Software Developer", "Full Stack", "Web Dev"],
    shortDescription:
      "GenAI-powered business rule creation for Comviva's telecom product catalog platform, enabling users to generate compliant rules from natural language inputs.",
    websiteLink:
      "https://www.comviva.com/products-solutions/digitech/bluemarble-crm/",
    techStack: ["React.js", "Redux", "Material UI", "Sass", "Jest", "Typescript"],
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-07-01"),
    companyLogoImg: "/projects/comviva-bluemarble/logo.png",
    descriptionDetails: {
      paragraphs: [
        "BlueMarble is Comviva's platform for managing telecom product catalogs and business rules. We enhanced the rule-creation process using GenAI by enabling users to generate BlueMarble-compliant business rules from natural language inputs, reducing manual effort, domain dependency, and rule creation time.",
        "My work focused on building AI-driven UI workflows, handling async states during AI processing, and ensuring reliability across failure scenarios such as timeouts and invalid responses.",
      ],
      bullets: [
        "Built AI-driven workflows for generating business rules from natural language inputs, improving usability through responsive UI interactions.",
        "Implemented micro-interactions and async loading states to improve user experience during AI processing workflows.",
        "Handled failure scenarios including timeouts and invalid responses to improve workflow reliability.",
        "Collaborated with clients and cross-functional teams to gather requirements, refine workflows, and deliver features in Agile development environments.",
      ],
    },
  },
  {
    id: "yeet",
    companyName: "Yeet",
    type: "Professional",
    category: ["Solution Engineer", "Full Stack", "Web Dev"],
    shortDescription:
      "Full-scale iGaming platform supporting real-time casino games, sports betting, and crypto transactions — engineered for high concurrency, real-time updates, and secure financial operations.",
    websiteLink: "https://www.yeet.com",
    techStack: [
      "React.js",
      "Node.js",
      "Next.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Redux",
      "Socket.io",
      "Material UI",
      "Bootstrap",
      "Sass",
      "Typescript",
    ],
    startDate: new Date("2022-12-01"),
    endDate: new Date("2025-01-01"),
    companyLogoImg: "/projects/yeet/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Yeet is a full-scale iGaming platform supporting both casino and sportsbook functionalities. It enables users to play real-time casino games such as blackjack and participate in sports betting across multiple sports. The platform also integrates crypto-based transactions for deposits, withdrawals, and trading.",
        "I was responsible for redesigning the event-processing architecture, implementing real-time updates with Socket.io, building the affiliate and reward system, and improving frontend performance and SEO metrics.",
      ],
      bullets: [
        "Redesigned event-processing architecture from synchronous DB writes to Redis-backed queues, eliminating API bottlenecks during peak traffic.",
        "Implemented real-time updates using Socket.io with Redis adapter to enhance scalability.",
        "Developed affiliate program and tiered reward system, resulting in a 30% increase in user engagement and 25% improvement in user retention.",
        "Improved SEO performance metrics (LCP, FCP, CLS) through frontend optimization.",
        "Automated back-office reporting workflows using cron jobs, enabling timely insights into user activity, transaction trends, and revenue trends.",
        "Mentored junior developers, conducted code reviews, and helped improve overall engineering productivity and development standards.",
      ],
    },
  },
  {
    id: "sephora",
    companyName: "Sephora",
    type: "Professional",
    category: ["Solution Engineer", "Full Stack", "Web Dev"],
    shortDescription:
      "Full-stack e-commerce platform for beauty and skincare products with dynamic order management, image optimization, and a comprehensive back-office admin panel.",
    websiteLink: "https://www.sephora.com",
    techStack: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Redux", "MongoDB", "Sass", "Typescript"],
    startDate: new Date("2022-01-01"),
    endDate: new Date("2022-12-01"),
    companyLogoImg: "/projects/sephora/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "This e-commerce platform offers a seamless shopping experience for beauty and skincare products. Users can browse, filter, and purchase cosmetics, skincare, and fragrance items with personalized recommendations and secure payment options.",
        "I worked across the full stack — implementing image optimization on the frontend, building Express/Node.js APIs with MongoDB, developing a dynamic order management system, and building admin-side functionalities for managing products, inventory, and users.",
      ],
      bullets: [
        "Implemented image optimization techniques including lazy loading, responsive images, and image compression, resulting in a 20% increase in page load speed.",
        "Developed APIs for the back office using Express.js and Node.js with MongoDB as the database.",
        "Developed a dynamic order management system with multi-criteria filtering, server-side pagination, and optimistic UI updates.",
        "Built admin-side functionalities for managing products, inventory, users, and customer orders.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
