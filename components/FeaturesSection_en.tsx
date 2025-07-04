import React from 'react';

// Icon components (replace with actual icons from a library like heroicons)
const BoltIcon = () => (
    <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const ScaleIcon = () => (
    <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l-6 6m6-6l6 6M6 9l6 6m-6-6h12M9 21h6" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg className="w-8 h-8 mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" />
    </svg>
);

const FeaturesSection_en = () => {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        The Modern Way to Screen Resumes
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Go from overwhelmed to in-control with a suite of intelligent tools designed to give you back your time.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Benefit 1 */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <BoltIcon />
                        <h3 className="text-xl font-bold mb-2">Find Top Candidates in Minutes, Not Days</h3>
                        <p className="text-gray-600">
                            Our AI doesn&apos;t just match keywords; it understands context to score and rank candidates with incredible accuracy, freeing you up for strategic work.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <ScaleIcon />
                        <h3 className="text-xl font-bold mb-2">Hire on Skill, Not Unconscious Bias</h3>
                        <p className="text-gray-600">
                            By standardizing and focusing purely on qualifications against the job description, QualifAI provides an objective first look, helping you build diverse, high-performing teams.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <ShieldCheckIcon />
                        <h3 className="text-xl font-bold mb-2">Work with Total Confidence and Security</h3>
                        <p className="text-gray-600">
                            As a free and open-source tool, your data is your own. We provide powerful screening with an unmatched commitment to privacy and transparency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection_en;
