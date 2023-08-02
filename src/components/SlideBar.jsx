import React, { useState } from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FolderSimple from './Foldericon.svg';
import { Category } from '@mui/icons-material';

const categories = [
  { id: 'films', label: 'films' },
  { id: 'people', label: 'People' },
  { id: 'planets', label: 'Planets' },
  { id: 'species', label: 'Species' },
  { id: 'starships', label: 'Starships' },
  { id: 'vehicles', label: 'Vehicles' },
  
];



const SlideBar = () => {
  const [selectedCategory,setselectedCategory] = useState(""); 
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map((category) => (
        <Link to={`/${category.id}`} key={category.id} style={{ textDecoration: 'none' }}>
          <button
            className="category-btn"
            style={{
              background: selectedCategory === category.id ? '#FC1503' : 'transparent',
              color: selectedCategory === category.id ? 'white' : 'red',
            }}
            onClick={()=>{setselectedCategory(category.id)}}
          >
            <span style={{ color: selectedCategory === category.id ? 'white' : 'red', marginRight: '15px' }}>
              <img src={FolderSimple} alt="logo" />
            </span>
            <span style={{ opacity: selectedCategory === category.id ? '1' : '0.8' }}>{category.label}</span>
          </button>
        </Link>
      ))}
    </Stack>
  );
};

export default SlideBar;
