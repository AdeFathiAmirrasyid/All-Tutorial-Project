import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardComp from "./CardComp";

export default function AboutComp() {
  
    return (
      <div>
        <h1 className="display-3">About Us</h1>
        <p className="lead">This is a simple hero unit</p>
        <hr className="my-2" />
        <Container>
          <Row>
            <Col><CardComp id='1' judul='Belajar React' tanggal='1/04/2022'/></Col>
            <Col><CardComp id='2' judul='Belajar Java' tanggal='1/04/2022'/></Col>
            <Col><CardComp id='3' judul='Belajar Flutter' tanggal='1/04/2022'/></Col>
          </Row>
        </Container>
      </div>
    );
}
