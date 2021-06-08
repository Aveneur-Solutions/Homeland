import { Card, Button, Image, Grid } from "semantic-ui-react";
import { ourProject } from "./buildings";
import { useMediaQuery } from "react-responsive";
// import useProgressiveImg from "./UseProgressiveImg";


const ListUnits = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  // const [src, { blur }] = useProgressiveImg("./profile.png",process.env.PUBLIC_URL + "/images/profile_main.png");
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <Grid columns={1}>
          <div className="projCardSize">
            {ourProject.map((buildno, index) => {
              return (
                <Card key={index} fluid className="projCardSize2">
                  <div className="projCardSize2">
                    <Card.Content>
                      <Image
                        // style={{
                        //   filter: blur ? "blur(20px)" : "none",
                        //   transition: blur ? "none" : "filter 0.3s ease-out",
                        // }}
                        // src={src}
                        src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/profile_main.png"}
                        // src={process.env.PUBLIC_URL + buildno.forunits}
                      />
                      
                      <Card.Header>Unit 1.00.1</Card.Header>
                      <Card.Meta>Sqft.: 950</Card.Meta>
                      <Card.Description>
                        <strong>Price: 3,000,000</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
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
          {ourProject.map((buildno, index) => {
            return (
              <Card key={index} fluid className="projCardSize2">
                <div className="projCardSize2">
                  <Card.Content>
                    {/* <Image src={src} /> */}
                    src={process.env.PUBLIC_URL + "//d5twn4m6.cdn.imgeng.in/images/profile_main.png"}
                    <Card.Header>Unit 1.00.1</Card.Header>
                    <Card.Meta>Sqft.: 950</Card.Meta>
                    <Card.Description>
                      <strong>Price: 3,000,000</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
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
