"use client"
import Navbar from "../components/Navbar/navbar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from '@mui/material/Rating';
import { LocationOn } from "@mui/icons-material";
import { NextResponse } from "next/server";
import { useEffect } from "react";
import axios from "axios";

const services = [
    { _id: 1,title:1 ,stars: 3.5, location: "Simple ka ghar, Nagpur", rating: 10, backImg: "/Images/service.jpg" },
    { _id: 2,title:2 , stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, backImg: "/Images/service.jpg" },
    { _id: 3,title:3 , stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, backImg: "/Images/service.jpg" },
    { _id: 4,title:4 , stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, backImg: "/Images/service.jpg" },
    { _id: 5,title: 5, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, backImg: "/Images/service.jpg" },
    { _id: 6,title: 6, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, backImg: "/Images/service.jpg" }
]

export default function Services() {
    const getAllServices = async()=>{
        try {
            const res = await axios.post("/api/services/allServices");
            for(let i=0;i<res.data.length;i++){
                services.push(res.data[i]);
            }
            
            console.log(services);
        } catch (err) {
            return NextResponse.json({error:err.message,status:500})
        }
    }
    
    return (
        <>
            <Navbar />
            <Typography className="inika text-xl my-2 ml-5">
                Top Service Providers in Mumbai
            </Typography>
            <Grid container spacing={2}>
                {services.map((service) => (
                    <Grid key={service._id} item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
                        <Card key={service._id} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={"/Images/back.jpg"}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography className="inika text-xl ml-1">
                                    {service.title}
                                </Typography>
                                <div className="flex gap-3">
                                    <Rating name="half-rating-read" value={service.stars} precision={0.5} readOnly size="large" />
                                    <Typography className="inika bg-green-600 p-1 px-3 rounded-md">
                                        {service.stars}
                                    </Typography>
                                </div>
                                <Typography className="inika ml-1">
                                    {service.rating} Ratings
                                </Typography>
                                <div className="flex gap-2 items-center">
                                    <LocationOn />
                                    <Typography className="inika">
                                        {service.location}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}