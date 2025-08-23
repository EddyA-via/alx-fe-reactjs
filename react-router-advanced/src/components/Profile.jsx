// src/components/Profile.jsx
import React from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  const { username } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">
        Profile Page {username ? `: ${username}` : ""}
      </h2>

      <nav className="mt-4 space-x-4">
        <Link
          to="details"
          className="text-blue-600 hover:underline"
        >
          Details
        </Link>
        <Link
          to="settings"
          className="text-blue-600 hover:underline"
        >
          Settings
        </Link>
      </nav>

      {/* ✅ Nested Routes inside Profile */}
      <div className="mt-6">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
