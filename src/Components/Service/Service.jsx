import React from 'react'
import './Service.css';
 

const Service = ({subtitle, title}) => {
  return (
    <div className='service'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Service