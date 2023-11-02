import React, { useState } from "react";
import { useNavigate } from "react-router";
import userContext from "../ContextApi/UserContext";
import { useContext } from "react";

const PaymentPage = () => {
    const navigate = useNavigate();
    const{setCartArray} = useContext(userContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);

    if (cardNumber === "" || cardName === "" || cardExpiry === "" || cardCVV === "") {
      setIsError(true);
    } else {
      setIsSuccess(true);
        setCartArray([]);
        alert("your order is placed and you will be redirected to Home Page")
        navigate('/');
    }
  };

  return (
    <div style={{margin:'1rem',padding:'1rem'}}>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div class="card" style={{display:'flex',flexDirection:'column',height:'60vh',justifyContent:'space-evenly'}}>
          <div class="card-body" style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <div class="form-group">
              <label for="cardNumber">Card Number</label>
              <input
                type="text"
                class="form-control"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="cardName">Card Name</label>
              <input
                type="text"
                class="form-control"
                id="cardName"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="cardExpiry">Card Expiry</label>
              <input
                type="month"
                class="form-control"
                id="cardExpiry"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="cardCVV">Card CVV</label>
              <input
                type="number"
                class="form-control"
                id="cardCVV"
                value={cardCVV}
                onChange={(e) => setCardCVV(e.target.value)}
              />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
        {isError ? (
          <div class="alert alert-danger">
            <strong>Error!</strong> Please enter all required fields.
          </div>
        ) : (
          isSuccess ? (
            <div class="alert alert-success">
              <strong>Success!</strong> Your payment has been processed successfully.
            </div>
          ) : null
        )}
      </form>
    </div>
  );
};

export default PaymentPage;
