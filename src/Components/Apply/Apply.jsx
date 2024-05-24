import React from 'react'
import './Apply.css';
 

const Apply = ({subtitle, title}) => {
  return (
    <div className='apply'>
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}

export default Apply