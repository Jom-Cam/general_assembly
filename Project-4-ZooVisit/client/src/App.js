import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//importing components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import Login from './components/auth/Login'
import AuthLanding from './components/auth/AuthLanding'
import Register from './components/auth/Register'
import AnimalDetails from './components/AnimalDetails'
import Profile from './components/Profile'
import Reviews from './components/Reviews'
import Intro from './components/Intro'
import OceanHome from './components/OceanHome'
import CityHome from './components/CityHome'
import JungleHome from './components/JungleHome'

function App() {
  return (
    <div className='site-wrapper'>
      <BrowserRouter>

      <SiteNavbar />

      <Routes>

        <Route path="/" element = {<Intro />} />
        <Route path="/animals/" element = {<Home />} />
        <Route path="/animals/ocean/" element = {<OceanHome />} />
        <Route path="/animals/city/" element = {<CityHome />} />
        <Route path="/animals/jungle/" element = {<JungleHome />} />
        <Route path="/login/" element = {<Login />} />
        <Route path="/landing/" element = {<AuthLanding />} />
        <Route path="/register/" element = {<Register />} />
        <Route path="/profile/" element = {<Profile />} />
        <Route path="/animals/:animalId/" element = {<AnimalDetails />} />
        <Route path="/animals/:animalId/reviews/" element = {<Reviews />} />

      </Routes>
      </BrowserRouter>
  
  </div >
  )
}

export default App

