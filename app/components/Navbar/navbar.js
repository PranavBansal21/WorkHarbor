"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { LocationOn } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { NextResponse } from "next/server";
import axios from "axios";
import { getCurrentLocation } from "@/utils/getCurrentLocation";
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      return NextResponse.json({ error: error.message, status: 500 });
    }
  };
  const goToProfile = async () => {
    try {
      const tokenData = await axios.post("/api/users/getTokenData");
      if (tokenData.data.role == 0)
        router.push(`/profile/customer/${tokenData.data.id}`);
      else if (tokenData.data.role == 1) {
        router.push(`/profile/provider/${tokenData.data.id}`);
      }
      return NextResponse.json({ message: "dfj" });
    } catch (err) {
      return NextResponse.json({ error: error.message, status: 500 });
    }
  };

  const settings = [
    { name: "Logout", execute: logout },
    { name: "Profile", execute: goToProfile },
  ];

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  const [token, setToken] = useState(null);
  const tokenData = async () => {
    const res = await axios.post("/api/users/getTokenData");
    if ("id" in res.data) {
      setToken(res.data);
    } else {
      setToken(null);
    }
  };

  useEffect(() => {
    tokenData();
  }, []);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            component="a"
            href="/"
            className="irishgrover mr-2 text-3xl"
          >
            WorkHarbor
          </Typography>

          <LocationOn />

          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              font: "irish_grover",
              color: "inherit",
              textDecoration: "none",
            }}
            className="inika"
            onClick={getCurrentLocation}
          >
            location
          </Typography>

          <Search
            sx={{ mr: 2, flexGrow: 1, display: { xs: "flex" } }}
            justifyContent="end"
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          {token != null ? (
            <Box sx={{ flexGrow: 0 }}>
              <div className="flex gap-3 items-center">
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/Images/profilePic.jpg" />
                  </IconButton>
                </Tooltip>
                <Typography className="inika text-xl">
                  {token.firstName}
                </Typography>
              </div>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center" onClick={setting.execute}>
                      {setting.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <>
              <div className="flex gap-5 text-white text-xl inika  right-7">
                <div>
                  <Link
                    href="/login"
                    className=" decoration-black decoration-4 underline-offset-8"
                  >
                    Login
                  </Link>
                </div>
                <div>
                  <Link
                    href="/signup"
                    className=" decoration-black decoration-4 underline-offset-8"
                  >
                    Signup
                  </Link>
                </div>
              </div>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
