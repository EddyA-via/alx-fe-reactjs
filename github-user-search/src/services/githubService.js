// src/services/githubService.js
import axios from 'axios';

export const fetchUserData = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data.items; // array of user objects
  } catch (error) {
    throw error;
  }
};

Add githubService.js to fetch user data from GitHub API
