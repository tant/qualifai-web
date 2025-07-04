import React from 'react';
import Image from 'next/image';

const FeaturesSection_en = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-semibold uppercase tracking-wider">
                        How It Works
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">
                        Your Smart Recruiting Assistant
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        QualifAI transforms your hiring process into a data-driven, efficient,
                        and fair system. Here’s how we empower your team.
                    </p>
                </div>

                {/* Feature 1: AI-Powered Matching */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold mb-4">Intelligent Resume Screening</h3>
                        <p className="text-gray-600 mb-4">
                            Our AI goes beyond keywords, understanding the context and skills
                            within each resume. It ranks candidates based on your specific job
                            requirements, saving you countless hours.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>90% faster than manual screening</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Reduces bias by focusing on qualifications</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image
                            src="/placeholder.svg"
                            alt="AI Matching Illustration"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Feature 2: Multilingual Support */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <Image
                            src="/placeholder.svg"
                            alt="Multilingual Support Illustration"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Break Language Barriers</h3>
                        <p className="text-gray-600 mb-4">
                            Don&apos;t miss out on global talent. QualifAI analyzes resumes in multiple
                            languages, providing you with a consistent, translated, and
                            standardized report for easy comparison.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Supports English, French, Spanish, and more</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Fairly evaluates all candidates, regardless of origin</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Feature 3: Deep Technical Analysis */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <h3 className="text-2xl font-bold mb-4">Verify Technical Expertise</h3>
                        <p className="text-gray-600 mb-4">
                            No more guessing. Our system cross-references skills with project
                            descriptions, GitHub activity, and technical documentation to validate
                            a candidate&apos;s true capabilities.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Code-level proficiency analysis</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>Identifies true experts vs. keyword stuffers</span>
                            </li>
                        </ul>
                    </div>
                    <div className="order-1 md:order-2">
                        <Image
                            src="/placeholder.svg"
                            alt="Technical Analysis Illustration"
                            width={500}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection_en;
