export const getPosts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts");
      const json = await response.json();
  
      const posts = json.posts;
      const mappedPosts = posts?.map((post) => ({
        id: post.id,
        title: post.title,
        description: post.body,
      }));
      return mappedPosts;
    } catch (e) {
      throw new Error("Error getting posts");
    }
  };