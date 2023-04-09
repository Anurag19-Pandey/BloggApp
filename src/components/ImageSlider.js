import React,{useState , useEffect} from 'react'
import '../css/ComponentsStyle/ImageSlider.css';
import {RiDoubleQuotesL , RiDoubleQuotesR} from "react-icons/ri" ;
import {AiOutlineArrowLeft , AiOutlineArrowRight} from "react-icons/ai" ;

const ImageSlider = ({slides}) => {

    const [currentIndex , setCurrentIndex ] = useState(0) ;
    const slideStyle  = {
        width : "100%",
        height : "100vh" ,
        backgroundPosition : "center" ,
        backgroundSize : "cover" ,
        backgroundImage:`url(${slides[currentIndex].url})`,
        transition: 'all 0.8s ease-in'
    }

    const goToPrevious = () =>{
        if(currentIndex == 0){
            setCurrentIndex(slides.length - 1) ;
        }
        else{
            setCurrentIndex(currentIndex - 1) ;
        }
    }

    const goToNext = () =>{
        if(currentIndex == slides.length - 1){
            setCurrentIndex(0) ;
        }
        else{
            setCurrentIndex(currentIndex + 1) ;
        }
    }

    useEffect(()=>{
       const intervalId = setInterval(() => {
            goToNext() ;
        }, 7000);
        return () => clearInterval(intervalId);
    },[currentIndex])

  return (
    <div className='slider-container'>
        <div style={slideStyle}>
        <div>
            <button className='slider_prev_button' onClick={goToPrevious}><AiOutlineArrowLeft className='slider_arrow_icons'/></button></div>
        <div>
            <button className='slider_next_button' onClick={goToNext}><AiOutlineArrowRight className='slider_arrow_icons'/></button>
        </div>
        <div className="slide-content" >
            <p className='slider_category'>{slides[currentIndex].category}</p>
            <h3 className='slider_title'><RiDoubleQuotesL className='quotes_icon'/>&nbsp;{slides[currentIndex].title}&nbsp;<RiDoubleQuotesR className='quotes_icon'/></h3>
            <p className='slider_author'>{slides[currentIndex].author}</p>
        </div>
        </div>
    </div>
  )
}

export default ImageSlider