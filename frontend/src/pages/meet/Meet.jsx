import React from "react";
import "../../common.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
/* import Circle from '../../components/circle/Circle'; */
import Hotels from "../../components/hotels/Hotels";
import Runline from "../../components/runline/Runline";
import Footer from "../../components/footer/Footer";
/* import SliderRunline from '../../components/sliderRunline/SliderRunline'; */

export default function Meet() {
  return (
    <>
      <Header full={false} transparent={false}></Header>
      <Hero
        full={false}
        location="Worldwide/service/ for /vip/ in airports"
        image="../images/countries/israel/TelAviv/1.1TelAviv.jpg"
        isButtonExist={true}
      ></Hero>
      <Description
        title="Unlocking Your /israel/ Visa with /first class/"
        text="Continue your travel plans to Israel with our visa assistance services. We provide comprehensive support throughout the visa application process, ensuring simplicity and efficiency in obtaining your Israel visa. 
Our team of experienced specialists is ready to assist you with all necessary documentation, advise on requirements, and provide support for any visa-related queries."
      />
      <SliderRunline
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
      ></SliderRunline>
      <Runline text={"/Luxury/ Arrivals & Departures"}></Runline>
      <Hotels
        title="choose /Our HOTELS/"
        slides={[
          {
            title: "Waldor Astoria",
            image: "../images/countries/israel/hotels/1.jpg",
            link: "/hotel",
          },
          {
            title: "Hotel",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "/hotel",
          },
          {
            title: "Hot",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "/hotel",
          },
          {
            title: "Hotel D",
            image: "../images/circle/backgrounds/moscow.jpg",
            link: "/hotel",
          },
        ]}
      ></Hotels>
      <SliderBig
        slides={[
          {
            tags: [],
            tagIcon: "",
            title: "Jerusalem Day",
            description: "Held annually in the Old City of Jerusalem, this event features light installations, art exhibits, and performances",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/Jer4.1.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Jerusalem International Film Festival",
            description: "Showcasing a diverse selection of international and Israeli films, held annually in July",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/Jer4.2.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Safed Klezmer Festival",
            description: "Celebrates Jewish music and culture with concerts, workshops",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/Safed4.3.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Tel Aviv White Night",
            description:
              'A night-long cultural event with concerts, art exhibitions, and performances throughout the city, inspired by the UNESCO-designated "White City" architecture',
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/TelAviv4.4.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Dead Sea Ultra Marathon",
            description:
              " An extreme marathon event held annually near the Dead Sea, known for its challenging terrain and stunning desert landscapes",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/DeadSea4.5.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Eilat Chamber Music Festival",
            description:
              "A prestigious event attracting top classical musicians from around the world, held in the resort city of Eilat. It features concerts, masterclasses, and workshops",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/EilatChamber4.6.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Masada Opera Festival",
            description:
              "Set against the dramatic backdrop of the ancient fortress of Masada, this festival presents grand opera productions, offering a unique and spectacular cultural experience",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/countries/israel/Masada4.7.jpg",
          },
        ]}
        title="/Israel’s/ Vibrant Events"
      ></SliderBig>
      <Runline text={"Discover other incredible worlds with /first class/"}></Runline>
      <Circle
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
      ></Circle>
      <Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
      <Footer width={width} color="#9e6639" image="../images/countries/israel/footer8.1.jpg" />
    </>
  );
}
