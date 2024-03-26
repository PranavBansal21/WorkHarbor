"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Grid, Typography, Box, Button } from '@mui/material'
import Navbar from '@/app/components/Navbar/navbar'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'   

export default function Step3() {
    const router = useRouter();

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
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
        /**
         * The value of the progress indicator for the determinate and buffer variants.
         * Value between 0 and 100.
         */
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
                        />
                        <label htmlFor="image-upload" className='w-full justify-center'>
                            <img
                                src={image || '/Images/drag.gif'}
                                alt="Uploaded"
                                className="object-cover p-2"
                                style={{ cursor: 'pointer', width: '600px', maxHeight: '400px' }}
                            />
                        </label>
                        <Button type="submit" variant="contained" className="bg-blue-500 hover:bg-blue-800 justify-center w-full mt-2">
                            Save and Submit
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
