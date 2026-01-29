import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to }) {
  const localizacao = useLocation();
  return (
    <Link
      className={` ${styles.Link}
   ${localizacao.pathname === to ? styles.LinkDestacado : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
}
