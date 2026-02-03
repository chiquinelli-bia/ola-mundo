import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "@/componentes/Menu";
import Inicio from "@/paginas/inicio/index.jsx";
import Footer from "@/componentes/Footer";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
