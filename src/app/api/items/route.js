import { NextResponse } from 'next/server';

// Mock data for items
let items = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity. Track your health and fitness goals.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    category: "Wearables",
    inStock: true,
    rating: 4.3,
    reviews: 89
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt. Available in multiple colors and sizes. Eco-friendly fashion choice.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
    category: "Clothing",
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: 4,
    name: "Professional Coffee Maker",
    description: "Premium coffee maker with programmable settings and thermal carafe. Brew the perfect cup every time.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop",
    category: "Kitchen",
    inStock: false,
    rating: 4.2,
    reviews: 156
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    description: "Comfortable ergonomic office chair with lumbar support and adjustable height. Perfect for long work sessions.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
    category: "Furniture",
    inStock: true,
    rating: 4.6,
    reviews: 74
  },
  {
    id: 6,
    name: "Wireless Phone Charger",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609592806787-3d9c1b8e5e8e?w=500&h=500&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.4,
    reviews: 92
  }
];

export async function GET() {
  try {
    return NextResponse.json({ items, success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch items', success: false },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, price, image, category } = body;

    // Validate required fields
    if (!name || !description || !price) {
      return NextResponse.json(
        { error: 'Missing required fields', success: false },
        { status: 400 }
      );
    }

    // Create new item
    const newItem = {
      id: items.length + 1,
      name,
      description,
      price: parseFloat(price),
      image: image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop",
      category: category || "General",
      inStock: true,
      rating: 0,
      reviews: 0
    };

    items.push(newItem);

    return NextResponse.json({ 
      item: newItem, 
      success: true,
      message: 'Item created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create item', success: false },
      { status: 500 }
    );
  }
}