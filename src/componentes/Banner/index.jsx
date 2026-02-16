import styles from "@/componentes/Banner/Banner.module.css";
import { circuloColorido, minhaFoto } from "@/assets/index.js";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}> Olá, Mundo</h1>
        <p className={styles.paragrafo}>
          Bem-vindo(a) ao meu espaço na web. Sou desenvolvedora front-end em
          formação e aqui compartilho projetos, aprendizados e experiências com
          React, JavaScript e desenvolvimento web.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          src={circuloColorido}
          aria-hidden={true}
          className={styles.circuloColorido}
        />
        <img
          src={minhaFoto}
          alt="foto da Bianca Chiquinelli"
          className={styles.minhaFoto}
        />
      </div>
    </div>
  );
}
