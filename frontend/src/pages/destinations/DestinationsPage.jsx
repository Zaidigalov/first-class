import React from "react";
import "../../common.css";
import Header from "../../components/header/Header";
/* import Circle from '../../components/circle/Circle'; */
import Destinations from "../../components/destinations/Destinations";
import Runline from "../../components/runline/Runline";
import Footer from "../../components/footer/Footer";

const properties = {
  circle: {
    full: false,
    title: "",
    places: {
      1: ["City 1", "Country 1", "./images/circle/points/kyoto.svg", "../images/ph.jpg"],
      2: ["City 2", "Country 2", "./images/circle/points/las-vegas.svg", "../images/ph.jpg"],
      3: ["City 3", "Country 3", "./images/circle/points/maldives.svg", "../images/ph.jpg"],
      4: ["City 4", "Country 4", "./images/circle/points/kyoto.svg", "../images/ph.jpg"],
      5: ["City 5", "Country 5", "./images/circle/points/las-vegas.svg", "../images/ph.jpg"],
      6: ["City 6", "Country 6", "./images/circle/points/maldives.svg", "../images/ph.jpg"],
    },
  },

  destinations: {
    title: "Destinations",
    isInputExist: true,
    tags: ["Business", "Family"],
    destinations: [
      {
        title: "Russia",
        tours: "2",
        cities: "4",
        hotels: "5",
        image: "../images/circle/backgrounds/moscow.jpg",
        link: "/country",
      },
      {
        title: "Russia",
        tours: "2",
        cities: "4",
        hotels: "5",
        image: "../images/circle/backgrounds/moscow.jpg",
        link: "/country",
      },
      {
        title: "Russia",
        tours: "2",
        cities: "4",
        hotels: "5",
        image: "../images/circle/backgrounds/moscow.jpg",
        link: "/country",
      },
    ],
  },

  runlineFirst: "Text /cursive text/",

  footer: {
    color: "#4B4B4B",
    image: "../images/ph.jpg",
  },
};

export default function DestinationsPage() {
  return (
    <>
      <Header full={false} transparent={false}></Header>
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
      <Destinations
        title="Destinations"
        isInputExist={true}
        tags={["Business", "Family"]}
        destinations={[
          {
            title: "Russia",
            tours: "2",
            cities: "4",
            hotels: "5",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "/country",
          },
          {
            title: "Russia",
            tours: "2",
            cities: "4",
            hotels: "5",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "/country",
          },
          {
            title: "Russia",
            tours: "2",
            cities: "4",
            hotels: "5",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "/country",
          },
        ]}
      ></Destinations>
      <Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
      <Footer color="#9e6639" image="../images/countries/israel/footer8.1.jpg" />
    </>
  );
}
