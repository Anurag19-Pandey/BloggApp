import React from 'react'
import '../css/ComponentsStyle/MyBlogs.css' ;

import MostPopularBlogs from './MostPopularBlogs';
const MyBlogs = () => {
  return (
    <div className='my-blogs'>
        <MostPopularBlogs/>
    </div>
  )
}

export default MyBlogs