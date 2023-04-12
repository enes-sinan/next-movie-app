import React from "react";
import styles from "./styles.module.css";
import Skeleton from "@/components/skeleton/index";

function FeatureMoviesLoading() {
  return (
    <div className={styles.movie_wrapper}>
      {Array(1)
        .fill(null)
        .map((_, index) => (
          <Skeleton key={index} height={278} />
        ))}
    </div>
  );
}

export default FeatureMoviesLoading;
