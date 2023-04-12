import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";

function FeatureMovie({ movie = {}, isCompact = true }) {
  const { poster_path, title, overview } = movie;
  return (
    <div className={styles.movie_wrapper}>
      <h1 className={styles.movie_title}>{title}</h1>
      <p className={`${styles.overview} ${isCompact ? styles.short_overview : ""}`}>{overview}</p>
      <div className={styles.action_buttons}>
        <Link className={styles.play_button} href={`/movie/${movie.id}`}>
          PLAY
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.movie_poster}>
        <div className={styles.movie_poster_overlay}></div>
        <Image unoptimized src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} fill></Image>
      </div>
    </div>
  );
}

export default FeatureMovie;
