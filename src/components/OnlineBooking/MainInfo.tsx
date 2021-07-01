import BuildingInfo from "./BuildingInfo";
import { useMediaQuery } from "react-responsive";
import { observer } from "mobx-react-lite";
import SimilarUnits from "./SimilarUnits";
import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { useEffect } from "react";

const MainInfo = () => {
  const rootStore = useContext(RootStoreContext);
  const { listSimilarUnits, similarUnits } = rootStore.flatStore;

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  useEffect(() => {
    listSimilarUnits();
  }, [listSimilarUnits]);

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
              {similarUnits.map((unit) => (
                <SimilarUnits key={unit.id} unit={unit} />
              ))}
            </div>
          </div>
          <div className="finaldivproject"></div>
        </div>
      ) : (
        <div>
          <div>
            <div className="similarunitheadermobile">
              <h1>SIMILAR UNITS</h1>
            </div>
            <div>
              {similarUnits.map((unit) => (
                <SimilarUnits key={unit.id} unit={unit} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(MainInfo);
