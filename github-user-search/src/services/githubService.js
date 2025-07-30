import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

/**
 * Fetch GitHub user data by username.
 * 
 * @param {string} username - GitHub username to search.
 * @returns {Promise<Object>} - GitHub user data.
 * @throws Will throw an error if the request fails.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
Add githubService.js to fetch user data from GitHub API
