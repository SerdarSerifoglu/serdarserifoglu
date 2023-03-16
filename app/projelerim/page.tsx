import PageTitle from "@/components/PageTitle/PageTitle";
import Projects from "@/components/Projects/Projects";
import SummaryProjects from "@/components/Projects/SummaryProjects";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PageTitle title="Projelerim" />

      <p>
        Burada listelenen projeler kendimi geliştirmek adına geliştirdiğim
        projelerdir. Burada listelenen projelerden herhangi bir para kazanmadım,
        yada bir kar amacı gütmedim. Projelerin kısa listesini aşağıdan
        görebilirsiniz. Proje detaylarını görmek için projenin üzerine
        tıklamanız yeterlidir. Tüm projelerimin kaynak kodlarına{" "}
        <Link href={"https://github.com/SerdarSerifoglu"} target="_blank">
          Github hesabım
        </Link>
        &nbsp;üzerinden erişebilirsiniz.
      </p>
      <br />
      <SummaryProjects />
      <br />
      <br />
      <h2>Projelerin Detayları</h2>
      <Projects />
    </>
  );
}
