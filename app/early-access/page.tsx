'use client'
import { useState } from "react";
import { Globe, Scale, Github } from "lucide-react";
import Link from "next/link";

export default function EarlyAccessPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);

  // Simple email validation regex
  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!agree) {
      setError("You must agree to receive updates and confirm you have read the Privacy Policy.");
      return;
    }
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Something went wrong. Please try again later.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center py-16 px-4 text-center bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))]">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Stop Reading Resumes. Start Meeting the Right Candidates.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          QualifAI is an intelligent partner that analyzes resumes <b>in any language</b> to find top technical talent in seconds. Free, open-source, and built for modern recruiters.
        </p>
        <div className="text-sm text-[hsl(var(--color-muted-foreground))] mb-2">
          Join 200+ recruiters ready to build world-class teams.
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto mb-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border border-[hsl(var(--color-primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] text-base"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              disabled={submitted}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-[hsl(var(--color-primary))] text-white px-6 py-3 rounded-md font-semibold transition-colors hover:opacity-90 disabled:opacity-60"
              disabled={submitted}
            >
              {submitted ? "Thank You!" : "Get Early Access"}
            </button>
          </div>
          <div className="flex items-start gap-2 text-left">
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
              disabled={submitted}
              required
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm select-none">
              I agree to receive updates about Qualifai and confirm that I have read and understood{' '}
              <Link href="/privacy-policy" className="underline text-[hsl(var(--color-primary))]" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>.
            </label>
          </div>
        </form>
        {error && (
          <div className="text-red-600 font-medium mb-2">{error}</div>
        )}
        {submitted && (
          <div className="text-green-600 font-medium mb-2">Thank you for joining! We&apos;ll be in touch soon.</div>
        )}
      </section>

      {/* Divider */}
      <div className="h-2 w-full bg-gradient-to-r from-[hsl(var(--color-primary)/0.1)] to-[hsl(var(--color-secondary)/0.1)]" />

      {/* Why You Should Wait Section */}
      <section className="py-12 px-4 bg-[hsl(var(--color-secondary))]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">A Smarter Way to Build Your Shortlist.</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center bg-white/80 rounded-lg shadow p-6">
            <Globe className="w-10 h-10 mb-3 text-[hsl(var(--color-primary))]" />
            <h3 className="font-semibold mb-2">Break Language Barriers</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Instantly screen and standardize resumes from a global talent pool, regardless of the original language.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white/80 rounded-lg shadow p-6">
            <Scale className="w-10 h-10 mb-3 text-[hsl(var(--color-accent))]" />
            <h3 className="font-semibold mb-2">Hire on Skill, Not Bias</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Get an objective, AI-driven analysis of technical skills against your job description, creating fairer and more effective shortlists.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white/80 rounded-lg shadow p-6">
            <Github className="w-10 h-10 mb-3 text-[hsl(var(--color-foreground))]" />
            <h3 className="font-semibold mb-2">Truly Free & Open-Source</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Benefit from a powerful, community-driven tool with total transparency. No hidden fees, no enterprise plans. Ever.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 w-full bg-gradient-to-r from-[hsl(var(--color-secondary)/0.1)] to-[hsl(var(--color-accent)/0.1)]" />

      {/* Early Access Benefits Section */}
      <section className="py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Become a Founding Member of the Community.</h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-base">
          <li>
            <b>Get Lifetime Free Access:</b> Be the first to use QualifAI and lock in your free account forever.
          </li>
          <li>
            <b>Shape the Future of Recruitment:</b> As an early user, your feedback will directly influence our features and roadmap.
          </li>
          <li>
            <b>Join a Global Community:</b> Connect with other forward-thinking recruiters and contribute to an open-source project dedicated to your success.
          </li>
        </ul>
      </section>

      {/* Divider */}
      <div className="h-2 w-full bg-gradient-to-r from-[hsl(var(--color-accent)/0.1)] to-[hsl(var(--color-background)/0.1]" />

      {/* Final CTA Section */}
      <section className="py-12 px-4 bg-[hsl(var(--color-accent))] text-[hsl(var(--color-accent-foreground))] text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">The Best Talent Won&apos;t Wait. Neither Should You.</h2>
        <p className="mb-6">Stop drowning in resumes. Start building the future.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto mb-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md border border-[hsl(var(--color-primary))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-primary))] text-base"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              disabled={submitted}
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-[hsl(var(--color-primary))] text-white px-6 py-3 rounded-md font-semibold transition-colors hover:opacity-90 disabled:opacity-60"
              disabled={submitted}
            >
              {submitted ? "Thank You!" : "Get Started"}
            </button>
          </div>
          <div className="flex items-start gap-2 text-left">
            <input
              type="checkbox"
              id="agree-cta"
              checked={agree}
              onChange={e => setAgree(e.target.checked)}
              disabled={submitted}
              required
              className="mt-1"
            />
            <label htmlFor="agree-cta" className="text-sm select-none">
              I agree to receive updates about Qualifai and confirm that I have read and understood{' '}
              <Link href="/privacy-policy" className="underline text-[hsl(var(--color-background))]" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </Link>.
            </label>
          </div>
        </form>
        {error && (
          <div className="text-red-200 font-medium">{error}</div>
        )}
        {submitted && (
          <div className="text-green-100 font-medium">Thank you for joining! We&apos;ll be in touch soon.</div>
        )}
      </section>
    </div>
  );
}
