"use client";
import React from "react";
import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import Navbar from "@/app/components/Navbar/navbar";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Step1({ formData, updateFormData, onSubmit }) {
  const [currFormData, setCurrFormData] = useState(formData);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "pincode" && value.length > 6) {
      return;
    }
    setCurrFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateFormData(currFormData);
    onSubmit();
  }

  function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
  const [progress, setProgress] = React.useState(0);

  return (
    <>
      <Navbar />
      <div className="m-16">
        <Grid container className="flex">
          <Grid item xs={6}>
            <img src="/Images/back.jpg" className="object-cover p-2" />
          </Grid>
          <Grid item xs={6} className="p-2">
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={progress} />
            </Box>
            <Typography className="inika text-xl mb-2 font-bold">
              Enter your Business Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <TextField
                  name="businessName"
                  label="Business Name"
                  value={currFormData.businessName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  name="pincode"
                  label="Pincode"
                  value={currFormData.pincode}
                  onChange={handleChange}
                  type="number"
                  required
                  fullWidth
                />
                <TextField
                  name="buildingName"
                  label="Building Name"
                  value={currFormData.buildingName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  name="streetName"
                  label="Street Name"
                  value={currFormData.streetName}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  name="area"
                  label="Area"
                  value={currFormData.area}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <TextField
                  name="landMark"
                  label="Land Mark"
                  value={currFormData.landMark}
                  onChange={handleChange}
                  required
                  fullWidth
                />
                <div className="flex gap-4">
                  <TextField
                    name="city"
                    label="City"
                    value={currFormData.city}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                  <TextField
                    name="state"
                    label="State"
                    value={currFormData.state}
                    onChange={handleChange}
                    required
                    fullWidth
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  className="bg-blue-500 hover:bg-blue-800"
                >
                  Save and Continue
                </Button>
              </div>
            </form>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
