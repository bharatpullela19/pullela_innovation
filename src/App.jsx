import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Service from './Components/Service/Service'
// import About from './Components/About/About'
import Apply from './Components/Apply/Apply'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'
import ApplicationForm from './Components/ApplicationForm/ApplicationForm'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Service subtitle='Services' title='What do you need?'/>
        <Services/>
        <Apply subtitle='Apply' title=''/>
        <ApplicationForm/>
        <Apply subtitle='Contact Us' title='Get in Touch'/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  )
}

export default App