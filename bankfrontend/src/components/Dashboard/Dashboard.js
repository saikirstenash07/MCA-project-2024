import React, { useEffect } from "react";
import {useLocation,Link} from 'react-router-dom';
import { Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { FaUserCircle,FaRegCreditCard,FaMoneyBill} from "react-icons/fa";
import { BiDollar} from "react-icons/bi";

const Dashboard = ({obj}) => {

  useEffect(()=>{
   if(!obj.tg){
       obj.fun() ;
   }
    
  },[]);

  const location = useLocation();
   // Use optional chaining (?.) to safely access the userData object
   const userData = location.state?.userData;

   // Check if userData is not null before destructuring
   const { name, id , email, username, role } = userData ?? {};

  const cardData = [
    {
      icon: <FaUserCircle/>,
      header: "Account",
      text: "View account details",
      link: `/account`,
    },
    {
      icon: <BiDollar />,
      header: "Balance",
      text: "View total available balance",
      link: `/balance`,
    },
    {
      icon: <FaMoneyBill/>,
      header: "Loans",
      text: "View loan details",
      link: `/loans`,
    },
    {
      icon: <FaRegCreditCard />,
      header: "Cards",
      text: "View credit card details",
      link: `/cards`,
    },
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome, {username} !
      </Typography>
      <Grid container spacing={2}>
      {cardData.map((card, index) => (
  <Grid item xs={12} sm={6} md={3} key={index}>
    <Link to={card.link} style={{ textDecoration: "none" }}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent>
          <Grid container alignItems="center" spacing={2}>
          <Grid item xs={2}>
              <span
                style={{
                  fontSize: '1.8rem',
                  opacity: 0.5,      
                }}
              >
                {card.icon}
              </span>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h6">{card.header}</Typography>
              <Typography variant="body2" color="textSecondary">
                {card.text}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  </Grid>
))}

      </Grid>
    </Container>
  );
};

export default Dashboard;
