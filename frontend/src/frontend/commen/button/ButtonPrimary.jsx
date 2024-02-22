import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const ButtonPrimary = ({BtnTitle, btnStyle, btnLink}) => {
  return (
    
        <Link to={btnLink} className="btn  BtnLeft" style={btnStyle}>{BtnTitle}</Link>
    
    
  )
}

export default ButtonPrimary
