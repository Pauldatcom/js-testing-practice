import { describe, expect, it } from 'vitest';
import { fetchUser, wait } from './wait.js';

describe('wait', () => {
  it('should resolve after 300ms', async () => {
    const start = Date.now();
    
    await wait();
    
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(280);
    expect(elapsed).toBeLessThan(350);
  });

  it('should return a promise', () => {
    const result = wait();
    expect(result).toBeInstanceOf(Promise);
  });
});

describe('fetchUser', () => {
  it('should fetch user by id', async () => {
    const user = await fetchUser(1);
    expect(user).toHaveProperty('id', 999); // BROKEN: expecting wrong ID
  });

  it('should fetch different users with different ids', async () => {
    const user1 = await fetchUser(1);
    const user2 = await fetchUser(2);
    
    expect(user1.id).toBe(1);
    expect(user2.id).toBe(2);
    expect(user1.name).not.toBe(user2.name);
  });
});

