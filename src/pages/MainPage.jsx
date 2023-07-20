import NavBar from '../components/NavBar';
import Welcome from '../components/Welcome';
import OurClubs from '../components/OurClubs';
import OurEvents from '../components/OurEvents';
import LifeinCampus from '../components/LifeinCampus';
import JoinUs from '../components/JoinUs';
import Footer from '../components/Footer';
import About from '../components/About';
import Estin from '../components/Estin';




function MainPage() {
  return (
    <div className='main-class'>
      <NavBar />
      <Welcome />
      <Estin />
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
