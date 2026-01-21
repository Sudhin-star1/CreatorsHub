import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Bot,
  CreditCard,
  Gauge,
  Instagram,
  MessageSquareText,
  Sparkles,
  Zap,
} from 'lucide-react';
import { WaitlistForm } from './waitlist-form';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/25 to-cyan-500/25 ch-hero-blob" />
        <div className="absolute bottom-[-220px] left-[-220px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/18 via-cyan-500/12 to-transparent blur-3xl" />
        <div className="absolute right-[-220px] top-[40%] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-amber-500/18 via-fuchsia-500/12 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="h-5 w-5" />
            </span>
            <span>DMKit</span>
            <Badge variant="secondary" className="ml-1 hidden sm:inline-flex">
              Social Selling Toolkit
            </Badge>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#waitlist" className="hover:text-foreground">
              Join Waitlist
            </a>
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#how" className="hover:text-foreground">
              How it works
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="lg">
              <a href="#waitlist">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="relative">
          <div className="container mx-auto px-4 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <Badge className="mb-3" variant="secondary">
                  <Zap className="mr-2 h-4 w-4" />
                  Turn comments into orders — automatically
                </Badge>

                <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
                  Founders & social sellers: join the early waitlist
                </p>

                <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Turn every comment into a sale
          </h1>

                <p className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
                  DMKit watches your Instagram comments, detects buyer intent, and routes leads to checkout.
                  You focus on selling — we handle the messy DM pipeline.
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <Button asChild size="lg" className="group text-lg px-8 py-6">
                    <a href="#waitlist">
                      Join the Waitlist
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Be among the first to get early access when we launch
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border bg-background/60 px-3 py-1">
                    <Instagram className="mr-1 inline h-3.5 w-3.5" /> Instagram comments
                  </span>
                  <span className="rounded-full border bg-background/60 px-3 py-1">
                    <Bot className="mr-1 inline h-3.5 w-3.5" /> Intent classification
                  </span>
                  <span className="rounded-full border bg-background/60 px-3 py-1">
                    <CreditCard className="mr-1 inline h-3.5 w-3.5" /> Stripe + Khalti-ready
                  </span>
                  <span className="rounded-full border bg-background/60 px-3 py-1">
                    <Gauge className="mr-1 inline h-3.5 w-3.5" /> Real-time dashboard
                  </span>
                </div>
              </div>

              {/* Waitlist Form - Prominent */}
              <div id="waitlist" className="mt-12 scroll-mt-32">
                <WaitlistForm />
              </div>

              {/* Product preview cards */}
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Card className="relative overflow-hidden border bg-card/60 shadow-sm backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent" />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquareText className="h-5 w-5 text-primary" />
                      Comment → Lead queue (real-time)
                    </CardTitle>
                    <CardDescription>
                      Auto-detect “price?”, “how to buy?”, “pathao?” and queue buyers instantly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="ch-float rounded-xl border bg-background/60 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium">@sita_store</div>
                          <div className="text-sm text-muted-foreground">“Price pls. Pathao possible?”</div>
                        </div>
                        <Badge className="shrink-0">Buyer</Badge>
                      </div>
                      <div className="mt-3 rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
                        Suggested reply: “Yes! Price is Rs. 1499. Want delivery location?”
                      </div>
                    </div>

                    <div className="rounded-xl border bg-background/60 p-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-medium">@random_user</div>
                          <div className="text-sm text-muted-foreground">“Nice”</div>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          Ignore
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="relative overflow-hidden border bg-card/60 shadow-sm backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-transparent" />
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Checkout that matches your market
                    </CardTitle>
                    <CardDescription>
                      International card, Nepal-friendly Khalti/Manual QR — with fallbacks.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border bg-background/60 p-4">
                      <div className="text-sm font-medium">International</div>
                      <div className="mt-1 text-sm text-muted-foreground">Stripe-ready card checkout</div>
                      <div className="mt-3 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[78%] rounded-full bg-primary" />
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">Fast conversion, minimal steps</div>
                    </div>
                    <div className="rounded-xl border bg-background/60 p-4">
                      <div className="text-sm font-medium">Nepal</div>
                      <div className="mt-1 text-sm text-muted-foreground">Khalti / Manual QR flow</div>
                      <div className="mt-3 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 w-[64%] rounded-full bg-primary" />
                      </div>
                      <div className="mt-2 text-xs text-muted-foreground">Built for social-selling reality</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Social proof marquee */}
          <div className="border-y bg-background/40">
            <div className="container mx-auto overflow-hidden px-4 py-6">
              <div className="relative">
                <div className="ch-marquee flex w-[200%] gap-3">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="flex w-1/2 shrink-0 gap-3">
                      {[
                        'DMs → orders',
                        'Auto-replies',
                        'Instant checkout links',
                        'Real-time queue',
                        'Nepal + International',
                        'AI-powered',
                        'Zero manual work',
                        'Built for creators',
                      ].map((t) => (
                        <span
                          key={`${i}-${t}`}
                          className="rounded-full border bg-background/60 px-4 py-2 text-sm text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-2xl text-center">
              <Badge variant="secondary">Built for social sellers</Badge>
              <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to validate & launch
              </h2>
              <p className="mt-3 text-muted-foreground">
                Designed for creators and storefronts who sell from comments, DMs, and story replies.
          </p>
        </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Bot className="h-5 w-5" />}
                title="Intent detection"
                desc="Classifies buyer intent (price, buy, delivery, “pathao”) and suggests replies."
              />
              <FeatureCard
                icon={<Instagram className="h-5 w-5" />}
                title="Instagram-native"
                desc="Connect your Instagram account and start capturing leads from comments instantly."
              />
              <FeatureCard
                icon={<Gauge className="h-5 w-5" />}
                title="Real-time dashboard"
                desc="Watch leads come in live. See buyer intent, suggested replies, and order status in one place."
              />
              <FeatureCard
                icon={<CreditCard className="h-5 w-5" />}
                title="Flexible checkout"
                desc="International cards, Nepal-friendly Khalti, or manual QR — choose what works for your market."
              />
              <FeatureCard
                icon={<Zap className="h-5 w-5" />}
                title="Lightning fast"
                desc="Built for speed and scale. Handle hundreds of comments without breaking a sweat."
              />
              <FeatureCard
                icon={<MessageSquareText className="h-5 w-5" />}
                title="One screen clarity"
                desc="See total sales, low stock, and latest comments in a clean dashboard."
              />
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="#waitlist">
                  Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="border-t bg-background/40">
          <div className="container mx-auto px-4 py-16 sm:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <Badge variant="secondary">How it works</Badge>
                  <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                    A simple pipeline that feels magical
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    This is exactly what a social seller needs: less manual DM chaos, more conversions.
                  </p>
                  <div className="mt-8 grid gap-4">
                    <Step n="01" title="A buyer comments" desc="Price, availability, delivery, or “I want this”." />
                    <Step
                      n="02"
                      title="AI classifies intent"
                      desc="Our AI instantly identifies buyers vs. casual comments and suggests the perfect reply."
                    />
                    <Step
                      n="03"
                      title="Lead is queued + checkout sent"
                      desc="Your team sees it instantly and replies with a link or DM."
                    />
                  </div>
                </div>

                <Card className="relative overflow-hidden border bg-card/60 shadow-sm backdrop-blur">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
                  <CardHeader>
                    <CardTitle>Why creators love DMKit</CardTitle>
                    <CardDescription>Built by social sellers, for social sellers.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <ChecklistItem text="Never miss a buyer comment again" />
                    <ChecklistItem text="AI suggests replies so you respond faster" />
                    <ChecklistItem text="One-click checkout links for instant sales" />
                    <ChecklistItem text="Works with your existing Instagram workflow" />
                    <div className="pt-3">
                      <Button asChild className="w-full" size="lg">
                        <a href="#waitlist">
                          Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Get early access when we launch. Help shape the product roadmap.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials / CTA */}
        <section className="container mx-auto px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-card/60 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-base">“Finally, order flow that feels native to IG.”</CardTitle>
                  <CardDescription>Small business owner</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/60 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-base">“I can’t keep up with DMs — this fixes that.”</CardTitle>
                  <CardDescription>Creator selling daily</CardDescription>
                </CardHeader>
              </Card>
              <Card className="bg-card/60 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-base">“Nepal + International checkout in one place.”</CardTitle>
                  <CardDescription>Social seller</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-8 overflow-hidden border bg-gradient-to-br from-primary/10 via-background/30 to-fuchsia-500/10">
              <CardContent className="flex flex-col items-center gap-4 p-8 text-center sm:p-10">
                <Badge variant="secondary">Ready to get early access?</Badge>
                <h3 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                  Join founders building the future of social selling
                </h3>
                <p className="max-w-2xl text-muted-foreground">
                  Be among the first to get access when we launch. Help shape the roadmap and get priority support as we build the platform together.
                </p>
                <div className="flex w-full flex-col gap-3 sm:w-auto">
                  <Button asChild size="lg" className="group text-lg px-8">
                    <a href="#waitlist">
                      Join the Waitlist <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="border-t bg-background/40">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">DMKit</span>
              <span>— Social Selling Toolkit</span>
            </div>
            <div className="flex items-center gap-4">
              <a className="hover:text-foreground" href="#waitlist">
                Join Waitlist
              </a>
              <a className="hover:text-foreground" href="#features">
                Features
              </a>
              <a className="hover:text-foreground" href="#how">
                How it works
              </a>
            </div>
        </div>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard(props: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <Card className="group relative overflow-hidden bg-card/60 backdrop-blur transition-shadow hover:shadow-md">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-gradient-to-tr from-primary/15 via-fuchsia-500/10 to-cyan-500/10 blur-2xl" />
      </div>
      <CardHeader>
        <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background/60 text-primary">
          {props.icon}
        </div>
        <CardTitle className="text-lg">{props.title}</CardTitle>
        <CardDescription>{props.desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function Step(props: { n: string; title: string; desc: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border bg-background/60 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
        {props.n}
      </div>
      <div>
        <div className="font-semibold">{props.title}</div>
        <div className="text-sm text-muted-foreground">{props.desc}</div>
      </div>
    </div>
  );
}

function ChecklistItem(props: { text: string }) {
  return (
    <div className="flex items-start gap-2 rounded-xl border bg-background/60 p-3">
      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
      <span>{props.text}</span>
    </div>
  );
}
