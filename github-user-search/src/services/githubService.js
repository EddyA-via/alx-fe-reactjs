import axios from 'axios';

export const fetchAdvancedUserSearch = async ({ username, location, minRepos }) => {
  let query = `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${query}`;

  const response = await axios.get(url);
  return response.data;
};

Add githubService.js to fetch user data from GitHub API
