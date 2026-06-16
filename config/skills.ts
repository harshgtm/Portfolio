import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  { name: "React.js", rating: 5, icon: Icons.react },
  { name: "Node.js", rating: 5, icon: Icons.nodejs },
  { name: "Next.js", rating: 5, icon: Icons.nextjs },
  { name: "TypeScript", rating: 5, icon: Icons.typescript },
  { name: "JavaScript", rating: 5, icon: Icons.javascript },
  { name: "Python", rating: 5, icon: Icons.python },
  { name: "Express.js", rating: 5, icon: Icons.express },
  { name: "Redux", rating: 5, icon: Icons.redux },
  { name: "PostgreSQL", rating: 4, icon: Icons.postgresql },
  { name: "MongoDB", rating: 4, icon: Icons.mongodb },
  { name: "Redis", rating: 4, icon: Icons.redis },
  { name: "AWS", rating: 4, icon: Icons.amazonaws },
  { name: "Docker", rating: 4, icon: Icons.docker },
  { name: "Socket.io", rating: 4, icon: Icons.socketio },
  { name: "Material UI", rating: 4, icon: Icons.mui },
  { name: "Tailwind CSS", rating: 4, icon: Icons.tailwindcss },
  { name: "Jest", rating: 4, icon: Icons.jest },
  { name: "BullMQ", rating: 4, icon: Icons.bullmq },
  { name: "RabbitMQ", rating: 3, icon: Icons.rabbitmq },
  { name: "Git", rating: 5, icon: Icons.git },
  { name: "CI/CD", rating: 3, icon: Icons.gitBranch },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);