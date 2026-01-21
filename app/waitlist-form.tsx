'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [useCase, setUseCase] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please add your best email.');
      setStatus('error');
      return;
    }
    setStatus('loading');
    setMessage(null);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, useCase }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error((data as any)?.error || 'Something went wrong, please try again.');
      }

      setStatus('success');
      setMessage('You are on the list. We will reach out when the beta is ready.');
      setEmail('');
      setName('');
      setUseCase('');
    } catch (err) {
      console.error(err);
      setStatus('error');
      setMessage(
        'We could not save your email automatically. Please try again in a moment.'
      );
    }
  };

  return (
    <Card className="relative overflow-hidden border-2 border-primary/20 bg-background/90 shadow-lg backdrop-blur ch-float">
      <CardContent className="space-y-5 p-6 sm:p-8">
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="text-sm px-3 py-1">Early Access</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Join the Waitlist
          </h2>
          <p className="text-base text-muted-foreground max-w-md mx-auto">
            Be among the first founders and social sellers to get access when we launch. Help shape the roadmap.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 space-y-2">
            <Input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="grid gap-2 sm:grid-cols-2">
              <Input
                type="text"
                placeholder="Name / Brand (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="text"
                placeholder="What are you selling?"
                value={useCase}
                onChange={(e) => setUseCase(e.target.value)}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="mt-2 w-full sm:mt-0 sm:w-auto"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Joining...' : 'Join waitlist'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
        {message && (
          <p
            className={
              status === 'success'
                ? 'text-xs text-emerald-600 dark:text-emerald-400'
                : 'text-xs text-destructive'
            }
          >
            {message}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

