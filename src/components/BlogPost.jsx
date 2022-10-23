import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "../data/blogdata";

export const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { title, content, author } = blogdata.find(
    (post) => post.slug === slug
  );

  const returnToBlog = () => {
    navigate("/blog");
  };

  return (
    <>
      <h2>{title}</h2>
      <button onClick={returnToBlog}>Volver al blog</button>
      <p>{content}</p>
      <p>{author}</p>
    </>
  );
};
