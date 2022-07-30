import React, { useState } from "react";
import { Post } from "../Post";
import "./App";
import PostForm from "./PostForm";
import PostInList from "./PostInList";

export default function SocialPosts() {
  const [listPost, setListPost] = useState<Post[]>([
    { title: "React", thought: "its hard" },
  ]);
  const [formOpen, setFormOpen] = useState(false);

  function handleSubmit(post: Post) {
    setListPost([post, ...listPost]);
  }

  function handDeletePostItem(title: string) {
    setListPost(listPost.filter((post) => post.title !== title));
  }

  function handleClose() {
    setFormOpen(false);
  }

  return (
    <div>
      <h1>My Thoughts</h1>

      <PostForm onSubmit={handleSubmit} onClose={handleClose} />
    </div>
  );
}
