import React, { useEffect, useState } from "react";
import { getLoans } from "../service/apiPrivate";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const Loans = () => {
  const navigate = useNavigate();
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    getLoansDetails();
  }, []);

  const getLoansDetails = async () => {
    try {
      const response = await getLoans();
      console.log(response.data);
      setLoans([...response.data]);
    } catch (error) {
      navigate("/error", { state: { errorMessage: error.message } });
      console.error("An error occurred: ", error.message);
    }
  };

  const sum = loans.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.outstandingAmount;
  }, 0);
  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Loans Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Outstanding Balance :
          <strong>${loans.length != 0 ? sum : ""}</strong>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: "#f5f5f5", fontSize: "1.5rem" }}>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Start Date
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Type
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Total Loan
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Amount Paid
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Outstanding Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loans.map((loan, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: "center",fontSize:17 }}>
                    {loan.startDt}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center",fontSize:17 }}>
                    {loan.loanType}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center",fontSize:17 }}>
                    ${loan.totalLoan}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" ,fontSize:17}}>
                    ${loan.amountPaid}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center",fontSize:17 }}>
                    ${loan.outstandingAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <BackButton/>
      </Container>
    </>
  );
};

export default Loans;
