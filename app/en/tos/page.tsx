'use client';

import { useState } from 'react';

export default function TermsOfServicePage() {
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
                        Terms of Service
                    </h1>
                    <p className="text-lg text-gray-600">Last updated: January 2025</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {/* 1. Acceptance of Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Welcome to QualifAI, an AI-powered recruitment platform operated by
                            WitData ("Company," "we," "us," or "our"). These Terms of Service
                            ("Terms") constitute a legally binding agreement between you ("User,"
                            "you," or "your") and QualifAI regarding your use of our platform,
                            services, and related features.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            By accessing, browsing, or using QualifAI in any manner, you acknowledge
                            that you have read, understood, and agree to be bound by these Terms and
                            our Privacy Policy. If you do not agree to these Terms, you must not use
                            our services.
                        </p>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-800 font-medium">
                                <strong>Important:</strong> These Terms apply to all users,
                                including visitors, registered users, and subscribers. Your
                                continued use of QualifAI constitutes ongoing acceptance of these
                                Terms.
                            </p>
                        </div>
                    </section>

                    {/* 2. User Accounts */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Accounts</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            2.1 Account Creation
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To access certain features of QualifAI, you must create an account by
                            providing accurate, current, and complete information. You are
                            responsible for maintaining the confidentiality of your account
                            credentials and for all activities that occur under your account.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            2.2 Account Requirements
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>You must be at least 18 years old to create an account</li>
                            <li>You must provide accurate and truthful information</li>
                            <li>
                                You must have the authority to bind your organization (if
                                applicable)
                            </li>
                            <li>One person or entity may not maintain multiple accounts</li>
                            <li>You must promptly update account information when it changes</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            2.3 Account Security
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>You are solely responsible for maintaining account security</li>
                            <li>You must immediately notify us of any unauthorized access</li>
                            <li>
                                We recommend using strong passwords and enabling two-factor
                                authentication
                            </li>
                            <li>
                                You are liable for all activities under your account until you
                                notify us of a breach
                            </li>
                        </ul>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <p className="text-yellow-800">
                                <strong>Account Suspension:</strong> We reserve the right to suspend
                                or terminate accounts that violate these Terms or engage in
                                suspicious activity.
                            </p>
                        </div>
                    </section>

                    {/* 3. Acceptable Use Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            3. Acceptable Use Policy
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.1 Permitted Uses
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            QualifAI is designed for legitimate recruitment and talent acquisition
                            purposes. You may use our platform to:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Analyze job descriptions and candidate resumes</li>
                            <li>Generate candidate insights and screening questions</li>
                            <li>Rank and compare candidates for open positions</li>
                            <li>Improve your recruitment processes and decision-making</li>
                            <li>Access analytics and reporting features</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.2 Prohibited Activities
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree not to use QualifAI for any unlawful purpose or in any way
                            that could damage, disable, or impair our services. Prohibited
                            activities include:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Illegal Activities:</strong> Any use that violates
                                applicable laws or regulations
                            </li>
                            <li>
                                <strong>Discrimination:</strong> Using our platform to discriminate
                                based on protected characteristics
                            </li>
                            <li>
                                <strong>Data Misuse:</strong> Uploading false, misleading, or
                                unauthorized candidate information
                            </li>
                            <li>
                                <strong>System Abuse:</strong> Attempting to hack, reverse engineer,
                                or disrupt our services
                            </li>
                            <li>
                                <strong>Spam/Abuse:</strong> Sending unsolicited communications or
                                overloading our systems
                            </li>
                            <li>
                                <strong>Competitive Intelligence:</strong> Using our platform to
                                develop competing services
                            </li>
                            <li>
                                <strong>Resale:</strong> Redistributing or reselling access to our
                                platform without permission
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.3 Compliance Requirements
                        </h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                            <li>Comply with all applicable employment and privacy laws</li>
                            <li>Obtain necessary consents before uploading candidate data</li>
                            <li>Respect intellectual property rights of third parties</li>
                            <li>
                                Use our platform in accordance with your organization's policies
                            </li>
                        </ul>
                    </section>

                    {/* 4. User-Generated Content */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. User-Generated Content
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.1 Content Ownership
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You retain ownership of all content you upload to QualifAI, including
                            job descriptions, resumes, and other materials ("User Content").
                            However, by uploading content, you grant us certain rights necessary to
                            provide our services.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.2 License Grant
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You grant QualifAI a non-exclusive, worldwide, royalty-free license to:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                Process and analyze your uploaded content using our AI algorithms
                            </li>
                            <li>Store and transmit content as necessary to provide our services</li>
                            <li>
                                Create derivative works (such as candidate insights and rankings)
                            </li>
                            <li>Use aggregated, anonymized data to improve our platform</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.3 Content Responsibilities
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Accuracy:</strong> You warrant that uploaded content is
                                accurate and truthful
                            </li>
                            <li>
                                <strong>Authorization:</strong> You have the right to upload and
                                share all content
                            </li>
                            <li>
                                <strong>Compliance:</strong> Content complies with applicable laws
                                and regulations
                            </li>
                            <li>
                                <strong>No Harmful Content:</strong> Content does not contain
                                malware, viruses, or harmful code
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.4 Content Removal
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We reserve the right to remove any User Content that violates these
                            Terms, applicable laws, or our community standards. You may delete your
                            content at any time through your account settings.
                        </p>
                    </section>

                    {/* 5. Intellectual Property */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            5. Intellectual Property
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            5.1 QualifAI Ownership
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            QualifAI and all related technology, including our AI algorithms,
                            software, designs, trademarks, and proprietary methods, are owned by
                            WitData and protected by intellectual property laws.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            5.2 Limited License to Users
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We grant you a limited, non-exclusive, non-transferable license to use
                            QualifAI solely for your internal recruitment purposes in accordance
                            with these Terms.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            5.3 Restrictions
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                You may not copy, modify, or create derivative works of our platform
                            </li>
                            <li>
                                You may not reverse engineer or attempt to extract our algorithms
                            </li>
                            <li>You may not use our trademarks without written permission</li>
                            <li>You may not remove or alter any proprietary notices</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            5.4 Feedback and Suggestions
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Any feedback, suggestions, or ideas you provide about QualifAI become
                            our property and may be used without compensation or attribution.
                        </p>
                    </section>

                    {/* 6. Termination */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            6.1 Termination by You
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may terminate your account at any time by contacting our support
                            team or using the account deletion feature in your settings. Upon
                            termination, your access to QualifAI will cease immediately.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            6.2 Termination by QualifAI
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may suspend or terminate your account immediately, without prior
                            notice, if you:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Violate these Terms or our Acceptable Use Policy</li>
                            <li>Engage in fraudulent or illegal activities</li>
                            <li>Fail to pay applicable fees (for paid services)</li>
                            <li>Pose a security risk to our platform or other users</li>
                            <li>Use our services in a manner that could harm our reputation</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            6.3 Effect of Termination
                        </h3>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                            <li>Your right to use QualifAI will cease immediately</li>
                            <li>We may delete your account and associated data</li>
                            <li>You remain liable for any outstanding obligations</li>
                            <li>
                                Provisions that should survive termination will remain in effect
                            </li>
                        </ul>
                    </section>

                    {/* 7. Disclaimer of Warranties */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. Disclaimer of Warranties
                        </h2>

                        <div className="bg-red-50 p-4 rounded-lg mb-6">
                            <p className="text-red-800 font-medium">
                                <strong>IMPORTANT DISCLAIMER:</strong> QualifAI is provided "AS IS"
                                and "AS AVAILABLE" without warranties of any kind.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            7.1 No Warranties
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To the fullest extent permitted by law, we disclaim all warranties,
                            express or implied, including:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Merchantability:</strong> Fitness for a particular purpose
                            </li>
                            <li>
                                <strong>Accuracy:</strong> Completeness or reliability of
                                AI-generated insights
                            </li>
                            <li>
                                <strong>Availability:</strong> Uninterrupted or error-free service
                            </li>
                            <li>
                                <strong>Security:</strong> Complete protection against data breaches
                            </li>
                            <li>
                                <strong>Results:</strong> Specific hiring outcomes or success rates
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            7.2 AI Limitations
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">You acknowledge that:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                AI-generated insights are suggestions, not definitive assessments
                            </li>
                            <li>Human judgment should always be part of hiring decisions</li>
                            <li>Our algorithms may have biases or limitations</li>
                            <li>Results may vary based on input quality and context</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            7.3 Third-Party Services
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We are not responsible for the availability, accuracy, or content of
                            third-party services integrated with QualifAI.
                        </p>
                    </section>

                    {/* 8. Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Limitation of Liability
                        </h2>

                        <div className="bg-red-50 p-4 rounded-lg mb-6">
                            <p className="text-red-800 font-medium">
                                <strong>LIABILITY LIMITATION:</strong> Our liability to you is
                                limited as described below.
                            </p>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            8.1 Exclusion of Damages
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To the maximum extent permitted by law, QualifAI and WitData shall not
                            be liable for:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Indirect Damages:</strong> Lost profits, revenue, or
                                business opportunities
                            </li>
                            <li>
                                <strong>Consequential Damages:</strong> Hiring mistakes or
                                employment-related claims
                            </li>
                            <li>
                                <strong>Incidental Damages:</strong> Data loss or system downtime
                            </li>
                            <li>
                                <strong>Punitive Damages:</strong> Regardless of the theory of
                                liability
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            8.2 Liability Cap
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our total liability for any claims arising from your use of QualifAI
                            shall not exceed the greater of:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>$100 USD, or</li>
                            <li>
                                The amount you paid to QualifAI in the 12 months preceding the claim
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            8.3 Essential Purpose
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These limitations are fundamental elements of our agreement and will
                            apply even if any limited remedy fails of its essential purpose.
                        </p>
                    </section>

                    {/* 9. Governing Law */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            9. Governing Law and Dispute Resolution
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            9.1 Governing Law
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These Terms shall be governed by and construed in accordance with the
                            laws of [Jurisdiction], without regard to its conflict of law
                            principles.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            9.2 Dispute Resolution
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Before pursuing formal legal action, we encourage you to contact us
                            directly to resolve any disputes. We are committed to working with you
                            to find a mutually acceptable solution.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            9.3 Jurisdiction
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Any legal action or proceeding arising under these Terms will be brought
                            exclusively in the federal or state courts located in [Jurisdiction],
                            and you consent to the jurisdiction of such courts.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            9.4 Class Action Waiver
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree that any dispute resolution proceedings will be conducted only
                            on an individual basis and not in a class, consolidated, or
                            representative action.
                        </p>
                    </section>

                    {/* 10. Changes to These Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            10. Changes to These Terms
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            10.1 Modification Rights
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We reserve the right to modify these Terms at any time to reflect
                            changes in our services, legal requirements, or business practices.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            10.2 Notification Process
                        </h3>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Material Changes:</strong> 30-day advance notice via email
                                and platform notification
                            </li>
                            <li>
                                <strong>Minor Updates:</strong> Posted on this page with updated
                                effective date
                            </li>
                            <li>
                                <strong>Emergency Changes:</strong> Immediate posting for security
                                or legal compliance
                            </li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            10.3 Acceptance of Changes
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your continued use of QualifAI after any changes constitutes acceptance
                            of the new Terms. If you disagree with any changes, you must stop using
                            our services and may terminate your account.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            10.4 Version Control
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We maintain previous versions of our Terms for reference. You may
                            request access to historical versions by contacting our support team.
                        </p>
                    </section>

                    {/* Additional Provisions */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            11. Additional Provisions
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            11.1 Entire Agreement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These Terms, together with our Privacy Policy, constitute the entire
                            agreement between you and QualifAI regarding your use of our services.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            11.2 Severability
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If any provision of these Terms is found to be unenforceable, the
                            remaining provisions will remain in full force and effect.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">11.3 Waiver</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Our failure to enforce any provision of these Terms does not constitute
                            a waiver of that provision or any other provision.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            11.4 Assignment
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You may not assign or transfer your rights under these Terms without our
                            written consent. We may assign our rights and obligations without
                            restriction.
                        </p>
                    </section>

                    {/* Contact Information */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            12. Contact Information
                        </h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you have any questions about these Terms of Service, please contact
                            us:
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold text-blue-900 mb-4">
                                Legal and Terms Inquiries
                            </h3>
                            <div className="space-y-2 text-blue-800">
                                <p>
                                    <strong>Email:</strong> legal@qualifai.com
                                </p>
                                <p>
                                    <strong>General Support:</strong> support@qualifai.com
                                </p>
                                <p>
                                    <strong>Mailing Address:</strong>
                                </p>
                                <p className="ml-4">
                                    WitData (QualifAI)
                                    <br />
                                    Legal Department
                                    <br />
                                    [Address Line 1]
                                    <br />
                                    [Address Line 2]
                                    <br />
                                    [City, State, ZIP Code]
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Footer Note */}
                    <div className="border-t border-gray-200 pt-8 mt-12">
                        <p className="text-sm text-gray-500 text-center">
                            These Terms of Service are effective as of January 2025 and apply to all
                            users of the QualifAI platform.
                        </p>
                        <p className="text-sm text-gray-500 text-center mt-2">
                            By using QualifAI, you acknowledge that you have read and understood
                            these Terms and agree to be bound by them.
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
                                    <a href="/en/privacy-policy" className="hover:text-white">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="/en/tos" className="hover:text-white text-blue-400">
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
