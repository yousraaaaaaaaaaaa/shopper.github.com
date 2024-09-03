import React, { useContext, useState , useEffect } from 'react'
import './Css/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import Item from '../Components/Items/items';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [products, setProducts] = useState([]);

  // Utilisez useEffect pour initialiser l'état des produits
  useEffect(() => {
    setProducts(all_product);
  }, [all_product]);

  const handleSearchedProduct=(event)=>{
    const val=event.target.value
     if (val === '') {
      setProducts(all_product);
    } else {
    const SearchedProduct =[...products].filter((product)=>{
      return product.name.toLowerCase().includes(val.toLowerCase())
    })
    setProducts(SearchedProduct)
  }
    

  }

  const handleSortingProduct = (event) => {
    const val = event.target.value;
    let sortedProducts = [...products];
    switch (val) {
      case "Sort by":
        sortedProducts = [...all_product]; // Réinitialisez à tous les produits
        break;
      case "Price-low to hight":
        sortedProducts.sort((p1, p2) => p1.new_price - p2.new_price);
        break;
      case "Price-hight to low":
        sortedProducts.sort((p1, p2) => p2.new_price - p1.new_price);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt="" />
      <div className="shop-category-index-sort">
        <div className='shop-category-input'>  <input type="text" placeholder='Enter the name of the product here' onChange={handleSearchedProduct}/> <button>Search</button></div>
        <select className="shop-category-sort" onChange={handleSortingProduct}>
          <option value="Sort by">Sort by</option>
          <option value="Price-hight to low">Price-hight to low</option>
          <option value="Price-low to hight">Price-low to hight</option>
        </select>
      </div>
      <div className="shop-category-products">
        {
          products.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  img={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })
        }
      </div>
      <div className="shop-category-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;