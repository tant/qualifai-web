import React from "react";
import { Users, Database, Sun } from "lucide-react";

export default function WhyUsTeamSection() {
  return (
    <section className="py-20 bg-[hsl(var(--color-secondary))]">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 leading-[1.2]">
          Meet the Team Behind QualifAI
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-accent))] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Users className="w-16 h-16 text-[hsl(var(--color-background))]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 leading-[1.2]">Product & Engineering</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Former tech recruiters and AI engineers who understand both sides of
              the hiring equation.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[hsl(var(--color-accent))] to-[hsl(var(--color-primary))] rounded-full mx-auto mb-4 flex items-center justify-center">
              <Database className="w-16 h-16 text-[hsl(var(--color-background))]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 leading-[1.2]">Data Science</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Experts in machine learning and natural language processing with
              years of experience in HR tech.
            </p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-[hsl(var(--color-primary))] to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Sun className="w-16 h-16 text-[hsl(var(--color-background))]" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold mb-2 leading-[1.2]">Customer Success</h3>
            <p className="text-[hsl(var(--color-muted-foreground))]">
              Dedicated to ensuring every recruiter gets maximum value from
              QualifAI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
