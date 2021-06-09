import React from 'react'
import { Grid } from 'semantic-ui-react';
import "./onlinebooking.css";

const OrderTable = () => {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column width={5}>
            <div className="orderdeets">
              <h2 style={{ marginBottom: "25%" }}>Shipping and Billing Info</h2>
              <div
                className="order-body"
                style={{ display: "grid", gridGap: "70px" }}
              >
                <div>
                  <h3>Name</h3>
                  <p>Zunaid the Gay</p>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>gay@gmail.com</p>
                </div>
                <div>
                  <h3>Phone Number</h3>
                  <p>69420</p>
                </div>
                <div>
                  <h3>Address</h3>
                  <p>dic avenue</p>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="orderdeets">
              <h2 style={{ marginBottom: "25%" }}>Payment method</h2>
              <div
                className="order-body"
                style={{ display: "grid", gridGap: "70px" }}
              >
                <div>
                  <h3>METHOD</h3>
                  <p>Master Card</p>
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column width={5}>
            <div className="orderdeets">
              <h2 style={{ marginBottom: "25%" }}>Items in your cart</h2>
              <div
                className="order-body"
                style={{ display: "grid", gridGap: "70px" }}
              >
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
}

export default OrderTable
