import { Post } from "../App";
import "./App";
import SocialPosts from "./SocialPosts";

export interface PostProp {
  onDelete: () => void;
  post: Post[];
}

export default function PostInList({ post, onDelete }: PostProp) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.thought}</p>
      <button onClick={() => onDelete()}>Delete</button>
    </div>
  );
}
