"use client"
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"

export default function PostedServices({props}) {
    return (
        <Grid xs={3}>
            <Card className="border border-gray-400 mr-3 rounded-lg mb-3">
                <CardContent>
                    <Typography className="inika text-lg text-center font-bold">
                        {props.workTitle}
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.workImg}
                        style={{
                            minHeight: '100px',
                            maxHeight: '200px',
                            width: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography>{props.workDesc}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
} 