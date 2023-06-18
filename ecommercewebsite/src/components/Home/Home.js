
import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './home.scss'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tokenState } from '../../recoils/Store';
import jwt_decode from 'jwt-decode'

const Home = () => {
  const navigate = useNavigate();
  const [tokenStateValue, setTokenStateValue] = useRecoilState(tokenState);
  const token=localStorage.getItem("token");
  // console.log(token_value)
  let Roles ="";
  if(token){
    var decodeToken=jwt_decode(token);
     Roles = decodeToken.Roles;
  }
  console.log(Roles);

  return (
    <div className="home-main-outer-element">
      <Container fluid>
        <Row>
          <Col xs={5} className="home-left-side-element ps-4">
            <div className="horizontal-divider"></div>
            <h5>Best Quality Products</h5>
            <h1>We Print What You Want!</h1>
            <Button variant="outline-danger mt-4" className="home-button-element">GET STARTED! <i aria-hidden="true" class="fas fa-angle-right"/></Button>
            {Roles === "admin" && <Button variant="outline-danger mt-4" className="home-button-element" onClick={() => navigate("/admin-form")}>ADMIN PAGE! <i aria-hidden="true" class="fas fa-angle-right"/></Button>}
          </Col>
          <Col xs={6} className="ps-5 home-right-side-element">
            <img src="./images/homePageBoy.png" />
          </Col>
        </Row>
        <div className="home-page-style-element">
        <Row className="row-page-style-element">
        <Col xl={4} className='pe-4'>
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/most_loved_design.webp" style={{"width": "100%"}}/>
            <Card.Body>
              <Card.Text>
              Most Loved Designs
              </Card.Text>
              <Card.Title>Customize Your T-Shirts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} className='pe-4'>
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/surprise_graphic_tshirt.webp" />
            <Card.Body>
              <Card.Text>
              Most Loved Designs
              </Card.Text>
              <Card.Title>Customize Your T-Shirts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={4} className='pe-4'>
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/ganpati_fest_special.webp" />
            <Card.Body>
              <Card.Text>
              Most Loved Designs
              </Card.Text>
              <Card.Title>Customize Your T-Shirts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
        <div className="featured-product">
          <h3>Our Featured Products</h3>
        </div>
        <div className="element-divider-container pt-4">
          <div className="featured-product-divider"></div>
        </div>
        <Row className="featured-product-images">
        <Col xl={3}>
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/blackPrintedCoffeeMug.jpeg" />
            <Card.Body>
            <Card.Title className="card-title">Black Printed Coffee Mug</Card.Title>
            <Card.Title className="card-title pt-2 pb-2">₹15.00</Card.Title>
              <Card.Text className="card-text">
                <Button variant='outline-danger'>ADD TO CART</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} >
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/FathersDayCoffeeMug.jpeg" />
            <Card.Body>
            <Card.Title>Father’s Day Coffee Mug</Card.Title>
            <Card.Title className="card-title pt-2 pb-2">₹15.00</Card.Title>
              <Card.Text>
                <Button variant='outline-danger'>ADD TO CART</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} >
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/PersonalisedMug.jpeg" />
            <Card.Body>
            <Card.Title>Personalised Mug</Card.Title>
            <Card.Title className="card-title pt-2 pb-2">₹15.00</Card.Title>
              <Card.Text>
                <Button variant='outline-danger'>ADD TO CART</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={3} >
          <Card className='border-0'>
            <Card.Img variant="top" src="./images/ValentineDaySpecialMug.jpeg" />
            <Card.Body>
            <Card.Title>Valentine’s Day Special Mug</Card.Title>
            <Card.Title className="card-title pt-2 pb-2">₹15.00</Card.Title>
              <Card.Text>
                <Button variant='outline-danger'>ADD TO CART</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
      </Container>
      <div className="deal-of-the-day-outer-element">
          <div className="background-image-element">
            <div className="content-on-bg-element">
                <h3  className="mt-3">Hurry Up!</h3>
                <h2  className="mt-3">Deal of the Day!</h2>
                <h6 className="mt-3">Buy This T-shirt At 20% Discount, Use Code Off20</h6>
                <Button variant="outline-danger" className="mt-4">SHOP NOW </Button>
            </div>
          </div>
      </div>
      <h3 className="mt-5 text-center">Most Loved Products</h3>
      <div className="element-divider-container pt-4 mb-5">
          <div className="featured-product-divider"></div>
        </div>
    </div>
  )
}

export default Home
