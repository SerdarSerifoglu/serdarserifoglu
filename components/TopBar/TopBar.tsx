import Image from "next/image";
import styles from "./TopBar.module.css";
export default function TopBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>www.serdarserifoglu.com</div>
      <div className={styles.menuicon}>
        <Image
          src="/icons/grid-lines.svg"
          alt="Grip Icon"
          width={20}
          height={9}
          priority
        />
      </div>
    </div>
  );
}
