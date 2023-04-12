import React from "react";
import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with me -&#10084;- {""}
        <Link href="/" target="_blank" className={styles.footer_link}>
          Enes Sinan
        </Link>
      </p>
    </footer>
  );
}
