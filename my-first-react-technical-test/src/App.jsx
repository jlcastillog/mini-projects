import "./App.css";
import { UserCard } from "./components/UserCard";
import { getUser } from "./services/userService";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then(newUser => setUser(newUser));
  }, []);

  return (
    <div className="page">
      <header>
        <UserCard user={user} />
      </header>
    </div>
  );
}

export default App;
