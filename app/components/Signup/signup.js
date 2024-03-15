"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

function Copyright(props) {
  return (
    <Typography variant="body2" color="black" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        TaskHarbor
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    phone: 0,
    email: "",
    password: "",
    confirmPassword: "",
  });
  const router = useRouter();
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const resp = await axios.post("api/users/signup", user);
      console.log(resp);
      console.log("Signup Successful");
      router.push("/login");
    } catch (err) {
      console.log("Signup Failed");
    }
  }

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const black = {
    backgroundColor: "#fff",
    "& label": {
      color: "#000",
    },
    "& fieldset": {
      borderColor: "#000",
    },
  }

  return (
    <Container component="main" maxWidth="xs" className="border-t">
      <CssBaseline />
      <Image
        src="/Images/loginback.jpg"
        fill={true}
        quality={100}
        style={{
          opacity: 0.7,
          zIndex: -1
        }}
      />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
                style={black}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                style={black}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                style={black}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="remove-arrow"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="tel"
                id="phone"
                inputProps={{
                  minLength: 10,
                  maxLength: 10
                }}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                style={black}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="new-password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                style={black}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="new-password"
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                style={black}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            className="bg-blue-500"
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2" className="text-blue-800">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
