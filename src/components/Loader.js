import React from 'react';
import { ReactComponent as LoaderSVG } from '../assets/Loader.svg';
import '../css/Loader.css';

const Loader = () =>{
    

        setTimeout(() => {
            console.log("timeout start")

        }, 1500);
       

        return(
            <div className="loader-svg">
              <LoaderSVG />
            </div>
        )
        
}

export default Loader;