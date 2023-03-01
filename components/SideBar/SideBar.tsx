import Image from "next/image";
import Menu from "../Menu/Menu";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2 className={styles.name}>Ömer Serdar ŞERİFOĞLU</h2>
        <div className={styles.jobtitle}>Software Developer</div>
        <br />
        <div className={styles.icons}>
          <Image
            src="/icons/mdi_linkedin.svg"
            alt="Grip Icon"
            width={32}
            height={32}
            priority
          />
          <Image
            src="/icons/mdi_github.svg"
            alt="Grip Icon"
            width={32}
            height={32}
            priority
          />
        </div>
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
}
