import React, { useState, useEffect } from "react";
import "../../common.css";
import Header from "../../components/header/Header";
/* import Circle from '../../components/circle/Circle'; */
import Destinations from "../../components/destinations/Destinations";
import Runline from "../../components/runline/Runline";
import Footer from "../../components/footer/Footer";
import { path } from "../../path";

export default function DestinationsPage() {
  const [data, setData] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}continents_countries/`);

        if (response.ok) {
          const result = await response.json();
          setData(result);
          /* console.log(result); */
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
      <Header full={false} transparent={false} width={width}></Header>
      {/* <Circle title="" full={false} places={
				{
					1: ["Byblos", "Lebanon", "./images/circle/points/byblos.svg", "../images/countries/israel/ByblosLebanon7.6.jpg"],
					2: ["Mecca", "Saudi Arabia", "./images/circle/points/mecca.svg", "../images/countries/israel/Mecca7.1.jpg"],
					3: ["Fez", "Morocco", "./images/circle/points/fez.svg", "../images/countries/israel/FEZmorocco7.2.jpg"],
					4: ["Petra", "Jordan", "./images/circle/points/petra.svg", "../images/countries/israel/PetraJordan7.3.jpg"],
					5: ["Essaouira", "Morocco", "./images/circle/points/essaouira.svg", "../images/countries/israel/Essaouira7.4.jpg"],
					6: ["Jerusalem", "Israel", "./images/circle/points/jerusalem.svg", "../images/countries/israel/JerusalemIsr7.5.jpg"],
				}
			}></Circle> */}
      {data && <Destinations title="Destinations" isInputExist={true} tags={""} destinations={data.countries} />}
      <Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
      <Footer width={width} color="#397A9E" image="../images/main-page/main-footer.jpg" />
    </>
  );
}
