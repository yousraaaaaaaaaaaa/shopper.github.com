import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrums from '../Components/BreadCrum/BreadCrums'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'



  const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams();

   const product = all_product.find((searchedProduct) => {
    
     return searchedProduct.id === Number(productId);
  
  });
 
      return (
    <div>
      <BreadCrums  product={product}/>
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product
