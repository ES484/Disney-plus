import React from 'react'
import ImgSlider from './ImgSlider/ImgSlider';
import Viewer from './Viewer/Viewer';
import Movies from './Movies/Movies';


function Home() {
  
    
   
  return (
    <React.Fragment>
        <ImgSlider/>
        <Viewer/>
        <Movies/>
        
    </React.Fragment>
  )
}

export default Home