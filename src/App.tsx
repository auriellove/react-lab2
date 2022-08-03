import React from "react";

import "./App.css";
import PostInList from "./Components/PostInList";
import SocialPosts from "./Components/SocialPosts";

export interface Post {
  title: string;
  thought: string;
}

function App() {
  return (
    <div className="App">
      <h1>My Thougts</h1>

      {/* <SocialPosts /> */}
    </div>
  );
}

export default App;
