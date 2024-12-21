import React from "react";
import styles from "./loader.module.css";

export default function Loader() {
  return (
    <div className={styles["loader-container"]}>
      <span className={styles["loader-text"]}>Loading</span>
      <span className={styles["loader"]}></span>
    </div>
  );
}
