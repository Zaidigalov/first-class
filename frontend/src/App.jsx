import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./resets.css";
import "./App.css";

import Main from "./pages/main/Main";
import Continent from "./pages/continent/Continent";
import Country from "./pages/country/Country";
import City from "./pages/city/City";
import Tour from "./pages/tour/Tour";
import About from "./pages/about/About";
import RentPage from "./pages/rent/RentPage";
import Adventures from "./pages/adventures/Adventures";
import Adventure from "./pages/adventure/Adventure";
import DestinationsPage from "./pages/destinations/DestinationsPage";
import HotelsPage from "./pages/hotels/HotelsPage";
import Hotel from "./pages/hotel/Hotel";
import Meet from "./pages/meet/Meet";
import ToursPage from "./pages/tours/ToursPage";
import Visas from "./pages/visas/Visas";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import PublicOffer from "./pages/publicOffer/PublicOffer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/continent/:continentName" element={<Continent />} />
        <Route path="/country/:countryName" element={<Country />} />
        <Route path="/city/:cityName" element={<City />} />
        <Route path="/tour/:tourName" element={<Tour />} />
        <Route path="/about" element={<About />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/services/#serviceName?" element={<RentPage />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/adventures/:adventureName" element={<Adventure />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route path="/hotel/:hotelName" element={<Hotel />} />
        <Route path="/meet-and-greet" element={<Meet />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/visas" element={<Visas />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/public-offer" element={<PublicOffer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
