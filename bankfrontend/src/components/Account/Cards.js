import React, { useEffect, useState } from "react";
import { getCards } from "../service/apiPrivate";
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
  Box,
  Button
} from "@mui/material";
import BackButton from "./BackButton";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCardsDetails();
  }, []);

  const getCardsDetails = async () => {
    try {
      const response = await getCards();
      console.log(response.data);
      setCards([...response.data]);
    } catch (error) {
      navigate("/error", { state: { errorMessage: error.message } });
      console.error("An error occurred: ", error.message);
    }
  };

  const sum = cards.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amountUsed;
  }, 0);

  return (
    <>
      <Container>
        <Typography variant="h4" gutterBottom>
          Cards Details
        </Typography>
        <Typography variant="h6" gutterBottom>
          Total Due Amount :<strong>${cards.length != 0 ? sum : ""}</strong>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
              <TableRow>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Card Number
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Type
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Total Limit
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Amount Used
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: "1.3rem" }}>
                  Available Amount
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cards.map((card, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ textAlign: "center" ,fontSize:17 }}>
                    {card.cardNumber}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" ,fontSize:17 }}>
                    {card.cardType}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" ,fontSize:17 }}>
                    ${card.totalLimit}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" ,fontSize:17 }}>
                    ${card.amountUsed}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" ,fontSize:17 }}>
                    ${card.availableAmount}
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

export default Cards;
