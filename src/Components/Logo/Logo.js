import React from 'react';
import  Tilt from 'react-tilt';
import './Logo.css';

import Design from  './Logo.jpeg';

const Logo =()=>{
    return (
        <div className = 'pa3'>
            <Tilt className="Tilt br2 shadow-2" options ={{max:25}} style={{height :150,width :150}} >
              <div className = "Tilt-inner"><img alt='logo' src = {Design}/></div>
            </Tilt>

        </div>
    );
}

export default Logo ;