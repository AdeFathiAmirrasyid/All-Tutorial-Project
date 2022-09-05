import React, { useState } from "react";
import ShowComp from "./ShowComp";

const HooksComp = () => {
  const [jumlah, addJumlah] = useState(0);
  // Login
  const [dataLogin, setDataLogin] = useState({
    username: "insani",
    token: "123",
    isLogin: false,
  });

  //Cek kondisi sudaj login / belum

  let tampil;

  if (dataLogin.isLogin) {
    tampil = (
      <ShowComp
        username={dataLogin.username}
        fungsi={addJumlah.bind(this)}
        jumlah={jumlah}
      />
    );
  }else{
    tampil = <ShowComp username="Maaf anda belum login" disabled={true}/>
  }
  return (
    <div>
     {tampil}
    </div>
  );
};

export default HooksComp;
