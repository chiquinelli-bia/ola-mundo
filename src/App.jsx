import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "@/componentes/Menu";
import Inicio from "@/paginas/inicio/index.jsx";
import Footer from "@/componentes/Footer";
import PaginaPadrao from "@/componentes/PaginaPadrao";
import SobreMim from "@/paginas/sobreMim";
import Posts from "@/paginas/Posts";
import NaoEncontrada from "./paginas/naoEncontrada";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/posts/:id" element={<Posts />} />
        </Route>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
