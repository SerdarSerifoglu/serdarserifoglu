"use client";
import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";

var menuItems = [
  {
    name: "Hakkımda",
    route: "/hakkimda",
  },
  {
    name: "İş Deneyimlerim",
    route: "/is-deneyimlerim",
  },
  {
    name: "Projelerim",
    route: "/projelerim",
  },
  // {
  //   name: "Okuduğum Kitaplar",
  //   route: "/xxx",
  // },
  {
    name: "Yazı ve Notlarım",
    route: "/yazi-ve-notlarim",
  },
];

export default function Menu() {
  const pathname = usePathname();

  return (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          className={`${styles.link} ${
            pathname === item.route ? styles.active : ""
          }`}
          href={item.route}
        >
          <div className={styles["menu-item"]}>
            <span className={styles["menu-item__arrow"]}></span>

            <span className={styles["menu-item__value"]}>
              &nbsp;&nbsp;{item.name}
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}
