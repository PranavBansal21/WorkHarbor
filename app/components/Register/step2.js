"use client";
import React from "react";
import { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Navbar from "@/app/components/Navbar/navbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TagSelector from "./tagSelector";
import Chip from "@mui/material/Chip";

const tags = ["Plumber", "Carpenter", "Electrician"];

export default function Step2({ formData, updateFormData, onSubmit }) {
  const [currFormData, setCurrFormData] = useState(formData);

  const [selectedTags, setSelectedTags] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCurrFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrFormData((prevData) => ({
      ...prevData,
      [tags]: selectedTags,
    }));
    updateFormData(currFormData);
    onSubmit();
  }

  function addTag(tag) {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  }

  function removeTag(tag) {
    const updatedTags = selectedTags.filter((t) => t !== tag);
    setSelectedTags(updatedTags);
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
  const [progress, setProgress] = React.useState(33);

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
              Enter other Business Related Details
            </Typography>
            <div className="flex flex-col gap-2">
              <TextField
                name="phone"
                label="Phone Number"
                value={currFormData.phone}
                onChange={handleChange}
                type="number"
                required
                fullWidth
              />
              <TextField
                name="email"
                label="Email"
                value={currFormData.email}
                onChange={handleChange}
                required
                fullWidth
              />
            </div>
            <div className="container my-4">
              <Typography className="inika text-xl font-bold">
                Select Tags
              </Typography>
              <div className="my-2 flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    variant="outlined"
                    onClick={() => addTag(tag)}
                  />
                ))}
              </div>
              <TagSelector
                tags={selectedTags}
                removeTag={(data) => removeTag(data)}
              />
            </div>
            <Button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-800"
              onClick={handleSubmit}
            >
              Save and Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
