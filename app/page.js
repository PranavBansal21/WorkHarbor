"use client";
import Link from "next/link";
import Initial from "./components/Home/initial";
import About from "./components/Home/about";
import Services from "./components/Home/services";
import Contact from "./components/Home/contact";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "Services", href: "#services" },
  { text: "Contact", href: "#contact" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const logout = async () => {
    await axios.get("/api/users/logout");
    router.push("/login");
  };
  const goToProfile = async () => {
    const tokenData = await axios.post("/api/users/getTokenData");
    if (tokenData.data.role == 0)
      router.push(`/profile/customer/${tokenData.data.id}`);
    else if (tokenData.data.role == 1) {
      router.push(`/profile/provider/${tokenData.data.id}`);
    }
  };

  const register = async () => {
    try {
      router.push(`/register`);
    } catch (err) {
      console.log("error routing to the register page");
    }
  };

  const settings = [
    { name: "Logout", execute: logout },
    { name: "Profile", execute: goToProfile },
    { name: "Register", execute: register },
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

  // Effect to add/remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);
  useEffect(() => {
    tokenData();
  }, []);
  const [token, setToken] = useState(null);
  const tokenData = async () => {
    const res = await axios.post("/api/users/getTokenData");
    // console.log(res.data);
    if ("id" in res.data) {
      setToken(res.data);
    } else {
      setToken(null);
    }
  };
  return (
    <div>
      <div
        className={`z-10 fixed w-screen flex justify-between py-5 px-10 ${
          scrolled
            ? "bg-white opacity-80 border border-b-gray-600 text-blue-950 decoration-black"
            : "text-white decoration-white"
        }`}
      >
        <div className="z-10 flex gap-5">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              <div className="text-2xl hover:underline  decoration-4 underline-offset-8">
                {link.text}
              </div>
            </Link>
          ))}
        </div>
        {/* {console.log(token)} */}
        {token == null ? (
          <div className="z-10 flex gap-5 text-2xl">
            <div>
              <Link
                href="/login"
                className="hover:underline decoration-4 underline-offset-8"
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                href="/signup"
                className="hover:underline decoration-4 underline-offset-8"
              >
                Signup
              </Link>
            </div>
          </div>
        ) : (
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
        )}
      </div>

      <Initial />

      <About />

      <Services />

      <Contact />
    </div>
  );
}
