import React from 'react';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import LandingPage from './Components/LandingPage';
import HeroSection from './Components/HeroSection';
import Card from './Components/Card';

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage/>
      <AboutUs />
      <Card />
      {/* <Features />
      <Testimonials />
      <CallToAction />
      <Footer /> */}
    </div>
  );
};

export default App;
