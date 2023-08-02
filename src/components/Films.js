import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/films/');
      setFilms(response.data.results);
      console.log(response);
    } catch (error) {
      console.error('Error fetching films:', error);
    }
  };

  return (
    <div className='screen1'>
    <Typography variant='h4'
    fontWeight="bold" mb={2} sx={{color:'white'}}>
      New <span style={{color: '#F31503'}}>Videos</span>

    </Typography>
    <div>
      <h2>Films</h2>
      <div className="films-container">
        {films.map((film) => (
          <div key={film.title} className="film-card">
            <img src={`https://picsum.photos/200/300?random=${film.title}`} alt={film.title} />
            <h3>{film.title}</h3>
            <p>Release Date: {film.release_date}</p>
          </div>
        ))}
        
      </div>
    </div>
    </div>
  );
};

export default Films;

