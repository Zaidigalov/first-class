import React from "react";
import "../../common.css";
import Header from "../../components/header/Header";
/* import Circle from '../../components/circle/Circle'; */
import Runline from "../../components/runline/Runline";
import Footer from "../../components/footer/Footer";
import Video from "../../components/video/Video";
/* import SliderRunline from "../../components/sliderRunline/SliderRunline"; */
/* import Description from "../../components/description/Description"; */

export default function About() {
  return (
    <>
      <Header full={false} transparent={false}></Header>
      <Video></Video>
      {/*  <Description
        title="Since 2015, we create unique experiences"
        text="With many years of experience, deep industry knowledge, and extensive personal connections in the tourism sector, we ensure our clients enjoy privileged guest status worldwide. Our mission is to offer you exceptional opportunities and unforgettable experiences. 

By choosing our service, you can be assured of the highest level of service, a tailored approach, and complete confidentiality. Your vacation will be truly exceptional and memorable, thanks to our expert recommendations and exclusive offers."
      /> */}

      {/* <SliderRunline
        slides={[
          {
            display: "full",
            image: "../images/countries/israel/isr2.1.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "half_bottom",
            image: "../images/countries/israel/isr2.2.jpg",
            isDescriptionExist: true,
            description: {
              title: "Country of",
              points: [
                {
                  icon: "../images/icons/holy.svg",
                  text: "Holy Cities",
                },
                {
                  icon: "../images/icons/judaism.svg",
                  text: "Judaism",
                },
                {
                  icon: "../images/icons/culinary_israel.svg",
                  text: "Culinary Traditions",
                },
              ],
            },
            isInstructionExist: false,
          },
          {
            display: "middle",
            image: "../images/countries/israel/isr2.3.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "half_middle",
            image: "../images/countries/israel/isr2.4.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "full",
            image: "../images/countries/israel/isr2.5.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "half_middle",
            image: "../images/countries/israel/isr2.6.jpg",
            isDescriptionExist: true,
            description: {
              title: "Best Time to Visit",
              points: [
                {
                  icon: "../images/icons/leaf.svg",
                  text: "September to November",
                },
                {
                  icon: "../images/icons/sun.svg",
                  text: "March to May",
                },
              ],
            },
            isInstructionExist: false,
          },
          {
            display: "middle",
            image: "../images/countries/israel/isr2.7.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "half_top",
            image: "../images/countries/israel/isr2.8.jpg",
            isDescriptionExist: true,
            description: {
              title: "Visa Requirements ",
              points: [
                {
                  icon: "../images/icons/id-card.svg",
                  text: "Special Permits & Permissions",
                },
                {
                  icon: "../images/icons/passport.svg",
                  text: "Entry Requirements for Departure Countries",
                },
              ],
            },
            isInstructionExist: false,
          },
          {
            display: "full",
            image: "../images/countries/israel/isr2.9.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "half_bottom",
            image: "../images/countries/israel/isr2.10.jpg",
            isDescriptionExist: false,
            isInstructionExist: true,
            instruction: {
              title: "Get Visa Consultation",
              text: "Visa requirements for Middle Eastern countries can vary significantly and have specific criteria depending on the country you plan to visit and your nationality.",
            },
          },
          {
            display: "middle",
            image: "../images/countries/israel/isr2.11.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
          {
            display: "half_middle",
            image: "../images/countries/israel/isr2.12.jpg",
            isDescriptionExist: false,
            isInstructionExist: false,
          },
        ]}
      ></SliderRunline> */}
      {/*   <Circle
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

      <Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
      <Footer width={width} color="#9e6639" image="../images/countries/israel/footer8.1.jpg" />
    </>
  );
}
