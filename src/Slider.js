import React, {useState, useEffect} from 'react';
import './Slider.css';
import img1 from './imgs/Cover_100mb.jpg'
import img2 from './imgs/Cover_150mb.jpg'
import img3 from './imgs/cover_250.png'

function Slide({background, active}){
            
    let slideStyle = {
      backgroundImage: 'url(' + background + ')'  
    };
    
    return(
    <div className="slide" data-active={active} style={slideStyle}></div>
      );
}

function Slider() {
    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(()=>{
        setTimeout(nextSlide, 5000);
    },[activeSlide])
    const slides = [
        {
          background: img1,
          text: "America",
          link: "https://unsplash.com/anthonydelanoix"
        },
        {
          background: img2,
          text: "Mountains",
          link: "https://unsplash.com/aleskrivec"
        },
        {
          background: img3,
          text: "Mountains",
          link: "https://unsplash.com/aleskrivec"
        }
        
      ]
      
      
      function nextSlide(){
        let slide = (activeSlide + 1) < slides.length ? activeSlide + 1 : 0;
        console.log(slide)
        setActiveSlide(slide);
      }
  return (
    <div className="slider">
        {slides.map((slide, index, array) =>
            <Slide key={index} background={slide.background} text={slide.text} active={index === activeSlide} link={slide.link} /> )}
    </div>
      
  );
}

export default Slider;