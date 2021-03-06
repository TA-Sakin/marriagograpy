import React from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { id, img, price, description, list_1, list_2, list_3, name } = service;
  const navigate = useNavigate();
  const navigateToCheckout = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="px-3 border-0 text-center service">
      <Card style={{ width: "23rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <h5 className="py-2">{price}$</h5>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{list_1}</ListGroupItem>
          <ListGroupItem>{list_2}</ListGroupItem>
          <ListGroupItem>{list_3}</ListGroupItem>
        </ListGroup>
        <Button
          onClick={() => navigateToCheckout(id)}
          className="w-50 my-3 border-0 mx-auto"
          variant="secondary"
        >
          Book Now
        </Button>
      </Card>
    </div>
  );
};

export default Service;
