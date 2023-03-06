"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu/Menu";
import styles from "./TopBar.module.css";

export default function TopBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function clickMenuIcon() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  function clickMenuArea() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  const customStyleForMenu = { display: menuOpen ? "block" : "none" };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <Link href="/"> www.serdarserifoglu.com</Link>
        </div>
        <div className={styles.menuicon} onClick={clickMenuIcon}>
          <Image
            src="/icons/grid-lines.svg"
            alt="Grip Icon"
            width={20}
            height={9}
            priority
          />
        </div>
      </div>
      <div className="menu" onClick={clickMenuArea} style={customStyleForMenu}>
        <Menu />
      </div>
    </>
  );
}
