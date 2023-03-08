import Link from "next/link";
import styles from "./404.module.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function Custom404() {
  return (
    <>
      <div className={`${styles.wrapper} ${notoSans.className}`}>
        <h3>404 - Böyle bir sayfa bulunamadı!</h3>
        <Link className={styles.link} href="/">
          <p className={styles.text}>Ana sayfaya dönmek için tıklayınız</p>
          <p className={styles.text}>www.serdarserifoglu.com</p>
        </Link>
      </div>
    </>
  );
}
