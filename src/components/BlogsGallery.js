import React from 'react'
import '../css/ComponentsStyle/BlogsGallery.css' ;
import { IoMdBatteryCharging } from 'react-icons/io';
const BlogsGallery = () => {

    const img1Style = {
        width : '400px',
        height : '350px',
        backgroundPosition : 'center' ,
        backgroundSize: 'cover',
        backgroundImage : `url(${"https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"})`,
    }

    const img2Style = {
        width : '400px',
        height : '300px',
        backgroundPosition : 'center' ,
        backgroundSize: 'cover',
        backgroundImage : `url(${"https://images.unsplash.com/photo-1669020260300-30ba614e10d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
        margin:'10px'
    }

    const img3Style = {
        width : '400px',
        height : '350px',
        backgroundPosition : 'center' ,
        backgroundSize: 'cover',
        backgroundImage : `url(${"https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,
        margin:'10px'
    }

    const img4Style = {
        width : '400px',
        height : '300px',
        backgroundPosition : 'center' ,
        backgroundSize: 'cover',
        backgroundImage : `url(${"https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`,
        margin:'10px'
    }
    

  return (
    <div className='gallery-blogs-left'>
        <div className='inner-gallery-blogs-left'>
        <div className="gallery-blogs-first-two-post">
        <div style={img1Style}>
        </div>
        <div style={img2Style}>
        </div>
    </div>
    <div className='gallery-blogs-first-two-post-content'>
    <div>
    <div className='gallery-blog-info'>
            <p><i>in</i> TECHNICAL </p>
            <h3>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</h3>
           <div className='read-more-btn'>
            <button>Read More</button>
            </div>
        </div>
    </div>
 
        <div className='gallery-blog-info'>
            <p><i>in</i> TECHNICAL </p>
            <h3>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</h3>
            <div className='read-more-btn'>
            <button>Read More</button>
            </div>
        </div>
    </div>
        </div>
        <div className='inner-gallery-blogs-left'>
        <div className="gallery-blogs-first-two-post">
        <div style={img3Style}>
        </div>
        <div style={img4Style}>
        </div>
    </div>
    <div className='gallery-blogs-first-two-post-content'>
    <div>
    <div className='gallery-blog-info'>
            <p><i>in</i> TECHNICAL </p>
            <h3>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</h3>
           <div className='read-more-btn'>
            <button>Read More</button>
            </div>
        </div>
    </div>
 
        <div className='gallery-blog-info'>
            <p><i>in</i> TECHNICAL </p>
            <h3>More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous…</h3>
            <div className='read-more-btn'>
            <button>Read More</button>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default BlogsGallery;