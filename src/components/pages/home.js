import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mainnav from "../common/navbarfile";
import { Carousel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Footer from "../common/footerfile";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Mainnav />
      </Row>
      {/* Carousel */}
      <Row>
        <Carousel
          id="carouselExampleAutoplaying"
          className="carousel slide bg-black"
          data-ride="carousel"
          interval={2000}
        >
          <Carousel.Item className="carousel-item">
            <Row className=" d-flex justify-content-center align-items-center text-light">
              <Col xs={12} md={6}>
                <div className=" d-flex flex-column gap-5">
                  <h1>DB GRILLED CHICKEN BURGER</h1>
                  <p>
                    Combination of 2 pieces Boneless marinated chicken fillet
                    grilled, dressed with cheese, lettuce and tandoori mayo.
                  </p>
                </div>
                <a href="/buttons/41" className="btn41-43 btn-41 mt-2">
                  View Menu
                </a>
              </Col>
              <Col xs={12} md={6} className=" d-flex justify-content-end">
                <img
                  src="../Home/Burger_image.png"
                  className="d-block w-50"
                  alt="..."
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Row className=" d-flex justify-content-center align-items-center text-light">
              <Col xs={12} md={6}>
                <div className=" d-flex flex-column gap-5">
                  <h1>CHICKEN FRIES</h1>
                  <p>Chicken Fries are the best finger food for lip-smacking</p>
                </div>
                <a href="/buttons/41" className="btn41-43 btn-41 mt-2">
                  View Menu
                </a>
              </Col>
              <Col xs={12} md={6} className=" d-flex justify-content-end mt-4">
                <img
                  src="../Home/chickenfried.png"
                  className="d-block w-100"
                  alt="..."
                />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Row className=" d-flex justify-content-center align-items-center text-light">
              <Col xs={12} md={6}>
                <div className=" d-flex flex-column gap-5">
                  <h1>BURGER COMBO</h1>
                  <p>
                    This combo is loved for its combination of savory, salty,
                    and sweet flavors, making it a favorite comfort meal for
                    many people
                  </p>
                </div>
                <a href="/buttons/41" className="btn41-43 btn-41 mt-2">
                  View Menu
                </a>
              </Col>
              <Col xs={12} md={6} className=" d-flex justify-content-end mt-2">
                <img
                  src="../Home/combo.png"
                  className="d-block  w-75"
                  alt="..."
                />
              </Col>
            </Row>{" "}
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Row className=" d-flex justify-content-center align-items-center text-light">
              <Col xs={12} md={6}>
                <div className=" d-flex flex-column gap-5">
                  <h1>SHISH KEBAB</h1>
                  <p>
                    Shish kebab is a flavorful skewered and grilled dish
                    featuring marinated meat, often served with vegetables and
                    sauce.
                  </p>
                </div>
                <a href="/buttons/41" className="btn41-43 btn-41 mt-2">
                  View Menu
                </a>
              </Col>
              <Col xs={12} md={6} className=" d-flex justify-content-end">
                <img
                  src="../Home/Shish kebab.png"
                  className="d-block w-100"
                  alt="..."
                />
              </Col>
            </Row>{" "}
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <Row className=" d-flex justify-content-center align-items-center text-light">
              <Col xs={12} md={6}>
                <div className=" d-flex flex-column gap-5">
                  <h1>CHICKEN SANVEG</h1>
                  <p>
                    Chicken sanveg is a delightful fusion of chicken and
                    vegetables in a savory, aromatic sauce, creating a flavorful
                    and hearty dish.
                  </p>
                </div>
                <a href="/buttons/41" className="btn41-43 btn-41 mt-2">
                  View Menu
                </a>
              </Col>
              <Col xs={12} md={6} className=" d-flex justify-content-end">
                <img
                  src="../Home/sveg.png"
                  className="d-block w-100"
                  alt="..."
                />
              </Col>
            </Row>{" "}
          </Carousel.Item>
        </Carousel>
      </Row>
      {/* Icons */}
      <Row className=" p-3 icons_bg">
        <Col className=" text-center" xs={6} md={3}>
          <Row>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="4em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3.5 1a.5.5 0 01.5.5v13a.5.5 0 01-1 0v-13a.5.5 0 01.5-.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M3.762 2.558C4.735 1.909 5.348 1.5 6.5 1.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126a8.89 8.89 0 00.593-.25c.058-.027.117-.053.18-.08.57-.255 1.278-.544 2.14-.544a.5.5 0 01.5.5v6a.5.5 0 01-.5.5c-.638 0-1.18.21-1.734.457l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 9.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 11-.515-.858C4.735 7.909 5.348 7.5 6.5 7.5c.653 0 1.139.325 1.495.562l.032.022c.391.26.646.416.973.416.168 0 .356-.042.587-.126.187-.068.376-.153.593-.25.058-.027.117-.053.18-.08.456-.204 1-.43 1.64-.512V2.543c-.433.074-.83.234-1.234.414l-.159.07c-.22.1-.453.205-.678.287A2.719 2.719 0 019 3.5c-.653 0-1.139-.325-1.495-.562l-.032-.022c-.391-.26-.646-.416-.973-.416-.833 0-1.218.246-2.223.916a.5.5 0 01-.554-.832l.04-.026z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Row>
          <Row>
            <h2>FARM TO WORK</h2>
          </Row>
        </Col>
        <Col className=" text-center" xs={6} md={3}>
          <Row>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="4em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 3.293l6 6V13.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 011.414 0l6.647 6.646a.5.5 0 01-.708.708L8 2.207 1.354 8.854a.5.5 0 11-.708-.708L7.293 1.5z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Row>
          <Row>
            <h2>500+ OUTLETS</h2>
          </Row>
        </Col>
        <Col className=" text-center" xs={6} md={3}>
          <Row>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="4em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z"
                clip-rule="evenodd"
              ></path>
              <path d="M8 2.25c.909 0 3.188.685 4.254 1.022a.94.94 0 01.656.773c.814 6.424-4.13 9.452-4.91 9.452V2.25z"></path>
            </svg>
          </Row>
          <Row>
            <h2>APPROVED HEALTHY CHICKEN</h2>
          </Row>
        </Col>
        <Col className=" text-center" xs={6} md={3}>
          <Row>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="4em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-width="2"
                d="M6,3 L18,3 L22,9 L12,21 L2,9 L6,3 Z M2,9 L22,9 M11,3 L7,9 L12,20 M13,3 L17,9 L12,20"
              ></path>
            </svg>
          </Row>
          <Row>
            <h2>BEST MANAGEMENT PRACTICES</h2>
          </Row>
        </Col>
      </Row>
      {/* Body */}
      <Row>
        <Col xs={12} md={6} className="p-5">
          <div className="image-container">
            <img
              src="../Home/bimg1.jpg"
              className="img-fluid p-3"
              alt="..."
              width={300}
            />
            <img
              src="../Home/bimg2.jpg"
              className="img-fluid moved-image p-3"
              alt="..."
              width={300}
            />
          </div>
        </Col>
        <Col xs={12} md={6} className="p-5 ">
          <h3 className="text-danger">OUR STORY</h3>
          <h1>ME IS THE BRAND OF KAVI GROUP</h1>
          <p>
            Meat & Eat is a farm to fork Indian chain of quick service (QSR) &
            family restaurants serving fresh and hygienic veg & non-veg fast
            food options to customers. Started in 2013, Meat & Eat fine-tuned
            the operations in the areas of products, delivery, restaurant
            layout, franchisee model, advertising & marketing strategy etc.,
            within 6 months, hence being able to bring consistency across all
            franchises.
          </p>

          <a href="/">
            <button class="bn-32 bn32">View Menu</button>
          </a>
        </Col>
      </Row>
      {/* Ads container */}
      <Row className=" card_container">
        <div>
          <Row className=" text-center py-5">
            <h4 className=" text-danger">POPULAR FOOD MENU</h4>
            <h1>CHOOSE YOUR BEST MENU</h1>
          </Row>
          <Row>
            <Col xs={12} lg={4} className=" d-flex justify-content-center pt-3">
              <Card style={{ width: "18rem" }} className="overflow-hidden ">
                <div className="card-container">
                  <Card.Img
                    variant="top"
                    src="../Card_img/card1.jpg"
                    className="card_overflow"
                  />
                </div>
                <Card.Body>
                  <Card.Title>French fries</Card.Title>

                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className=" d-flex justify-content-center pt-3">
              <Card style={{ width: "18rem" }} className="overflow-hidden ">
                <div className="card-container">
                  <Card.Img
                    variant="top"
                    src="../Card_img/card2.jpg"
                    className="card_overflow"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Fried Chicken</Card.Title>

                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} lg={4} className=" d-flex justify-content-center pt-3">
              <Card style={{ width: "18rem" }} className="overflow-hidden">
                <div className="card-container">
                  <Card.Img
                    variant="top"
                    src="../Card_img/card1.jpg"
                    className="card_overflow"
                  />
                </div>
                <Card.Body>
                  <Card.Title>French fries</Card.Title>

                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Row>
      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default Home;
