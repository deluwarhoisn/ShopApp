'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { simpleAuth } from './simple-auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      const authStatus = simpleAuth.isAuthenticated();
      const userData = simpleAuth.getUser();
      setIsAuthenticated(authStatus);
      setUser(userData);
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = (email, password) => {
    const result = simpleAuth.login(email, password);
    if (result.success) {
      setIsAuthenticated(true);
      setUser(result.user);
    }
    return result;
  };

  const logout = () => {
    simpleAuth.logout();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}