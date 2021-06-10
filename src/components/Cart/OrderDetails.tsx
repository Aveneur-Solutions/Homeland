import React from 'react'
import { Container } from 'semantic-ui-react'
import OrderTable from './OrderTable'
import "./onlinebooking.css";

const OrderDetails = () => {
    return (
      <div className="main-order">
        <Container className="order-container">
          <OrderTable/>
        </Container>
      </div>
    );
}


export default OrderDetails
