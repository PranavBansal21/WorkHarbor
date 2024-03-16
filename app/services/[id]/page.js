import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "@/app/components/Navbar/navbar";
import AboutInfo from "@/app/components/Dashboard/aboutInfo";
import BasicInfo from "@/app/components/Dashboard/basicInfo";
import InfoImage from "@/app/components/Dashboard/infoImage";
import { Box } from "@mui/material";
import PreviousWork from "@/app/components/Dashboard/previousWork";

export default function ServicePage({params}){
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