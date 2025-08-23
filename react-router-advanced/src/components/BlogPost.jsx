// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Blog Post</h2>
      <p className="mt-2">You are viewing blog post with ID: {id}</p>
    </div>
  );
}
