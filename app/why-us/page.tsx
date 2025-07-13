'use client';

import WhyUsHeroSection from '@/components/why-us/HeroSection';
import WhyUsDifferenceSection from '@/components/why-us/DifferenceSection';
import WhyUsBackedBySection from '@/components/why-us/BackedBySection';
import WhyUsCommitmentSection from '@/components/why-us/CommitmentSection';
import WhyUsTeamSection from '@/components/why-us/TeamSection';
import WhyUsFinalCtaSection from '@/components/why-us/FinalCtaSection';

export default function WhyUsPage() {
    return (
        <div className="min-h-screen bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] font-sans">
            <WhyUsHeroSection />
            <WhyUsDifferenceSection />
            <WhyUsBackedBySection />
            <WhyUsCommitmentSection />
            <WhyUsTeamSection />
            <WhyUsFinalCtaSection />
        </div>
    );
}
