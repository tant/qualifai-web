import Header from '@/components/Header';
import Footer_en from '@/components/Footer_en';

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <Header />

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
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We use your information to operate, maintain, and enhance QualifAI. This
                            includes:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>Providing AI-powered resume analysis and insights</li>
                            <li>Personalizing your experience and user interface</li>
                            <li>Processing transactions and managing subscriptions</li>
                            <li>Authenticating users and ensuring platform security</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.2 Communication
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may use your contact information to send you important updates,
                            service announcements, and marketing communications (you can opt-out at
                            any time).
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            3.3 Analytics and Improvement
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We analyze aggregated, anonymized data to understand user behavior,
                            improve our algorithms, and develop new features. We do not use your
                            specific resume or job description data to train our core AI models
                            without your explicit consent.
                        </p>
                    </section>

                    {/* Data Sharing and Disclosure */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            4. Data Sharing and Disclosure
                        </h2>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.1 With Your Consent
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may share your information with third parties when we have your
                            explicit consent to do so.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.2 Service Providers
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We partner with trusted third-party companies for services like payment
                            processing, cloud hosting (e.g., AWS, Google Cloud), and customer
                            support. These providers only have access to the information necessary
                            to perform their functions and are contractually obligated to protect
                            it.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.3 Legal Compliance
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may disclose your information if required by law, subpoena, or other
                            legal processes, or if we believe in good faith that it is necessary to
                            protect our rights, your safety, or the safety of others.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                            4.4 Business Transfers
                        </h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            In the event of a merger, acquisition, or sale of assets, your
                            information may be transferred. We will notify you before your
                            information is transferred and becomes subject to a different privacy
                            policy.
                        </p>
                    </section>

                    {/* Data Security */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We implement robust security measures to protect your data, including
                            encryption in transit (TLS/SSL) and at rest, access controls, and
                            regular security audits. However, no method of transmission or storage
                            is 100% secure, and we cannot guarantee absolute security.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-green-800">
                                <strong>Our Commitment:</strong> We are committed to protecting your
                                data and continuously improving our security practices.
                            </p>
                        </div>
                    </section>

                    {/* Data Retention */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We retain your personal data only for as long as necessary to provide
                            you with our services and as required by applicable laws. You can
                            delete your account and associated data at any time from your account
                            settings.
                        </p>
                    </section>

                    {/* International Data Transfers */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            7. International Data Transfers
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Your information may be transferred to and maintained on computers
                            located outside of your state, province, or country. We ensure that
                            such transfers comply with legal frameworks like the GDPR and that your
                            data remains protected.
                        </p>
                    </section>

                    {/* Your Data Rights (GDPR & CCPA) */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            8. Your Data Rights (GDPR &amp; CCPA)
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Depending on your location, you may have the following rights regarding
                            your personal data:
                        </p>
                        <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                            <li>
                                <strong>Right to Access:</strong> Request a copy of your personal
                                data.
                            </li>
                            <li>
                                <strong>Right to Rectification:</strong> Correct inaccurate or
                                incomplete data.
                            </li>
                            <li>
                                <strong>Right to Erasure:</strong> Request the deletion of your
                                data.
                            </li>
                            <li>
                                <strong>Right to Restrict Processing:</strong> Limit how we use
                                your data.
                            </li>
                            <li>
                                <strong>Right to Data Portability:</strong> Receive your data in a
                                machine-readable format.
                            </li>
                            <li>
                                <strong>Right to Object:</strong> Object to our processing of your
                                data.
                            </li>
                            <li>
                                <strong>CCPA Rights:</strong> California residents have specific
                                rights, including the right to know what personal information is
                                collected and the right to opt-out of the sale of personal
                                information.
                            </li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            To exercise these rights, please contact us at{' '}
                            <a href="mailto:privacy@qualifai.com" className="text-blue-600 hover:underline">
                                privacy@qualifai.com
                            </a>
                            .
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            QualifAI is not intended for use by individuals under the age of 18. We
                            do not knowingly collect personal information from children. If we
                            become aware that we have collected data from a child, we will take
                            steps to delete it immediately.
                        </p>
                    </section>

                    {/* Changes to This Policy */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">
                            10. Changes to This Policy
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We may update this Privacy Policy from time to time. We will notify you
                            of any significant changes by posting the new policy on our website and
                            updating the &quot;Last updated&quot; date. Your continued use of our services
                            after such changes constitutes your acceptance of the new policy.
                        </p>
                    </section>

                    {/* Contact Us */}
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions, concerns, or requests regarding this Privacy
                            Policy or your data, please do not hesitate to contact us:
                        </p>
                        <ul className="list-none space-y-2 text-gray-700">
                            <li>
                                <strong>Email:</strong>
                                <a href="mailto:privacy@qualifai.com" className="text-blue-600 hover:underline ml-2">
                                    privacy@qualifai.com
                                </a>
                            </li>
                            <li>
                                <strong>Address:</strong> 123 Tech Avenue, Silicon Valley, CA 94000
                            </li>
                        </ul>
                    </section>
                </div>
            </main>

            <Footer_en />
        </div>
    );
}
