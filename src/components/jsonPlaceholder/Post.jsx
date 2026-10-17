import React from "react";

function Post({ post }) {
  return (
    <div className="card">
      <h3 className="font-bold text-yellow-300">{post.title?.slice(0, 5)}</h3>
      <p>Population - {post.body.slice(0, 20)}</p>
      <p>Id - {post.id} </p>
    </div>
  );
}

export default Post;
