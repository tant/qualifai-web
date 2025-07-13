import React from "react";

export default function WhyUsHeroSection() {
  return (
    <section className="bg-[hsl(var(--color-secondary))] py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--color-foreground))] mb-6 leading-[1.2]">
            Recruiting Reimagined.{" "}
            <span className="text-[hsl(var(--color-primary))]">Technology with a Purpose.</span>
          </h1>
          <p className="text-xl text-[hsl(var(--color-muted-foreground))] mb-8 max-w-3xl mx-auto leading-[1.6]">
            We believe talent is everywhere, but opportunity isn&apos;t. That&apos;s why we
            built QualifAI to bridge the gap between exceptional candidates and the
            companies that need them.
          </p>
        </div>
      </div>
    </section>
  );
}
