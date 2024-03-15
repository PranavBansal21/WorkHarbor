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

const services = [
    { id: 1, stars: 3.5, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" },
    { id: 2, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" },
    { id: 3, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" },
    { id: 4, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" },
    { id: 5, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" },
    { id: 6, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" }
]

export default function Services() {
    return (
        <>
            <Navbar />
            <Typography className="inika text-xl my-2 ml-5">
                Top Service Providers in Mumbai
            </Typography>
            <Grid container spacing={2}>
                {services.map((service) => (
                    <Grid key={service.id} item xs={12} sm={6} md={4} lg={3} display="flex" justifyContent="center" alignItems="center">
                        <Card key={service.id} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={service.href}
                                    alt="green iguana"
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography className="inika text-xl ml-1">
                                    Service
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