"use client"
import { useState } from 'react'
import Chip from '@mui/material/Chip'

export default function TagSelector ({ tags, removeTag }) {

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Chip
          key={index}
          label={tag}
          clickable
          color="primary"
          onDelete={() => removeTag(tag)}
          deleteIcon={<span>&times;</span>}
        />
      ))}
    </div>
  );
};
