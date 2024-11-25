import React, { useEffect, useRef } from "react";
import styles from "./video.module.css";
import cursivingText from "../../functions/cursivingText";

export default function Video() {
  const video1 = useRef();
  const video2 = useRef();
  const video3 = useRef();

  function showVideo() {
    [video1, video2, video3].forEach((video) => {
      video.current.classList.add(styles["video_showed"]);
    });
  }

  useEffect(() => {
    setTimeout(() => showVideo(), 100);
  }, []);

  return (
    <section className={styles.video}>
      <div className={styles["video-container"]}>
        <h1 className={`${styles.title} title`} dangerouslySetInnerHTML={{ __html: cursivingText("/FIRST CLASS/ SOLUTIONS") }}></h1>
        <button className={`${styles.button} button`}>Contact us</button>
        <video autoPlay muted loop className={`${styles.media} ${styles.video1}`} ref={video1}>
          <source src="../videos/1.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop className={`${styles.media} ${styles.video3}`} ref={video2}>
          <source src="../videos/1.mp4" type="video/mp4" />
        </video>

        <video autoPlay muted loop className={`${styles.media} ${styles.video2}`} ref={video3}>
          <source src="../videos/1.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
