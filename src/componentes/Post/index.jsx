import styles from "@/componentes/Post/post.module.css";

export default function Post({ post }) {
  return (
    <div className={styles.posts}>
      <img
        src={`/assets/posts/${post.id}/capa.png`}
        alt="imagem da capa do post"
        className={styles.capa}
      />
      <h2 className={styles.titulo}>{post.titulo}</h2>
      <button className={styles.botaoLer}>ler</button>
    </div>
  );
}
