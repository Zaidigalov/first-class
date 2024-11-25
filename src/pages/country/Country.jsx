import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
/* import Description from '../../components/description/Description'; */
/* import Runline from '../../components/runline/Runline'; */
import SliderBig from "../../components/sliderBig/SliderBig";
import SliderSmall from "../../components/sliderSmall/SliderSmall";
import Cities from "../../components/cities/Cities";
/* import SliderRunline from '../../components/sliderRunline/SliderRunline'; */
import Hotels from "../../components/hotels/Hotels";
/* import Circle from '../../components/circle/Circle' */
import Footer from "../../components/footer/Footer";

import mock from "../../MOCK/country";
import { path, state } from "../../path";
let newState;
if (state) newState = mock;
else newState = null;

export default function Country() {
  const { countryName } = useParams();

  const [data, setData] = useState(newState);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}countries/${countryName}/`);

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
          {/* <Description title={`Unlocking Your /${data.translations.en.name}/ Visa with /first class/`} text="Navigating the Australian visa application process can be complex, but we're here to help. Learn about the various types of Australia visas, the necessary documents, and the application procedures. Our comprehensive guidance ensures you meet all the requirements and increase your chances of a successful application." /> */}
          {/* <Section_2Tags /> */}
          {/* <Runline text={"Welcome /Line/"} /> */}
          {data.cities.length > 0 && <Cities slides={data.cities} />}

          {/* <Section_4Pic text="/Hamilton Island/" image="../images/ph.jpg" isButtonExist={true} /> */}
          <SliderBig slides={data.events} title={data.translations.en.name} targetLink="/events/" />
          <Hotels title={`${width > 1270 ? "Book the /best hotels/ in the world /with us/" : "Book the /best hotels/"}`} data={data.hotels}></Hotels>
          <SliderBig slides={data.destinations} title={data.translations.en.name} targetLink="/tour/" />
          {/* <Circle full={false} title="" places={data.random_cities} /> */}

          <Footer color={data.color_footer} image={data.image_footer} />
        </>
      )}

      {/*    <Runline text={"Suggestions /line/"} />
      <Circle full={false} title="" places={
        {
          1: ["City 1", "Country 1", "./images/circle/points/kyoto.svg", "../images/ph.jpg"],
          2: ["City 2", "Country 2", "./images/circle/points/las-vegas.svg", "../images/ph.jpg"],
          3: ["City 3", "Country 3", "./images/circle/points/maldives.svg", "../images/ph.jpg"],
          4: ["City 4", "Country 4", "./images/circle/points/kyoto.svg", "../images/ph.jpg"],
          5: ["City 5", "Country 5", "./images/circle/points/las-vegas.svg", "../images/ph.jpg"],
          6: ["City 6", "Country 6", "./images/circle/points/maldives.svg", "../images/ph.jpg"],
        }
      } />
      <Runline text={"/Dear Ladies &/ Gentlemen we will turn your journey into a true work of art"} /> */}
    </>
  );
}
