import React from "react";
import { Check } from "lucide-react";

export default function WhyUsCommitmentSection() {
  return (
    <section className="py-20 bg-[hsl(var(--color-background))]">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 leading-[1.2]">
            We&apos;re Building This With You
          </h2>
          <div className="bg-[hsl(var(--color-secondary))] p-8 rounded-[var(--radius-lg)]">
            <p className="text-lg text-[hsl(var(--color-muted-foreground))] leading-relaxed mb-6">
              As an early-stage product, we are obsessed with our users. Every
              feature we build, every algorithm we refine, and every interface we
              design is driven by real feedback from recruitment professionals who
              use QualifAI daily.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--color-accent))] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-[hsl(var(--color-accent-foreground))]" strokeWidth={2} />
                </div>
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  Direct access to our product team
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--color-accent))] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-[hsl(var(--color-accent-foreground))]" strokeWidth={2} />
                </div>
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  Weekly feature updates based on your needs
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--color-accent))] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-[hsl(var(--color-accent-foreground))]" strokeWidth={2} />
                </div>
                <p className="text-[hsl(var(--color-muted-foreground))]">Priority support and training</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-[hsl(var(--color-accent))] rounded-full flex items-center justify-center shrink-0 mt-1">
                  <Check className="w-3 h-3 text-[hsl(var(--color-accent-foreground))]" strokeWidth={2} />
                </div>
                <p className="text-[hsl(var(--color-muted-foreground))]">
                  Influence on our product roadmap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
