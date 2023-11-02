import React from "react";
import "./signup.css";
import Navbar from "../components/navbar/Navbar";
import SignupPoster from "../Assets/signupPoster.webp";
import { useState, useEffect } from "react";
import userContext from "../ContextApi/UserContext";
import { useContext } from "react";

const SignupPage = () => {
  const [value, setValue] = useState("");
  const{userLoggedIn,setUserLoginStatus} = useContext(userContext);

  // eslint-disable-next-line
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // eslint-disable-next-line
  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.length === 0) {
      alert("Please enter a value");
    } else if (value.length > 10 || value.length < 10) {
      alert("The value must be 10 digits");
    } else {
      localStorage.setItem('phone',value)
      setUserLoginStatus(true);
    }
  };

  function logout(){
    localStorage.removeItem('phone');
    setUserLoginStatus(false);
  }

  useEffect(()=>{
    if(localStorage.getItem('phone')!== null){
      setUserLoginStatus(true);
    }
    // eslint-disable-next-line
},[])
  return (
    <div id="mainn">
      <Navbar />
      {userLoggedIn ? <div className="logOutButtonContainer">
       <h1><strong>You are Already Logged In </strong></h1>
       <button className="btn btn-danger" style={{width:'30%',fontSize:'larger'}} onClick={logout}><b>Log Out</b></button>
      </div>:<div className="FormContainer">
        <div>
          {" "}
          <img src={SignupPoster} alt="" className="SignupPoster" />
        </div>
        <div style={{padding:'2rem',backgroundColor:'white',width:'430px',textAlign:'center'}}>
          {" "}
          <h4>
            <strong>Sign Up to view Your profile</strong>
          </h4>
        </div>
        <div className="formm">
            <h4 style={{margin:'0'}}><strong>IN +91 :</strong> </h4>
            <input type="number" name="" id="fieldNum" onChange={handleChange}/>
            
        </div>
        <div className="buttonn" style={{backgroundColor:'white',width:'430px'}}><button className="btn btn-danger continue" style={{width:'80%'}} onClick={handleSubmit}><strong>Sign Up</strong></button></div>
        <div className="condition" style={{backgroundColor:'white',width:'430px',textAlign:'center'}}>By continuing, you agree to Meesho’s <br/> Terms & Conditions and Privacy Policy</div>
      </div>}
    </div>
  );
};

export default SignupPage;
