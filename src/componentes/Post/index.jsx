import styles from "@/componentes/Post/post.module.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          src={`/public/posts/${post.id}/capa.png`}
          alt="imagem da capa do post"
          className={styles.capa}
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <button className={styles.botaoLer}>ler</button>
      </div>
    </Link>
  );
}
