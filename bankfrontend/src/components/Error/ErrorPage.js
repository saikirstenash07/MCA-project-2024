import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link , useLocation } from "react-router-dom";

const ErrorPage = ({obj}) => {
  const location = useLocation();
  const errorMessage = location.state?.errorMessage || " We're sorry, but the page you're looking for couldn't be found.";
   const resetToggle =()=>{
    if(obj.tg){
      obj.fun() ;
     }
     sessionStorage.removeItem("jwtToken");
   }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h1" color="error" sx={{ mb: 2 }}>
        Oops!
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Something went wrong.
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
       
        {errorMessage}
      </Typography>
      <Button onClick={()=>resetToggle()} component={Link} to="/" variant="contained" color="primary">
        Go to Home
      </Button>
    </Container>
  );
};

export default ErrorPage;
