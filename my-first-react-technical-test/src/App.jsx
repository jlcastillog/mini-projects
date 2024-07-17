import "./App.css";
import { UserPostCard } from "./components/UserPostCard";
import { useUserPosts } from "./hooks/userPosts";

function App() {
  const { user, posts } = useUserPosts();
  const hasPosts = posts.length > 0

  return (
    <div className="page">
      {hasPosts === false && <UserPostCard user={user}></UserPostCard>}
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
