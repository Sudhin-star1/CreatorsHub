import { NextRequest, NextResponse } from 'next/server';
import { appendWaitlistEntry } from '@/lib/google/sheets';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);

    const email = body?.email?.toString().trim();
    const name = body?.name?.toString().trim() || undefined;
    const useCase = body?.useCase?.toString().trim() || undefined;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const result = await appendWaitlistEntry({ email, name, useCase });

    return NextResponse.json(
      {
        success: true,
        mocked: result.mocked,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to join waitlist',
      },
      { status: 500 }
    );
  }
}

