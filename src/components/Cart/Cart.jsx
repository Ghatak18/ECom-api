import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import './Cart.css'; // Import Cart component-specific CSS for styling
import Header from '../Header/Header';

const Cart = () => {
    const navigate = useNavigate();
    const {
        isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    
    const handleHome = () => {
        navigate("/");
    };

    const handleProceed = () => {
        navigate("/proceed");
    };

    return (
        <div className='headcontainer'>
            <Header />
            <div className='container1'>
                <div className="cart-container">
                    {!isEmpty && (
                        <>
                            <button onClick={handleHome} className="btn">Home</button>
                            <h2>Hello! You have {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart.</h2>
                            <h3>Total: ${cartTotal.toFixed(2)}</h3>
                            <ul className="cart-items">
                                {items.map(item => (
                                    <li key={item.id} className="cart-item">
                                        <div className="item-details">
                                            <span className="item-title">{item.title}</span>
                                            <span className="item-price">${item.price}</span>
                                            <div className="quantity-buttons">
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                            </div>
                                            <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
                                        </div>
                                        <img src={item.image} alt={item.title} className="item-image" />
                                    </li>
                                ))}
                            </ul>
                            <button onClick={() => emptyCart()} className="empty-cart-btn">Empty Cart</button>
                            <button onClick={handleProceed} className='proceed'>Proceed</button>
                        </>
                    )}
                    {isEmpty && (
                        <div className="cart-container empty">
                            <button onClick={handleHome} className="home-btn">Home</button>
                            <h2>Your Cart is Empty</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
