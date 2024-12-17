import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Hero from "../../components/hero/Hero.jsx";
import Header from "../../components/header/Header.jsx";
import Runline from "../../components/runline/Runline.jsx";
import SliderBig from "../../components/sliderBig/SliderBig.jsx";
import Footer from "../../components/footer/Footer.jsx";
/* import SliderRunline from '../../components/sliderRunline/SliderRunline'; */
/* import Circle from '../../components/circle/Circle' */
import Destinations from "../../components/destinations/Destinations.jsx";
import Hotels from "../../components/hotels/Hotels.jsx";

import mock from "../../MOCK/continent.js";
import { path, state } from "../../path";
let newState;
if (state) newState = mock;
else newState = null;

export default function Continent() {
  const [data, setData] = useState(newState);
  const [width, setWidth] = useState(window.innerWidth);

  const { continentName } = useParams();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}continents/${continentName}`);

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
          <Hero full={false} location={data.translations.en.name} image={data.image} isButtonExist={true} />
          {/* <Section_2Tags></Section_2Tags> */}
          <Destinations title="Destinations" isInputExist={false} tags={false} destinations={data.countries}></Destinations>
          <SliderBig title={`${width > 1750 ? "Exceptional Locations /&/ Natural /Wonders/" : "Exceptional Locations"}`} targetLink="/country/" slides={data.events}></SliderBig>
          <Hotels title={`${width > 640 ? "The /best hotels/ in the world" : "The /best hotels/"}`} data={data.hotels} />
          <SliderBig
            title={`${width > 1750 ? `Exclusive /${data.translations.en.name}/ with first class` : `Exclusive /${data.translations.en.name}/`}`}
            targetLink="/tour/"
            slides={data.destinations}
          ></SliderBig>
          {/*  <Circle full={false} title="" places={data.random_cities} /> */}
          <Footer width={width} color={data.color_footer} image={data.image_footer} />
        </>
      )}
      {/*       
      
      <Runline text={"Intro /line/"} />
      <Section_2Tags />
      
      <Runline text={"Suggestions /line/"} />
      <Circle full title places={
        {
          1: ["City 1", "Country 1", "./images/circle/points/kyoto.svg", "../images/ph.jpg"],
          2: ["City 2", "Country 2", "./images/circle/points/las-vegas.svg", "../images/ph.jpg"],
          3: ["City 3", "Country 3", "./images/circle/points/maldives.svg", "../images/ph.jpg"],
          4: ["City 4", "Country 4", "./images/circle/points/kyoto.svg", "../images/ph.jpg"],
          5: ["City 5", "Country 5", "./images/circle/points/las-vegas.svg", "../images/ph.jpg"],
          6: ["City 6", "Country 6", "./images/circle/points/maldives.svg", "../images/ph.jpg"],
        }
      } />
      <Runline text={"Footer /line/"} />
       */}
    </>
  );
}
