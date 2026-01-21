type WaitlistPayload = {
  email: string;
  name?: string;
  useCase?: string;
};

/**
 * Append a waitlist entry via Google Apps Script web app.
 *
 * Uses a simple webhook-style POST to your deployed Apps Script URL.
 * Env:
 * - GOOGLE_APPS_SCRIPT_URL (e.g. your /exec URL)
 */
export async function appendWaitlistEntry({
  email,
  name,
  useCase,
}: WaitlistPayload): Promise<{ mocked: boolean }> {
  const scriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  // If not configured, don't crash the app – just log and pretend success.
  if (!scriptUrl) {
    console.warn(
      'GOOGLE_APPS_SCRIPT_URL not set. Running in mock mode and NOT calling the Apps Script web app.'
    );
    return { mocked: true };
  }

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        useCase,
      }),
    });

    if (!response.ok) {
      console.error('Apps Script call returned non-OK status:', response.status);
      return { mocked: true };
    }

    return { mocked: false };
  } catch (error) {
    console.error('Error calling Apps Script web app:', error);
    return { mocked: true };
  }
}
