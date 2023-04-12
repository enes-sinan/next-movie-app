import React from "react";
import Link from "next/link";
import { BiMoviePlay } from "react-icons/bi";

import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header}}container fluid`}>
      <div className={styles.header_wrapper}>
        <Link href="/" className={styles.logo}>
          <BiMoviePlay /> Movie App
        </Link>
        <nav className={styles.navigation_menu}>
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/">Kids</Link>
        </nav>
      </div>
    </header>
  );
}
