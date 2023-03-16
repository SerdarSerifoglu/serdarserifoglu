"use client";
import styles from "./InfoCard.module.css";

export default function SummaryInfoCard(props: {
  elementId: string;
  date: string;
  name: string;
  title: string;
}) {
  const handleClickScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className={styles["summary-info-wrapper"]}
        onClick={() => handleClickScroll(props.elementId)}
      >
        <div className={styles.title}>
          <span className={styles.name}>{props.name}</span> /{" "}
          <span className={styles.date}>{props.date}</span>
        </div>
        <div className={styles.title}>{props.title}</div>
      </div>
    </>
  );
}
