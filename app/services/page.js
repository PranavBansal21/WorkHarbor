"use client";
import Navbar from "../components/Navbar/navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";
import { LocationOn } from "@mui/icons-material";
import { NextResponse } from "next/server";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";

export default function Services() {
  const [services, setServices] = useState(null);

  const router = useRouter();
  const pathname = usePathname();

  const getAllServices = async () => {
    try {
      const res = await axios.post("/api/services/allServices");
      setServices(res.data);
    } catch (err) {
      return NextResponse.json({ error: err.message, status: 500 });
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  return (
    <div>
      
      <Navbar />
      <Typography className="inika text-xl my-2 ml-5">
        Top Service Providers in Mumbai
      </Typography>
      {services ? (
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={"/Images/back.jpg"}
                    alt="green iguana"
                    onClick={() => router.push(`${pathname}/${service._id}`)}
                  />
                </CardActionArea>
                <CardContent>
                  <Typography className="inika text-xl ml-1">
                    {service.title}
                  </Typography>
                  <div className="flex gap-3">
                    <Rating
                      name="half-rating-read"
                      value={service.stars}
                      precision={0.5}
                      readOnly
                      size="large"
                    />
                    <Typography className="inika bg-green-600 p-1 px-3 rounded-md">
                      {service.stars}
                    </Typography>
                  </div>
                  <Typography className="inika ml-1">
                    {service.reviews.length} Ratings
                  </Typography>
                  <div className="flex gap-2 items-center">
                    <LocationOn />
                    <Typography className="inika">
                      {service.city},{service.state}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
