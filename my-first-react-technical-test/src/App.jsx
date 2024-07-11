import "./App.css";
import { UserCard } from "./components/UserCard";
import {Posts} from "./components/Posts"
import { useUsers } from "./hooks/users";
import { useState, useEffect } from "react";
import { getPosts } from "./services/postService";

function App() {
  const { user } = useUsers();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((postsResponse) => {
      const newPosts = postsResponse.filter((post) => post.id === user.id)
      setPosts(newPosts);
    });
  }, [user]);

  return (
    <div className="page">
      <header>
        <UserCard user={user} />
      </header>
      <main>
        <Posts posts={posts} />
      </main>
    </div>
  );
}

export default App;
