import "./App.css";
import { UserCard } from "./components/UserCard";
import { useUsers } from "./hooks/users";

function App() {
  const { user } = useUsers();
  return (
    <div className="page">
      <header>
        <UserCard user={user} />
      </header>
    </div>
  );
}

export default App;
