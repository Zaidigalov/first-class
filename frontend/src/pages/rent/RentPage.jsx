import React, { useState, useEffect } from "react";
/* import "../../common.css" */
import Header from "../../components/header/Header";
import Rent from "../../components/rent/Rent";

export default function RentPage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <>
      <Header full={false} transparent={true} width={width}></Header>
      <Rent
        mb="30"
        slides={[
          {
            translations: { en: { name: "Yachts" } },
            search: "Yachts",
            cursive: "",
            link: "#",
            description:
              "Experience an exceptional journey on the water with our luxury yacht rental service. Our fleet features modern and comfortable vessels, fully staffed with professional crews ready to cater to your every need.",
            image: "../images/rent/yachts.jpg",
          },
          {
            translations: { en: { name: "Cruises" } },
            search: "Cruises",
            cursive: "cursive",
            link: "#",
            description:
              "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
            image: "../images/rent/cruises.jpg",
          },
          {
            translations: { en: { name: "Challets" } },
            search: "Challets",
            cursive: "",
            link: "#",
            description:
              "Feel true harmony in luxurious chalets with top-class service and exquisite amenities, located in the heart of the mountains. Indulge in serenity and breathtaking mountain views, creating unforgettable moments in our meticulously chalets designed for ultimate relaxation and rejuvenation.",
            image: "../images/rent/challets.jpg",
          },
          {
            translations: { en: { name: "Hotels" } },
            search: "Hotels",
            cursive: "cursive",
            link: "#",
            description: "Enjoy ultimate relaxation and adventure at our hotels, offering a blend of luxury accommodations and extensive amenities.",
            image: "../images/rent/hotels.jpg",
          },
          {
            translations: { en: { name: "Villas" } },
            search: "Villas",
            cursive: "",
            link: "#",
            description:
              "Discover oases of luxury in our villas. Enjoy unparalleled privacy and magnificent views unfolding right from your cozy corner of paradise.",
            image: "../images/rent/villas.jpg",
          },
          {
            translations: { en: { name: "Jets" } },
            search: "Jets",
            cursive: "",
            link: "#",
            description:
              "Elevate your travel with our executive jet rentals, providing unparalleled comfort and efficiency for your business or leisure trips.",
            image: "../images/rent/jets.jpg",
          },
          {
            translations: { en: { name: "Corporate client" } },
            search: "Corporate",
            cursive: "cursive",
            link: "#",
            description:
              "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
            image: "../images/rent/corporate.jpg",
          },
          {
            translations: { en: { name: "Visa Services" } },
            search: "Visa",
            cursive: "cursive",
            link: "#",
            description:
              "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
            image: "../images/rent/visa.jpg",
          },
          {
            translations: { en: { name: "Flight tickets" } },
            search: "tickets",
            cursive: "cursive",
            link: "#",
            description:
              "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
            image: "../images/rent/tickets.jpg",
          },
          {
            translations: { en: { name: "airport vip services" } },
            search: "vip",
            cursive: "cursive",
            link: "#",
            description:
              "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
            image: "../images/rent/vip.jpg",
          },
          {
            translations: { en: { name: "unique experiences" } },
            search: "unique",
            cursive: "cursive",
            link: "#",
            description:
              "Embark on unique sea voyages that open up new horizons and unforgettable experiences, where every moment is filled with luxury and comfort. Our cruises offer diverse itineraries and exploration opportunities, promising unforgettable adventures on the water.",
            image: "../images/rent/unique.jpg",
          },
        ]}
      ></Rent>
    </>
  );
}
