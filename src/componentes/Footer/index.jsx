import styles from "@/componentes/Footer/footer.module.css";
import { MarcaRegistrada } from "@/assets/index.js";
export default function Footer() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada width="24px" height="24px" />
      <span>Desenvolvido por Alura, Adaptado por Bianca Chiquinelli</span>
    </footer>
  );
}
