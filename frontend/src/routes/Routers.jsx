import React from 'react'
import Signup from  '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctor'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Contact from '../pages/Contact'
import Services from '../pages/Services'
import {Routes ,Route} from 'react-router-dom'
const Routers=()=> {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/doctors' element={<Doctors/>}></Route>
    <Route path='/doctors/:id' element={<DoctorDetails/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/ragister' element={<Signup/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/services' element={<Services/>}></Route>

   </Routes>
  )
}

export default Routers
