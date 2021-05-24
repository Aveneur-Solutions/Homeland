import { useEffect } from "react";
import { Card, Button, Image, Grid } from "semantic-ui-react";
import { ourProject } from "./buildings";
const ListUnits = () => {
  return (
    <Grid columns={1}>
          <div className="projCardSize">

          {ourProject.map((buildno, index) => {
            return (
        <Card fluid className="projCardSize2" >
              <div className="projCardSize2" >
                <Card.Content>
                  <Image src={process.env.PUBLIC_URL + buildno.forunits} />
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
  );
};

export default ListUnits;
