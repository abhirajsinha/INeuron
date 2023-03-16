import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style.css";

const ImageSlider = ({ images }) => {
  let carasoulSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Slider {...carasoulSettings}>
        {images.map((item) => {
          return (
            <div key={item.id}>
              <div className="carasoule--items">
                <img
                  src={item.src}
                  alt={item.alt}
                  style={{ height: "200px", width: "200px" }}
                />
                <div className="carasoule--texts">
                  <p>Playlist</p>
                  <h1>Top Trending WorldWide</h1>
                  <p>Listen to Worl's top virtual tracks!</p>
                  <div>
                    <button>Pause</button>
                    <button>Follow</button>
                    <button>...</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default ImageSlider;
