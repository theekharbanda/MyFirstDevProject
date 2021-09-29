import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm=({onInputChange,onButtonSubmit})=>{
    return(
        <div>
            <p className ='tc '>Hey There! Let's recognise</p>
            <div className ='center'>
                <div className = 'form tc pa4 br3 shadow-5 w-40 '>
                   <input className = ' br2 pa2 pv2 w-70 'type ='text' onChange={onInputChange}/>
                   <button 
                   onClick ={onButtonSubmit}
                   className='w-30 grow f4 link ph2 pv2 dib black br2 bg-light-green'>Detect</button>
                </div>
            </div>


        </div>
    );
}

export default ImageLinkForm ;