import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Pages/Home/Home'
import Footer from '../Footer/Footer'
import Plans from '../Pages/Plans/Plans'
import Courses from '../Pages/Courses/Courses'
import Contact from '../Pages/ContactUs/Contact'
import AboutUs from '../Pages/AboutUs/AboutUs'
import Support from '../Pages/Support/Support'




function LayoutRoutes() {
  return (
    <Router>

        <Header/>

        <Routes>


          
            <Route path ='/Home' element={<Home/>}/>
            <Route path ='/react-edutech-webpage' element={<Home/>}/>
            <Route path = '/services' element={<Plans/>} />
            <Route path = '/courses' element={<Courses/>} />
            <Route path = '/about' element={<AboutUs/>} />
            <Route path = '/contact' element={<Contact/>} />
            <Route path = '/support' element={<Support/>} />

            
            
    
        </Routes>

        <Footer/>
    </Router>
  )
}

export default LayoutRoutes 
