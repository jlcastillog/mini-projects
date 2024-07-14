import "./App.css";
import { UserCard } from "./components/UserCard";
import { Posts } from "./components/Posts";
import { UserPostCard } from "./components/UserPostCard";
import { useUserPosts } from "./hooks/userPosts";

function App() {
  const { user, posts } = useUserPosts();

  return (
    <div className="page">
      <ul>
        {posts.map((post) => (
          <li className="post" key={post.id}>
            <UserPostCard user={user} post={post}></UserPostCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
