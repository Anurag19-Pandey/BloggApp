import React from 'react'
import '../css/PagesStyle/UserProfile.css' ;
import MyBlogs from '../components/MyBlogs';
import {AiFillInstagram , AiFillFacebook,AiFillSetting,AiOutlineEdit , AiOutlineLogout} from 'react-icons/ai' ;
import {RiDoubleQuotesL , RiDoubleQuotesR} from "react-icons/ri" ;

const UserProfile = () => {
  return (
    <div>
    <div className='userprofile-container'>
        <div className='userprofile-right-section'>
        <img className='userprofile-right-section-image' style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1415889455891-23bbf19ee5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
       <h2 className='userprofile-right-section-quote'><RiDoubleQuotesL className='profile-quotes-icon'/>&nbsp;Blogging is a conversation not a code.&nbsp;<RiDoubleQuotesR className='profile-quotes-icon'/></h2>
              <img className='userprofile-right-section-user-image' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
       <div className='profile-icons'>
       <div className='edit-icon user-profile-icons'>
        <AiOutlineEdit/>
       </div>
        <div className='setting-icon user-profile-icons'>
        <AiFillSetting/>
        </div>
        <div className='instagram-icon user-profile-icons'>
        <AiFillInstagram/>
        </div>
        <div className='facebook-icon user-profile-icons'>
        <AiFillFacebook/>
        </div>
        <div  className='logout-icon user-profile-icons'>
        <AiOutlineLogout/>
        </div>
       </div>
        </div>   
    </div>
    <div className='userinfo-container'>
          <h2>George Kimble</h2>
          <p>Blogger</p>
    </div>
    <div className='user-analytics'>
          <div className='followers'>
          <h2>Followers</h2>
          <p>1,624</p>
          </div>
          <hr className='vertical-line'/>
          <div className='posts'>
          <h2>Posts</h2>
          <p>41</p>
          </div>
          <hr className='vertical-line'/>
          <div className='impression'>
          <h2>Impressions</h2>
          <p>10K</p>
          </div>
    </div>
    <div>
        <MyBlogs/>
    </div>
    </div>
   
  )
}

export default UserProfile