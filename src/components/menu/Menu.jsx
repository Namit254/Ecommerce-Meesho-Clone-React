import React from 'react'
import './menu.css'

const Menu = () => {
  return (
    <div className='menuContainer'>
      <div className='menuItem'>Women Ethic</div>
      <div className='menuItem'>Woment Western</div>
      
      <div className='menuItem disAppear'>Kids</div>
      <div className='menuItem'>Home & Kitchen</div>
      <div className='menuItem disAppear'>Men</div>
      <div className='menuItem'>Beauty & Health</div>
      <div className='menuItem disAppear'>Footwear</div>
      <div className='menuItem'>Electronics</div>
    </div>
  )
}

export default Menu
