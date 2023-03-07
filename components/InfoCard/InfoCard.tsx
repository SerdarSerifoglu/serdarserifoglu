import styles from "./InfoCard.module.css";
import parse from "html-react-parser";

export default function InfoCard(props: {
  date: string;
  companyName: string;
  jobTitle: string;
  description: string;
}) {
  return (
    <>
      <section>
        <div className={styles.title}>
          <span className={styles["company-name"]}>{props.companyName}</span> /{" "}
          <span className={styles.date}>{props.date}</span>
        </div>
        <div className={styles.title}>{props.jobTitle}</div>
        <div className={styles.description}>{parse(props.description)}</div>
      </section>
    </>
  );
}
