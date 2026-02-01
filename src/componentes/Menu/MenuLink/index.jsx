import { NavLink } from "react-router-dom";
import styles from "@/componentes/Menu/MenuLink/MenuLink.module.css";

export default function MenuLink({ children, to }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        isActive ? styles.LinkDestacado : styles.Link
      }
    >
      {children}
    </NavLink>
  );
}
