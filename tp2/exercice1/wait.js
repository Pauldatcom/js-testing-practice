export function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 300);
  });
}

export async function fetchUser(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  
  if (!response.ok) {
    throw new Error(`User not found: ${id}`);
  }
  
  return response.json();
}

