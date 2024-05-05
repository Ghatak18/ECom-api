import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import "./details.css"

const Details = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [product, setProduct] = useState(null);

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

  return (
    <div className='detContainer'>
      {product && ( // Check if product is not null before rendering
        <Card key={product.id} name={product.title} img={product.image} desc={product.description} price = {product.price} product={product} />
      )}
    </div>
  );
};

export default Details;
