export function Posts({ posts }) {
    return (
      <section className="posts">
        <ul>
          {posts.map((post) => (
            <li className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }