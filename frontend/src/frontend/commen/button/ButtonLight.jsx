import React from 'react'
import './style.css'
import {Link } from 'react-router-dom'

const ButtonLight = ({BtnLightTitle, btnLightStyle}) => {
  return (
    <div>
      <Link to="/" className="btn  BtnRight  " style={btnLightStyle}>{BtnLightTitle}</Link>

    </div>
  )
}

export default ButtonLight
