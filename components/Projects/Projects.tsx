import InfoCard from "../InfoCard/InfoCard";
import { myProjects } from "@/utils/statics.js";

export default function Projects() {
  return (
    <>
      {myProjects
        .sort((a, b) => a.queue - b.queue)
        .map((project, index) => (
          <>
            <InfoCard
              elementId={`test-${index}`}
              key={index}
              date={project.startDate}
              name={project.projectName}
              title={project.projectType}
              description={project.description}
            />
            <br />
            <br />
          </>
        ))}
    </>
  );
}
