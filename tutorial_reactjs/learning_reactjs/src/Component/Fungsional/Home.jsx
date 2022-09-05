import React from "react";
import Product from "../Class/Product";
// import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Product nama='Macbook Pro 2022' stock='5' harga='33.000.000'/>
      <Product nama='Macbook Pro 2021' stock='10' harga='53.000.000'/>
      <Product nama='Macbook Pro 2020' stock='15' harga='43.000.000'/>
      <Product nama='Macbook Pro 2019' stock='20' harga='23.000.000'/>
      <Product nama='Macbook Pro 2018' stock='4' harga='13.000.000'/>
      <Product nama='Macbook Pro 2017' stock='2' harga='8.000.000'/>
      {/* <Blog
        tanggal="31 maret 2022"
        judul="Teknologi Blockchain"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
         pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
         Donec scelerisque sollicitudin enim eu venenatis"
      />
      <Blog
        tanggal="1 april 2022"
        judul="Teknologi Internet of Things"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
         pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
         Donec scelerisque sollicitudin enim eu venenatis"
      />
      <Blog
        tanggal="2 april 2022"
        judul="Design Patter Laravel"
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
         pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
         Donec scelerisque sollicitudin enim eu venenatis"
      /> */}
    </div>
  );
};

export default Home;
