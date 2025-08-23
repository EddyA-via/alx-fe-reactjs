import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium">Username</label>
        <input
          type="text"
          value={username}         {/* ✅ controlled input */}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter username"
        />
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          value={email}            {/* ✅ controlled input */}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label className="block font-medium">Password</label>
        <input
          type="password"
          value={password}         {/* ✅ controlled input */}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Register
