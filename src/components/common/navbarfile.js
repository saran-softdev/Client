import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../scss/common.scss";

function Mainnav() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container fluid>
        <img src="../Home/MeatEat.png" className="img" alt="..." width={300} />{" "}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className=" bg-light"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-end w-100">
            <Nav.Link href="/" className="  text-light hover-effect">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className=" text-light hover-effect">
              About us
            </Nav.Link>
            <Nav.Link href="/ourmenu" className=" text-light hover-effect">
              Our Menu
            </Nav.Link>
            <Nav.Link href="/blog" className=" text-light hover-effect">
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" className=" text-light hover-effect">
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Mainnav;
