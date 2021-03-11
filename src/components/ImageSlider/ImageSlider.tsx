import React from 'react'
import { SliderData } from './SliderData'

const ImageSlider = () => {
    return (
        <>
           {SliderData.map((slides, index) => {
               return(
                   <img style={{height: '80vh', width: '100%'}} src={slides.image} alt={slides.alternate}/>
               );
           })} 
        </>
    )
}

export default ImageSlider
