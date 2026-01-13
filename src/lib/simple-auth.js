'use client';

// Simple authentication without NextAuth for easier deployment
export const simpleAuth = {
  login: (email, password) => {
    if (email === 'admin@shopapp.com' && password === 'password123') {
      const user = {
        id: '1',
        email: 'admin@shopapp.com',
        name: 'Admin User'
      };
      
      // Store in localStorage for client-side auth
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
      }
      
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('isAuthenticated');
    }
  },

  getUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  isAuthenticated: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('isAuthenticated') === 'true';
    }
    return false;
  }
};