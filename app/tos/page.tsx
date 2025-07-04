'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer_en from '@/components/Footer_en';

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />

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
                            WitData (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service
                            (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot;
                            &quot;you,&quot; or &quot;your&quot;) and QualifAI regarding your use of our platform,
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
                            3.2 Prohibited Uses
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree not to use QualifAI for any unlawful or prohibited purpose,
                            including but not limited to:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                Uploading or processing data you do not have the right to use
                            </li>
                            <li>
                                Introducing viruses, malware, or other malicious code
                            </li>
                            <li>
                                Attempting to gain unauthorized access to our systems
                            </li>
                            <li>
                                Reverse-engineering, decompiling, or disassembling our software
                            </li>
                            <li>
                                Using the service to build a competitive product
                            </li>
                            <li>
                                Engaging in any activity that disrupts or harms our platform
                            </li>
                        </ul>
                    </section>

                    {/* 4. Data and Privacy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data and Privacy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your privacy is important to us. Our{' '}
                            <Link
                                href="/privacy-policy"
                                className="text-blue-600 hover:underline"
                            >
                                Privacy Policy
                            </Link>{' '}
                            explains how we collect, use, and protect your data. By using QualifAI, you
                            consent to our data practices as described in the Privacy Policy.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You retain ownership of the data you upload. We do not use your proprietary
                            data to train our global AI models without your explicit consent.
                        </p>
                    </section>

                    {/* 5. Fees and Payment */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Fees and Payment</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            QualifAI offers both free and paid subscription plans. By selecting a paid
                            plan, you agree to pay the specified fees. All fees are non-refundable
                            except as required by law. We use a secure third-party payment processor to
                            handle all transactions.
                        </p>
                    </section>

                    {/* 6. Intellectual Property */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            All content, trademarks, and software on the QualifAI platform are the
                            exclusive property of WitData or its licensors. You are granted a limited,
                            non-exclusive, non-transferable license to use the service according to
                            these Terms. You may not copy, modify, or distribute our intellectual
                            property without our prior written consent.
                        </p>
                    </section>

                    {/* 7. Disclaimers and Limitation of Liability */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. Disclaimers and Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            QualifAI is provided &quot;as is&quot; and &quot;as available&quot; without any
                            warranties, express or implied. We do not guarantee that the service will be
                            error-free, uninterrupted, or completely accurate. The insights provided by
                            our AI are for informational purposes only and should not be the sole basis
                            for hiring decisions.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To the fullest extent permitted by law, WitData shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages, or any
                            loss of profits or revenues, whether incurred directly or indirectly, or any
                            loss of data, use, goodwill, or other intangible losses, resulting from your
                            use of our service.
                        </p>
                    </section>

                    {/* 8. Indemnification */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Indemnification</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            You agree to indemnify and hold harmless WitData, its affiliates, and its
                            employees from any claims, damages, losses, or expenses (including
                            attorneys&apos; fees) arising from your use of QualifAI or your violation of
                            these Terms.
                        </p>
                    </section>

                    {/* 9. Governing Law and Dispute Resolution */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            9. Governing Law and Dispute Resolution
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            These Terms shall be governed by the laws of the State of California,
                            without regard to its conflict of law provisions. Any disputes arising from
                            these Terms will be resolved through binding arbitration in San Francisco,
                            California, except for claims for injunctive or equitable relief.
                        </p>
                    </section>

                    {/* 10. Changes to Terms */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We reserve the right to modify these Terms at any time. We will provide
                            notice of significant changes by posting the updated Terms on our website.
                            Your continued use of QualifAI after the changes take effect constitutes your
                            acceptance of the new Terms.
                        </p>
                    </section>

                    {/* 11. Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us at{' '}
                            <a
                                href="mailto:support@qualifai.com"
                                className="text-blue-600 hover:underline"
                            >
                                support@qualifai.com
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </main>

            <Footer_en />
        </div>
    );
}
