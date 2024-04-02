"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Grid, Typography, Box, Button, TextField, IconButton } from '@mui/material'
import Navbar from '@/app/components/Navbar/navbar'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import DeleteIcon from '@mui/icons-material/Delete';

export default function Step3() {
    const router = useRouter();

    const [images, setImages] = useState([]);

    const handleImageChange = async (e) => {
        if (images.length >= 5) {
            alert("Maximum of 5 images can be uploaded.");
            return;
        }

        const files = Array.from(e.target.files).slice(0, 5 - images.length);
        for (const file of files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            await new Promise((resolve) => {
                reader.onloadend = () => {
                    setImages(prevImages => [...prevImages, { url: reader.result, title: '', description: '' }]);
                    resolve();
                };
            });
        }
    };

    const handleInputChange = (index, field, value) => {
        setImages(prev => prev.map((img, idx) => idx === index ? { ...img, [field]: value } : img));
        console.log(images);
    };

    const handleRemoveImage = (index) => {
        setImages(prevImages => prevImages.filter((_, idx) => idx !== index));
    };

    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        props.value,
                    )}%`}</Typography>
                </Box>
            </Box>
        );
    }

    LinearProgressWithLabel.propTypes = {
        value: PropTypes.number.isRequired,
    };
    const [progress, setProgress] = React.useState(66);

    return (
        <>
            <Navbar />
            <div className="m-16">
                <Grid container className="flex">
                    <Grid xs={6} >
                        <img
                            src="/Images/back.jpg"
                            className="object-cover p-2"
                        />
                    </Grid>
                    <Grid xs={6} className="p-2">
                        <Box sx={{ width: '100%' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                        <Typography className="inika text-xl mb-2 font-bold">
                            ADD PHOTOS
                        </Typography>
                        <Typography className="inika text-xl mb-2">
                            Display the photos of your business/previous works to gain trust of customers.
                        </Typography>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            id="image-upload"
                            multiple
                        />
                        <label htmlFor="image-upload" className='w-full justify-center'>
                            <Button variant="contained" component="span">
                                Upload Image
                            </Button>
                        </label>
                        {images.map((image, index) => (
                            <Box key={index} className="p-2 gap-2 flex flex-col mb-4">
                                <img
                                    src={image.url}
                                    alt="Uploaded"
                                    style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                />
                                <TextField
                                    name="title"
                                    label="Title"
                                    required
                                    fullWidth
                                    value={image.title}
                                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                                />
                                <TextField
                                    name="description"
                                    label="Description"
                                    required
                                    fullWidth
                                    value={image.description}
                                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                                />
                                <IconButton onClick={() => handleRemoveImage(index)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        ))}
                        <Button type="submit" variant="contained" className="bg-blue-500 hover:bg-blue-800 justify-center w-full mt-2">
                            Save and Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
