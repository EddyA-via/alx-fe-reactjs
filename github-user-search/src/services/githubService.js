import axios from 'axios';

/**
 * Fetch users from GitHub based on advanced search criteria
 * @param {Object} params - Search parameters
 * @param {string} params.query - Username or keyword
 * @param {string} params.location - Filter by location
 * @param {number} params.minRepos - Minimum number of public repositories
 * @returns {Array} List of matching users
 */
export const fetchUserData = async ({ query, location, minRepos }) => {
  try {
    // Build advanced search query
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

Add githubService.js to fetch user data from GitHub API
