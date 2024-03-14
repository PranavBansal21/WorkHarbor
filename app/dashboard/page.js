import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Navbar from "../components/Navbar/navbar";
import AboutInfo from "../components/Dashboard/aboutInfo";
import BasicInfo from "../components/Dashboard/basicInfo";
import InfoImage from "../components/Dashboard/infoImage";
import { Box } from "@mui/material";
import PreviousWork from "../components/Dashboard/previousWork";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="mt-10 px-10">
        <Grid container spacing={3}>
          <Grid xs={7}>
            <Grid item xs={12} marginBottom={4}>
              <InfoImage />
            </Grid>
            <Grid item xs={12} marginBottom={4}>
              <BasicInfo />
            </Grid>
            <Grid item xs={12}>
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
