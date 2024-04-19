"use client"
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const services = [
    {name: "ABC", img: "/Images/service1.png"},
    {name: "ABC", img: "/Images/service2.jpg"},
    {name: "ABC", img: "/Images/service3.jpg"},
    {name: "ABC", img: "/Images/service4.jpg"},
    {name: "ABC", img: "/Images/service5.jpg"},
    {name: "ABC", img: "/Images/service6.jpg"},
    {name: "ABC", img: "/Images/service7.webp"},
    {name: "ABC", img: "/Images/service8.jpg"},
]

export default function Services() {
    return (
        <div
            id="services"
            className="services bg-[#987554] relative h-screen w-screen flex flex-col justify-evenly"
        >
            <Typography className="text-center text-black inika text-5xl">
                Services Provided By Us
            </Typography>
            <Grid container spacing={3} justifyContent='center' alignItems='center' className="p-6">
                {services.map((service, index) => (
                    <Grid key={index} item xs={3}>
                        <div style={{ width: '400px', height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <Image
                                src={service.img}
                                fill={true}
                                style={{objectFit: 'cover'}}
                                alt={service.name}
                                className="border border-black rounded-lg"
                            />
                        </div>
                        <div className="mt-3 flex flex-col gap-2">
                            <Typography className="inika text-2xl text-center font-bold">
                                {service.name}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}