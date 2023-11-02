import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import userContext from "../ContextApi/UserContext";
import { useContext } from "react";
import ProductCard from "../components/productCard/ProductCard";
import { useNavigate } from "react-router";
import "./cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [totalQuantity,setTotalQuantity] = useState(0);
  const [totalPrice,setTotalPrice] = useState(0);

  const { CartArray ,setCartArray} = useContext(userContext);

  const increaseQuantity = (itemId) => {
    setCartArray((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCartArray((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removal = (itemId) =>{
      let arr = CartArray.filter(item => item.id !== itemId);
      setCartArray(arr);
  }

  useEffect(()=>{
    let quan = 0;
    let pricett = 0;
    if(CartArray.length !== 0){
      CartArray.map((e)=>{
         return quan += e.quantity;
      })
      CartArray.map((e)=>{
        return pricett += (e.price * e.quantity);
     })

      setTotalQuantity(quan);
      setTotalPrice(pricett);
    }
  },[CartArray])
  return (
    <div>
      <Navbar />
      {CartArray.length === 0 ? (
        <div className="messageContainer">
          <h1>No Products Added to the Cart</h1>
        </div>
      ) : (
        <div className="cartItemContainer">
          <div className="CartProducts">
            {CartArray.map((e) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProductCard
                    //  index = {index}
                    title={e.title}
                    description={e.description}
                    category={e.category}
                    price={e.price}
                    image={e.image}
                    rating={e.rating}
                    quantity={1}
                  />
                  <div>
                    <button
                      className="btn btn-info"
                      style={{ color: "white", margin: "5px" }}
                      onClick={() => decreaseQuantity(e.id)}
                    >
                      -
                    </button>
                    {e.quantity}
                    <button
                      className="btn btn-info"
                      style={{ color: "white", margin: "5px" }}
                      onClick={() => increaseQuantity(e.id)}
                    >
                      +
                    </button>
                    <button className="btn btn-danger" onClick={() => removal(e.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="billingDetails">
            <div className="billingData">
              <p>Number of Products</p>
              <p>{totalQuantity}</p>
            </div>
            <div className="billingData">
              <p>Total Billing Amount</p>
              <p> $ {totalPrice.toFixed(2)}</p>
            </div>
            <div className="billingData">
              <p>Delivery Charges</p>
              <p>Free Delivery</p>
            </div>
            <div className="billingData">
              <p>Discount 5%</p>
              <p> $ {((totalPrice*5)/100).toFixed(2)}</p>
            </div>
            <div className="billingData">
              <p>Total Payable Amount</p>
              <p>{(totalPrice - (totalPrice*5)/100).toFixed(2)}</p>
            </div>
            <button className="btn btn-danger chechoutbtn" onClick={()=>navigate('/paymentpage')}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
