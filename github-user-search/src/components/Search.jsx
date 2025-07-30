import React, { useState } from 'react';
import { fetchAdvancedUserSearch } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const data = await fetchAdvancedUserSearch({ username, location, minRepos });
      setUsers(data.items || []);
    } catch (err) {
      setError("Looks like we can't find any users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSearch} className="bg-white shadow-md p-4 rounded-md space-y-4">
        <h2 className="text-xl font-bold text-gray-700">GitHub User Search</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border rounded p-2"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {users.map((user) => (
            <li key={user.id} className="border p-4 rounded shadow-md">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full mb-2"
              />
              <h3 className="text-lg font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Profile
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;

Add Search component for GitHub user lookup
