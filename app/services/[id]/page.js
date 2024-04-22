"use client";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "@/app/components/Navbar/navbar";
import AboutInfo from "@/app/components/Dashboard/aboutInfo";
import BasicInfo from "@/app/components/Dashboard/basicInfo";
import InfoImage from "@/app/components/Dashboard/infoImage";
import PreviousWork from "@/app/components/Dashboard/previousWork";
import axios from "axios";
import { useEffect, useState } from "react";
import Reviews from "@/app/components/Dashboard/rewiews";
import CircularProgress from "@mui/material/CircularProgress";

export default function ServicePage({ params }) {
  const [details, setDetails] = useState(null);
  const findService = async () => {
    const userid = params.id;
    const res = await axios.post("/api/services/findService", { userid });
    setDetails(res.data);
  };
  useEffect(() => {
    findService();
  }, []);

  return (
    <div>
      <Navbar />
      {details ? (
        <div className="mt-10 px-10">
          <Grid container spacing={3}>
            <Grid xs={7}>
              <Grid xs={12} marginBottom={4}>
                <InfoImage props={[details.backImg, details.frontImg]} />
              </Grid>
              <Grid xs={12} marginBottom={4}>
                <BasicInfo
                  props={[
                    details.title,
                    details.city,
                    details.state,
                    details.owner.phone,
                    details.owner.email,
                  ]}
                />
              </Grid>
              <Grid xs={12}>
                <AboutInfo
                  props={[
                    details.description,
                    details.buildingName,
                    details.streetName,
                    details.area,
                    details.city,
                    details.state,
                  ]}
                />
              </Grid>
              <Grid xs={12}>
                <Reviews props={[details.stars, details.reviews, params]} />
              </Grid>
            </Grid>
            <Grid xs={5}>
              <PreviousWork props={details.previousWorks} />
            </Grid>
          </Grid>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
