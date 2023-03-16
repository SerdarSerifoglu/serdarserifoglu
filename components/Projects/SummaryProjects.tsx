import InfoCard from "../InfoCard/InfoCard";
import SummaryInfoCard from "../InfoCard/SummaryInfoCard";
import { myProjects } from "@/utils/statics.js";

export default function SummaryProjects() {
  return (
    <>
      {myProjects
        .sort((a, b) => a.queue - b.queue)
        .map((project, index) => (
          <>
            <SummaryInfoCard
              elementId={`test-${index}`}
              key={index}
              date={project.startDate}
              name={project.projectName}
              title={project.projectType}
            />
            <br />
          </>
        ))}
    </>
  );
}
