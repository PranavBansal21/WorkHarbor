"use state"
import Navbar from "@/app/components/Navbar/navbar"
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material"

export default function CertainPost() {
    const dummyData =
        { src: "/Images/back.jpg", title: "", description: " ", tags: ["", "", ""], location: " ", firstname: "", lastname: "" }

    return (
        <>
            <Navbar />
            <div className="px-10 py-10">
                <Grid container>
                    <Grid item xs={6}>
                        <Card >
                            <CardActionArea>
                                {console.log(dummyData.src)}
                                <CardMedia
                                    component="img"
                                    image={dummyData.src}
                                    style={{
                                        minHeight: '500px',
                                        maxHeight: '500px',
                                        width: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            </div>
        </>
    )
}