import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Menu from "@/componentes/Menu";
import Inicio from "@/paginas/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
