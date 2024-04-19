"use client";
import { Grid, Typography } from "@mui/material";
import Navbar from "@/app/components/Navbar/navbar";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import Rating from "@mui/material/Rating";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Chip from "@mui/material/Chip";
import axios from "axios";
import { getTokenData } from "@/utils/getTokenData";
import { useEffect, useState } from "react";

const postedServices = [
  {
    src: "/Images/background.jpg",
    title: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    description:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    src: "/Images/background.jpg",
    title: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    description:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    src: "/Images/background.jpg",
    title: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    description:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    src: "/Images/background.jpg",
    title: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    description:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
  {
    src: "/Images/background.jpg",
    title: "Furniture",
    tags: ["Carpenter", "Carpenter"],
    description:
      "The leg of the table has be broken and the furniture needs to be refurbished",
  },
];

export default function Profile({ params }) {
  const tags = ["Plumber", "Carpenter", "Electrician"];
  const [pageUser, setPageUser] = useState(null);

  const getUser = async () => {
    const userid = params.id;
    const resp = await axios.post("/api/services/allServices");
    for (let serv of resp.data) {
      if (serv.owner == userid) {
        setPageUser(serv);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      {console.log(pageUser)}
      <Navbar />
      {pageUser ? (
        <>
          <div className="relative">
            <img className="w-screen h-64" src={pageUser.backImg} />
            <div className="absolute top-40 left-16">
              <img
                src={pageUser.frontImg}
                className="object-cover rounded-full w-40 h-40"
              />
            </div>
          </div>
          <div className="ml-64 mt-4 flex gap-10">
            <Typography className="inika text-2xl font-bold tracking-wide">
              {pageUser.title}
            </Typography>
            <div className="flex gap-3">
              <Typography className="inika bg-green-600 p-1 px-3 rounded-md">
                {pageUser.stars}
              </Typography>
              <Rating
                name="half-rating-read"
                value={pageUser.stars}
                precision={0.5}
                readOnly
                size="large"
              />
            </div>
          </div>
          <Typography className="inika mt-7 text-xl ml-4">
            {pageUser.description}
          </Typography>
          <Grid container className="mt-4">
            <Grid xs={2.5} className="p-2">
              <div className="border border-black rounded-xl h-80">
                <Typography className="inika text-xl text-center m-4">
                  Contact Information
                </Typography>
                <div className="ml-2 mt-2 flex flex-col gap-2">
                  <div className="flex gap-2">
                    <LocalPhoneIcon />
                    <Typography className="inika">684512</Typography>
                  </div>
                  <div className="flex gap-2">
                    <MailIcon />
                    <Typography className="inika">sfsefsefsefse</Typography>
                  </div>
                  <hr className="my-3" />
                  <div className="flex gap-2">
                    <LocationOnOutlinedIcon />
                    <Typography className="inika">
                      {pageUser.city},{pageUser.state}
                    </Typography>
                  </div>
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
                </div>
              </div>
            </Grid>
            <Grid xs={9.5} className="p-2">
              <div className="border border-black px-2 rounded-xl">
                <Typography className="inika text-xl text-center m-4">
                  PreviousWorks
                </Typography>
                <Grid container>
                  {pageUser.previousWorks.map((service, index) => (
                    <Grid xs={3} key={index}>
                      <div className="p-2 border border-black mr-3 rounded-lg mb-3">
                        <img src={service.workImg} />
                        <div className="mt-1">
                          <Typography className="inika text-center">
                            {service.workTitle}
                          </Typography>
                          <Typography>{service.workDesc}</Typography>
                        </div>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </>
      ) : (
        <>Loading</>
      )}
    </>
  );
}
