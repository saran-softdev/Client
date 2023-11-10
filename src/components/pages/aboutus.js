import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Mainnav from "../common/navbarfile";
import Footer from "../common/footerfile";

const Aboutus = () => {
  return (
    <Container fluid>
      <Row>
        <Mainnav />
      </Row>
      <Row className=" bg-body-tertiary">
        <div>
          <h1 className=" text-center p-3">ABOUT</h1>
        </div>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          {" "}
          <img
            src="../About/Aboutimg1.jpg"
            alt=""
            srcset=""
            className=" img-fluid"
          />
        </Col>
        <Col xs={12} md={6} className=" d-flex justify-content-center align-items-center flex-column">
          <h3 className=" text-danger p-5"> Our Story</h3>
          <h1 className=" ">Brand of Meat Group</h1>
          <p>
            Meat & Eat, the Farm-to-Fork sensation, is an Indian quick service
            restaurant (QSR) chain dedicated to dishing out fresh and hygienic
            veg & non-veg fast food options. Kicking off its culinary journey in
            2013, Meat & Eat swiftly perfected the art of operations—fine-tuning
            everything from products and delivery to restaurant layout,
            franchisee model, and advertising & marketing strategy in just 6
            months. This speedy refinement ensured a consistent and delectable
            experience across all franchises.
          </p>
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
};

export default Aboutus;
