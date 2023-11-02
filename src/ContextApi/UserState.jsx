import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const[currentProduct,setCurrentProduct] = useState({});
  const[userLoggedIn,setUserLoginStatus] = useState(false);
  const [CartArray,setCartArray] = useState([]);
  return (
    <UserContext.Provider value={{currentProduct,setCurrentProduct,userLoggedIn, setUserLoginStatus,CartArray,setCartArray}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
