// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

export default function App() {
  return (
    <Router>
      <div className="p-6">
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/profile/johndoe" className="text-blue-600 hover:underline">Profile</Link>
          <Link to="/blog/123" className="text-blue-600 hover:underline">Blog</Link>
        </nav>

        <div className="mt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username/*" element={<Profile />} />
            {/* ✅ Added dynamic blog post route */}
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
