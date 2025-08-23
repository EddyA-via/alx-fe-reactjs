// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch, // ✅ so we can use it with button onClick
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: true,
    keepPreviousData: true,
  });

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Posts</h2>

      {/* ✅ Button with onClick */}
      <button
        onClick={() => refetch()}
        className="px-4 py-2 mb-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Refetch Posts
      </button>

      <ul className="list-disc pl-6">
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className="mb-2">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
