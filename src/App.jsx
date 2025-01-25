

import React from 'react'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import { Routes,Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import AcPage from './stores/pages/AcPage'
import ComputerPage from './stores/pages/ComputerPage'
import FurniturePage from './stores/pages/FurniturePage'
import MenPage from './stores/pages/MenPage'
import WomenPage from './stores/pages/WomenPage'
import WatchesPage from './stores/pages/WatchesPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './stores/UserCart'


const App = () => {
  return (
   <div>

<Routes>
<Route path='/' element = {<LandingPage/>}/>
<Route path='/mobile' element = {<MobilePage/>}/>
<Route path='/ac' element = {<AcPage/>}/>
<Route path='/computer' element = {<ComputerPage/>}/>
<Route path='/furniture' element = {<FurniturePage/>}/>
<Route path='/men' element = {<MenPage/>}/>
<Route path='/women' element = {<WomenPage/>}/>
<Route path='/watch' element = {<WatchesPage/>}/>
<Route path='/cart' element = {<UserCart/>}/>

//DYNAMIC ROUTING
<Route path='/mobile/:id' element = {<MobileSingle/>}/>

</Routes>

   </div>
  )
}

export default App