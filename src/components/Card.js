import React from 'react'
import '../css/ComponentsStyle/Card.css' ;

const Card = ({imgUrl}) => {

  const CardImage = {
    width: '270px',
    height: '170px',
    backgroundPosition : 'center' ,
    backgroundSize: 'cover',
    backgroundImage : `url(${imgUrl})`,
  }

  return (
    <div className='card-container'>
        <img style={CardImage} />
        <div className='card-body'>
            <p className='card-body-category'><i>in</i>&nbsp;<span className='card-category-highlight'>Technical</span> </p>
            <h4 className='card-body-title'>This is what devepers are doing ?</h4>
        </div>
    </div>
  )
}

export default Card