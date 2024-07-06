import "./App.css";
import responseUsers from "./mocks/responseUsers.json";
import { UserCard } from "./components/UserCard";

function App() {
  const firstUser = responseUsers.users[0];

  const userMapped = (user) => {
    console.log(user);
    return {
      name: `${user.firstName} ${user.lastName}`,
      userName: user.username,
      urlImage: user.image,
    };
  };

  const user = userMapped(firstUser);

  return (
    <div className="page">
      <header>
        <UserCard user={user} />
      </header>
    </div>
  );
}

export default App;
