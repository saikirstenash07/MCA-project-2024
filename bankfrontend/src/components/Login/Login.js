import React, { useState, useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";

import { signIn } from "../service/apiAuth";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Link,
  Container,
  Stack,
  Divider,
} from "@mui/material";

const LoginCard = () => {
  const navigate = useNavigate();

  const initialState = {
    username: "",
    password: "",
  };
  const [login, setLogin] = useState(initialState);

  const onChangeValue = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const addLoginDetails = async () => {
    try {
      const response = await signIn(login);

      if (response.status === 200) {
        console.log(response.data);
        sessionStorage.setItem("jwtToken", response.data.token);
        const responseData = response.data;
        navigate("/dashboard", { state: { userData: responseData } });
      } else {
        navigate("/error", { state: { errorMessage: response.data.error } });
        console.error("Login failed: ", response.data.error);
      }
    } catch (error) {
      navigate("/error", { state: { errorMessage: error.message } });
      console.error("An error occurred: ", error.message);
    }
  };

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{  minWidth: 400 , p: 3, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: 2,
              fontWeight: "bold",
              color: "#333",
            }}
          >
            Sign In
          </Typography>
          <Stack spacing={2}>
            <TextField
              label="Username"
              fullWidth
              variant="outlined"
              onChange={(e) => onChangeValue(e)}
              name="username"
            />
            <TextField
              label="Password"
              fullWidth
              variant="outlined"
              type="password"
              onChange={(e) => onChangeValue(e)}
              name="password"
            />
          </Stack>
          <Link
            href="#"
            sx={{
              display: "block",
              textAlign: "right",
              fontSize: "0.85rem",
              textDecoration: "none",
              marginTop: 1,
            }}
          >
            FORGET PASSWORD?
          </Link>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, fontSize: "1rem" }}
            onClick={() => addLoginDetails()}
          >
            SIGN IN
          </Button>
          {/* <Divider sx={{ my: 2 }} />
          <Typography sx={{ textAlign: "center", mt: 1, mb: 2 }}>OR</Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontSize: "1rem",
              backgroundColor: "#DB4437",
              color: "white",
            }}
          >
            Sign in with Google
          </Button>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontSize: "1rem",
              backgroundColor: "#333",
              color: "white",
              mt: 1,
            }}
          >
            Sign in with GitHub
          </Button> */}
          <Typography sx={{ textAlign: "center", mt: 2, mb: 1 }}>
            Don't have an account?
          </Typography>
          <Link
            component={RouterLink}
            to="/signup"
            sx={{
              display: "block",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            SIGN UP NOW
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginCard;
