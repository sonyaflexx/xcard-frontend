'use client'

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const theme = request.cookies.get('theme')?.value || 'auto';
  const response = NextResponse.next();
  response.cookies.set('theme', theme);

  return response;
}