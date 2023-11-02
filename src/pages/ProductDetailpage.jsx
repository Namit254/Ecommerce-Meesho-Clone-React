import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import "./productdetail.css";
import ProductCard from "../components/productCard/ProductCard";
import axios from "axios";
import { useContext } from "react";
import userContext from "../ContextApi/UserContext";
import { useNavigate } from "react-router";

const ProductDetailpage = () => {
    // const mySet = new Set();
    const navigate = useNavigate();
    const [recommendation ,setRecommendation] = useState([]);
    const {currentProduct, userLoggedIn,CartArray,setCartArray} = useContext(userContext);

    const fetchExtraData = async () => {
       const response = await axios.get(
          `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=1`
        );
        setRecommendation(response.data);
        
      };

      useEffect(()=>{
        fetchExtraData();
    },[])

      function addToCart(){
        console.log('called')
        let present = false;
        for(let i=0;i<CartArray.length;i++){
          if(CartArray[i].id === currentProduct.id){
            present = true;
          }
        }
        if(present){
          alert("Product is already to the cart You can increase the Quantity in the Cart.");
          return;
        }
       let arr = []
       
        if(CartArray.length !== 0){
          CartArray.map((data)=>{
            return arr.push(data);
          })

        }

          if(userLoggedIn){

            arr.push(currentProduct);
            setCartArray(arr);
              alert("product Added");
              console.log(CartArray);            
          }else{
            navigate('/signup')
          }
      }
    
  return (
    <>
      <Navbar />
      <div className="detailsContainer">
        <div className="imageContainer">
          <img
            src={currentProduct.image}
            alt=""
            className="productDImages"
          />
          <button className="btn btn-danger" style={{ width: "100%" }} onClick={addToCart}>
            Add To Cart
          </button>
        </div>
        <div className="description">
          <div>
            <h3>
              <strong>{currentProduct.title}</strong>
            </h3>
          </div>
          <div>
            <h4>
              <strong>$ {currentProduct.price}</strong>
            </h4>
          </div>
          <div>
            {" "}
            <div className="ratings">
              {" "}
              <b>{currentProduct.rating.rate}/5 Ratings</b>
            </div>{" "}
            & {currentProduct.rating.count} reviews
          </div>
          <div>
            <p>Free Delivery</p>
          </div>
          <div>
            <h4>
              <strong>Category: </strong> {currentProduct.category}
            </h4>
          </div>
          <div>
            <h3>
              <strong>Product Description</strong>
            </h3>
            <div>
              <p style={{ fontSize: "20px" }}>
                {currentProduct.description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="extrarecommendation">
        <h1>Product You May Also Like</h1>
            <div className="extrarecomm">
            {recommendation.map((e) => (
                    <ProductCard
                    id={e.id}
                    title={e.title}
                    description={e.description}
                    category={e.category}
                    price={e.price}
                    image={e.image}
                    rating={e.rating}
                    quantity={1}
                    />
                ))}
            </div>
      </div>
    </>
  );
};

export default ProductDetailpage;
