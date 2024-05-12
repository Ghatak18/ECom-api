import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { Link, useNavigate } from 'react-router-dom'
import Cart from './components/Cart/Cart'
import Header from './components/Header/Header'
import Card1 from './components/Card1/Card1'

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
    <div className='main'>
      <Header/>
    <button className="btn"onClick={handleCart}>Cart</button>
    <div className='container'>
    {products.map((product) =>(
    <Link key={product.id} to={`/details?id=${product.id}`}>
    <Card1 key={product.id} name={product.title} img={product.image}
      desc={product.description} price = {"$ "+product.price} product={product}/>
      </Link>
      ))}
    </div>
    
    </div>
  )
}

export default App
