"use client"
import Navbar from "@/app/components/Navbar/navbar"
import { Card, CardActionArea, CardMedia, Chip, Grid, Typography } from "@mui/material"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"

export default function CertainPost() {
    const dummyData = {
        src: "/Images/back.jpg",
        title: "GLITZ® Clothes Drying Rack, Metal Wall Mount Cloth Drying Stand, 5 Wire Foldable Space Saving Stand for Clothes Drying…",
        description: "Cloths drying rack is a perfectly designed to save space in your laundry or balcony or any room you want to dry your wet clothes. You can fold this collapsible drying stand when it is not used and open it again to dry your laundry.",
        tags: ["Electrician", "Plumber", "Astronaut"],
        location: "Pranav ka Ghar, Haryana",
        firstname: "Pranav",
        lastname: "Bansal",
        phone: 926548665464
    }

    return (
        <>
            <Navbar />
            <div className="px-10 py-10">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card style={{ boxShadow: 'none' }} className="pl-32">
                            <CardMedia
                                component="img"
                                image={dummyData.src}
                                style={{
                                    minHeight: '500px',
                                    maxHeight: '500px',
                                    minWidth: '600px',
                                    maxWidth: '600px',
                                    objectFit: 'cover'
                                }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={6} className="flex flex-col gap-5">
                        <Typography className="inika text-3xl">
                            {dummyData.title}
                        </Typography>
                        <Typography className="inika text-xl text-gray-500">
                            {dummyData.location}
                        </Typography>
                        <div className="flex flex-wrap gap-6">
                            {dummyData.tags.map((tag, index) => (
                                <Chip key={index} label={tag} />
                            ))}
                        </div>
                        <Typography className="inika text-2xl">
                            {dummyData.firstname} {dummyData.lastname}
                        </Typography>
                        <div className="flex gap-2">
                            <LocalPhoneIcon />
                            <Typography className="inika">
                                {dummyData.phone}
                            </Typography>
                        </div>
                        <Typography className="inika text-lg text-gray-500">
                            {dummyData.description}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}