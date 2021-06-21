import { Card, Button, Image, Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import IFlat from "../../models/unit";
import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
// import useProgressiveImg from "./UseProgressiveImg";
interface IProps{
  units : IFlat[]
}

const ListUnits : React.FC<IProps> = ({units}) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const rootStore = useContext(RootStoreContext);
  const { viewFlatDetails } = rootStore.flatStore;
  // const [src, { blur }] = useProgressiveImg("./profile.png",process.env.PUBLIC_URL + "/images/profile_main.png");
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <Grid columns={1}>
          <div className="projCardSize">
            { units && units.map((unit, index) => {
              return (
                <Card key={index} fluid className="projCardSize2">
                  <div className="projCardSize2">
                    <Card.Content>
                      <Image
                        src={"https://www.homeland.aveneur.com/Images" + unit.images[unit.images.length - 1].imageLocation}
                      />   
                      <Card.Header>Unit {unit.id}</Card.Header>
                      <Card.Meta>Sqft.: {unit.size}</Card.Meta>
                      <Card.Description>
                        <strong>Price: {unit.price}</strong> <br/>
                        <strong>Booking Price : {unit.bookingPrice}</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green" onClick={() => viewFlatDetails(unit)}>
                          View
                        </Button>
                        <Button basic color="red">
                          Add to Cart
                        </Button>
                      </div>
                    </Card.Content>
                  </div>
                </Card>
              );
            })}
          </div>
        </Grid>
      ) : (
        // MOBILE CODE SECTION FROM BELOW
        <div className="projCardSize">
          {units && units.map((unit, index) => {
            return (
              <Card key={index} fluid className="projCardSize2">
                <div className="projCardSize2">
                  <Card.Content>
                    {/* <Image src={src} /> */}
                    src={"https://www.homeland.aveneur.com/Images" + unit.images[unit.images.length - 1].imageLocation}
                    <Card.Header>Unit {unit.id}</Card.Header>
                    <Card.Meta>Sqft.: {unit.size}</Card.Meta>
                    <Card.Description>
                      <strong>Price: {unit.price}</strong>
                      <strong>Booking Price : {unit.bookingPrice}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green" onClick={() => viewFlatDetails(unit)}>
                        View
                      </Button>
                      <Button basic color="red">
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Content>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ListUnits;
