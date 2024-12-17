import React, { useState, useEffect } from "react";
/* import "../../common.css" */
import Header from "../../components/header/Header";
/* import Circle from '../../components/circle/Circle'; */
/* import Runline from "../../components/runline/Runline"; */
import Footer from "../../components/footer/Footer";
import SliderSmall from "../../components/sliderSmall/SliderSmall";
import Searchbar from "../../components/searchbar/Searchbar";

import { allAdventures } from "../../MOCK/slides";

export default function Adventures() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <>
      <Header full={false} transparent={false} width={width} />
      <Searchbar title="Types of travalers" isInputExist={false} tags={["", ""]} onSearch={""} />
      <SliderSmall targetLink="/adventures" slides={allAdventures.slice(0, 8)} />
      <SliderSmall targetLink="/adventures" slides={allAdventures.slice(8)} />
      {/* <Runline text={"Discover other incredible worlds with /first clas/"}/> */}
      {/* <Circle
        title=""
        full={false}
        places={{
          1: ["Byblos", "Lebanon", "./images/circle/points/byblos.svg", "../images/countries/israel/ByblosLebanon7.6.jpg"],
          2: ["Mecca", "Saudi Arabia", "./images/circle/points/mecca.svg", "../images/countries/israel/Mecca7.1.jpg"],
          3: ["Fez", "Morocco", "./images/circle/points/fez.svg", "../images/countries/israel/FEZmorocco7.2.jpg"],
          4: ["Petra", "Jordan", "./images/circle/points/petra.svg", "../images/countries/israel/PetraJordan7.3.jpg"],
          5: ["Essaouira", "Morocco", "./images/circle/points/essaouira.svg", "../images/countries/israel/Essaouira7.4.jpg"],
          6: ["Jerusalem", "Israel", "./images/circle/points/jerusalem.svg", "../images/countries/israel/JerusalemIsr7.5.jpg"],
        }}
      ></Circle> */}
      {/* <Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline> */}
      <Footer width={width} color="#397b9e" image="../images/adventures/adventures-footer.jpg" />
    </>
  );
}
