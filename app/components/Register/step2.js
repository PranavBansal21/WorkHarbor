"use client"
import React from 'react'
import { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import PropTypes from 'prop-types'
import LinearProgress from '@mui/material/LinearProgress'
import Navbar from '@/app/components/Navbar/navbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

export default function Step2({ formData, updateFormData, onSubmit }) {
    const [currFormData, setCurrFormData] = useState(formData);

    const [dropDown, setDropDown] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = [
        { id: 1, name: "Plumber" },
        { id: 2, name: "Carpenter" },
        { id: 3, name: "Electrician" }
    ];

    function handleChange (e) {
        const { name, value } = e.target;
        setCurrFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function handleSubmit (e) {
        e.preventDefault();
        updateFormData(currFormData);
        onSubmit();
    };

    function handleDropDown () {
        setDropDown(!dropDown);
    };

    function handleCategoryClick (categoryId) {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
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
    const [progress, setProgress] = React.useState(33);

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
                            Enter your Details
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <TextField
                                    name="name"
                                    label="Name"
                                    value={currFormData.name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                                <hr />
                                <TextField
                                    name="phone"
                                    label="Phone Number"
                                    value={currFormData.phone}
                                    onChange={handleChange}
                                    type='number'
                                    required
                                    fullWidth
                                />
                                <TextField
                                    name="optionalPhone"
                                    label="Phone Number"
                                    value={currFormData.optionalPhone}
                                    onChange={handleChange}
                                    type='number'
                                    fullWidth
                                />
                                <hr />
                                <TextField
                                    name="email"
                                    label="Email"
                                    value={currFormData.email}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />

                                <Button onClick={handleDropDown} className="inika hover:bg-gray-300 text-black text-left">
                                    Select tags
                                </Button>
                                {dropDown && (
                                    <div>
                                        <ul>
                                            {categories.map((cat) => (
                                                <li key={cat.id} onClick={() => handleCategoryClick(cat.id)}>
                                                    {cat.name}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {selectedCategories.length > 0 && (
                                    <div>
                                        {selectedCategories.map((categoryId) => (
                                            <Typography key={categoryId}>
                                                {categories.find((category) => category.id === categoryId).name}
                                            </Typography>
                                        ))}
                                    </div>
                                )}
                                <Button type="submit" variant="contained" className="bg-blue-500 hover:bg-blue-800">
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
