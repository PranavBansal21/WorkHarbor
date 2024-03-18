"use client"
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "@/app/components/Navbar/navbar";
import AboutInfo from "@/app/components/Dashboard/aboutInfo";
import BasicInfo from "@/app/components/Dashboard/basicInfo";
import InfoImage from "@/app/components/Dashboard/infoImage";
import PreviousWork from "@/app/components/Dashboard/previousWork";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ServicePage({params}){
  const [details,setDetails] = useState(null);
  //details contain all the info of a service provider which is fetched from database
  //now it is req to show in frontend
  const findService = async()=>{
  const userid = params.id;
  const res = await axios.post("/api/services/findService",{userid});
   setDetails(res.data);
  }
  useEffect(() => {
    findService();
  }, []);
    return (
        <>
          <Navbar />
          <div className="mt-10 px-10">
            <Grid container spacing={3}>
              <Grid xs={7}>
                <Grid xs={12} marginBottom={4}>
                  <InfoImage />
                </Grid>
                <Grid xs={12} marginBottom={4}>
                  <BasicInfo />
                </Grid>
                <Grid xs={12}>
                  <AboutInfo />
                </Grid>
              </Grid>
              <Grid xs={5}>
                <PreviousWork />
              </Grid>
            </Grid>
          </div>
        </>
      );
}