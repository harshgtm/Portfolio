import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

export default function ProjectsPage() {
  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <div className={cn("w-full")}>
        {/* Mobile: Dropdown */}
        <div className="md:hidden mb-4">
         <div className="w-full min-w-[200px] flex flex-col gap-6">
            {Projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </div>
        {/* Desktop: Tabs */}
        <div className="hidden md:block">
          <div className="w-full">
            <div className="grid w-full grid-cols-3 gap-6">
              {Projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
