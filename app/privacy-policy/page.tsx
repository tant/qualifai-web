'use client';

import { useState } from 'react';

export default function PrivacyPolicyPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <div className="text-2xl font-bold text-blue-600">QualifAI</div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            <a
                                href="/"
                                className="text-gray-700 hover:text-blue-600 transition-colors"
                            >
                                Home
                            </a>
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
                                <a href="/" className="text-gray-700 hover:text-blue-600">
                                    Home
                                </a>
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

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600">Last updated: January 2025</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Welcome to QualifAI, a product of WitData. We are committed to
                            protecting your privacy and ensuring transparency in how we collect,
                            use, and safeguard your personal information. This Privacy Policy
                            explains our practices regarding data collection and processing when you
                            use our AI-powered recruitment platform.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By using QualifAI, you agree to the collection and use of information in
                            accordance with this policy. We will not use or share your information
                            with anyone except as described in this Privacy Policy.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-800 font-medium">
                                <strong>Key Principle:</strong> We believe in data minimization - we
                                only collect what we need to provide you with exceptional service.
                            </p>
                        </div>
                    </section>

                    {/* Information We Collect */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            2. Information We Collect
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            2.1 Information You Provide Directly
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Account Information:</strong> Name, email address, company
                                name, job title
                            </li>
                            <li>
                                <strong>Job Descriptions:</strong> Role requirements, skills,
                                experience levels you upload
                            </li>
                            <li>
                                <strong>Resume Data:</strong> Candidate resumes and CVs you upload
                                for analysis
                            </li>
                            <li>
                                <strong>Communication Data:</strong> Messages, feedback, and support
                                requests
                            </li>
                            <li>
                                <strong>Payment Information:</strong> Billing details (processed
                                securely through third-party providers)
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            2.2 Information We Collect Automatically
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Usage Data:</strong> How you interact with our platform,
                                features used, time spent
                            </li>
                            <li>
                                <strong>Device Information:</strong> IP address, browser type,
                                operating system, device identifiers
                            </li>
                            <li>
                                <strong>Log Data:</strong> Server logs, error reports, performance
                                metrics
                            </li>
                            <li>
                                <strong>Analytics Data:</strong> Aggregated usage patterns and
                                platform performance metrics
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            2.3 Information from Third Parties
                        </h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                            <li>
                                <strong>Integration Data:</strong> Information from connected ATS or
                                HR systems (with your permission)
                            </li>
                            <li>
                                <strong>Authentication Services:</strong> Profile information from
                                Google, LinkedIn, or other login providers
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. How We Use Your Information
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.1 Core Service Delivery
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Analyze job descriptions and extract key requirements</li>
                            <li>Process and rank candidate resumes using AI algorithms</li>
                            <li>Generate candidate insights and screening questions</li>
                            <li>Provide match scores and recommendations</li>
                            <li>Maintain your account and preferences</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.2 Platform Improvement
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Improve our AI models and algorithms</li>
                            <li>Develop new features and functionality</li>
                            <li>Monitor platform performance and reliability</li>
                            <li>Conduct research and analytics (using anonymized data)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.3 Communication and Support
                        </h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Send important service updates and notifications</li>
                            <li>Share product updates and new features (with your consent)</li>
                            <li>Gather feedback to improve our services</li>
                        </ul>
                    </section>

                    {/* Data Sharing and Disclosure */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. Data Sharing and Disclosure
                        </h2>

                        <div className="bg-green-50 p-4 rounded-lg mb-6">
                            <p className="text-green-800 font-medium">
                                <strong>Our Commitment:</strong> We do not sell, rent, or trade your
                                personal information to third parties for marketing purposes.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.1 Limited Sharing Scenarios
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Service Providers:</strong> Trusted third-party vendors who
                                help us operate our platform (cloud hosting, payment processing,
                                analytics)
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> When required by law, court
                                order, or government request
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> In the event of a merger,
                                acquisition, or sale of assets (with notice to users)
                            </li>
                            <li>
                                <strong>Safety and Security:</strong> To protect the rights,
                                property, or safety of QualifAI, our users, or others
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.2 Data Processing Partners
                        </h3>
                        <p className="text-gray-700 mb-4">
                            We work with carefully selected partners who meet our strict data
                            protection standards:
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                            <li>Cloud infrastructure providers (AWS, Google Cloud)</li>
                            <li>Analytics services (anonymized data only)</li>
                            <li>Payment processors (PCI DSS compliant)</li>
                            <li>Customer support tools</li>
                        </ul>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            We implement industry-standard security measures to protect your
                            information against unauthorized access, alteration, disclosure, or
                            destruction.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            5.1 Technical Safeguards
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Encryption:</strong> All data is encrypted in transit (TLS
                                1.3) and at rest (AES-256)
                            </li>
                            <li>
                                <strong>Access Controls:</strong> Multi-factor authentication and
                                role-based access permissions
                            </li>
                            <li>
                                <strong>Network Security:</strong> Firewalls, intrusion detection,
                                and regular security monitoring
                            </li>
                            <li>
                                <strong>Data Backup:</strong> Regular automated backups with
                                encryption and geographic distribution
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            5.2 Operational Safeguards
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Regular security audits and penetration testing</li>
                            <li>Employee training on data protection and privacy</li>
                            <li>Incident response procedures and breach notification protocols</li>
                            <li>Compliance with SOC 2 Type II standards</li>
                        </ul>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <p className="text-yellow-800">
                                <strong>Important:</strong> While we implement robust security
                                measures, no method of transmission over the internet is 100%
                                secure. We continuously monitor and improve our security practices.
                            </p>
                        </div>
                    </section>

                    {/* User Rights */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            6. Your Rights and Choices
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            You have several rights regarding your personal information. We are
                            committed to honoring these rights and making them easy to exercise.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            6.1 Access and Control
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Access:</strong> Request a copy of the personal information
                                we hold about you
                            </li>
                            <li>
                                <strong>Correction:</strong> Update or correct inaccurate personal
                                information
                            </li>
                            <li>
                                <strong>Deletion:</strong> Request deletion of your personal
                                information (subject to legal requirements)
                            </li>
                            <li>
                                <strong>Portability:</strong> Receive your data in a structured,
                                machine-readable format
                            </li>
                            <li>
                                <strong>Restriction:</strong> Limit how we process your personal
                                information
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            6.2 Communication Preferences
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Opt out of marketing communications at any time</li>
                            <li>Choose which types of notifications you receive</li>
                            <li>Update your communication preferences in your account settings</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            6.3 How to Exercise Your Rights
                        </h3>
                        <p className="text-gray-700 mb-4">
                            To exercise any of these rights, please contact us at:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-gray-800">
                                <strong>Email:</strong> privacy@qualifai.com
                                <br />
                                <strong>Response Time:</strong> We will respond within 30 days
                                <br />
                                <strong>Verification:</strong> We may need to verify your identity
                                before processing requests
                            </p>
                        </div>
                    </section>

                    {/* Cookie Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookie Policy</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            We use cookies and similar technologies to enhance your experience,
                            gather analytics, and support our services.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            7.1 Types of Cookies We Use
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Essential Cookies:</strong> Required for basic platform
                                functionality (cannot be disabled)
                            </li>
                            <li>
                                <strong>Performance Cookies:</strong> Help us understand how you use
                                our platform
                            </li>
                            <li>
                                <strong>Functional Cookies:</strong> Remember your preferences and
                                settings
                            </li>
                            <li>
                                <strong>Analytics Cookies:</strong> Provide insights into usage
                                patterns (anonymized)
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            7.2 Managing Cookies
                        </h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                            <li>Use our cookie consent banner to manage preferences</li>
                            <li>Configure your browser settings to block or delete cookies</li>
                            <li>
                                Note that disabling certain cookies may affect platform
                                functionality
                            </li>
                        </ul>
                    </section>

                    {/* Changes to This Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Changes to This Privacy Policy
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may update this Privacy Policy from time to time to reflect changes
                            in our practices, technology, legal requirements, or other factors.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            8.1 Notification Process
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Material Changes:</strong> We will notify you via email and
                                prominent platform notice
                            </li>
                            <li>
                                <strong>Minor Updates:</strong> Posted on this page with updated
                                "Last modified" date
                            </li>
                            <li>
                                <strong>Advance Notice:</strong> Significant changes will be
                                announced 30 days in advance
                            </li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed">
                            Your continued use of QualifAI after any changes indicates your
                            acceptance of the updated Privacy Policy.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            9. Contact Information
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you have any questions, concerns, or requests regarding this Privacy
                            Policy or our data practices, please don't hesitate to contact us.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-blue-900 mb-4">
                                Get in Touch
                            </h3>
                            <div className="space-y-2 text-blue-800">
                                <p>
                                    <strong>Privacy Officer:</strong> privacy@qualifai.com
                                </p>
                                <p>
                                    <strong>General Support:</strong> support@qualifai.com
                                </p>
                                <p>
                                    <strong>Data Protection Officer:</strong> dpo@witdata.com
                                </p>
                                <p>
                                    <strong>Mailing Address:</strong>
                                </p>
                                <p className="ml-4">
                                    WitData (QualifAI)
                                    <br />
                                    [Address Line 1]
                                    <br />
                                    [Address Line 2]
                                    <br />
                                    [City, State, ZIP Code]
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 p-4 border-l-4 border-green-500 bg-green-50">
                            <p className="text-green-800">
                                <strong>Response Commitment:</strong> We aim to respond to all
                                privacy-related inquiries within 48 hours and resolve issues within
                                30 days.
                            </p>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-gray-200 pt-8 mt-12">
                        <p className="text-sm text-gray-500 text-center">
                            This Privacy Policy is effective as of January 2025 and applies to all
                            users of the QualifAI platform.
                        </p>
                    </div>
                </div>
            </main>

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
                                    <a href="/" className="hover:text-white">
                                        Features
                                    </a>
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
                                    <a
                                        href="/en/privacy-policy"
                                        className="hover:text-white text-blue-400"
                                    >
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
