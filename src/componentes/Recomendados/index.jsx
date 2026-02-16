import styles from "@/componentes/Recomendados/recomendados.module.css";
import posts from "@/json/posts.json";
import Post from "@/componentes/Post";
import { useParams } from "react-router-dom";

export default function Recomendados() {
  const params = useParams();

  return (
    <div className={styles.recomendados}>
      <h3>Outros posts que você pode gostar</h3>
      <ul className={styles["recomendados-lista"]}>
        {" "}
        {posts
          .filter((post) => post.id !== Number(params.id))
          .slice(0, 4)
          .map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
      </ul>
    </div>
  );
}
