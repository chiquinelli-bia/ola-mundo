import { Children } from "react";
import style from "./postModelo.module.css";
export default function PostModelo({ children, fotoCapa, titulo }) {
  return (
    <article className={style.postModeloContainer}>
      <div
        className={style.fotoCapa}
        style={{
          backgroundImage: `url(${fotoCapa})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <h2 className={style.titulo}>{titulo}</h2>
      <div className={style.postConteudoContainer}>{children}</div>
    </article>
  );
}
