import React from 'react'
import './About.css'
import owner from '../../assets/imageNeeded.png'
import worker1 from '../../assets/imageNeeded.png'
import worker2 from '../../assets/bhar.png'
import play from '../../assets/imageNeeded.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={owner} alt="" className='owner'/>
        </div>
        <div className="about-right">
            <h3>OWNER</h3>
            <h2>Murthy Pullela</h2>
            <p>stuff</p>
            <p>stuff</p>
            <p>stuff</p>
        </div>
        <div className="about-left">
            <img src={owner} alt="" className='owner'/>
        </div>
        <div className="about-right">
            <h3>OWNER</h3>
            <h2>Murthy Pullela</h2>
            <p>stuff</p>
            <p>stuff</p>
            <p>stuff</p>
        </div>
        <div className="about-left">
            <img src={owner} alt="" className='owner'/>
        </div>
        <div className="about-right">
            <h3>OWNER</h3>
            <h2>Murthy Pullela</h2>
            <p>stuff</p>
            <p>stuff</p>
            <p>stuff</p>
        </div>
    </div>
  )
}

export default About