import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./tour.module.css";
import Header from "../../components/header/Header";
import Map from "../../components/map/Map";
import Footer from "../../components/footer/Footer";
import SliderBig from "../../components/sliderBig/SliderBig";

import addNobr from "../../functions/addNobr";

import mock from "../../MOCK/tour";
import { path, state } from "../../path";
let newState;
if (state) newState = mock;
else newState = null;

export default function Tour() {
  const { tourName } = useParams();

  const [data, setData] = useState(newState);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}destinations/${tourName}/`);

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
      <Header full={false} transparent={false} width={width} />

      {data && (
        <>
          <Map image={data.image} title={data.translations.en.name} map={data.map}></Map>
          {data.days.map((item, index) => (
            <div key={index}>
              <div className={styles.shedule}>
                <p className={`${styles.days} title cursive`}>{item.translations.en.duration}</p>
                <p className={styles.destination}>Destination: {item.translations.en.name}</p>
                <p className={styles.description} dangerouslySetInnerHTML={{ __html: addNobr(item.translations.en.description) }}></p>
              </div>
              <SliderBig key={index} title={item.translations.en.name} targetLink="" slides={item.event}></SliderBig>
            </div>
          ))}

          <Footer width={width} color={data.color_footer} image={data.image_footer} />
        </>
      )}
    </>
  );
}
