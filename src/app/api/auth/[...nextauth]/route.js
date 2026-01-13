import { NextResponse } from 'next/server';

// Catch-all for NextAuth routes - redirect to simple auth
export async function GET(request) {
  const { pathname } = new URL(request.url);
  
  // If it's a signin request, redirect to our simple login
  if (pathname.includes('signin')) {
    return NextResponse.redirect(new URL('/login-simple', request.url));
  }
  
  return NextResponse.json({ 
    error: 'NextAuth not configured',
    message: 'Please use /login-simple for authentication',
    redirect: '/login-simple'
  }, { status: 200 });
}

export async function POST(request) {
  return NextResponse.json({ 
    error: 'NextAuth not configured',
    message: 'Please use /login-simple for authentication',
    redirect: '/login-simple'
  }, { status: 200 });
}