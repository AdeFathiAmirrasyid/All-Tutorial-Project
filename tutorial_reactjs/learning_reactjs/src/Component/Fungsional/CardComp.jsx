import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComp = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://placeimg.com/640/480/tech" />
        <Card.Body>
          <Card.Title> <h3>{props.judul}</h3> </Card.Title>
          <Card.Subtitle>{props.tanggal}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="success"> 
            <Link 
              to={{
                pathname: `/detail/${props.id}`, 
                state: { judul : props.judul, tanggal: props.tanggal}}}>Detail</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComp;
