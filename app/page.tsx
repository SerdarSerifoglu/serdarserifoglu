import styles from "./page.module.css";
import { metadataStandartKeywords } from "@/utils/statics";

export default function Home() {
  return (
    <>
      <div className={styles["main-content"]}>
        <q>
          <i>Bildiğiniz her şeyi mutlaka bir başkasından öğrenmişsinizdir.</i>
        </q>
        <br />
        <p className={styles.author}>
          Joshua Wooden{" "}
          <span className={styles.info}>
            {`(Efsane basketbol antrenörü John Wooden'ın babası)`}
          </span>
        </p>
      </div>
    </>
  );
}

export const metadata = {
  title: "Ömer Serdar Şerifoğlu'nun Kişisel Web Sitesi",
  description:
    "Ömer Serdar Serifoğlu'nun hayatı ve kariyeri hakkında detaylı bilgi edinin. Yazılım sektöründe neler yaptığına, hangi alanlarda çalıştığına dair bilgiler edinin.",
  keywords: [...metadataStandartKeywords],
  authors: [{ name: "Ömer Serdar Şerifoğlu" }],
};
