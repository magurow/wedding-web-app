import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";
import Location from "../components/sections/Location";

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Ana Sayfa - Düğün Sarayı | Ankara</title>
        <meta
          name="description"
          content="Ankara'daki Düğün Sarayı'na hoş geldiniz. Hayallerinizdeki düğün, nişan ve kına organizasyonları için en doğru adres."
        />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Location />
    </>
  );
};

export default HomePage;
