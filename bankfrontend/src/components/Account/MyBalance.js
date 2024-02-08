import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBalance } from "../service/apiPrivate";
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";


const MyBalance = () => {
  const navigate = useNavigate();
   const[balance , setBalance] = useState([]) ;

   useEffect(()=>{
    getBalanceDetails() ;
   },[])

   const getBalanceDetails= async() =>{
    try{
      const response = await getBalance() ;
      setBalance([...response.data])
    }catch(error){
      navigate("/error", { state: { errorMessage: error.message } });
      console.error("An error occurred: ", error.message);
    }
   } 

   console.log(balance);

  return (
    <>
<Container>
      <Typography variant="h4" gutterBottom>
        My Account
      </Typography>
      <Typography variant="h6" gutterBottom>
        Current Balance :<strong>${ balance.length != 0 ? balance[0].closingBalance :"" } </strong>  
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead sx={{ backgroundColor: "#f5f5f5" , fontSize:"1.5rem" }}>
            <TableRow >
              <TableCell sx={{textAlign:"center",fontSize:"1.3rem"}}>Date</TableCell>
              <TableCell sx={{textAlign:"center",fontSize:"1.3rem"}}>Summary</TableCell>
              <TableCell sx={{textAlign:"center",fontSize:"1.3rem"}}>Withdrawal/Deposit</TableCell>
              <TableCell sx={{textAlign:"center",fontSize:"1.3rem"}}>Closing Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {balance.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell  sx={{textAlign:"center" ,fontSize:17}}>{transaction.createDt}</TableCell>
                <TableCell sx={{textAlign:"center" ,fontSize:17}}>{transaction.transactionSummary}</TableCell>
                {
                 transaction.transactionType=="Withdrawal" ? <TableCell sx={{textAlign:"center" ,fontSize:17}}>Withdrawal</TableCell> :
                 <TableCell sx={{textAlign:"center" ,fontSize:17}}>Deposit</TableCell>
                 }
                <TableCell sx={{textAlign:"center" ,fontSize:17}}>${transaction.closingBalance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <BackButton/>
    </Container>
    </>
  )
}

export default MyBalance ;