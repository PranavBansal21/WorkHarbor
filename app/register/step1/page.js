"use client"
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Grid, TextField } from '@mui/material'
import Navbar from '@/app/components/Navbar/navbar'
import Typography from '@mui/material/Typography'

export default function Step1() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        phone: null,
        optionalPhone: null,
        email: ''
    });

    const [dropDown, setDropDown] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = [
        { id: 1, name: "Plumber" },
        { id: 2, name: "Carpenter" },
        { id: 3, name: "Electrician" }
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    function handleDropDown () {
        setDropDown(!dropDown);
    };

    const handleCategoryClick = (categoryId) => {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
        } else {
            setSelectedCategories([...selectedCategories, categoryId]);
        }
        console.log(selectedCategories);
    };

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
                        <Typography className="inika text-xl mb-2 font-bold">
                            Enter your Details
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <TextField
                                    name="name"
                                    label="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                />
                                <hr />
                                <TextField
                                    name="phone"
                                    label="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type='number'
                                    required
                                    fullWidth
                                />
                                <TextField
                                    name="optionalPhone"
                                    label="Phone Number"
                                    value={formData.optionalPhone}
                                    onChange={handleChange}
                                    type='number'
                                    fullWidth
                                />
                                <hr />
                                <TextField
                                    name="email"
                                    label="Email"
                                    value={formData.email}
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
