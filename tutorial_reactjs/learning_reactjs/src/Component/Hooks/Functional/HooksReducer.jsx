import React, { useContext } from "react";
import { Card, Col, Container, Row, CardImg, Button } from "reactstrap";
import { NavLink } from "react-router-dom";
import { keranjangContext } from "../../Index";

export default function HooksReducer() {
  const countContext = useContext(keranjangContext)
  return (
    <Container>
      <br />
      <Row>
        <Col xs="6">
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://placeimg.com/640/480/tech"
              top
              width="100%"
            />
          </Card>
        </Col>
        <Col xs="6">
          <h3>Comik One Piece</h3>
          <p>Harga</p>
          <h3>Rp. {countContext.keranjangState.hargatotal}</h3>
          <p>Jumlah</p>
          <Row>
            <Col>
              <Button
                onClick={() => countContext.keranjangDispatch({ type: "tambah" })}
                color="success"
              >
                +
              </Button>
            </Col>
            <Col>{countContext.keranjangState.jumlah}</Col>
            <Col>
              <Button onClick={() => countContext.keranjangDispatch({ type: "kurang" })}>-</Button>
            </Col>
          </Row>
          <br />
          <Button color="secondary" size="lg">
            Total Rp. {countContext.keranjangState.hargatotal}
          </Button>
          <hr />
          <NavLink to='/tagihan'>Tagihan Belanja</NavLink>
        </Col>
      </Row>
    </Container>
  );
}
