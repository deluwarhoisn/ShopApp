'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useAuth } from '@/lib/auth-context';

export default function AddItemPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated, loading } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: 'Electronics'
  });

  useEffect(() => {
    // Check authentication status
    if (!loading && !isAuthenticated) {
      toast.error('Please login to access this page');
      router.push('/login-simple');
    }
  }, [isAuthenticated, loading, router]);

  // Show loading while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validate image URL if provided
      if (formData.image && !isValidImageUrl(formData.image)) {
        toast.error('Please provide a valid image URL');
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Item added successfully!');
        router.push('/items');
      } else {
        toast.error(data.error || 'Failed to add item');
      }
    } catch (error) {
      toast.error('An error occurred while adding the item');
    } finally {
      setIsLoading(false);
    }
  };

  const isValidImageUrl = (url) => {
    try {
      const urlObj = new URL(url);
      return urlObj.protocol === 'https:' && (
        url.includes('unsplash.com') || 
        url.includes('pexels.com') || 
        url.includes('pixabay.com') ||
        url.match(/\.(jpg|jpeg|png|gif|webp)(\?.*)?$/i)
      );
    } catch {
      return false;
    }
  };

  const categories = [
    'Electronics',
    'Clothing',
    'Kitchen',
    'Furniture',
    'Wearables',
    'Sports',
    'Books',
    'General'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Add New Item
            </h1>
            <p className="text-gray-600">
              Fill in the details below to add a new product to the catalog
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product name"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter product description"
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price ($) *
              </label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min="0"
                step="0.01"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0.00"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Image URL */}
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="https://images.unsplash.com/photo-example.jpg"
              />
              <p className="mt-1 text-sm text-gray-500">
                Recommended: Use HTTPS URLs from trusted sources like Unsplash, Pexels, or direct image links ending in .jpg, .png, .gif, or .webp
              </p>
            </div>

            {/* Form Actions */}
            <div className="flex space-x-4 pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Adding Item...' : 'Add Item'}
              </button>
              <button
                type="button"
                onClick={() => router.push('/items')}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>

          {/* Preview Section */}
          {(formData.name || formData.description || formData.price) && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    {formData.image ? (
                      <img
                        src={formData.image}
                        alt="Preview"
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    ) : (
                      <span className="text-gray-400 text-xs">No Image</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">
                      {formData.name || 'Product Name'}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {formData.description || 'Product description will appear here...'}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        ${formData.price || '0.00'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formData.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}