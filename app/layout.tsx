import "./globals.css";
import styles from "./layout.module.css";
import { Noto_Sans } from "next/font/google";
import TopBar from "@/components/TopBar/TopBar";
import SideBar from "@/components/SideBar/SideBar";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalytics";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-D7ZCWVNC1D" />
      <body className={`${styles.body} ${notoSans.className}`}>
        <div className={styles.topbar}>
          <TopBar />
        </div>
        <main className={styles.main}>{children}</main>
        <div className={styles.vline}></div>
        <div className={styles.sidemenu}>
          <SideBar />
        </div>
      </body>
    </html>
  );
}
