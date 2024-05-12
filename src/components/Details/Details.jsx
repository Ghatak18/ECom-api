import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import "./details.css"
import Header from '../Header/Header';

const Details = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setProduct(json);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
      });
  }, [id]); // Include id in dependency array to re-fetch when id changes

  const handleCart = () =>{
    navigate("/cart")
  }

  const handleHome = () => {
    navigate('/')
  }

  return (
    <div>
      <Header/>
    <div className='detContainer'>
      
      
      {product && (
        <Card key={product.id} name={product.title} img={product.image} desc={product.description} price = {product.price} product={product} />
      )}

      <button onClick={handleHome} className='btn1'>Home</button>
      <button onClick={handleCart} className='btn1'>Cart</button>
    </div>
    </div>
  );
};

export default Details;
