import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";

function Movie404() {
  return (
    <div className={styles.not_found_container}>
      <h1>We could not find the movie!</h1>
      <Link href="/" className={styles.underline}>
        Go Home
      </Link>
    </div>
  );
}

export default Movie404;
