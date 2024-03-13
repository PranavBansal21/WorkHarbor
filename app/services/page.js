"use client"
import Navbar from "../components/Navbar/navbar";
import Grid from "@mui/material/Grid"; // Importing Grid from '@mui/material'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea"; // Importing CardActionArea from '@mui/material'
import { Box } from "@mui/material";

const services = [
    { id: 1, stars: 4.2, location: "Simple ka ghar, Nagpur", rating: 10, href: "/Images/service.jpg" },
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
            <Typography>
                Top Service Providers in Mumbai
            </Typography>
            <Grid container spacing={2}>
                {services.map((service) => (
                    <Grid key={service.id} item xs={12} sm={6} md={4} display="flex" justifyContent="center" alignItems="center">
                        <Card key={service.id} sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={service.href}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}