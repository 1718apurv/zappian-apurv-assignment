import React from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { loginService } from "./Utilities/Axios/apiService";
import { setUserData } from "./Utilities/Helper/function";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      let userData = await loginService({
        email: data.get("email"),
        password: data.get("password"),
      });
      setUserData(userData.data.data);
      if (userData.data.message === "Login success.") {
        navigate("/");
      }
    } catch (error) {
      console.log("Login Failed With Error---", error.response.data.message);
    }
  };

  return (
    <Container style={{ padding: "50px" }}>
      <Box
        bgcolor="white"
        maxWidth={400}
        alignItems={"center"}
        marginTop={5}
        margin="auto"
        padding={3}
        borderRadius={5}
        onSubmit={handleSubmit}
        component="form"
      >
        <Grid
          sx={{ display: "flex" }}
          marginTop={1}
          item
          xs={12}
          align="center"
        >
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            InputProps={{
              style: {
                margin: "5px",
              },
            }}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            InputProps={{
              style: {
                margin: "5px",
              },
            }}
          />
        </Grid>

        <Grid marginTop={1} item xs={12} align="center">
          <Button type="submit" variant="contained">
            SIGN IN
          </Button>
        </Grid>

        <Grid marginTop={1} item xs={12} align="center">
          <Link
            underline="hover"
            component="button"
            onClick={() => {
              navigate("/Register");
            }}
            variant="body2"
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Box>
    </Container>
  );
}

export default Login;
