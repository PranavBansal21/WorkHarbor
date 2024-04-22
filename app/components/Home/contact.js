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

const sections = [
    {
        title: "Company",
        links: ["About us", "Terms and conditions", "Privacy Policy", "WH impact", "Careers"]
    },
    {
        title: "For Customers",
        links: ["WH reviews", "Categories near you", "Blog", "Contact us"]
    },
    {
        title: "For Partners",
        links: ["Register as a professional"]
    },
    {
        title: "Social Links",
        links: ["Instagram", "Twitter"]
    }
];

export default function Contact() {
    return (
        <div id="contact" className="contact bg-customHome pt-4">
            <Grid container>
                {sections.map((section, index) => (
                    <Grid item xs={3} key={index} className="flex flex-col gap-3" display='flex' alignItems='center'>
                        <div className="flex flex-col gap-3">
                            <Typography className="inika text-3xl font-bold">
                                {section.title}
                            </Typography>
                            <div className="flex flex-col">
                                {section.links.map((link, linkIndex) => (
                                    <Typography className="text-lg" key={linkIndex}>
                                        {link}
                                    </Typography>
                                ))}
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
            <Copyright sx={{ mt: 4 }} />
        </div>
    )
}