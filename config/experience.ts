import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  shortDescription?: string;
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "sourcefuse",
    position: "Software Engineer",
    company: "SourceFuse Technologies",
    location: "India",
    startDate: new Date("2025-02-01"),
    endDate: "Present",
    shortDescription:
      "Full Stack Engineer building scalable maritime and telecom platforms — from AWS Lambda-based vessel insight APIs and real-time operational dashboards to GenAI-powered business rule workflows for Comviva's BlueMarble product catalog.",
    description: [
      "Architected micro-frontend modules using Module Federation, driving scalable and independent development across multiple teams.",
      "Optimized backend services and implemented Redis-based caching, reducing API latency from ~300ms to ~70ms under high-load conditions.",
      "Led development of AI-driven workflows enabling admins to generate product offers using natural language inputs through guided UI interactions.",
      "Developed unit and integration test suites across frontend and backend services, reducing regressions and improving deployment stability.",
    ],
    achievements: [
      "Architected micro-frontend modules using Module Federation, driving scalable and independent development across multiple teams.",
      "Reduced API latency from ~300ms to ~70ms by optimizing backend services and implementing Redis-based caching under high-load conditions.",
      "Led development of AI-driven workflows enabling admins to generate product offers using natural language inputs through guided UI interactions.",
      "Developed unit and integration test suites across frontend and backend services, reducing regressions and improving deployment stability.",
    ],
    skills: [
      "Typescript",
      "React.js",
      "Node.js",
      "PostgreSQL",
      "Redux",
      "Redis",
      "AWS",
      "Material UI",
      "Jest",
    ],
    companyUrl: "https://www.sourcefuse.com",
    logo: "/experience/sourcefuse-logo.png",
  },
  {
    id: "gammastack",
    position: "Solution Engineer",
    company: "Gammastack",
    location: "India",
    startDate: new Date("2022-01-01"),
    endDate: new Date("2025-02-01"),
    shortDescription:
      "Full Stack Engineer delivering high-concurrency iGaming and e-commerce platforms — architecting Redis-backed event queues and real-time Socket.io systems for a crypto-integrated sportsbook, and building performant order management and admin tooling for a Sephora e-commerce platform.",
    description: [
      "Integrated scalable platform services across 3+ applications, actively used by 100k+ users and handling 100+ real-time events.",
      "Dockerized 6+ microservices with Docker Compose, eliminating environment-specific deployment failures across dev, staging, and production.",
      "Designed and scaled distributed job-processing infrastructure using BullMQ and Redis, improving async processing reliability under high concurrency.",
      "Owned end-to-end delivery of key platform features, collaborating with product, design, and backend teams through deployment and release.",
      "Applied scalable design patterns and modular architecture principles to improve maintainability and extensibility across services.",
    ],
    achievements: [
      "Integrated scalable platform services across 3+ applications, actively used by 100k+ users and handling 100+ real-time events.",
      "Dockerized 6+ microservices with Docker Compose, eliminating environment-specific deployment failures across dev, staging, and production.",
      "Designed and scaled distributed job-processing infrastructure using BullMQ and Redis, improving async processing reliability under high concurrency.",
      "Owned end-to-end delivery of key platform features, collaborating with product, design, and backend teams through deployment and release.",
      "Applied scalable design patterns and modular architecture principles to improve maintainability and extensibility across services.",
    ],
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Typescript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Socket.io",
      "Redux",
      "Python",
      "MongoDB",
      "Material UI",
      "Bootstrap",
    ],
    companyUrl: "https://www.gammastack.com",
    logo: "/experience/gammastack-logo.png",
  },
];
