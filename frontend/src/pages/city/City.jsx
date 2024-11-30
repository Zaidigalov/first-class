import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
/* import Circle from "../../components/circle/Circle"; */

/* import Description from '../../components/description/Description';
import Runline from '../../components/runline/Runline'; */
import SliderBig from "../../components/sliderBig/SliderBig";
/* import SliderSmall from '../../components/sliderSmall/SliderSmall'; */
import Footer from "../../components/footer/Footer";
import Cities from "../../components/cities/Cities";
/* import SliderRunline from '../../components/sliderRunline/SliderRunline'; */
import Hotels from "../../components/hotels/Hotels";

import { path, state } from "../../path";
import mock from "../../MOCK/city";
let newState;
if (state) newState = mock;
else newState = null;

export default function City() {
  const { cityName } = useParams();
  const [width, setWidth] = useState(window.innerWidth);
  const [data, setData] = useState(newState);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}cities/${cityName}/`);

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
          <Hero full={false} location={data.translations.en.name} image={data.image} isButtonExist={true} /* link="" */ />
          {/* <Section_2Tags /> */}
          {/* <Runline text={"hero /Line/"} /> */}
          {/* <Section_4Pic text="/Hamilton Island/" image="../images/ph.jpg" isButtonExist={true} /> */}
          <SliderBig slides={data.events} title={data.translations.en.name} targetLink="/events/" />
          <Hotels title={`${width > 1270 ? "Book the /best hotels/ in the world /with us/" : "Book the /best hotels/"}`} data={data.hotels} />
          <SliderBig slides={data.events} title={data.translations.en.name} targetLink="/events/" />
          {/* <Circle full={false} title="" places={data.random_cities} /> */}
          <Footer width={width} color={data.color_footer} image={data.image_footer} />
        </>
      )}
    </>
  );
}
