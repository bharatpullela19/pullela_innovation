import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/PullelaInnovationLogo.png'
import { Link } from 'react-scroll'

const App = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>100 ? setSticky(true) : setSticky(false)
    })
  },[])

  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src ={logo} alt="" style={{ width: '100px', height: 'auto' }} className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='service' smooth={true} offset={-150} duration={500}>Services</Link></li>
            <li><Link to='apply' smooth={true} offset={-150} duration={500}>Apply</Link></li>
            <li><Link to='contact' smooth={true} offset={-340} duration={500}>Contact Us</Link></li>
        </ul>
    </nav>
  )
}

export default App