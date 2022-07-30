import { Post } from "../Post";
import "./App"

export interface postProp {
    onDelete: () => void;
    post: Post;
}

export default function PostInList({ post, onDelete}: postProp){


    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.thought}</p>
            <button onClick={() => onDelete()}>Delete</button>

        </div>
    )
}
