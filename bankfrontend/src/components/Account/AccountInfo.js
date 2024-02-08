import { Container, Paper, Typography,Button,Box } from "@mui/material";
import BackButton from "./BackButton";
import React, { useEffect, useState } from "react";
import { getAccount } from "../service/apiPrivate";
import { useNavigate } from "react-router-dom";

const AccountDetails = () => {
  const navigate = useNavigate();
  const [accountData, setAccountData] = useState({});

  useEffect(() => {
    fetchAccountDetails();
  }, []);

  const fetchAccountDetails = async () => {
    try {
       const response = await getAccount();
       console.log(response.data);
      setAccountData(response.data);
    } catch (error) {
      navigate("/error", { state: { errorMessage: error.message } });
      console.error("An error occurred: ", error.message);
    }
  };
  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 1}}>
        <Typography variant="h5" gutterBottom>
          Account Information
        </Typography>
        {/* <Typography  sx={{ fontSize: 17 }} gutterBottom>
          <strong>Name:</strong> {accountData.name}
        </Typography>
        <Typography  sx={{ fontSize: 17 }} gutterBottom>
          <strong>Email:</strong> {accountData.email}
        </Typography>
        <Typography  sx={{ fontSize: 17 }} gutterBottom>
          <strong>Mobile Number:</strong> {accountData.mobileNumber}
        </Typography> */}
        <Typography gutterBottom>
          <strong>Account Number:</strong> {accountData.accountNumber}
        </Typography>
        <Typography  sx={{ fontSize: 17 }} gutterBottom>
          <strong>Account Type:</strong> {accountData.accountType}
        </Typography>
        <Typography  sx={{ fontSize: 17 }} gutterBottom>
          <strong>Branch Address:</strong> {accountData.branchAddress}
        </Typography>
        <Typography  sx={{ fontSize: 17 }} gutterBottom>
          <strong>Create Date:</strong> {accountData.createDt}
        </Typography>
      </Paper>
      <Box display="flex" justifyContent="center" >
       <BackButton/>
      </Box>
    </Container>
  );
};

export default AccountDetails;

