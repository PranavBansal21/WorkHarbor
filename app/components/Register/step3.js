"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  TextField,
  IconButton,
  CardMedia,
} from "@mui/material";
import Navbar from "@/app/components/Navbar/navbar";
import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Step3({ formData, updateFormData, onSubmit }) {
  const [uploadedImages, setUploadedImages] = useState(formData);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const maxImages = 5;

  // Cloudinary configuration
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET; // Replace with your Cloudinary upload preset
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; // Replace with your Cloudinary cloud name

  const handleImageChange = async (e) => {
    const files = Array.from(e.target.files).slice(
      0,
      maxImages - uploadedImages.length
    );

    // Uploading images one by one
    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      setUploading(true);
      setUploadError(null);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        if (response.ok && data.secure_url) {
          const newImage = {
            workImg: data.secure_url,
            workTitle: "",
            workDesc: "",
            public_id: data.public_id,
          };

          // Add uploaded image to the state
          setUploadedImages((prevImages) => [...prevImages, newImage]);
        } else {
          setUploadError(
            `Error uploading image: ${data.error?.message || "Unknown error"}`
          );
        }
      } catch (error) {
        setUploadError(`Error uploading image: ${error.message}`);
      }

      setUploading(false);
    }
  };

  const handleInputChange = (index, field, value) => {
    setUploadedImages((prevImages) =>
      prevImages.map((img, idx) =>
        idx === index ? { ...img, [field]: value } : img
      )
    );
  };

  const handleRemoveImage = (index) => {
    const updatedImages = uploadedImages.filter((_, idx) => idx !== index);
    setUploadedImages(updatedImages);
  };

  useEffect(() => {
    updateFormData(uploadedImages);
  }, uploadedImages);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(uploadedImages);
    onSubmit();
  };

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
    value: PropTypes.number.isRequired,
  };
  const [progress, setProgress] = useState(66);

  return (
    <>
      <Navbar />
      <div className="m-16">
        <Grid container className="flex">
          <Grid item xs={6}>
            <CardMedia
              component="img"
              image="/Images/register3.jpg"
              style={{
                minHeight: '550px',
                maxHeight: '550px',
                width: '100%',
                objectFit: 'cover'
              }}
            />
          </Grid>
          <Grid item xs={6} className="p-2">
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={progress} />
            </Box>
            <Typography className="inika text-xl mb-2 font-bold">
              ADD PHOTOS
            </Typography>
            <Typography className="inika text-xl mb-2">
              Display the photos of your business/previous works to gain trust
              of customers.
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
              multiple
            />
            <label htmlFor="image-upload">
              <Button variant="contained" component="span" disabled={uploading}>
                Upload Image
              </Button>
            </label>
            {uploadError && (
              <Typography color="error" className="mt-2">
                {uploadError}
              </Typography>
            )}
            {uploadedImages.length > 0 &&
              uploadedImages.map((image, index) => (
                <Box key={index} className="p-2 gap-2 flex flex-col mb-4">
                  <img
                    src={image.workImg}
                    alt={`Uploaded ${index}`}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <TextField
                    name="workTitle"
                    label="Title"
                    required
                    fullWidth
                    value={image.workTitle}
                    onChange={(e) =>
                      handleInputChange(index, "workTitle", e.target.value)
                    }
                  />
                  <TextField
                    name="workDesc"
                    label="Description"
                    required
                    fullWidth
                    value={image.workDesc}
                    onChange={(e) =>
                      handleInputChange(index, "workDesc", e.target.value)
                    }
                  />
                  <IconButton onClick={() => handleRemoveImage(index)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            <Button
              variant="contained"
              className="bg-blue-500 hover:bg-blue-800 justify-center w-full mt-2"
              onClick={handleSubmit}
              disabled={uploading}
            >
              Save and Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
