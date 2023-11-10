import React, { useState, useEffect } from "react";
import Mainnav from "../common/navbarfile";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../Redux/ReduxUserData/UserDataAction";
const Ourmenu = () => {
  const cartItems = useSelector((state) => state.cartData);
  console.log(cartItems);
  localStorage.setItem("addToCart", JSON.stringify(cartItems));

  const setproducts = localStorage.getItem("addToCart");

  useEffect(() => {
    console.log(setproducts);
  }, [cartItems]);

  const dispatch = useDispatch();
  const handleAddToCart = (products_id) => {
    dispatch(addToCart(products_id));
  };
  const cardData = [
    {
      _id: 1,
      title: "Classic Veg Burger",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img1.png"
    },
    {
      _id: 2,
      title: "Kiddy Chicken Burger",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img2.png"
    },
    {
      _id: 3,
      title: "Super Twin Burger",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img3.png"
    },
    {
      _id: 4,
      title: "DB Grilled chicken Burger ",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img4.png"
    },
    {
      _id: 5,
      title: "Super Twin Burger",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img5.png"
    },
    {
      _id: 6,
      title: "Chicken Cheese Burst Burger",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img7.png"
    },
    {
      _id: 7,
      title: "Paneer Cheese Burger",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img8.png"
    },
    {
      _id: 8,
      title: "ME Crispy (1pc)",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img9.png"
    },
    {
      _id: 9,
      title: "Boneless Strips (10pcs)",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img10.png"
    },
    {
      _id: 10,
      title: "Chicken Chota Bucket",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img11.png"
    },
    {
      _id: 11,
      title: "Chicken Strips - 3 Pcs",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img12.png"
    },
    {
      _id: 12,
      title: "Chicken Bucket - Indian Fiery",
      rate: "₹ 300",
      imageSrc: "/Our Menu/img13.png"
    }
  ];
  return (
    <div>
      <Container fluid>
        <Row>
          <Mainnav />
        </Row>
        <Row>
          <h1 className=" text-center p-5">Our Menu</h1>
        </Row>
        <Row>
          {cardData.map((card) => (
            <Col key={card._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card.imageSrc} />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Title>{card.rate}</Card.Title>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleAddToCart(card._id);
                    }}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <footer />
        </Row>
      </Container>
    </div>
  );
};

export default Ourmenu;
