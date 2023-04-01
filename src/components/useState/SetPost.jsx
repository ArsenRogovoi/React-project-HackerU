import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SetPost = () => {
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: "",
  };

  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const createNewPost = (e) => {
    post.createdAt = Date();
    e.preventDefault();
    setPosts([...posts, post]);
    return setPost(INITIAL_POST);
  };

  return (
    <div className="d-flex justify-content-center mt-4">
      <div>
        <form className="col-12 border p-2 rounded">
          <div className="input-group my-2">
            <input
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="title"
              value={post.title}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <input
              onChange={(e) => setPost({ ...post, subtitle: e.target.value })}
              placeholder="subtitle"
              value={post.subtitle}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <input
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              placeholder="author"
              value={post.author}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <button
              disabled={!post.title && post.subtitle && post.author}
              onClick={createNewPost}
              className="input-group-text"
              id="inputGroup-sizing-default"
            >
              Create Post
            </button>
          </div>
        </form>

        <ul>
          {posts.map((post, index) => (
            <div className="border rounded m-2 p-1">
              <p className="my-1">Title: {post.title}</p>
              <p className="my-1">Subtitle: {post.subtitle}</p>
              <p className="my-1">Author: {post.author}</p>
              <p className="my-1">Created at: {post.createdAt}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SetPost;
