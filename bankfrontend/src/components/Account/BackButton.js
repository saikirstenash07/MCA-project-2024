import {
    Box,
    Button
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";
const BackButton = () => {
    const navigate =  useNavigate() ;
  return (
    <Box display="flex" justifyContent="center" marginTop="0.5rem" >
      <Button onClick={()=>navigate(-1)} variant="contained" color="primary">
        Go Back
      </Button>
      </Box>
  )
}

export default BackButton ;