
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/HomePage";
import Footer from "./components/footer/Footer";
import Product from "./pages/ProductPage";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:productId" element={<Product/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
