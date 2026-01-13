import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // Mock authentication
    if (email === 'admin@shopapp.com' && password === 'password123') {
      const user = {
        id: '1',
        email: 'admin@shopapp.com',
        name: 'Admin User'
      };
      
      return NextResponse.json({ 
        success: true, 
        user,
        message: 'Login successful'
      });
    }
    
    return NextResponse.json({ 
      success: false, 
      error: 'Invalid credentials' 
    }, { status: 401 });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: 'Server error' 
    }, { status: 500 });
  }
}