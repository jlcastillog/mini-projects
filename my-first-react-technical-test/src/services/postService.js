import { URL_POSTS } from "../constants";

export const getPosts = async (id) => {
  try {
    const response = await fetch(`${URL_POSTS}/user/${id}?limit=100`);
    const json = await response.json();

    const posts = json.posts;
    const mappedPosts = posts?.map((post) => ({
      id: post.id,
      title: post.title,
      description: post.body,
      likes: post.reactions?.likes,
      dislikes: post.reactions?.dislikes,
    }));
    return mappedPosts;
  } catch (e) {
    throw new Error("Error getting posts");
  }
};
