'use client';

import { Sun, Users, Check, User, Database, Globe, Shield } from 'lucide-react';

export default function WhyUsPage() {
    return (
        <div className="min-h-screen bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] font-sans">
            {/* Hero Section */}
            <section className="bg-[hsl(var(--color-secondary))] py-20">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[hsl(var(--color-foreground))] mb-6 leading-[1.2]">
                            Recruiting Reimagined.{' '}
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
            {/* The QualifAI Difference */}
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
            {/* Backed by WitData */}
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
            {/* Our Commitment */}
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
            {/* Team Section */}
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
            {/* Final CTA */}
            <section className="py-20 bg-[hsl(var(--color-accent))] text-[hsl(var(--color-accent-foreground))]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.2]">
                        See the Difference for Yourself
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Join hundreds of recruiters who are already hiring smarter with QualifAI.
                    </p>
                    <button className="bg-[hsl(var(--color-background))] text-[hsl(var(--color-primary))] px-8 py-4 rounded-[var(--radius-lg)] text-lg font-semibold hover:bg-[hsl(var(--color-secondary))] transition-colors focus-visible:outline-2 focus-visible:outline-[hsl(var(--color-ring))]">
                        Analyze Resumes Free
                    </button>
                    <p className="text-sm mt-4 opacity-75">
                        No credit card required. Start in under 2 minutes.
                    </p>
                </div>
            </section>
        </div>
    );
}
