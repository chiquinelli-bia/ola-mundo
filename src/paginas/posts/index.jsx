import { useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModelo from "@/componentes/PostModelo";
import NaoEncontrada from "@/paginas/naoEncontrada";
import ReactMarkdown from "react-markdown";
import Recomendados from "@/componentes/Recomendados";
// tentar agr q importei posts dos componentes, depois mudar o nome pois está confuso, ver se da certo sem o postEncontrao

export default function Posts() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });
  if (!post) {
    return <NaoEncontrada />;
  }
  return (
    <>
      <PostModelo fotoCapa={`/posts/${post.id}/capa.png`} titulo={post.titulo}>
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
      </PostModelo>
      <Recomendados />
    </>
  );
}
