import React from 'react'
import './poster.css'
import poster from '../../Assets/poster.jpeg'

const Poster = () => {
  return (
    <div className='poster'>
     <div className='posterContainer'>
     <div className='details'>
        <div><h1><strong>Lowest Prices</strong></h1></div>
        <div><h1><strong>Best Quality Shopping</strong></h1></div>
        <div><h4><strong>Trusted Choice of 20 Lakh Families</strong></h4></div>
        <button className='btn btn-danger pinkky'>Download the Meesho App</button>
     </div>
     <div>
        <img src={poster} alt="" style={{height:'348px'}}/>
     </div>
     </div>
    </div>
  )
}

export default Poster
