import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import WhatIsEstin from '../components/WhatIsEstin';
import OurClubs from '../components/OurClubs';
import OurEvents from '../components/OurEvents';
import LifeinCampus from '../components/LifeinCampus';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';
import About from '../components/About';



function MainPage() {
  return (
    <div className='main-class'>
      <NavBar />
      <Welcome />
      <WhatIsEstin />
      <About />
      <OurClubs />
      <OurEvents />
      <LifeinCampus />
      <JoinUs />
      <Footer /> 
    </div>
  )
}

export default MainPage
