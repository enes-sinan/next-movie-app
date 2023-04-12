import React from "react";
import styles from "./styles.module.css";

function LoadingPage() {
  return (
    <div className={styles.loading_wrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}

export default LoadingPage;
