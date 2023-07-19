
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import MainPage from './pages/MainPage';
AOS.init();
function App() {

  return (
      <div className='container'>
        
        {/* ndir navbar responsisve + ndir nta3 active class + ndir nta3 while scroll up  */}
        <MainPage/>
      </div>
  )
}

export default App
