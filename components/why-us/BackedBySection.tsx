import React from "react";
import { Database } from "lucide-react";

export default function WhyUsBackedBySection() {
  return (
    <section className="py-20 bg-[hsl(var(--color-secondary))]">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-[1.2]">
            Born from a Passion for Data
          </h2>
          <div className="bg-[hsl(var(--color-background))] p-8 rounded-[var(--radius-lg)] shadow-sm">
            <p className="text-lg text-[hsl(var(--color-muted-foreground))] leading-relaxed mb-6">
              QualifAI is a product of <strong>WitData</strong>, a company
              dedicated to driving powerful digital transformation by optimizing
              how businesses utilize data. We created QualifAI because we saw a
              critical need to apply this data-centric approach to the world of
              recruitment, transforming it from a process of guesswork into a
              science of precision.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-accent))] rounded-full flex items-center justify-center">
                <Database className="w-12 h-12 text-[hsl(var(--color-background))]" strokeWidth={2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
