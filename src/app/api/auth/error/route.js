import { NextResponse } from 'next/server';

// Handle NextAuth error requests gracefully
export async function GET() {
  return NextResponse.json({ 
    error: 'Authentication not configured',
    message: 'Please use /login-simple for authentication'
  }, { status: 200 });
}

export async function POST() {
  return NextResponse.json({ 
    error: 'Authentication not configured',
    message: 'Please use /login-simple for authentication'
  }, { status: 200 });
}