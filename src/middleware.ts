import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('access_token')?.value;
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (pathname.startsWith('/auth') && token) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  const theme = request.cookies.get('theme')?.value || 'auto';
  const response = NextResponse.next();
  response.cookies.set('theme', theme);

  return response;
}