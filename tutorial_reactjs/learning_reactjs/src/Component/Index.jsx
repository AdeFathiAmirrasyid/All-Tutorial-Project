import React, { createContext, useState, useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Fungsional/HomePage";
import About from "./Fungsional/AboutComp";
import NavbarComp from "./Fungsional/NavbarComp";
// import DetailsComp from "./Fungsional/DetailsComp";
import ListComp from "./Class/ListComp";
import AddComp from "./Class/AddComp";
import EditComp from "./Class/EditComp";
import ClassComp from "./Hooks/Class/ClassComp";
import HooksComp from "./Hooks/Functional/HooksComp";
import HooksUseEffects from "./Hooks/Functional/HooksUseEffects";
import { CartContext } from "../CartContext";
import ProductComp from "./Hooks/Functional/ProductComp";
import HooksReducer from "./Hooks/Functional/HooksReducer";
import Tagihan from "./Hooks/Functional/Tagihan";

export const keranjangContext = createContext();

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + state.hargasatuan * state.jumlah,
      };
    case "kurang":
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: state.hargasatuan * state.jumlah - state.hargasatuan,
      };
    default:
      return state;
  }
};

const Index = () => {
  const [value, setValue] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <CartContext.Provider value={{ value, setValue }}>
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch: dispatch}}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/mahasiswa" element={<ListComp />} />
            <Route exact path="/mahasiswa" element={<ListComp />} />
            <Route
              exact
              path="/mahasiswa/add-mahasiswa"
              element={<AddComp />}
            />
            <Route exact path="/mahasiswa/update" element={<EditComp />} />
            <Route exact path="/class" element={<ClassComp />} />
            <Route exact path="/hooks" element={<HooksComp />} />
            <Route exact path="/useEffects" element={<HooksUseEffects />} />
            <Route exact path="/product" element={<ProductComp />} />
            <Route exact path="/reducer" element={<HooksReducer />} />
            <Route exact path="/tagihan" element={<Tagihan />} />
            {/* <Route exact path="/detail/:id" element={<DetailsComp/>} /> */}
          </Routes>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default Index;
