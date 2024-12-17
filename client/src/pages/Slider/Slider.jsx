import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../pages/Slider/1.png'
import s2 from '../../pages/Slider/2.png'
import s3 from '../../pages/Slider/3.webp'
const AutoImageSlider = () => {
  const images = [s1,s2,s3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400, // Transition speed in ms (adjusted to be faster)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto slide functionality
    autoplaySpeed: 3000, // Time in ms between slides
  };

  return (
    <div className='w-full overflow-hidden'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: "100%", height: "auto" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoImageSlider;