import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center ht-[65px] text-white p-[20px] bg-gradient-[(900deg, #672280 1.18%, #A626D3 100%)]'>
        <img className='header--image' src="/images/TrollFace.png"/>
        <h2 className='header-title'>Meme Generator</h2>
        <h4 className=''>React Course - Project 3</h4>
    </header>
  )
}

export default Header