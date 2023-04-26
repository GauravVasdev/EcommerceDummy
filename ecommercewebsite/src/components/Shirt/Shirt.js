import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./shirt.scss";

const Shirt = () => {
  return (
    <>
      <div className="shirt-element-outer-div">
        <div className="heading-outer-div px-5 pt-3 pb-3 mt-5">
          <h3>Men's TShirt</h3>
        </div>
        <div className="tshirt-images-outer-element p-5">
          <Row>
            <Col xl={3}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="./images/blackPrintedCoffeeMug.jpeg"
                />
                <Card.Body>
                  <Card.Title className="card-title">
                    Black Printed Coffee Mug
                  </Card.Title>
                  <Card.Title className="card-title pt-2 pb-2">
                    ₹15.00
                  </Card.Title>
                  <Card.Text className="card-text">
                    <Button variant="outline-danger">ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="./images/FathersDayCoffeeMug.jpeg"
                />
                <Card.Body>
                  <Card.Title>Father’s Day Coffee Mug</Card.Title>
                  <Card.Title className="card-title pt-2 pb-2">
                    ₹15.00
                  </Card.Title>
                  <Card.Text>
                    <Button variant="outline-danger">ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card className="border-0">
                <Card.Img variant="top" src="./images/PersonalisedMug.jpeg" />
                <Card.Body>
                  <Card.Title>Personalised Mug</Card.Title>
                  <Card.Title className="card-title pt-2 pb-2">
                    ₹15.00
                  </Card.Title>
                  <Card.Text>
                    <Button variant="outline-danger">ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={3}>
              <Card className="border-0">
                <Card.Img
                  variant="top"
                  src="./images/ValentineDaySpecialMug.jpeg"
                />
                <Card.Body>
                  <div className="gender-element pb-3">Male</div>
                  <Card.Title>Valentine’s Day Special Mug</Card.Title>
                  <Card.Title className="card-title pt-2 pb-2">
                    ₹15.00
                  </Card.Title>
                  <Card.Text>
                    <Button variant="outline-danger">ADD TO CART</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Shirt;
