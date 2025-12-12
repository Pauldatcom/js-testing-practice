/**
 * Async function that returns a promise resolving after 300ms
 * @returns {Promise<void>} Promise that resolves after 300ms
 */
export function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 300);
  });
}

/**
 * Fetches a user from JSONPlaceholder API
 * @param {number} id - User ID
 * @returns {Promise<Object>} User data
 */
export async function fetchUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  
  if (!response.ok) {
    throw new Error(`User not found: ${id}`);
  }
  
  return response.json();
}
