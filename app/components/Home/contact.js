"use client"
import { WidthWideTwoTone } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="black"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href={"www.milliebobbybrown.com"}>
                TaskHarbor.
            </Link>{"All rights reserved "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

export default function Contact() {
    return (
        <div id="contact" className="contact bg-[#DEAF84] pt-4">
            <Grid container className="pl-4">
                <Grid item xs={3} className="flex flex-col gap-3">
                    <Typography className="inika text-3xl font-bold">
                        Company
                    </Typography>
                    <div className="flex flex-col">
                        <Typography className="inika text-lg">
                            About us
                        </Typography>
                        <Typography className="inika text-lg">
                            Terms & Conditions
                        </Typography>
                        <Typography className="inika text-lg">
                            Privaet Policy
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Typography className="inika text-3xl font-bold">
                        Social Links
                    </Typography>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 4 }} />
        </div>
    )
}