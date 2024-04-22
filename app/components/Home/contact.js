"use client"
import { Grid, Typography } from "@mui/material";
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

const company = ["About us", "Terms and conditions", "Privacy Policy", "WH impact", "Careers"];
const forCustomers = ["WH reviews", "Categories near you", "Blog", "Contact us"];
const forPartners = ["Register as a professional"];
const socialLinks = ["About us", "Terms and conditions", "Privacy Policy", "WH impact", "Careers"];

export default function Contact() {
    return (
        <div id="contact" className="contact bg-blue-200 pt-4">
            <Grid container className="pl-4">
                <Grid item xs={3} className="flex flex-col gap-3">
                    <Typography className="inika text-3xl font-bold">
                        Company
                    </Typography>
                    <div className="flex flex-col">
                        {company.map((com, index) => (
                            <Typography className="text-lg">
                                {com}
                            </Typography>
                        ))}
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