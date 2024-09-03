import React, { useContext ,useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_doll_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    console.log(size);
  };

  return (
    <div className='ProductDisplay'>
      <div className="ProductDisplay-left">
        <div className="ProductDisplay-imageList">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="ProductDisplay-img">
          <img className='ProductDisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="ProductDisplay-right">
        <h1>{product.name}</h1>
        <div className="ProductDisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_doll_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="ProductDisplay-right-prices">
          <div className="oldprice"><p>${product.old_price}</p></div>
          <div className="newprice"><p>${product.new_price}</p></div>
        </div>
        <div className="ProductDisplay-description">
          <p>{product.description || "No description available"}</p>
        </div>
        <div className="ProductDisplay-size">
          <h1>Select Size</h1>
          <div className="sizes">
          {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <div
              key={size}
              className={`size-box ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeSelect(size)}
            >
              {size}
            </div>
          ))}
        </div>
        </div>
         <button onClick={() => { addToCart(product.id, selectedSize); }} disabled={!selectedSize}>
          ADD TO CART
        </button>
        <p className="ProductDisplay-category">
          <span>Category:</span> {product.category || "Unknown Category"}
        </p>
        <p className="ProductDisplay-tags">
          <span>Tags:</span> {product.tags?.join(', ') || "No tags available"}
        </p>
      </div>
    </div>
  );
};
export default ProductDisplay;