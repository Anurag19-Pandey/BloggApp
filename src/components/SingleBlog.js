import React from 'react'
import '../css/ComponentsStyle/SingleBlog.css' ;
import {TiSocialFacebook,TiSocialTwitter} from "react-icons/ti" ;
import {BiLink} from 'react-icons/bi' ;
import {BsBookmarkFill , BsThreeDots} from 'react-icons/bs';
import {MdOutlineBookmarkAdd} from 'react-icons/md';
const SingleBlog = () => {
  return (
    <div className='single-blog-container'>
    <div className='blog-content-container'>
        <div className='blog-content'>
        <div className='blog-content-image'>
        <img className='blog-user-img' style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        </div>
        <div className='blog-content-userinfo'>
            <h3>George Kimble</h3>
            <p>Feb 5 </p>
        </div>
        <div className='blog-content-icons'>
            <TiSocialFacebook className='blog-content-icon'/>
            <TiSocialTwitter className='blog-content-icon'/>
            <BiLink className='blog-content-icon'/>
            <MdOutlineBookmarkAdd className='blog-content-icon'/>
            <BsThreeDots className='blog-content-icon'/>
        </div>
        </div>
        <div className='blog-title'>
        <h1>5 React Design Patterns You Should Know</h1>
    </div>
    <div className='blog-description'>
        <p>
        What is User Authentication ?
Authentication is verifying application users who they say they are. From an application point of view, all users seem identical and we don’t know who is using our application. So to identify every user uniquely we need authentication.

Types of Authentication Strategy
✅ Knowledge Based Authentication Strategy
✅ Ownership Based Authentication Strategy
✅ Biological Based Authentication Strategy

Let’s understand each of them one by one
🟡 Knowledge-Based Authentication Strategy — This strategy involves the use of the password or setting up of a pin by a user or the user is verified by using a security question.

Problems with this strategy are that
➡️ Highly dependent on the strength of the password.

➡️ Most of the time the password or security question is guessable or searchable.

🟡 Ownership-Based Authentication Strategy — This strategy involves the use of an email address or mobile number. The user is verified by sending an OTP to their email address or mobile number.

Problems with this strategy are that
➡️ There are chances that physical devices get stolen.

➡️ It relies on a knowledge-based authentication strategy as well.

🟡 Biological Based Authentication Strategy — This strategy involves the use of fingerprint or facial recognition or even eye scans.

Problems with this strategy are that
➡️ This strategy is not so famous on Web Applications but highly popular with mobile applications.

JSON WEB TOKENS
JSON Web Tokens are nothing but strings that we give to users when they authenticate. It is a unique string that we give to users when they logged in. It can be used instead of the user’s password to interact with protected server resources. Instead of passing a password to the server all the time, we use this to verify our user.
        </p>
    </div>
    <img className='blog-image' style={{backgroundImage:`url(${"https://miro.medium.com/v2/resize:fit:1100/format:webp/1*IKBCXcxiCVEONN2HLqe3LA.png"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
    </div>
    <div className='userinfo-blog-container'>
        <hr className='vertical-line-blog'/>
        <img className='side-container-user-image-blog' style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <div className='side-container-userinfo'>
            <h3>George Kimble</h3>
            <p>Feb 5 </p>
            <p>1,641 Followers </p>
        </div>
        <div className='userprofile-description'>
            <p>🌐 Web3 Enthusiast | 🤖 AI Explorer | 🚀 Software Engineer | On a journey to make world a better place.</p>
        </div>
        <div className='follow-btn-blog'>
            <button>Follow</button>
        </div>
        <div className='more-from-us-section'>
            <h3>More from Us</h3>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                  <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
            <div className='more-from-us-artiles-section'>
            <div className='more-from-us-artiles-section-title-desc'>
                <h3>How to Set up a TypeScript + NodeJs Server</h3>
                <p>With new releases and tools, setting up a node server </p>
            </div>
            <div>
                <img  style={{backgroundImage:`url(${" https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>       
            </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default SingleBlog