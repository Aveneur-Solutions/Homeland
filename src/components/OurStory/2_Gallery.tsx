import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homepage/gallery.css";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
const Gallery_2 = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="vdosize">
          {/* <Embed
            autoplay={true}
            color="white"
            hd={true}
            id="1AH7tF2IOI"
            iframe={{
              allowFullScreen: true,
              style: {
                padding: 10,
              },
            }}
            // placeholder="/images/image-16by9.png"
            source="youtube"
            url="https://youtu.be/-1AH7tF2IOI"
          /> */}
          <ReactPlayer
            className="vdosize"
            width="60vw"
            height="58.5vh"
            playing={true}
            playbackRate={0.5}
            url="https://www.youtube.com/watch?v=-1AH7tF2IOI"
            // controls={true}
            modestbranding={false}
          />
        </div>
      ) : (
        <div className="vdosize-mob">
          <ReactPlayer
            className="vdosize"
            width="100vw"
            height="30vh"
            playing={true}
            playbackRate={0.5}
            url="https://www.youtube.com/watch?v=-1AH7tF2IOI"
            // controls={true}
            modestbranding={true}
          />
        </div>
      )}
    </>
  );
};

export default Gallery_2;
