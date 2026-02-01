import styles from "@/componentes/Banner/Banner.module.css";
import { circuloColorido, minhaFoto } from "@/assets/index.js";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}> Olá, Mundo</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de
          Front-end da Alura. Aqui compartilho vários conhecimentos, espero que
          aprenda algo novo :
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
          alt="foto do Ântonio Evaldo"
          className={styles.minhaFoto}
        />
      </div>
    </div>
  );
}
