import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({obj}) => {

  const navigate = useNavigate();

  useEffect(() => {
    navigation();
  }, []);
  
  const navigation = () => {
    sessionStorage.removeItem("jwtToken");
    if(obj.tg){
     obj.fun() ;
    }
    navigate("/");
  };

  return <></>;
};

export default Logout;
