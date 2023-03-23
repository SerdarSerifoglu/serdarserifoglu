import PageTitle from "@/components/PageTitle/PageTitle";
import WorkExperiences from "@/components/WorkExperiences/WorkExperiences";
import { metadataStandartKeywords } from "@/utils/statics";

export default function Page() {
  return (
    <>
      <PageTitle title="İş Deneyimlerim" />
      <br />
      <WorkExperiences />
    </>
  );
}

export const metadata = {
  title: "İş Deneyimlerim | Ömer Serdar Şerifoğlu",
  description:
    "Ömer Serdar Serifoğlu'nun hayatı ve kariyeri hakkında detaylı bilgi edinin. İş deneyimlerimin yazılı olduğu sayfa.",
  authors: [{ name: "Ömer Serdar Şerifoğlu" }],
  keywords: [...metadataStandartKeywords],
};
