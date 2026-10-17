import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Post from "./Post";
import { useState } from "react";

function JsonPlaceholder() {
  const [title, setTitle] = useState("");

  const createPost = async (newPost) => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
    });
    console.log("data:", data.json());
  };

  const fetchPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    return data.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createPost,
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });
      const previousPosts = queryClient.getQueryData({ queryKey: ["posts"] });
      queryClient.setQueriesData({ queryKey: ["posts"] }, (old) => [
        ...old,
        { id: 101, ...newPost },
      ]);
      console.log("clicked");
      return { previousPosts };
    },
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  const handleCreate = () => {
    mutation.mutate({ title, body: "new post" });
  };

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>fetching error</div>;
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <span className="w-[40%] text-xl font-bold mb-3 ">Posts</span>
      <div className="flex gap-2">
        <input
          className="bg-gray-300 rounded text-black text-center"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="type anything...."
        />
        <button
          className=" bg-yellow-400 text-black font-bold rounded px-5 py-1 "
          onClick={handleCreate}
        >
          submit
        </button>
      </div>

      {data?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default JsonPlaceholder;
