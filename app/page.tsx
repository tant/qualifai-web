'use client';

import Hero_en from '@/components/Hero_en';
import ProblemSection_en from '@/components/ProblemSection_en';
import FeaturesSection_en from '@/components/FeaturesSection_en';
import HowItWorksSection_en from '@/components/HowItWorksSection_en';
import DesignedForYou_en from '@/components/DesignedForYou_en';
import CtaSection_en from '@/components/CtaSection_en';
import TestimonialsSection_en from '@/components/TestimonialsSection_en';
import FaqSection_en from '@/components/FaqSection_en';

export default function Page() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <Hero_en />

            {/* Problem Section */}
            <ProblemSection_en />

            {/* Features Section */}
            <FeaturesSection_en />

            {/* How It Works Section */}
            <HowItWorksSection_en />

            {/* Designed for you Section */}
            <DesignedForYou_en />

            {/* Testimonials Section */}
            <TestimonialsSection_en />

            {/* CTA Section */}
            <CtaSection_en />

            {/* FAQ Section */}
            <FaqSection_en />
        </div>
    );
}
