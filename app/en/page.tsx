'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);
    const [cookieConsent, setCookieConsent] = useState(false);
    const [showCookieBanner, setShowCookieBanner] = useState(true);

    useEffect(() => {
        // Check if user has already given consent
        const consent = localStorage.getItem('cookieConsent');
        if (consent) {
            setShowCookieBanner(false);
            setCookieConsent(true);
        }
    }, []);

    const handleCookieAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setCookieConsent(true);
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

    const toggleFaq = (index) => {
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
            <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Go from 100s of Resumes to the{' '}
                            <span className="text-blue-600">Top 3 Candidates</span> in Minutes
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            The AI co-pilot that decodes complex technical roles, eliminates
                            language barriers, and helps you assess global talent with confidence.
                        </p>
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors mb-4">
                            Analyze Resumes Free
                        </button>
                        <p className="text-sm text-gray-500">
                            Join 200+ recruiters already hiring smarter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Is Your Recruiting Process Working Against You?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Information Overload</h3>
                            <p className="text-gray-600">
                                Spending 60% of your time on irrelevant resumes?
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-orange-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expertise Gap</h3>
                            <p className="text-gray-600">
                                Feeling unsure when evaluating highly technical skills on a JD?
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-yellow-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Language Barriers</h3>
                            <p className="text-gray-600">
                                Accidentally rejecting top international talent due to language
                                friction?
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-red-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Costly Mis-hires</h3>
                            <p className="text-gray-600">
                                Worried about the high cost of making the wrong hiring decision?
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        From Job Description to Shortlist in Record Time
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Analyze the Role</h3>
                            <p className="text-gray-600">
                                Upload a Job Description and let our AI decode its true
                                requirements.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Process Candidates</h3>
                            <p className="text-gray-600">
                                Add resumes and watch as QualifAI extracts, scores, and ranks each
                                one automatically.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-blue-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">Get Actionable Insights</h3>
                            <p className="text-gray-600">
                                Receive a ranked shortlist with match scores and suggested screening
                                questions to move forward with confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Trusted by High-Performance Recruiting Teams
                    </h2>

                    {/* Company Logos */}
                    <div className="flex justify-center items-center space-x-8 mb-16 opacity-60">
                        <div className="text-lg font-semibold">Nexus Technologies</div>
                        <div className="text-lg font-semibold">CloudSphere Solutions</div>
                        <div className="text-lg font-semibold">Innovatech</div>
                        <div className="text-lg font-semibold">TechFlow</div>
                    </div>

                    {/* Testimonials */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <p className="text-gray-700 mb-4 italic">
                                "QualifAI cut our screening time for senior engineering roles by
                                over 50%. What used to take a week now takes an afternoon. I can
                                finally focus on engaging with top candidates instead of drowning in
                                resumes."
                            </p>
                            <div className="font-semibold">Sarah Chen</div>
                            <div className="text-sm text-gray-600">
                                Senior Talent Acquisition @ Nexus Technologies
                            </div>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <p className="text-gray-700 mb-4 italic">
                                "The JD analysis feature is a game-changer. I can now have much more
                                meaningful conversations with hiring managers and I understand
                                exactly what they're looking for."
                            </p>
                            <div className="font-semibold">David Miller</div>
                            <div className="text-sm text-gray-600">
                                HR Manager @ CloudSphere Solutions
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Designed For You Section */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Built for the Demands of Modern Recruitment
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">Staffing Agencies</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">In-House Tech Recruiters</h3>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold">HR Generalists</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                        Your End-to-End Intelligent Hiring Workflow
                    </h2>

                    {/* Stage 1 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-blue-600 mb-8">
                            DECODE & DEFINE - Start with Absolute Clarity
                        </h3>
                        <div className="bg-blue-50 p-8 rounded-lg">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-xl font-semibold mb-2">
                                        Intelligent JD Analysis
                                    </h4>
                                    <p className="text-gray-700">
                                        Go beyond keywords. Our AI analyzes your Job Description to
                                        identify core requirements and even suggests clarifying
                                        questions to ask your hiring manager, ensuring you start
                                        with a perfect search profile.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stage 2 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-green-600 mb-8">
                            AUTOMATE & ACCELERATE - The Core Engine of Efficiency
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-green-50 p-8 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Automated Resume Parsing
                                        </h4>
                                        <p className="text-gray-700">
                                            Stop manual data entry. Upload resumes in any format and
                                            let QualifAI instantly extract and standardize key
                                            information like skills, experience, and contact
                                            details.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-50 p-8 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            AI-Powered Candidate Matching
                                        </h4>
                                        <p className="text-gray-700">
                                            Instantly see who fits best. QualifAI automatically
                                            compares every resume against your job requirements and
                                            presents a ranked list of candidates with a clear match
                                            score, saving you hours of manual review.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stage 3 */}
                    <div>
                        <h3 className="text-2xl font-bold text-purple-600 mb-8">
                            ENGAGE & EVALUATE - Make Smarter Decisions
                        </h3>
                        <div className="space-y-6">
                            <div className="bg-purple-50 p-8 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            AI-Generated Candidate Snapshot
                                        </h4>
                                        <p className="text-gray-700">
                                            Get a 360-degree view in seconds. For each top
                                            candidate, our AI generates a professional summary
                                            highlighting their key strengths, potential weaknesses,
                                            and career trajectory based on their resume.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-purple-50 p-8 rounded-lg">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">
                                            Pre-Screening Question Generator
                                        </h4>
                                        <p className="text-gray-700">
                                            Get the answers you need before the first call. QualifAI
                                            generates tailored questions for each candidate to help
                                            you clarify their skills and experience, leading to more
                                            effective interviews.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Your Questions, Answered
                    </h2>
                    <div className="space-y-4">
                        {[
                            {
                                question: 'Why is QualifAI free?',
                                answer: 'We are currently in our initial launch phase and are offering QualifAI for free to gather valuable feedback from recruitment professionals like you. Our goal is to build the best possible tool, and your insights are crucial to that mission.',
                            },
                            {
                                question: 'Is my data secure?',
                                answer: 'Absolutely. Data security is our top priority. All uploaded data is encrypted both in transit and at rest. We use industry-standard security protocols to ensure your information is always protected.',
                            },
                            {
                                question: 'How is this different from my current ATS?',
                                answer: "While traditional ATS systems rely on simple keyword matching, QualifAI uses advanced AI to understand context, skill equivalency, and experience nuances. It doesn't just find words; it understands what they mean in a professional context.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200">
                                <button
                                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold">{faq.question}</span>
                                    <svg
                                        className={`w-5 h-5 transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                {openFaq === index && (
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <a href="/en/faq" className="text-blue-600 hover:underline">
                            Have more questions? Read our full FAQ.
                        </a>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Stop Screening. Start Recruiting.
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Free forever for your first job role. No credit card required.
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors">
                        Create Your First Shortlist - Free
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-2xl font-bold text-blue-400 mb-4">QualifAI</div>
                            <p className="text-gray-400 mb-4">
                                QualifAI is a proud product of WitData.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <button onClick={scrollToFeatures} className="hover:text-white">
                                        Features
                                    </button>
                                </li>
                                <li>
                                    <a href="/en/why-us" className="hover:text-white">
                                        Why Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/en/faq" className="hover:text-white">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="/en/about" className="hover:text-white">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="/en/contact" className="hover:text-white">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>
                                    <a href="/en/privacy-policy" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/en/terms-of-service" className="hover:text-white">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                            <span className="text-sm text-gray-400">🔒 Data Encrypted</span>
                        </div>
                        <div className="text-sm text-gray-400">
                            © 2025 QualifAI. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
