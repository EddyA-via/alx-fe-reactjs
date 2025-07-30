import axios from 'axios';

export const fetchUserData = async ({ query, location, minRepos }) => {
  try {
    let q = query;
    if (location) {
      q += `+location:${location}`;
    }
    if (minRepos) {
      q += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`https://api.github.com/search/users?q=${q}`);
    return response.data.items;
  } catch (error) {
    console.error("GitHub API error:", error);
    throw error;
  }
};


