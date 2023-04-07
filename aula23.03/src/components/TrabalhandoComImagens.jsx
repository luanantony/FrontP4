import React from 'react'
import caverna from '../assets/caverna.jpg'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src='bob.png' alt='Bob' style={{ width: '460px', height: '300px', margin: '10px', objectFit: 'cover' }}/> <br/>
        <img src={caverna} alt='Caverna' style={{ width: '800px', height: '356px', margin: '10px', objectFit: 'cover' }} />
    </div>
  )
}

export default TrabalhandoComImagens
