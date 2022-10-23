import { useParams } from "react-router-dom";
import { blogdata } from "../data/blogdata";

export const BlogPost = () => {
  const { slug } = useParams();
  const { title, content, author } = blogdata.find(
    (post) => post.slug === slug
  );
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{author}</p>
    </>
  );
};
