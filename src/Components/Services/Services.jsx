import React from 'react';
import './Services.css';
import Embedded from '../../assets/Embedded.png';
import Software from '../../assets/software.png';
import ML from '../../assets/ML.png';

const Services = () => {
  return (
    <div className='services'>
      <div className="service">
        <img src={Embedded} alt="" />
      </div>
      <div className="service">
        <img src={Software} alt="" />
      </div>
      <div className="service">
        <img src={ML} alt="" />
      </div>
    </div>
  );
};

export default Services; 
