import React, { useEffect, useState } from "react";
//import "../../common.css";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
/* import Circle from '../../components/circle/Circle'; */
import Hotels from "../../components/hotels/Hotels";
import SliderBig from "../../components/sliderBig/SliderBig";
import Runline from "../../components/runline/Runline";
import Footer from "../../components/footer/Footer";
import SliderMain from "../../components/sliderMain/SliderMain";

import mock from "../../MOCK/main";
import { path, state } from "../../path";
let newState;
if (state) newState = mock;
else newState = null;

export default function Main() {
  const [data, setData] = useState(newState);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`${path}main`);

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
      <Header full={false} transparent={true} width={width}></Header>
      {/* <Runline text={"/Dear Ladies &/ "} /> */}

      {/* 			<Circle title="/top/ destinations" full={true} places={
				{
					1: ["Byblos", "Lebanon", "./images/circle/points/byblos.svg", "../images/countries/israel/ByblosLebanon7.6.jpg"],
					2: ["Mecca", "Saudi Arabia", "./images/circle/points/mecca.svg", "../images/countries/israel/Mecca7.1.jpg"],
					3: ["Fez", "Morocco", "./images/circle/points/fez.svg", "../images/countries/israel/FEZmorocco7.2.jpg"],
					4: ["Petra", "Jordan", "./images/circle/points/petra.svg", "../images/countries/israel/PetraJordan7.3.jpg"],
					5: ["Essaouira", "Morocco", "./images/circle/points/essaouira.svg", "../images/countries/israel/Essaouira7.4.jpg"],
					6: ["Jerusalem", "Israel", "./images/circle/points/jerusalem.svg", "../images/countries/israel/JerusalemIsr7.5.jpg"],
				}
			}></Circle>
 */}
      {data && (
        <>
          <Hero full={true} location={data.country.name} image={`${data.country.image}`} isButtonExist={true} link="/country"></Hero>
          <Hotels title={`${width > 1270 ? "Book the /best hotels/ in the world /with us/" : "Book the /best hotels/"}`} data={data.hotels}></Hotels>
        </>
      )}

      <SliderBig
        title="For /Busy Bee’s/ on the Fly"
        targetLink=""
        slides={[
          {
            tag: null,
            translations: {
              en: {
                name: "Business Trips",
                description: "Organizing employee travel for business meetings, negotiations, conferences, and exhibitions",
              },
            },
            image: "../images/main-page/Business-Trips.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Incentive Tours",
                description:
                  "Trips for employees as a reward for work achievements. These tours may include leisure activities, entertainment events, and team-building exercises",
              },
            },
            image: "../images/main-page/Incentive-Tours.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Team Building",
                description:
                  "Organizing activities aimed at strengthening team cohesion and improving team interaction. These can include sports events, quests, outdoor training, and more",
              },
            },
            image: "../images/main-page/Team-Building.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Corporate Events",
                description: "Organizing conferences, seminars, training sessions, exhibitions, and presentations",
              },
            },
            image: "../images/main-page/Corporate-Events.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Educational Trips",
                description:
                  "Organizing trips for employee skill enhancement, learning new skills, and exchanging experiences with colleagues from other companies or countries",
              },
            },
            image: "../images/main-page/Educational-Trips.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Offsite Strategic Sessions",
                description: "Organizing offsite meetings for company leadership for strategic planning and making key decisions",
              },
            },
            image: "../images/main-page/Offsite-Strategic-Sessions.jpg",
            link: null,
          },
        ]}
      ></SliderBig>

      <SliderMain
        title={`${width > 1635 ? "Premium /care/ for a Premium /Experience/" : "Premium /Experience/"}`}
        width={width}
        slides={[
          {
            tags: [],
            tagIcon: "",
            title: "Fast Track",
            description: "Personal meeting of the passenger at the plane and escorting to the airport exit or VIP lounge",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/main-page/Fast-Track.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Meet+Greet",
            description: "Personal meeting of the passenger at the plane and escorting to the airport exit or VIP lounge",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/main-page/Meet-Greet.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Transfer",
            description: "Provides high-class vehicles for airport transfers or within the airport",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/main-page/Transfer.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Lounge",
            description: "Premium lounges feature enhanced design and a more diverse menu, often providing additional services",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/main-page/Lounge.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Concierge",
            description: "A personal assistant ready to fulfill any passenger requests, including booking hotels, restaurants, events",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/main-page/Concierge.jpg",
          },
          {
            tags: [],
            tagIcon: "",
            title: "Private Suites",
            description: "Fully isolated rooms with individual service, ensure maximum privacy and comfort",
            isLinkExist: true,
            linkText: "Explore",
            link: "#",
            background: "../images/main-page/Private-Suites.jpg",
          },
        ]}
      ></SliderMain>

      <SliderBig
        title={`${width > 1655 ? "Exclusive /Voyages/ Without /Boundaries/" : "Exclusive /Voyages/"}`}
        targetLink=""
        slides={[
          {
            tag: null,
            translations: {
              en: {
                name: "Individual Tours",
                description: "Organizing employee travel for business meetings, negotiations, conferences, and exhibitions",
              },
            },
            image: "../images/main-page/Individual-Tours.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Luxury Travel",
                description: "Stay in the finest hotels and exclusive private residences in stunning and secluded locations",
              },
            },
            image: "../images/main-page/Luxury-Travel.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Transport & Logistics",
                description: "Travel in comfort and privacy with private jets, helicopters, and luxury yachts, tailored to your needs",
              },
            },
            image: "../images/main-page/Transport-Logistics.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Private Events",
                description: "Celebrate special moments with meticulously organized private events like weddings, birthdays or concerts",
              },
            },
            image: "../images/main-page/Private-Events.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Exclusive Experiences",
                description: "Indulge in themed travel and adventure tours that cater to your unique interests",
              },
            },
            image: "../images/main-page/Exclusive-Experiences.jpg",
            link: null,
          },
          {
            tag: null,
            translations: {
              en: {
                name: "Health & Wellness",
                description: "Rejuvenate at top spa resorts with personalized programs or receive high-quality medical treatments worldwide",
              },
            },
            image: "../images/main-page/Health-Wellness.jpg",
            link: null,
          },
        ]}
      ></SliderBig>
      <Runline text={"/Dear Ladies &/ Gentlemens we will turn your journey  into a true work of art"}></Runline>
      <Footer width={width} color="#397A9E" image="../images/main-page/main-footer.jpg" />
    </>
  );
}
