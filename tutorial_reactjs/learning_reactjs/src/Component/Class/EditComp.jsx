import React, { Component } from "react";
import axios from "axios";
import query_st from "querystring";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Form,
  Alert,
  Label,
  Input,
  Button,
} from "reactstrap";
// import { Link } from "react-router-dom";

export default class EditComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // error data undifien
      // id_mahasiswa: this.props.location.state.id_mahasiswa,
      id_mahasiswa: this.props.location,
      nim: this.props.location,
      nama: this.props.location,
      jurusan: this.props.location,
      response: "",
      display: "none",
    };
    console.log(this.state)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  ubahMahasiswa = (idmahasiswa) => {
    // const query_st = "querystring";
    const data = query_st.stringify({
      id_mahasiswa: idmahasiswa,
      nim: this.state.nim,
      nama: this.state.nama,
      jurusan: this.state.jurusan,
    });
    axios.put("http://localhost:3001" + "/ubah", data).then((json) => {
      if (json === 200) {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      } else {
        this.setState({
          response: json.data.values,
          display: "block",
        });
      }
    });
  };

  render() {
    return (
      <Container>
        <h4>Form Tambah Data</h4>
        <Alert color="success" style={{ display: this.state.display }}>
          {this.state.response}
        </Alert>
        <Form className="form">
          <Col>
            <Label>NIM</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nim"
                    value={this.state.nim}
                    onChange={this.handleChange}
                    placeholder="Masukan NIM"
                  />
                </Col>
              </Row>
            </FormGroup>
            <Label>Nama</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="nama"
                    value={this.state.nama}
                    onChange={this.handleChange}
                    placeholder="Masukan Nama"
                  />
                </Col>
              </Row>
            </FormGroup>
            <Label>Jurusan</Label>
            <FormGroup>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="jurusan"
                    value={this.state.jurusan}
                    onChange={this.handleChange}
                    placeholder="Masukan Jurusan"
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col>
                  <Button type="button" onClick={() => this.ubahMahasiswa(this.state.id_mahasiswa)}>
                    Update
                  </Button>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }
}
