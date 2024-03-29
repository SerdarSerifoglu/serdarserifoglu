import styles from "./InfoCard.module.css";
import parse from "html-react-parser";

export default function InfoCard(props: {
  elementId: string;
  date: string;
  name: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <div id={props.elementId}>
        <div className={styles.title}>
          <span className={styles.name}>{props.name}</span> /{" "}
          <span className={styles.date}>{props.date}</span>
        </div>
        <div className={styles.title}>{props.title}</div>
        <div className={styles.description}>{parse(props.description)}</div>
      </div>
    </>
  );
}
