"use client"
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const services = [
    {name: "Furniture", img: "/Images/service7.webp"},
    {name: "Security anad Protection", img: "/Images/service2.jpg"},
    {name: "Rubber and Plastics", img: "/Images/service3.jpg"},
    {name: "Gardening", img: "/Images/service8.jpg"},
    {name: "Electronics", img: "/Images/service5.jpg"},
    {name: "Gift and Crafts", img: "/Images/service6.jpg"}
]

export default function Services() {
    return (
        <div
            id="services"
            className="services bg-gray-200 relative h-screen w-screen flex flex-col justify-evenly pt-10"
        >
            <Typography className="text-center text-blue-900 text-5xl">
                What's in it for you !
            </Typography>
            <Grid container spacing={2} rowSpacing={8} display='flex' alignItems='center' justifyContent='center' justifyItems='center' className="p-16">
                {services.map((service, index) => (
                    <Grid key={index} item xs={4} display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <div style={{ width: '450px', height: '250px', overflow: 'hidden', position: 'relative' }}>
                            <Image
                                src={service.img}
                                fill={true}
                                style={{objectFit: 'cover'}}
                                alt={service.name}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="mt-3 flex flex-col gap-2">
                            <Typography className="text-2xl font-semibold">
                                {service.name}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}