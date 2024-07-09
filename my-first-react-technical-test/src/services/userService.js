export const getUser = async () => {
  try {
    const response = await fetch("https://dummyjson.com/users");
    const json = await response.json();

    const users = json.users;
    const mappedUsers = users?.map((user) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      userName: user.username,
      urlImage: user.image,
    }));
    const user = mappedUsers[Math.floor(Math.random() * users.length)];
    return user;
  } catch (e) {
    throw new Error("Error getting users");
  }
};
