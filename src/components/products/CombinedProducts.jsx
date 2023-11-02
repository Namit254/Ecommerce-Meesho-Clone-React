import React, { useEffect, useState } from "react";
import "./comProduct.css";
import axios from "axios";
import ProductCard from "../productCard/ProductCard";
import { useNavigate } from "react-router";

const CombinedProducts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  function pagination(e){
    if(e.target.id === 'next'){
      setPage(2);
    }else{
      setPage(1);
    }
  }
  const fetchData = async () => {
    const response = await axios.get(
      `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${page}`
    );
    setData(response.data);
  };

  function redirectToALl(){
    navigate('/allproduct');
  }

  useEffect(() => {
    fetchData();
    if(page === 1){
      document.getElementById('prev').disabled = true;
      document.getElementById('next').disabled = false;
    }else{
      document.getElementById('prev').disabled = false;
      document.getElementById('next').disabled = true;
    }
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="combProduct_Container">
      <div>
        <h1>
          <strong>Top Categories to choose from</strong>
        </h1>
      </div>
      <div className="headingOfPro">
        <h4>
          <strong>Products For You</strong>
        </h4>
        <h4 onClick={redirectToALl} className="allProductRedirect">
          <strong>See All</strong>
        </h4>
      </div>
      <div className="productDiv">
        <div className="productCard">
          {data.map((e) => (
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "80%",
        }}
      >
        {" "}
        <button className="btn btn-secondary" id="prev" onClick={pagination}>
          Previous Page
        </button>{" "}
        <button className="btn btn-secondary" id="next" onClick={pagination}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default CombinedProducts;
