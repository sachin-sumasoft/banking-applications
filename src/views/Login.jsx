import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";
import CustomInput from "../components/materialcontent/CustomInput";
import { setUser } from "../redux/reducers/authSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", { email, password });
      if (response?.data?.token) {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        localStorage.setItem("accessToken", response.data.token);
        try {
          const user = jwt_decode(response.data.token);
          dispatch(setUser(user));
        } catch (error) {
          console.log(error.message);
        }
      }
    } catch (_error) {
      console.log(_error);
    }
  };

  useEffect(() => {
    loginUser();
  }, []);

  return (
    <div>
      <div style={{ background: "#ebf8f9", height: "100vh" }}>
        <Container>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "90vh" }}
          >
            <Grid item>
              <Card>
                <CardHeader title="Login" />
                <CardContent>
                  <form onSubmit={loginUser}>
                    <CustomInput
                      type="email"
                      label="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <CustomInput
                      type="Password"
                      label="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" fullWidth variant="contained">
                      Login
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Login;
