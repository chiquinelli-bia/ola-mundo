import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "@/componentes/Menu";
import Inicio from "@/paginas/inicio/index.jsx";
import Footer from "@/componentes/Footer";
import PaginaPadrao from "@/componentes/PaginaPadrao";
import SobreMim from "@/paginas/sobreMim";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/sobremim" element={<SobreMim />}></Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
