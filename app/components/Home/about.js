"use client"
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const sections = [
    {
        img: "/Images/about1.jpg",
        name: "Skill-Based Listing",
        des: "Unlike traditional platforms that might require physical presence or extensive verification processes, our platform focuses solely on the skills of the service provider. This opens up opportunities for individuals who might not have a physical establishment or previous experience but possess the necessary expertise."
    },
    {
        img: "/Images/about2.png",
        name: "Two-Way Connection",
        des: "The dual model of allowing service seekers to search for providers and vice versa through service requests fosters a dynamic and interactive ecosystem. It ensures that both parties have ample opportunities to find suitable matches for their needs without extensive searching."
    },
    {
        img: "/Images/about3.jpg",
        name: "Tagged Service Requests",
        des: "The ability for service seekers to post service requests with tagged categories streamlines the process for providers to find relevant opportunities. This feature enhances efficiency and ensures that providers are only seeing requests that align with their expertise."
    },
    {
        img: "/Images/about4.png",
        name: "Profile Pages with Comprehensive Information",
        des: "Each user, whether a service seeker or provider, has a detailed profile page showcasing not only basic contact information but also ratings, previous works, business details, and additional information. This transparency builds trust and allows users to make informed decisions."
    },
    {
        img: "/Images/about5.jpg",
        name: "Empowerment of Skilled Individuals",
        des: "By providing a platform where skills are valued above all else, your website empowers individuals with expertise who might otherwise struggle to find opportunities due to lack of connections or traditional barriers to entry."
    },
    {
        img: "/Images/about6.webp",
        name: "Enhanced Employment Opportunities",
        des: "Your platform not only facilitates connections between service seekers and providers but also contributes to job creation by offering opportunities to skilled individuals who may have previously been overlooked by traditional employment channels."
    }
]

export default function About() {
    const [fadeIn, setFadeIn] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const aboutSection = document.getElementById("about");
            if (!aboutSection) return;

            const { top } = aboutSection.getBoundingClientRect();
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollDirection = currentScrollTop > lastScrollTop ? "down" : "up";
            setLastScrollTop(currentScrollTop);

            const isVisible = top < window.innerHeight * 0.6;

            if (isVisible && !fadeIn) {
                setFadeIn(true);
            }

            if (!isVisible) {
                setFadeIn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [fadeIn, lastScrollTop]);

    return (
        <div id="about" className="bg-[#987554] h-screen w-screen about flex flex-col justify-evenly" style={{ overflowX: "auto" }}>
            <Typography className="text-center text-black inika text-5xl">
                What Makes us Different?
            </Typography>
            <Grid container className={`flex flex-nowrap overflow-x-auto gap-8 px-4 ${fadeIn ? 'animate-fade-right' : 'animate-fade-left'}`} >
                {sections.map((section, index) => (
                    <Grid key={index} item className="flex-shrink-0 w-96">
                        <div style={{ width: '400px', height: '200px', overflow: 'hidden', position: 'relative' }}>
                            <Image
                                src={section.img}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                alt={section.name}
                                className="border border-black rounded-lg"
                            />
                        </div>
                        <div className="mt-3 flex flex-col gap-2">
                            <Typography className="inika text-lg text-center font-bold">
                                {section.name}
                            </Typography>
                            <Typography className="inika">
                                {section.des}
                            </Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}