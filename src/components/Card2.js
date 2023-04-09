import React from 'react'
import '../css/ComponentsStyle/Card2.css' ;

const Card2 = ({imgUrl}) => {

  return (
    <div className='card2-container'>
    <img className='card2-image' src={imgUrl} /> 
    <div className='card2-body'>
        <p className='card2-body-category'><i>in</i>&nbsp;<span className='card-category-highlight'>Technical</span> </p>
        <h4 className='card2-body-title'>This is what devepers are doing ?</h4>
    </div>
</div>
  )
}
 
export default Card2