import "./globals.css";
import styles from "./layout.module.css";
import { Noto_Sans } from "next/font/google";
import TopBar from "@/components/TopBar/TopBar";
import SideBar from "@/components/SideBar/SideBar";
import Script from "next/script";
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
      <>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D7ZCWVNC1D"
        ></Script>
        <Script
          id="google-analytic"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-D7ZCWVNC1D');`,
          }}
        ></Script>
      </>

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
