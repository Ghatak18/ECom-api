import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart'


const Cart = () => {
    const navigate = useNavigate()
    const {
        isEmpty,
        items,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    
  const handleHome = () =>{
    navigate("/")
  }
    if(isEmpty) return (
        <div>
        <button onClick={handleHome}>Home</button>
            
            <h2>Your Cart is Empty Brother</h2>
        </div>
    )
  return (
    <div>
        <button onClick={handleHome}>Home</button>
        {console.log(items)}
        <h2>Hellow Brother! You have {totalItems} items and your grand total is {cartTotal}</h2>
        <ul>
        {items.map(item => (

              <li key={item.id}>
                {item.title} - ${item.price} X {item.quantity} 
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => removeItem(item.id)}>Remove item</button>
              </li>
            ))}
          </ul>
    </div>
  )
}

export default Cart