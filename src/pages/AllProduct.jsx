import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import axios from "axios";
import ProductCard from "../components/productCard/ProductCard";
import "./allproduct.css";

const AllProduct = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`
    );

    setData(response.data);
    setFilteredData(response.data);
  };

  function comparator(a, b) {
    return a.price - b.price;
  }
  function comparatorB(a, b) {
    return b.price - a.price;
  }

  //function to sort the products on the basis of price
  function sortArray(e) {
    const sortedArray = [];
    if (e.target.value === "low") {
      // console.log("low clicked");
      data.map((e) => sortedArray.push(e));
      sortedArray.sort(comparator);
      setFilteredData(sortedArray);
    } else if (e.target.value === "high") {
      // console.log("high clicked");
      data.map((e) => sortedArray.push(e));
      sortedArray.sort(comparatorB);
      setFilteredData(sortedArray);
    }
  }

  function searchProduct(e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    setFilteredData(filteredArray);
  }

  const handleCategoryFilter = (e) => {
    const category = e.target.name;
    let newData;
    if (e.target.checked) {
      newData = [...selectedCategories, category];
      setSelectedCategories(newData);
    } else {
      newData = selectedCategories.filter((cat) => cat !== category);
      setSelectedCategories(newData);
    }

    if (newData.length === 0) {
      setFilteredData(data);
    } else {
      let x = data.filter((item) => newData.includes(item.category));
      setFilteredData(x);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="searchField">
        {" "}
        <input
          type="text"
          placeholder="Search The Product By Name"
          className="searchBar"
          onChange={searchProduct}
        />
      </div>
      <div className="allProductsContainer">
        <div className="filters">
          <div className="priceFilter">
            <h4>Price Filter</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                id="low"
                name="price"
                value="low"
                onChange={sortArray}
              />
              <label
                for="low"
                style={{ paddingLeft: "0.7rem", fontSize: "20px" }}
              >
                <strong>Low to High</strong>
              </label>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                id="high"
                name="price"
                value="high"
                onChange={sortArray}
              />
              <label
                for="high"
                style={{ paddingLeft: "0.7rem", fontSize: "20px" }}
              >
                <strong>High to Low</strong>
              </label>
            </div>
          </div>
          <div className="categoryFilter">
            <h4>Filter By Category</h4>
            <div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  type="checkbox"
                  id="men's clothing"
                  name="men's clothing"
                  onChange={handleCategoryFilter}
                />
                <label for="men's clothing" style={{ paddingLeft: "0.5rem" }}>
                  <strong>Men</strong>
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  type="checkbox"
                  id="women's clothing"
                  name="women's clothing"
                  onChange={handleCategoryFilter}
                />
                <label for="women's clothing" style={{ paddingLeft: "0.5rem" }}>
                  <strong>Women</strong>
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  type="checkbox"
                  id="electronics"
                  name="electronics"
                  onChange={handleCategoryFilter}
                />
                <label for="electronics" style={{ paddingLeft: "0.5rem" }}>
                  <strong>Electronics</strong>
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  fontSize: "20px",
                }}
              >
                <input
                  type="checkbox"
                  id="jewelery"
                  name="jewelery"
                  onChange={handleCategoryFilter}
                />
                <label for="jewelery" style={{ paddingLeft: "0.5rem" }}>
                  <strong>Jewellery</strong>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="productsList">
          {filteredData.map((e) => (
            <ProductCard
              //  index = {index}
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
    </div>
  );
};

export default AllProduct;
