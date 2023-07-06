import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './NavBar.jsx'
import Welcome from './Welcome.jsx'
import WhatIsEstin from './WhatisEstin.jsx'
import About from './About.jsx'
import Specialities from './Specialities.jsx';
import Studies from './Studies.jsx';
import Admissions from './Admissions.jsx';
import OurClubs from './OurClubs.jsx';
import OurEvents from './OurEvents.JSX';
import LifeinCampus from './LifeinCampus.jsx';
import JoinUs from './JoinUs.jsx';
import Footer from './Footer.jsx';
function App() {

  return (
      <div className='container'>
        {/* ndir navbar responsisve + ndir nta3 active class + ndir nta3 while scroll up  */}
        <NavBar></NavBar>
        <Welcome></Welcome>
        <WhatIsEstin></WhatIsEstin>
        <About></About>
          <Routes>
            <Route  path='/' element={<Studies />}></Route>
            <Route  path='/studies' element={<Studies />}></Route>
            <Route  path='/specialities' element={<Specialities />}></Route>
            <Route  path='/admissions' element={<Admissions />}></Route>
          </Routes>
        <OurClubs></OurClubs>
        <OurEvents></OurEvents>
        <LifeinCampus></LifeinCampus>
        <JoinUs></JoinUs>
        <Footer></Footer>
      </div>
  )
}

export default App
