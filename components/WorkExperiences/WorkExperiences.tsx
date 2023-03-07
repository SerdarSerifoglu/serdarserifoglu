import InfoCard from "../InfoCard/InfoCard";
import { workExperiences } from "@/utils/statics";

export default function WorkExperiences() {
  console.log("WorkExperiences_RUN");
  return (
    <>
      {workExperiences
        .sort((a, b) => a.queue - b.queue)
        .map((exp, index) => (
          <>
            <InfoCard
              key={index}
              date={exp.date}
              companyName={exp.companyName}
              jobTitle={exp.jobTitle}
              description={exp.description}
            />
            <br />
            <br />
          </>
        ))}
    </>
  ); //<>WORK EXPERİENCES</>;
}
