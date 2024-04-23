"use client";
import {
  CircularProgress, Grid, Typography } from "@mui/material";
import Navbar from "@/app/components/Navbar/navbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Rating from "@mui/material/Rating";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { getTokenData } from "@/utils/getTokenData";
import { useEffect, useState } from "react";
import InfoImage from "@/app/components/Dashboard/infoImage";
import PostedServices from "@/app/components/Profile/postedServices";
import PostedPosts from "@/app/components/Profile/postedPosts";

export default function Profile({ params }) {
  const [pageUser, setPageUser] = useState(null);
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const userid = params.id;
    const resp = await axios.post("/api/services/allServices");
    for (let serv of resp.data) {
      if (serv.owner == userid) {
        setPageUser(serv);
        const userId = serv.owner;
        const resp = await axios.post("/api/users/getUser", { userId });
        setUser(resp.data);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  // console.log(user);
  return (
    <>
      <Navbar />
      {pageUser && user ? (
        <div className="px-10">
          <Grid container>
            <Grid item xs={8} className="ml-2 mt-5">
              <InfoImage props={[pageUser.backImg, pageUser.frontImg]} />
              <div className="ml-64 mt-4 flex gap-10">
                <Typography className="inika text-2xl font-bold tracking-wide">
                  {pageUser.title}
                </Typography>
              </div>
            </Grid>
          </Grid>

          <Typography className="inika mt-7 text-xl ml-4">
            {pageUser.description}
          </Typography>

          <Grid container className="mt-4">
            <Grid xs={2.5} className="p-2">
              <div className="border border-black rounded-xl h-min p-4">
                <Typography className="inika text-xl text-center font-bold">
                  Contact Information
                </Typography>
                <hr />
                <div className="mt-2 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <LocalPhoneIcon />
                    <Typography className="inika">
                      {pageUser.businessPhone}
                    </Typography>
                  </div>
                  <div className="flex gap-2">
                    <MailIcon />
                    <Typography className="inika">
                      {pageUser.businessEmail}
                    </Typography>
                  </div>
                  <hr />
                  <div className="flex gap-2">
                    <LocationOnOutlinedIcon />
                    <Typography className="inika">
                      {pageUser.city},{pageUser.state}
                    </Typography>
                  </div>
                  <hr />
                  <div>
                    <Typography className="inika font-semibold">
                      Tags
                    </Typography>
                    <div className="my-2 flex flex-wrap gap-2">
                      {pageUser.tags.map((tag, index) => (
                        <Chip label={tag} variant="outlined" />
                      ))}
                    </div>
                  </div>
                  <hr />
                  <div className="flex gap-3 items-center">
                    <Typography className="inika">{pageUser.stars}</Typography>
                    <Rating
                      name="half-rating-read"
                      value={pageUser.stars}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </Grid>
            <Grid xs={9.5}>
              <Grid xs={12} className="p-2">
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
              <Grid xs={12} className="p-2">
                <div className="border border-black px-2 rounded-xl">
                  <Typography className="inika text-xl text-center font-bold m-4">
                    PreviousWorks
                  </Typography>
                  <Grid container>
                    {pageUser.previousWorks.map((service, index) => (
                      <PostedServices key={index} props={service} />
                    ))}
                  </Grid>
                </div>
              </Grid>
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
