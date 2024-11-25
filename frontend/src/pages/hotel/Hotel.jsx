import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../common.css";
import styles from "./hotel.module.css";
import Header from "../../components/header/Header";
import { path } from "../../path";

export default function Hotel() {
  const { hotelName } = useParams();
  const [data, setData] = useState(null);
  const location = data ? data.location.split("q=")[1] : null;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}/hotels/${hotelName}/`);

        if (response.ok) {
          const result = await response.json();
          setData(result);
          console.log(result);
        } else {
          throw new Error("Network response was not ok");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <Header full={true} transparent={false} width={width}></Header>
      <section className={styles.body}>
        {data && (
          <>
            <img className={styles.background} src={data.image} alt="" />
            <div className={styles.main}>
              <h1 className={`${styles.title} title`}>{data.translations.en.name}</h1>

              <div className={styles.description}>
                <p className={styles.text}>{data.translations.en.description}</p>

                <a href={data.link} target="_blank" className={styles.button}>
                  See More
                </a>
              </div>
              {/* <div className={styles.tags}>
                {data.tags.map((tag, index) => (
                  <div className={styles.tag}>
                    <div className={styles["tag__icon"]}>
                      <img src="../images/icons/Airplane.svg" alt="" />
                    </div>
                    <p className={styles["tag__text"]}>Some description of tag</p>
                  </div>
                ))}
              </div> */}
            </div>
            <footer className={styles.footer}>
              <img src="../images/icons/location.svg" alt="" />
              <a href={data.location} target="_blank">
                {location}
              </a>
            </footer>
          </>
        )}
      </section>
    </>
  );
}
