import React from "react";

export default function ThankYouPage() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4 text-center bg-[hsl(var(--color-card))] rounded-lg shadow-2">
      <h1 className="text-3xl font-bold mb-4 text-[hsl(var(--color-primary))] font-sans" style={{fontFamily: 'Inter, sans-serif'}}>You&apos;re Confirmed!</h1>
      <p className="text-lg mb-6 text-[hsl(var(--color-foreground))] font-sans" style={{fontFamily: 'Inter, sans-serif'}}>Thank you for confirming your email address.</p>
      <p className="mb-4 text-[hsl(var(--color-foreground))] font-sans" style={{fontFamily: 'Inter, sans-serif'}}>
        You are now officially on the waiting list for <b className="font-semibold">QualifAI</b>. We appreciate you taking the time to join our community.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2 text-[hsl(var(--color-primary))] font-sans" style={{fontFamily: 'Inter, sans-serif'}}>What&apos;s next?</h2>
      <p className="mb-4 text-[hsl(var(--color-foreground))] font-sans" style={{fontFamily: 'Inter, sans-serif'}}>
        We will keep you updated with important news, progress, and exclusive early access opportunities as we get closer to launch. Keep an eye on your inbox!
      </p>
      <p className="mb-4 text-[hsl(var(--color-foreground))] font-sans" style={{fontFamily: 'Inter, sans-serif'}}>
        In the meantime, feel free to follow our journey on our social channels.
      </p>
      <div className="flex justify-center gap-4 mb-8">
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-[var(--radius-sm)] font-semibold text-white bg-[hsl(var(--color-accent))] shadow-1 transition-all duration-200 ease-in-out hover:bg-[hsl(var(--color-accent))]/90 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-accent))]">Twitter/X</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2 rounded-[var(--radius-sm)] font-semibold text-[hsl(var(--color-primary))] border border-[hsl(var(--color-primary))] bg-transparent shadow-1 transition-all duration-200 ease-in-out hover:bg-[hsl(var(--color-primary))]/10 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-accent))]">LinkedIn</a>
      </div>
      <p className="text-[hsl(var(--color-muted-foreground))] font-sans">We look forward to sharing more with you soon.</p>
      <p className="mt-6 font-medium text-[hsl(var(--color-primary))] font-sans">The Team at qualifai.net</p>
    </main>
  );
}
