import React from "react";
import "../scss/footer.scss";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer-section">
      <Container fluid className="p-0">
        <Row className="footer-cta pt-5 pb-5">
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <div className="single-cta">
              <i className="fas fa-map-marker-alt"></i>
              <div className="cta-text">
                <h4>Find us</h4>
                <span>1010 Avenue, sw 54321, chandigarh</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <div className="single-cta">
              <i className="fas fa-phone"></i>
              <div className="cta-text">
                <h4>Call us</h4>
                <span>9876543210</span>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="mb-3 mb-md-0">
            <div className="single-cta">
              <div className="cta-text">
                <h4>Mail us</h4>
                <span>mail@info.com</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-content pt-5 pb-5">
          <Col xs={12} md={4} lg={4} className="mb-3 mb-lg-0">
            <div className="footer-widget">
              <div className="footer-social-icon">
                <span>Follow us</span>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={8} lg={8}>
            <div className="footer-menu text-center text-md-right">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Our Menu</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="copyright-area">
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6} className="text-center text-md-left">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2018, All Right Reserved{" "}
                  <a href="https://codepen.io/anupkumar92/">Anup</a>
                </p>
              </div>
            </Col>
            <Col xs={12} md={6} lg={6} className="d-none d-md-block text-right">
              {/* Leave this part as it is */}
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
