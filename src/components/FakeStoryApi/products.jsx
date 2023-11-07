import React, { useEffect, useState } from 'react'
import ProductsStyles from './Products.module.css'

function Products() {
  let [data,setData] = useState([])

  useEffect(()=>{
    getProducts()
  },[])

  async function getProducts() {
    let response = await fetch('https://fakestoreapi.com/products')
    response = await response.json()
    console.log(response);
    setData(response)
  }
  
  return (
    <div className={ProductsStyles.productsCont}>
      {data.map(({id,image,price,title,rating}) => {
        return <section key={id} className={ProductsStyles.mainCont}>
          <img src={image} alt={title} />
          <div className={ProductsStyles.productsContents}>
          <h3>{title}</h3>
          <div>
            <h4>Price: {price}</h4>
            <p>Rating: {rating.rate}</p>
          </div>
          </div>   
        </section>
      })}
    </div>
  )
}

export default Products