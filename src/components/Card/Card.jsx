import React from 'react'
import "./Card.css"
import { useCart } from 'react-use-cart'
const Card = (props) => {
    const {addItem} = useCart();
  return (
    <div>
        <div className="button-89" role="button">
            <img className="img" src={props.img}></img>
            <span className='title'>{props.name}</span>
            <p className='desc'>{props.desc}</p>
            <span className='title'>{props.price}</span>
            <button className='addToCart' onClick={() => addItem(props.product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Card