import React, { useEffect, useState } from "react";
import { getNotices } from "../service/apiPublic";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { IoMdMailOpen } from "react-icons/io";
import { Link , useNavigate } from "react-router-dom";

const Notices = () => {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    getNoticesDetails();
  }, []);

  const getNoticesDetails = async () => {
    try {
      const response = await getNotices();
      setNotices(response.data);
    } catch (error) {
      navigate("/error", { state: { errorMessage: error.message } });
      console.error("Error fetching notices:", error);
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2}>
        {notices.map((element) => (
          <Grid item xs={12} md={12} key={element.noticeId}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 20 }}
                  gutterBottom
                >
                  <IoMdMailOpen />
                </Typography>
                <Typography variant="h5" component="div">
                  {element.noticeSummary}
                </Typography>
                <Typography variant="body2"  sx={{ fontSize: 17 }}
                  >
                  {element.noticeDetails}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button component ={Link} to="/contact" variant="contained">Contact Us</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notices;
