import React from 'react';

export default function Hero_en() {
    return (
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
    );
}
