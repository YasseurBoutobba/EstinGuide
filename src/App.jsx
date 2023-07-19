
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import MainPage from './pages/MainPage';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  return (
      <div className='container'>
        
        {/* ndir navbar responsisve + ndir nta3 active class + ndir nta3 while scroll up  */}
        <MainPage/>
      </div>
  )
}

export default App
