import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import Welcome from './Welcome.jsx'
import WhatIsEstin from './WhatisEstin.jsx'
function App() {

  return (
    <div className='container'>
      {/* ndir navbar responsisve + ndir nta3 active class + ndir nta3 while scroll up  */}
      <NavBar></NavBar>
      <Welcome></Welcome>
      <WhatIsEstin></WhatIsEstin>
    </div>
  )
}

export default App
