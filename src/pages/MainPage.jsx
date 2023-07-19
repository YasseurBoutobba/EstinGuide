import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import WhatIsEstin from '../components/WhatIsEstin';
import About from '../components/About';
import Studies from '../components/Studies';
import Specialities from '../components/Specialities';
import Admissions from '../components/Admissions';
import OurClubs from '../components/OurClubs';
import OurEvents from '../components/OurEvents';
import LifeinCampus from '../components/LifeinCampus';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';


function MainPage() {
  return (
    <div>
      <NavBar />
      <Welcome />
      <WhatIsEstin />
      {/* <About /> */}
          {/* <Routes>
            <Route  path='/' element={<Studies />}></Route>
            <Route  path='/studies' element={<Studies />}></Route>
            <Route  path='/specialities' element={<Specialities />}></Route>
            <Route  path='/admissions' element={<Admissions />}></Route>
          </Routes> */}
      <OurClubs />
      <OurEvents />
      <LifeinCampus />
      <JoinUs />
      <Footer /> 
    </div>
  )
}

export default MainPage
