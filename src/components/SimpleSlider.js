import React from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/ComponentsStyle/SimpleSlider.css' ;
import Card2 from './Card';

const SimpleSlider = () =>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

return (
  <div className="simple">
    <h2 className="simple-slider-heading">Blogs & Articles</h2>
    <Carousel className="simple-slider-container" responsive={responsive}>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
      <div className="simple-slider-card-container">
        <img className="simple-slider-card-image" style={{backgroundImage:`url(${"https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"})`,backgroundSize:'cover',backgroundPosition:'center'}}/>
        <p className='simple-slider-card-body-category'><i>in</i>&nbsp;<span className='simple-slider-card-category-highlight'>Technical</span> </p>
            <h4 className='simple-slider-card-body-title'>This is what devepers are doing ?</h4>
      </div>
  </Carousel>
  </div>
    );
}
  export default SimpleSlider