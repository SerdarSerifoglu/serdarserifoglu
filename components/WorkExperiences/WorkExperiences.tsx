import InfoCard from "../InfoCard/InfoCard";
import { workExperiences } from "@/utils/statics";

export default function WorkExperiences() {
  return (
    <>
      {workExperiences
        .sort((a, b) => a.queue - b.queue)
        .map((exp, index) => (
          <>
            <InfoCard
              elementId={`test-${index}`}
              key={index}
              date={exp.date}
              name={exp.companyName}
              title={exp.jobTitle}
              description={exp.description}
            />
            <br />
            <br />
          </>
        ))}
    </>
  );
}
