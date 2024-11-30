import React from "react";
import Header from "../../components/header/Header";
import Runline from "../../components/runline/Runline";
import Footer from "../../components/footer/Footer";
import Destinations from "../../components/destinations/Destinations";

export default function Visas() {
  return (
    <>
      <Header full={false} transparent={false}></Header>

      <Destinations
        title=""
        isInputExist={true}
        tags={["Mountaineering", "Rock Climbing", "Skydiving"]}
        destinations={[
          {
            title: "Russia",
            tours: "2",
            cities: "4",
            hotels: "5",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "#",
          },
          {
            title: "Russia",
            tours: "2",
            cities: "4",
            hotels: "5",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "#",
          },
          {
            title: "Russia",
            tours: "2",
            cities: "4",
            hotels: "5",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "#",
          },
        ]}
      ></Destinations>

      <Runline text={"/Luxury/ Arrivals & Departures"}></Runline>

      <Footer width={width} color="#9e6639" image="../images/countries/israel/footer8.1.jpg" />
    </>
  );
}
