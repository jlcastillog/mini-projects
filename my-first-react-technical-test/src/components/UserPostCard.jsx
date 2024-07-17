import "../css/userPostCard.css";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";

export function UserPostCard({ user, post }) {
  return (
    <section className="userPostContainer">
      <section className="userContainer">
        <div className="userContainer_image">
          <img src={user.urlImage} alt="User avatar" />
        </div>
        <div className="userContainer_info">
          <h2>{user.userName}</h2>
          <p>{user.name}</p>
        </div>
      </section>
      {post && (
        <div>
          <section className="postContainer">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </section>
          <section className="followContainer">
            <div className="followContainer_likes">
              <IconThumbUp />
              <p>{post.likes}</p>
            </div>
            <div className="followContainer_dislikes">
              <IconThumbDown />
              <p>{post.dislikes}</p>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
