import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
import sliderBadag from '../../../images/slider-badag.jpg';
import sliderBadging from '../../../images/slider-badging.jpg';
import sliderScale from '../../../images/slider-scale.jpg';
import sliderScales from '../../../images/slider-scales.jpg';
import styles from './ImgSlider.module.css';

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        adaptiveHeight: true,
      };
  return (
    <div className='container py-3 w-100'>
         <div className="row">
            <div className="col-12">
            <div className={styles.sliderDots}>
            <Slider {...settings}>
              <div>
                <img className="w-100" src={sliderBadag} alt="sliderBadag" />
              </div>
              <div>
                <img className="w-100" src={sliderBadging} alt="sliderBadag" />
              </div>
              <div>
                <img className="w-100" src={sliderScale} alt="sliderBadag" />
              </div>
              <div>
                <img className="w-100" src={sliderScales} alt="sliderBadag" />
              </div>
            </Slider>
            </div>
            </div>
         </div>
    </div>
  )
}

export default ImgSlider;