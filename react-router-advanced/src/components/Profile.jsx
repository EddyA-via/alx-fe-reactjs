// src/components/Profile.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
  // Grab dynamic route parameter
  const { username } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">User Profile</h2>
      {username ? (
        <p className="mt-2">Welcome to {username}'s profile page!</p>
      ) : (
        <p className="mt-2">No username provided.</p>
      )}
    </div>
  );
}
