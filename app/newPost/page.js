"use client"
import { Button, Chip, TextField, Typography } from "@mui/material";
import Navbar from "../components/Navbar/navbar";
import { Tags } from "@/utils/tags";
import TagSelector from "../components/Register/tagSelector";
import { useState } from "react";

export default function NewPost() {

    const [selectedTags, setSelectedTags] = useState([]);

    function addTag(tag) {
        if (!selectedTags.includes(tag)) {
            setSelectedTags((prevTags) => [...prevTags, tag]);
        }
    }

    function removeTag(tag) {
        const updatedTags = selectedTags.filter((t) => t !== tag);
        setSelectedTags(updatedTags);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target.form);
        const caption = formData.get("caption");
        const phone = formData.get("phone");
        const city = formData.get("city");
        const state = formData.get("state");
        console.log(caption, phone, city, state);
    }

    return (
        <>
            <Navbar />
            <div class="rounded-lg px-4 py-6">
                <form className="mx-96">
                    <div className="flex flex-col gap-2">
                        <TextField
                            name="caption"
                            label="Caption"
                            required
                            fullWidth
                        />
                        <TextField
                            name="phone"
                            label="Phone Number"
                            type="number"
                            required
                            fullWidth
                        />
                        <div className="flex gap-4">
                            <TextField
                                name="city"
                                label="City"
                                required
                                fullWidth
                            />
                            <TextField
                                name="state"
                                label="State"
                                required
                                fullWidth
                            />
                        </div>
                        <div className="container my-4">
                            <Typography className="inika text-xl font-bold">
                                Select Tags
                            </Typography>
                            <div className="my-2 flex flex-wrap gap-2">
                                {Tags.map((tag, index) => (
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
                        <div class="mb-4">
                            <label class="block text-sm font-medium text-gray-700">Upload files</label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m-4-4l4-4m-4 4V12" />
                                    </svg>
                                    <div class="flex text-sm text-gray-600">
                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <Button
                            variant="contained"
                            className="bg-blue-500 hover:bg-blue-800"
                            onClick={handleSubmit}
                        >
                            Save and Continue
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}