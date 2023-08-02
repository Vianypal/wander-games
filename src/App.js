import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Feed from './components/Feed';
import Slide1 from './components/Slide1';
import Films from './components/Films';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
    <Navbar/>
    <Feed />
      <Routes>
      <Route path="/films" element={<Films />} /> 
      </Routes>
    </Box>
      
   </BrowserRouter>

   
  );
}

export default App;
