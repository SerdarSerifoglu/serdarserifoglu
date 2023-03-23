import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu/Menu";
import styles from "./SideBar.module.css";

export default function SideBar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Link className={styles.link} href="/">
          <h2 className={styles.name}>Ömer Serdar ŞERİFOĞLU</h2>

          <div className={styles.jobtitle}>Software Developer</div>
        </Link>
        <br />
        <div className={styles.icons}>
          <Link
            href="https://www.linkedin.com/in/omer-serdar-serifoglu/"
            target="_blank"
          >
            <Image
              src="/icons/mdi_linkedin.svg"
              alt="Linkedin Icon"
              width={32}
              height={32}
              priority
            />
          </Link>
          <Link href="https://github.com/SerdarSerifoglu" target="_blank">
            <Image
              src="/icons/mdi_github.svg"
              alt="Github Icon"
              width={32}
              height={32}
              priority
            />
          </Link>
        </div>
      </div>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
}
