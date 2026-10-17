import { useQuery } from "@tanstack/react-query";
import React from "react";
import Post from "./post";

function JsonPlaceholder() {
  const fetchPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
  };

  const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  console.log("post data: ", data);
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <span className="w-[40%] text-xl font-bold mb-3 ">Posts</span>
      <div className="w-[40%] h-max flex gap-5">
        {/* <div
          className={`rounded-2xl px-5 py-1 border-2`}
          onClick={() => setPage(1)}
        >
          page 1
        </div>
        <div
          className={`rounded-2xl px-5 py-1 border-2`}
          onClick={() => setPage(2)}
        >
          page 2
        </div>
        <div
          className={`rounded-2xl px-5 py-1 border-2`}
          onClick={() => setPage(3)}
        >
          page 3
        </div> */}
      </div>
      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default JsonPlaceholder;
