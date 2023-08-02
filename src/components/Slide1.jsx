import React from 'react';
import rectandleimg from './Rectangle 6.jpg';


const Slide1 = () => {
  return (
    <div className='sli1'>
      <div> 
        <img src={rectandleimg} alt="photo" />
      </div>
      <div>
        <p>Welcome to Star Wars Dashboard</p>
      </div>
      <div>
        Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
      </div>
    </div>
  );
};

export default Slide1;

