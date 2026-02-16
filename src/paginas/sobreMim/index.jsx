import styles from "./sobreMim.module.css";
import PostModelo from "@/componentes/PostModelo";
import { SBCapa, SBFoto } from "@/assets/index.js";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={SBCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá! Eu sou a Bianca.</h3>
      <img
        src={SBFoto}
        alt="Foto da Bianca Chiquinelli"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Sou desenvolvedora front-end em formação, apaixonada por tecnologia,
        design e criação de interfaces acessíveis e funcionais.
      </p>
      <p className={styles.paragrafo}>
        Minha jornada na programação começou através dos estudos em
        desenvolvimento web, onde venho construindo projetos práticos utilizando
        HTML, CSS, JavaScript e React. Atualmente, estou aprofundando meus
        conhecimentos com foco em criar experiências digitais modernas,
        responsivas e acessíveis.
      </p>
      <p className={styles.paragrafo}>
        Tenho grande interesse em UX, design visual e boas práticas de
        desenvolvimento, buscando sempre unir estética, usabilidade e código
        limpo.
      </p>
      <p className={styles.paragrafo}>
        Este blog reúne anotações e explicações práticas sobre JavaScript, React
        e desenvolvimento web. Organizo os conteúdos com base nos estudos e
        projetos que desenvolvo, transformando conceitos técnicos em resumos
        claros que facilitam a revisão e demonstram meu processo de
        aprendizagem. Alguns posts são registros pontuais de aulas e descobertas
        importantes ao longo dessa jornada.
      </p>
    </PostModelo>
  );
}
