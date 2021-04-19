import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homepage/gallery.css";

const ProjectGallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="gallery_img ">
          <img
            className="logoimg"
            src={process.env.PUBLIC_URL + "/images/p1.jpg"}
            alt=""
          />
        </div>
        <div className="gallery_img">
          <img
            className="logoimg"
            src={process.env.PUBLIC_URL + "/images/p2.jpg"}
            alt=""
          />
        </div>
        <div className="gallery_img">
          <img
            className="logoimg"
            src={process.env.PUBLIC_URL + "/images/p3.jpg"}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default ProjectGallery;
