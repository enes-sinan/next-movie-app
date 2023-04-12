import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Error() {
  return (
    <div className={styles.not_found_container}>
      <h1>An error has occurred. Sorry for that!</h1>
      <Link href="/" className={styles.underline}>
        Go Home
      </Link>
    </div>
  );
}

export default Error;
