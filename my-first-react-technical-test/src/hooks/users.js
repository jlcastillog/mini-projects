import { useEffect, useState } from "react";
import { getUser } from "../services/userService";

export function useUsers() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser().then((newUser) => setUser(newUser));
  }, []);

  return { user };
}
