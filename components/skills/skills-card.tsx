import { skillsInterface } from "@/config/skills";

interface SkillsCardProps {
  skills: skillsInterface[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
      {skills.map((skill, id) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-lg border bg-background p-4 flex flex-col items-center justify-center gap-3"
        >
          <skill.icon size={40} />
          <h3 className="text-sm font-medium text-center">{skill.name}</h3>
        </div>
      ))}
    </div>
  );
}