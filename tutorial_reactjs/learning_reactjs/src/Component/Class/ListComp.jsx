import React, { Component } from "react";
import axios from "axios";
import query_st from "querystring";
import { Table, Container, NavLink, Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";

export default class ListComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/" + "tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  deleteMahasiswa = (idMahasiswa) => {
    const { mahasiswa } = this.state;
    const data = query_st.stringify({
      id_mahasiswa: idMahasiswa,
    });

    axios
      .delete("http://localhost:3001" + "/hapus", {
        data: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((json) => {
        if (json.data.status === 200) {
          this.setState({
            response: json.data.values,
            mahasiswa: mahasiswa.filter(
              (mahasiswa) => mahasiswa.id_mahasiswa != idMahasiswa
            ),
            display: "block",
          });
          this.props.history.push("/mahasiswa");
        } else {
          this.setState({
            response: json.data.values,
            display: "block",
          });
          // this.props.history.push('/mahasiswa')
        }
      });
  };

  render() {
    return (
      <Container>
        <h2>Data Mahasiswa</h2>
        <Alert color="success" style={{ display: this.state.display }}>
          {this.state.response}
        </Alert>
        <NavLink href="/mahasiswa/add-mahasiswa">
          <Button color="success">Tambah Data</Button>
        </NavLink>
        <hr />
        <Table className="table-bordered">
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama</th>
              <th>Jurusan</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.state.mahasiswa.map((mahasiswa) => (
              <tr key={mahasiswa.id_mahasiswa}>
                <td>{mahasiswa.nim}</td>
                <td>{mahasiswa.nama}</td>
                <td>{mahasiswa.jurusan}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/mahasiswa/update`,
                      state: {
                        id_mahasiswa: mahasiswa.id_mahasiswa,
                        nim: mahasiswa.nim,
                        nama: mahasiswa.nama,
                        jurusan: mahasiswa.jurusan,
                      },
                    }}
                  >
                    <Button>Update</Button>
                  </Link>
                  <Button
                    onClick={() => this.deleteMahasiswa(mahasiswa.id_mahasiswa)}
                    color="danger"
                    className="mx-3"
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
