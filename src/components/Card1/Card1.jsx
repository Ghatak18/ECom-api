import React from 'react'
import "./Card1.css"
import { useCart } from 'react-use-cart'
const Card1 = (props) => {
    const {addItem} = useCart();
    const handleAddToCart = (e) => {
      e.stopPropagation(); // Prevent event propagation to parent elements
      addItem(props.product);
  };

  return (
    <div>
        <div className="button-89" role="button">
            <img className="img" src={props.img}></img>
            <span className='title'>{props.name}</span>
            <p className='desc'>{props.desc}</p>
            <span className='title'>{props.price}</span>
            {/* <button className='addToCart' onClick={handleAddToCart}>Add to Cart</button> */}
        </div>
    </div>
  )
}

export default Card1