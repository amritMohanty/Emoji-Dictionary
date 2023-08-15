import React from 'react'

function Hero(props) {
  return (
    <div className='hero-container'>
      <h1 className='hero-header'>This is {props.name}</h1>
    </div>
  )
}

export default Hero
