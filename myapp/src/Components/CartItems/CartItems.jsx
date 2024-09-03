import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
  const { getTotalAmount, cartItems, all_product, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartItems'>
      
      <hr />
      {Object.keys(cartItems).map((key) => {
        const item = cartItems[key];
        const product = all_product.find((p) => p.id === item.productId);

        if (product) {
          return (
            <div key={key} className='productDetails2'>
              <div className="productDetails">
                <img className='product-icon' src={product.image} alt="" />
                <div className="productDetails-withoutimg">
                <p id='prod-name'>{product.name}</p>
                <p id='size'>{item.size}</p> 
                <p>${product.new_price}</p>
                <button id='quantity' className="quantity">{item.quantity}</button>
                </div>
                <img
                  className='cartItems-remove-icon'
                  onClick={() => { removeFromCart(product.id, item.size); }}
                  src={remove_icon}
                  alt="Remove"
                />
              </div>
              
            </div>
          );
        }
        return null;
      })}
      <hr />
      <div className="cartItems-down">
        <div className="cartItems-left">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total">
              <p>Subtotal</p> <span>${getTotalAmount()}</span>
            </div>
            <hr />
            <div className="cartItems-total">
              <p>Shipping fee</p> <span>free</span>
            </div>
            <hr />
            <div className="cartItems-total">
              <p>Total</p> <span>${getTotalAmount()}</span>
            </div>
            <button className='checkout-btn'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
        <div className="cartItems-right">
          <p>If you have a promo code, enter it here</p>
          <div className="promo-code-input">
            <input type="text" placeholder='promo code' />
            <button className='codepromo-btn'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
