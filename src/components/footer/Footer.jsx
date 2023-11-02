import React from 'react'
import './footer.css'
import google from '../../Assets/googleplay.png'
import appstore from '../../Assets/appstore.png'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
  return (
    <div className='footerSection'>
      <div className='firstSection'>
        <div className='firstSectionDetails'>
        <h2><strong>Shop Non-Stop on Meesho</strong></h2>
        <h5>Trusted by more than 1 Crore Indians</h5>
        <p>Cash on Delivery | Free Delivery</p>
        </div>
        <div className='downloadPosters'>
            <img src={google} alt="" className='playStore'/>
            <img src={appstore} alt="" className='appstore'/>
        </div>
      </div>
      <div className='secondSection'>
        <h5> <strong> Legal and Policies </strong> </h5>
        <h5> <strong> Meesho Tech Blog </strong> </h5>
        <h5> <strong> Notices and Returns </strong> </h5>
      </div>
      <div className='thirdSection'>
        <h3><strong>Contact Us</strong></h3>
        <p>Fashnear Technologies Private Limited,</p>
        <p>CIN: U74900KA2015PTC0822993</p>
        <span>Vaishnavi Signature, No. 78/9,<br/>Outer Ring Road, Bellandur, Varthur Hobli,<br/> Bengaluru-560103, Karnataka, India</span>
        <span></span>
      </div>
      <div className='fourthSection'>
      
            <div><h3><strong>Get Connected With Us</strong></h3></div>
        <div className='iconsDiv'>
         
          <SocialIcon url="https://twitter.com/" />
          <SocialIcon url='https://instagram.com/'/>
          <SocialIcon url='https://linkedin.com/'/>
          <SocialIcon url='https://facebook.com/'/>
        </div>
      
      </div>
    </div>
  )
}

export default Footer
