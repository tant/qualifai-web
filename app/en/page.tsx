'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Hero_en from '@/components/Hero_en';
import ProblemSection_en from '@/components/ProblemSection_en';
import FeaturesSection_en from '@/components/FeaturesSection_en';
import HowItWorksSection_en from '@/components/HowItWorksSection_en';
import CtaSection_en from '@/components/CtaSection_en';
import TestimonialsSection_en from '@/components/TestimonialsSection_en';
import FaqSection_en from '@/components/FaqSection_en';
import Footer_en from '@/components/Footer_en';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
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

    const scrollToFeatures = () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Cookie Consent Banner */}
            {showCookieBanner && (
                <div className="fixed bottom-4 left-4 right-4 md:left-4 md:right-auto md:max-w-md bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
                    <p className="text-sm text-gray-700 mb-3">
                        We use cookies to enhance your experience, gather analytics, and support
                        marketing efforts.
                        <a href="/en/privacy-policy" className="text-blue-600 hover:underline ml-1">
                            Learn more
                        </a>
                    </p>
                    <div className="flex gap-2">
                        <button
                            onClick={handleCookieAccept}
                            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Accept All
                        </button>
                        <button
                            onClick={handleCookieDecline}
                            className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
                        >
                            Decline
                        </button>
                    </div>
                </div>
            )}

            {/* Sticky Header */}
            <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Image src="/logo.png" alt="QualifAI Logo" width={120} height={32} />
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <button
                                onClick={scrollToFeatures}
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Features
                            </button>
                            <a
                                href="/en/why-us"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Why Us
                            </a>
                            <a
                                href="/en/faq"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                FAQ
                            </a>
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                                Analyze Resumes Free
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-4">
                                <button
                                    onClick={scrollToFeatures}
                                    className="text-left text-gray-700 hover:text-blue-600"
                                >
                                    Features
                                </button>
                                <a href="/en/why-us" className="text-gray-700 hover:text-blue-600">
                                    Why Us
                                </a>
                                <a href="/en/faq" className="text-gray-700 hover:text-blue-600">
                                    FAQ
                                </a>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-left">
                                    Analyze Resumes Free
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <Hero_en />

            {/* Problem Section */}
            <ProblemSection_en />

            {/* Features Section */}
            <FeaturesSection_en />

            {/* How It Works / Steps Section */}
            <HowItWorksSection_en />

            {/* CTA Section */}
            <CtaSection_en />

            {/* Testimonials Section */}
            <TestimonialsSection_en />

            {/* FAQ Section */}
            <FaqSection_en openFaq={openFaq} toggleFaq={toggleFaq} />

            {/* Footer */}
            <Footer_en />
        </div>
    );
}
