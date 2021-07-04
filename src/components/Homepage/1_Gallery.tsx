import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";
// import useProgressiveImg from "../OurProject/UseProgressiveImg";

const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };
  // const [src0, { blur0 }] = useProgressiveImg("/images/h1.jpg", "/h1.jpg");
  // const [src1, { blur1 }] = useProgressiveImg("/images/h4.jpg", "/h4.jpg");
  // const [src2, { blur2 }] = useProgressiveImg("/images/o2.jpg", "/o2.jpg");
  // const [src3, { blur3 }] = useProgressiveImg("/images/o3.jpg", "/o3.jpg");

  return (
    <>
      <div className="slider">
        <div className="slideroverflowcontrol">
          <Slider {...settings}>
            <div className="gallery_img ">
              <div className="centerbangla">
                <div className="shelf">
                  <div className="door left">
                    <div className="door1 "></div>
                  </div>
                  <div className="door right"></div>
                  <div className="elements">
                    <div className="toprow">
                      <div className="element y1">
                        <h1 className="sloganhead">সবুজের</h1>
                      </div>
                      <div className="element yy2"></div>
                    </div>
                    <div className="toprow">
                      <div className="element"></div>
                      <div className="element xx2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="logoimg"
                // src={"" + src0}
                src={process.env.PUBLIC_URL + "/images/h1.jpg"}
                // src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/h1.jpg"}
                alt=""
                // style={{
                //   filter: blur0 ? "blur(20px)" : "none",
                //   transition: blur0 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
            <div className="gallery_img ">
              <div className="centerbangla">
                <div className="shelf">
                  <div className="door left">
                    <div className="door1 "></div>
                  </div>
                  <div className="door right"></div>
                  <div className="elements">
                    <div className="toprow">
                      <div className="element y1">
                        <h1 className="sloganhead">সবুজের</h1>
                      </div>
                      <div className="element yy2">
                        <h1 className="sloganhead">মাঝে</h1>
                      </div>
                    </div>
                    <div className="toprow">
                      <div className="element"></div>
                      <div className="element xx2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="logoimg"
                // src={"" + src1}
                src={process.env.PUBLIC_URL + "/images/h4.jpg"}
                // src={process.env.PUBLIC_URL + "/images/h1.jpg"}
                alt=""
                // style={{
                //   filter: blur1 ? "blur(20px)" : "none",
                //   transition: blur1 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
            <div className="gallery_img ">
              <div className="centerbangla">
                <div className="shelf">
                  <div className="door left">
                    <div className="door1 "></div>
                  </div>
                  <div className="door right"></div>
                  <div className="elements">
                    <div className="toprow">
                      <div className="element y1">
                        <h1 className="sloganhead">সবুজের</h1>
                      </div>
                      <div className="element yy2">
                        <h1 className="sloganhead">মাঝে</h1>
                      </div>
                    </div>
                    <div className="toprow">
                      <div className="element">
                        <h1 className="sloganhead">জীবন</h1>
                      </div>
                      <div className="element xx2"></div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="logoimg"
                // src={"" + src2}
                src={process.env.PUBLIC_URL + "/images/o2.jpg"}
                // src={process.env.PUBLIC_URL + "/images/h1.jpg"}
                alt=""
                // style={{
                //   filter: blur2 ? "blur(20px)" : "none",
                //   transition: blur2 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
            <div className="gallery_img ">
              <div className="centerbangla">
                <div className="shelf">
                  <div className="door left">
                    <div className="door1 "></div>
                  </div>
                  <div className="door right"></div>
                  <div className="elements">
                    <div className="toprow">
                      <div className="element y1">
                        <h1 className="sloganhead">সবুজের</h1>
                      </div>
                      <div className="element yy2">
                        <h1 className="sloganhead">মাঝে</h1>
                      </div>
                    </div>
                    <div className="toprow">
                      <div className="element">
                        <h1 className="sloganhead">জীবন</h1>
                      </div>
                      <div className="element xx2">
                        <h1 className="sloganhead">আনন্দ</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="logoimg"
                // src={"" + src3}
                src={process.env.PUBLIC_URL + "/images/o3.jpg"}
                // src={process.env.PUBLIC_URL + "/images/h1.jpg"}
                alt=""
                // style={{
                //   filter: blur3 ? "blur(20px)" : "none",
                //   transition: blur3 ? "none" : "filter 0.3s ease-out",
                // }}
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Gallery;
