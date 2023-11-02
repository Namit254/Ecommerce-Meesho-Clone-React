import React from 'react'
import './productcard.css'
import { useContext } from 'react'
import userContext from '../../ContextApi/UserContext'
import { useNavigate } from 'react-router'

const ProductCard = (props) => {
    const{image, title, price, rating} = props
    const{setCurrentProduct} = useContext(userContext);
    const navigate = useNavigate();

    function redirectToDetails(){
      setCurrentProduct(props);
        navigate('/productDetails')
    }
  return (
    <div className="AppCard">
    <div className="cardContain" onClick={redirectToDetails}>
      <div className="imgholder">
        {
          <img
            src={image}
            alt="productsimage"
            className="productImg"
          />
        }
      </div>
      <div className="productDetails">
        <div>{title}</div>
        <div>
          {" "}
          ${price} <sub className="onwards">onwards</sub>
        </div>
        <div>Free Delivery</div>
        <div>
          {" "}
          
          <div className="ratings">
            {" "}
            {rating.rate}
          </div>{" "}
          {rating.count} reviews
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
