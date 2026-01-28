import "./menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <Link className="link" to="/">
          Início
        </Link>

        {/* <Link className="link" to="/sobremim">
          Sobre Mim
        </Link> */}
      </nav>
    </header>
  );
}
