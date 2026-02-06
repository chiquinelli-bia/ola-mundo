import styles from "@/componentes/Menu/menu.module.css";
import MenuLink from "@/componentes/Menu/MenuLink/index.jsx";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/sobreMim">SobreMim</MenuLink>
      </nav>
    </header>
  );
}
