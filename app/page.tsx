'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Hero_en from '@/components/Hero_en';
import ProblemSection_en from '@/components/ProblemSection_en';
import FeaturesSection_en from '@/components/FeaturesSection_en';
import HowItWorksSection_en from '@/components/HowItWorksSection_en';
import DesignedForYou_en from '@/components/DesignedForYou_en';
import CtaSection_en from '@/components/CtaSection_en';
import TestimonialsSection_en from '@/components/TestimonialsSection_en';
import FaqSection_en from '@/components/FaqSection_en';

export default function Page() {
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    useEffect(() => {
        // Check if user has already given consent
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            setShowCookieBanner(false);
        }
    }, []);

    const handleCookieAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setShowCookieBanner(false);
        // Here you would initialize tracking scripts
    };

    const handleCookieDecline = () => {
        localStorage.setItem('cookieConsent', 'false');
        setShowCookieBanner(false);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Cookie Consent Banner */}
            {showCookieBanner && (
                <div className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                    <p className="text-sm text-gray-700 mb-3">
                        We use cookies to enhance your experience, gather analytics, and support
                        marketing efforts.
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
                            Learn more
                        </Link>
                    </p>
                    <div className="flex gap-2">
                        <Button onClick={handleCookieAccept} size="sm">
                            Accept All
                        </Button>
                        <Button onClick={handleCookieDecline} variant="secondary" size="sm">
                            Decline
                        </Button>
                    </div>
                </div>
            )}

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
