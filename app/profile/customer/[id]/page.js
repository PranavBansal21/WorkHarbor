"use client";
import { CircularProgress, Grid, Typography } from "@mui/material";
import Navbar from "@/app/components/Navbar/navbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import axios from "axios";
import { getTokenData } from "@/utils/getTokenData";
import { useEffect, useState } from "react";
import InfoImage from "@/app/components/Dashboard/infoImage";
import PostedServices from "@/app/components/Profile/postedServices";
import PostedPosts from "@/app/components/Profile/postedPosts";

const postedServices = [
  {
    workImg: "/Images/background.jpg",
    workTitle: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    workDesc:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    workImg: "/Images/background.jpg",
    workTitle: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    workDesc:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    workImg: "/Images/background.jpg",
    workTitle: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    workDesc:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    workImg: "/Images/background.jpg",
    workTitle: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    workDesc:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    workImg: "/Images/background.jpg",
    workTitle: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    workDesc:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
];

export default function Profile({ params }) {
  const [pageUser, setPageUser] = useState(null);
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const res = await axios.post("/api/users/getTokenData");
    setPageUser(res.data);
    const userId = res.data.id;
    const resp = await axios.post("/api/users/getUser", { userId });
    setUser(resp.data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Navbar />
      {pageUser && user ? (
        <div className="px-10">
          <Grid container>
            <Grid item xs={8} className="ml-2 mt-5">
              <InfoImage
                props={["/Images/back.jpg", "/Images/profilePic2.jpg"]}
              />
            </Grid>
          </Grid>

          <Typography className="inika text-2xl ml-64 mt-4 font-bold tracking-wide">
            {pageUser.firstName} {pageUser.lastName}
          </Typography>

          <Grid container className="mt-16">
            <Grid xs={2.5} className="p-2">
              <div className="border border-black rounded-xl h-80 p-4">
                <Typography className="inika text-xl text-center font-bold">
                  Contact Information
                </Typography>
                <hr />
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <LocalPhoneIcon />
                    <Typography className="inika">{pageUser.phone}</Typography>
                  </div>
                  <div className="flex gap-2">
                    <MailIcon />
                    <Typography className="inika">{pageUser.email}</Typography>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid xs={9.5} className="p-2">
              <div className="border border-black px-2 rounded-xl">
                <Typography className="inika text-xl text-center font-bold m-4">
                  Posted Works
                </Typography>
                <Grid container>
                  {user.posts.map((service, index) => (
                    <PostedPosts key={index} props={service} />
                  ))}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-5">
          <CircularProgress />
        </div>
      )}
    </>
  );
}
