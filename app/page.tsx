import styles from "./page.module.css";
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
