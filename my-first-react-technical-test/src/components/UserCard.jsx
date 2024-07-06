export function UserCard({ user }) {
  return (
    <section className="userInfo">
      <div className="userInfo_image">
        <img src={user.urlImage} alt="User avatar" />
      </div>
      <div className="userInfo_description">
        <h2>{user.userName}</h2>
        <p>{user.name}</p>
      </div>
    </section>
  );
}
