// filepath: /Users/rakesh/pridally/frontend/website/src/app/api/user/profile/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    // Add your authentication logic here
    return NextResponse.json({ 
      user: {
        firstname: 'Test',
        lastname: 'User',
        email: 'test@example.com'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}