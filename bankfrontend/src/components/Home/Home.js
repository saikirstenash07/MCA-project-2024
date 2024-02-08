import React from "react";
import { Typography, Card, Box, Container, Grid, styled } from "@mui/material";
import {BsFillPeopleFill } from 'react-icons/bs';
import {PiHandshakeLight,PiStethoscope } from 'react-icons/pi';
import {AiFillCar,AiOutlineHome} from 'react-icons/ai';
import {RiGraduationCapFill} from 'react-icons/ri';
import PhoneIcon from "@mui/icons-material/Phone";

const LeftContent = styled("div")(({ theme }) => ({
  margin: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const TriangleContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: `center`,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Column = styled(Grid)(({ theme }) => ({
  margin: `0px`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row",
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: 140,
  height: 120,
  backgroundColor: "#f0f0f0",
  borderRadius: 8,
  margin: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  wordWrap: `wrap`,
  textAlign: `center`,
}));

const Home = () => {
  return (
    <div className="home-page">
      <Container maxWidth="lg">
        <div className="content">
          <LeftContent>
            <Typography variant="h4" gutterBottom>
              Services provided by SPBank
            </Typography>
            <Typography variant="body1" sx={{ fontSize: 17 }}>
              SPBank offers a diverse range of financial products and banking
              services to customers through a growing branch and ATM network and
              digital channels such as Netbanking, Phonebanking and
              MobileBanking.
            </Typography>
          </LeftContent>
          <div className="right">
            <Container maxWidth="">
              <TriangleContainer container>

                <Column item xs={12} md={2}>
                  <StyledCard>
                    <IconWrapper>
                    <BsFillPeopleFill style={{fontSize:"1.5rem"}} />             <Title variant="h6" component="h6">
                        Personal Loan
                      </Title>
                    </IconWrapper>
                  </StyledCard>

                  <StyledCard>
                    <IconWrapper>
                      <PiHandshakeLight style={{fontSize:"1.5rem"}} />
                      <Typography>
                        Business Loan
                      </Typography>
                    </IconWrapper>
                  </StyledCard>
                </Column>

                <Column item xs={12} md={2}>
                  <StyledCard>
                    <IconWrapper>
                      <AiOutlineHome style={{fontSize:"1.5rem"}} />
                      <Typography>Home Loan</Typography>
                    </IconWrapper>
                  </StyledCard>

                  <StyledCard>
                    <IconWrapper>
                      <AiFillCar style={{fontSize:"1.5rem"}} />
                      <Typography>Auto Loan</Typography>
                    </IconWrapper>
                  </StyledCard>
                </Column>

                <Column item xs={12} md={2}>
                  <StyledCard>
                    <IconWrapper>
                      <RiGraduationCapFill style={{fontSize:"1.5rem"}} />
                      <Typography>Educational Loan</Typography>
                    </IconWrapper>
                  </StyledCard>
                  <StyledCard>
                    <IconWrapper>
                      <PiStethoscope style={{fontSize:"1.5rem"}} />
                      <Typography>Health Loan</Typography>
                    </IconWrapper>
                  </StyledCard>
                </Column>
              </TriangleContainer>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
