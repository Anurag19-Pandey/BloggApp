import React from 'react'
import '../css/ComponentsStyle/MostPopularBlogs.css' ;
import {IoIosArrowForward , IoIosArrowBack} from "react-icons/io" ;
import Card from './Card';

const MostPopularBlogs = () => {

  return (
    <div className='most-popular-blog-container'>
        <div className='most-popular-blog-content'>
        <h1> Most Popular </h1>
        <div className="most-popular-blogs">
            <Card imgUrl={"https://images.unsplash.com/photo-1519337364444-c5eeec430101?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80"}/>
            <Card imgUrl={"https://images.unsplash.com/photo-1625123627254-03a56c6a6b1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"}/>
            <Card imgUrl={"https://images.unsplash.com/photo-1495001258031-d1b407bc1776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}/>
            <Card imgUrl={"https://images.unsplash.com/photo-1523634921619-37ce98c1877f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"}/>
            <Card imgUrl={"https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=499&q=80"}/>
            <Card imgUrl={"https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1976&q=80"}/>
        </div>
        </div>
    </div>
  )
}

export default MostPopularBlogs