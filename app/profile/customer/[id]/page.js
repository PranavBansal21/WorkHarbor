"use client"
import { Grid, Typography } from "@mui/material"
import Navbar from "@/app/components/Navbar/navbar"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import axios from "axios"
import { getTokenData } from "@/utils/getTokenData"
import { useEffect, useState } from "react"

const postedServices = [
    { src: "/Images/background.jpg", title: "Furniture", tags: ["Carpenter", "Carpenter"], description: "The leg of the table has be broken and the furniture needs to be refurbished" },
    { src: "/Images/background.jpg", title: "Furniture", tags: ["Carpenter", "Carpenter"], description: "The leg of the table has be broken and the furniture needs to be refurbished" },
    { src: "/Images/background.jpg", title: "Furniture", tags: ["Carpenter", "Carpenter"], description: "The leg of the table has be broken and the furniture needs to be refurbished" },
    { src: "/Images/background.jpg", title: "Furniture", tags: ["Carpenter", "Carpenter"], description: "The leg of the table has be broken and the furniture needs to be refurbished" },
    { src: "/Images/background.jpg", title: "Furniture", tags: ["Carpenter", "Carpenter"], description: "The leg of the table has be broken and the furniture needs to be refurbished" },
];

export default function Profile({params}) {
    const [pageUser,setPageUser] = useState(null);
    const getUser = async()=>{
        const res =await axios.post("/api/users/getTokenData");
        setPageUser(res.data);
    }
    useEffect(() => {
        getUser();
    }, []);
    return (
        <>
            <Navbar />
            {pageUser ?
            <>
            
                <div className="relative">
                    <img
                        className="w-screen h-64"
                        src="/Images/back.jpg"
                    />
                    <div className="absolute top-40 left-16">
                        <img
                            src="/Images/profilePic2.jpg"
                            className="object-cover rounded-full w-40 h-40"
                        />
                    </div>
                </div>
                <Typography className="inika text-2xl ml-64 mt-4 font-bold tracking-wide">
                    {pageUser.firstName} {pageUser.lastName}
                </Typography>
                <Grid container className="mt-16">
                    <Grid xs={2.5} className="p-2">
                        <div className="border border-black rounded-xl h-80">
                            <Typography className="inika text-xl text-center m-4">
                                Contact Information
                            </Typography>
                            <div className="ml-2 mt-2 flex flex-col gap-1">
                                <div className="flex gap-2">
                                    <LocalPhoneIcon />
                                    <Typography className="inika">
                                        {pageUser.phone}
                                    </Typography>
                                </div>
                                <div className="flex gap-2">
                                    <MailIcon />
                                    <Typography className="inika">
                                        {pageUser.email}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid xs={9.5} className="p-2">
                        <div className="border border-black px-2 rounded-xl">
                            <Typography className="inika text-xl text-center m-4">
                                Posted Service Requirements
                            </Typography>
                            <Grid container >
                                {postedServices.map((service, index) => (
                                    <Grid xs={3} key={index}>
                                        <div className="p-2 border border-black mr-3 rounded-lg mb-3">
                                            <img
                                                src={service.src}
                                            />
                                            <div className="mt-1">
                                                <Typography className="inika text-center">
                                                    {service.title}
                                                </Typography>
                                                <Typography>
                                                    {service.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </> : <div>Loading</div>}
        </>
    )
}