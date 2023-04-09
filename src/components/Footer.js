import React from 'react'
import '../css/ComponentsStyle/Footer.css' ;
import {FaFacebookF} from "react-icons/fa" ;
import {GrTwitter , GrInstagram , GrPinterest} from 'react-icons/gr' ;
import {BsFillSuitHeartFill} from 'react-icons/bs' ;

const Footer = () => {
  return (
    <div className="footer-container">
       <div className='footer-content'>
        <div className='footer-about-content'>
            <h1>About</h1>
            <div>
            <img className='about-section-image' src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80"/>
            </div>
            <div className='about-section-description'>
            <p>About Me Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudan totam rem aperiam eaque.</p>
            </div>
        </div>
        <div className='footer-recent-tweets'>
            <h1>Recent Tweets</h1>
            <div>
                <p>Most Amazing Content</p>
                <p>Tweets </p>
                <hr/>
            </div>
            <div>
                <p>Most Amazing Content</p>
                <p>Tweets </p>
                <hr/>
            </div>
            <div>
                <p>Most Amazing Content</p>
                <p>Tweets </p>
                <hr/>
            </div>
            <div>
                <p>Most Amazing Content</p>
                <p>Tweets </p>
                <hr/>
            </div>
        </div>
        <div className='footer-popular-posts'>
        <h1>Popular Post</h1>
        <div className='popular-post-image-title'>
        <div>
         <img className='popular-post-image' src="https://images.unsplash.com/photo-1560090947-5307abc46ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80"/>
        </div>
        <div>
        <p className='popular-post-title'>This is an amazing thing</p>
        </div>
        </div>
        <div className='popular-post-image-title'>
        <div>
        <img className='popular-post-image' src="https://images.unsplash.com/photo-1601121853354-e6e866bd2bac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"/>
        </div>
        <div>
        <p className='popular-post-title'>Basketball Fever</p>
        </div>
        </div>
        <div className='popular-post-image-title' >
            <div>
        <img className='popular-post-image' src="https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"/>
            </div>
            <div>

        <p className='popular-post-title'>Less number of basketball courts ?</p>
            </div>
        </div>
        </div>
        </div>
        <div className='icons-container'>
            <div className='icons-footer'>
            <FaFacebookF/>
            </div>
            <div className='icons-footer'>
            <GrTwitter />
            </div>
            <div className='icons-footer'>
            <GrInstagram/>
            </div>
            <div className='icons-footer'>
            <GrPinterest/>
            </div>
            <div className='icons-footer'> 
            <BsFillSuitHeartFill/>
            </div>
        </div>
        <div className='links-container'>
            <div className='links-footer'>
              <h4>HOME</h4>
            </div>
            <div className='links-footer'>
            <h4>ABOUT</h4>
            </div>
            <div className='links-footer'>
            <h4>CONTACT</h4>
            </div>
            <div className='links-footer'>
            <h4>BLOGS</h4>
            </div>
            <div className='links-footer'> 
            <h4>ARTICLES</h4>
            </div>
        </div>
        <div className='copyright-container'>
            <p>© 2023 ALL RIGHT REGISTERED</p>
        </div>
    </div>
  )
}

export default Footer