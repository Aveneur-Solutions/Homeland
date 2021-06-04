import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homepage/gallery.css";
import "./booking.css";
import { useMediaQuery } from "react-responsive";
// import useProgressiveImg from "../OurProject/UseProgressiveImg";
const ProjectGallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // const [src4, { blur4 }] = useProgressiveImg(
  //   "/o1.jpg",
  //   process.env.PUBLIC_URL + "/images/o1.jpg"
  // );
  // const [src5, { blur5 }] = useProgressiveImg(
  //   "/o2.jpg",
  //   process.env.PUBLIC_URL + "/images/o2.jpg"
  // );
  // const [src6, { blur6 }] = useProgressiveImg(
  //   "/o3.jpg",
  //   process.env.PUBLIC_URL + "/images/o3.jpg"
  // );

  return (
    <div className="slider">
      {!isTabletOrMobileDevice ? (
        <Slider {...settings}>
          <div className="gallery_img ">
            <img
              className="logoimg"
              // src={"//d5twn4m6.cdn.imgeng.in" + src4}
              src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/o1.jpg"}
              alt=""
              // style={{
              //   filter: blur4 ? "blur(20px)" : "none",
              //   transition: blur4 ? "none" : "filter 0.3s ease-out",
              // }}
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              // src={"//d5twn4m6.cdn.imgeng.in" + src5}
              src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/o2.jpg"}
              alt=""
              // style={{
              //   filter: blur5 ? "blur(20px)" : "none",
              //   transition: blur5 ? "none" : "filter 0.3s ease-out",
              // }}
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              // src={"//d5twn4m6.cdn.imgeng.in" + src6}
              src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/o3.jpg"}
              alt=""
              // style={{
              //   filter: blur6 ? "blur(20px)" : "none",
              //   transition: blur6 ? "none" : "filter 0.3s ease-out",
              // }}
            />
          </div>
        </Slider>
      ) : (
        <div className="mob-gallery">
          <Slider {...settings}>
            <div className="gallery_img ">
              <img
                className="logoimg"
                // src={src4}
                src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/o1.jpg"}
                alt=""
                // style={{
                //   filter: blur4 ? "blur(20px)" : "none",
                //   transition: blur4 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
            <div className="gallery_img">
              <img
                className="logoimg"
                // src={"//d5twn4m6.cdn.imgeng.in" + src5}
                src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/o2.jpg"}
                alt=""
                // style={{
                //   filter: blur5 ? "blur(20px)" : "none",
                //   transition: blur5 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
            <div className="gallery_img">
              <img
                className="logoimg"
                // src={"//d5twn4m6.cdn.imgeng.in" + src6}
                src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/o3.jpg"}
                alt=""
                // style={{
                //   filter: blur6 ? "blur(20px)" : "none",
                //   transition: blur6 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ProjectGallery;
