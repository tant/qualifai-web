import React from 'react';
import { Zap, Scale, ShieldCheck } from 'lucide-react';

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
                        <Zap className="w-8 h-8 mb-4 text-blue-600" strokeWidth={2} />
                        <h3 className="text-xl font-bold mb-2">Find Top Candidates in Minutes, Not Days</h3>
                        <p className="text-gray-600">
                            Our AI doesn&apos;t just match keywords; it understands context to score and rank candidates with incredible accuracy, freeing you up for strategic work.
                        </p>
                    </div>

                    {/* Benefit 2 */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <Scale className="w-8 h-8 mb-4 text-blue-600" strokeWidth={2} />
                        <h3 className="text-xl font-bold mb-2">Hire on Skill, Not Unconscious Bias</h3>
                        <p className="text-gray-600">
                            By standardizing and focusing purely on qualifications against the job description, QualifAI provides an objective first look, helping you build diverse, high-performing teams.
                        </p>
                    </div>

                    {/* Benefit 3 */}
                    <div className="bg-white p-8 rounded-lg border border-gray-200">
                        <ShieldCheck className="w-8 h-8 mb-4 text-blue-600" strokeWidth={2} />
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
