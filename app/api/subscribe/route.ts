import { NextRequest, NextResponse } from 'next/server';

// Type definitions for Brevo API response and error
interface BrevoError {
  message?: string;
  error?: string;
  errors?: Array<{ message?: string }>;
  [key: string]: any;
}

// Simple in-memory rate limiter (per process, resets on server restart)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 requests per window per IP
const rateLimitMap = new Map<string, { count: number; lastRequest: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.lastRequest > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, lastRequest: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }
  entry.count++;
  entry.lastRequest = now;
  rateLimitMap.set(ip, entry);
  return false;
}

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 });
  }

  // Rate limiting by IP
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
  }

  const API_KEY = process.env.BREVO_API_KEY;
  const LIST_ID = process.env.BREVO_LIST_ID ? Number(process.env.BREVO_LIST_ID) : undefined;
  const TEMPLATE_ID = process.env.BREVO_TEMPLATE_ID ? Number(process.env.BREVO_TEMPLATE_ID) : undefined;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://qualifai.net';
  const REDIRECT_URL = `${BASE_URL}/early-access/thank-you`;

  if (!API_KEY || !LIST_ID || !TEMPLATE_ID) {
    console.error('Server misconfiguration: missing Brevo API key, list ID, or template ID.');
    return NextResponse.json({ error: 'Server misconfiguration: missing Brevo API key, list ID, or template ID.' }, { status: 500 });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
      method: 'POST',
      headers: {
        'api-key': API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email,
        includeListIds: [LIST_ID],
        templateId: TEMPLATE_ID,
        redirectionUrl: REDIRECT_URL,
      }),
    });

    if (!response.ok) {
      const error: BrevoError = await response.json();
      // Log error for debugging
      console.error('Brevo API error:', error);
      // Extract error message robustly
      let errorMessage = error.message || error.error;
      if (!errorMessage && Array.isArray(error.errors) && error.errors.length > 0) {
        errorMessage = error.errors.map(e => e.message).filter(Boolean).join('; ');
      }
      errorMessage = errorMessage || 'Failed to subscribe.';
      return NextResponse.json({ error: errorMessage }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Subscription successful. Please check your email to confirm.',
      email,
      redirectUrl: REDIRECT_URL,
    });
  } catch (err) {
    // Log internal error for debugging
    console.error('Internal server error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}