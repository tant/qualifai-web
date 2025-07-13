import React from "react";
import { Shield, User, Globe } from "lucide-react";

export default function WhyUsDifferenceSection() {
  return (
    <section className="py-20 bg-[hsl(var(--color-background))]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 leading-[1.2]">
          Our Approach is What Sets Us Apart
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[hsl(var(--color-secondary))] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[hsl(var(--color-primary))]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-4 leading-[1.2]">
              Deep Context, Not Just Keywords
            </h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Our AI understands the nuances of technical roles, skill
              equivalencies, and career progression patterns that simple keyword
              matching misses.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[hsl(var(--color-accent))/0.1] rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-8 h-8 text-[hsl(var(--color-accent))]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-4 leading-[1.2]">
              Your AI Co-pilot, Not a Black Box
            </h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Every decision is transparent and explainable. You&apos;ll always
              understand why a candidate was ranked and what questions to ask
              next.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[hsl(var(--color-primary))/0.1] rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-[hsl(var(--color-primary))]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-4 leading-[1.2]">Global-First by Design</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Built to handle international resumes, diverse educational
              backgrounds, and language variations from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
