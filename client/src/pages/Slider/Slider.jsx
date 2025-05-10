import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import s1 from '../../pages/Slider/1.png';
import s2 from '../../pages/Slider/2.png';
import s3 from '../../pages/Slider/3.png';
import { useNavigate } from 'react-router-dom';

const AutoImageSlider = () => {
  const images = [s1, s2, s3];
  const navigate = useNavigate()

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="w-full relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`slide-${index}`}
              className="w-full h-[50vh] md:h-[85vh] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-center text-white px-6 max-w-2xl animate-fadeIn">
                <h2 className="text-2xl md:text-5xl font-extrabold tracking-wide mb-4 animate-fadeInUp">
                  OUR <span className="text-yellow-400 drop-shadow-md">MISSION</span>
                </h2>
                <p className=" md:text-xl leading-relaxed text-gray-200 animate-fadeIn delay-300">
                  We always provide our best educational services to empower and uplift every student towards excellence.
                </p>
                <div className="mt-6">
                  <button onClick={() => navigate("/about")}  className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full shadow-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoImageSlider;
