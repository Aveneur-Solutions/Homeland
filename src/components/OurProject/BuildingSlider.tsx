interface IProps {
  image: string;
}

const BuildingSlider: React.FC<IProps> = ({ image }) => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src={"https://www.homeland.aveneur.com/Images" + image}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default BuildingSlider;
