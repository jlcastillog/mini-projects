import { useEffect, useState } from "react";
import { getUser } from "../services/userService";
import { getPosts } from "../services/postService";

export function useUserPosts() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getUser().then((newUser) => setUser(newUser));
  }, []);

  
  useEffect(() => {
    const userId = user.id;
    if (userId === undefined) return;
    getPosts(userId).then((newPosts) => {
      setPosts(newPosts);
    });
  }, [user]);

  return { user, posts };
}
