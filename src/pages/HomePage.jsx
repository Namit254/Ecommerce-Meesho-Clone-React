import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Menu from '../components/menu/Menu'
import Poster from '../components/poster/Poster'
import Combined from '../components/products/CombinedProducts'
import Footer from '../components/footer/Footer'
import userContext from '../ContextApi/UserContext'
import { useContext } from 'react'

const HomePage = () => {
  const{setUserLoginStatus} = useContext(userContext);
  useEffect(()=>{
      if(localStorage.getItem('phone')!== null){
        setUserLoginStatus(true);
      }
      // eslint-disable-next-line
  },[])
  return (
    <div>
      <Navbar/>
      <Menu />
      <Poster/>
      <Combined/>
      <Footer/>
    </div>
  )
}

export default HomePage
