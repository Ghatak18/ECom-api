import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './components/Cart/Cart'

function App() {
  const navigate = useNavigate()
    
  const [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((json)=>{
              console.log(json)
              setProducts(json)
  })
    },[]
  )
 
  const handleCart = () =>{
    navigate("/cart")
  }
  return (
    <>
    <button onClick={handleCart}>Cart</button>
    <div className='container'>
    {products.map((product) =>(
    <Link key={product.id} to={`/details?id=${product.id}`}>
    <Card key={product.id} name={product.title} img={product.image}
      desc={product.description} price = {product.price} product={product}/>
      </Link>
      ))}
    </div>
    <Cart/>
    </>
  )
}

export default App
