import React from "react";

export default function WhyUsFinalCtaSection() {
  return (
    <section className="py-20 bg-[hsl(var(--color-accent))] text-[hsl(var(--color-accent-foreground))]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.2]">
          See the Difference for Yourself
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join hundreds of recruiters who are already hiring smarter with QualifAI.
        </p>
        <a href="/early-access">
          <button className="bg-[hsl(var(--color-background))] text-[hsl(var(--color-primary))] px-8 py-4 rounded-[var(--radius-lg)] text-lg font-semibold hover:bg-[hsl(var(--color-secondary))] transition-colors focus-visible:outline-2 focus-visible:outline-[hsl(var(--color-ring))]">
            Analyze Resumes Free
          </button>
        </a>
        <p className="text-sm mt-4 opacity-75">
          No credit card required. Start in under 2 minutes.
        </p>
      </div>
    </section>
  );
}
