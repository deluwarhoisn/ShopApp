'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useAuth } from '@/lib/auth-context';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600">
              ShopApp
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/items" className="text-gray-700 hover:text-blue-600 transition-colors">
              Items
            </Link>
            {isAuthenticated ? (
              <>
                <Link href="/add-item" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Add Item
                </Link>
                <span className="text-gray-600">Welcome, {user?.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login-simple"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link href="/items" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Items
              </Link>
              {isAuthenticated ? (
                <>
                  <Link href="/add-item" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                    Add Item
                  </Link>
                  <span className="block px-3 py-2 text-gray-600">Welcome, {user?.email}</span>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-red-600 hover:text-red-800"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login-simple" className="block px-3 py-2 text-blue-600 hover:text-blue-800">
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}