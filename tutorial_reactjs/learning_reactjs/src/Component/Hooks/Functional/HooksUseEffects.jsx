import React, { useEffect, useState } from "react";
import { Container, Table, Button } from "reactstrap";
import axios from "axios";

export default function HooksUseEffects() {
  const [mahasiswa, setMahasiswa] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/" + "tampil").then((res) => {
      setMahasiswa(res.data.values);
    });
  }, []);
  return (
    <Container>
      <h2>Data Mahasiswa</h2>
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
          {mahasiswa.map((mahasiswa) => (
            <tr key={mahasiswa.id_mahasiswa}>
              <td>{mahasiswa.nim}</td>
              <td>{mahasiswa.nama}</td>
              <td>{mahasiswa.jurusan}</td>
              <td>
                <Button>Update</Button>
                <span></span>
                <Button color="danger" className="mx-3">Hapus</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
