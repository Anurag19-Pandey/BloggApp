import React, { useState } from 'react'
import '../css/ComponentsStyle/HomePageBanner.css';
import {AiOutlineArrowLeft , AiOutlineArrowRight} from "react-icons/ai" ;
import ImageSlider from './ImageSlider';

const HomePageBanner = () => {

    const sliderImages = [
        { url: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80", title: 'Travelling in New Lands', category: "Travelling", author: 'Max Lenin' },
        { url: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", title: 'Swimming is harder than you think', category: "Sports", author: 'Joe John' },
        { url: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", title: 'Love Travelling', category: "Travelling", author: 'Serena Paul'},
        { url:"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",title: 'Coding is Fun with StackOverflow', category: "Technical", author: 'Anurag Pandey'},
        { url:"https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",title: 'Modern Bussiness Techniques', category: "Bussiness", author: 'Deeshant Gupta'},
        { url:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" , title:'Tickets Prices going down' ,category:'Entertainment',author: 'Gautam Chopra'}
    ]

    return (
        <div >
            <ImageSlider slides={sliderImages}/>
        </div>
    )
}

export default HomePageBanner