import React from 'react';

const HowItWorksSection_en = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Simple Steps</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        From setup to analysis in under 5 minutes.
                    </p>
                </div>
                <div className="relative">
                    {/* Dotted line connector - visible on medium screens and up */}
                    <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gray-200 border-dashed border-2 border-gray-300"></div>

                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <span className="text-3xl font-bold text-blue-600">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Upload Resumes & Job Description</h3>
                            <p className="text-gray-600">
                                Provide us with the job description and a batch of resumes.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <span className="text-3xl font-bold text-blue-600">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Let QualifAI Analyze & Rank Candidates</h3>
                            <p className="text-gray-600">
                                Our AI scores and ranks candidates based on your requirements.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-white border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4 z-10 relative">
                                <span className="text-3xl font-bold text-blue-600">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">View Top Candidates & Start Interviewing</h3>
                            <p className="text-gray-600">
                                Focus on the best-fit applicants and begin your interview process.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection_en;
