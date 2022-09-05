import React, {useContext} from "react";
import {
  Card,
  CardSubtitle,
  Col,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  Button,
} from "reactstrap";
import { CartContext } from "../../../CartContext";

export default function RowProduct() {
  const {value, setValue} = useContext(CartContext);
  return (
    <Col>
      <Card>
        <CardImg
          alt="Card image cap"
          src="https://placeimg.com/640/480/tech"
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">Lennovo</CardTitle>
          <CardSubtitle>Rp. 12.000.000</CardSubtitle>
          <CardText>
            hidup bukan pilihan tetapi hidup harus di tentukan
          </CardText>
          <Button onClick={() => setValue(value+1)}>Add Cart</Button>
        </CardBody>
      </Card>
    </Col>
  );
}
