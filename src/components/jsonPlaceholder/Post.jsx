import React from "react";

function Post({ post }) {
  return (
    <div className="card">
      <h3 className="font-bold text-yellow-300">{post.title?.slice(1,5)}</h3>
      <p>Population - {post.body.slice(1,20)}</p>
      <p>userId - {post.userId} </p>
    </div>
  );
}

export default Post;
