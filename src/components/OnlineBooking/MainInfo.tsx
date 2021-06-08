import BuildingInfo from "./BuildingInfo";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react-lite";
import SimilarUnits from "./SimilarUnits";

const MainInfo = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <div>
      <BuildingInfo />
      <div className="separatingline">
        <hr className="hrnew" />
      </div>
      {!isTabletOrMobileDevice ? (
        <div>
          <div className="sizeofsimilar">
            <div className="similarunitheader">
              <h1>SIMILAR UNITS</h1>
            </div>
          </div>

          <div className="sizeofsimilar">
            <div className="Similarcontainer">
              <SimilarUnits />
              <SimilarUnits />
              <SimilarUnits />
            </div>
          </div>
          <div className="finaldivproject">

          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className="similarunitheadermobile">
              <h1>SIMILAR UNITS</h1>
            </div>
            <div>
              <SimilarUnits />
              <SimilarUnits />
              <SimilarUnits />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(MainInfo);
