import React from 'react';

// SVG Icon Components (replace with your actual icon components or library)
const ClockIcon = () => (
    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ExclamationCircleIcon = () => (
    <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ArchiveBoxXMarkIcon = () => (
    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.126 0 1.131.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5v9l-1.355 1.355a.75.75 0 01-1.06 0l-1.061-1.06 1.06-1.061a.75.75 0 000-1.06l-2.122-2.122a.75.75 0 00-1.06 0l-1.061 1.06-1.06-1.061a.75.75 0 010-1.06l2.122-2.122a.75.75 0 011.06 0l1.06 1.06 1.06-1.061a.75.75 0 000-1.061l-2.122-2.122-1.355-1.355a.75.75 0 00-1.06 0L3 16.5v-9a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v9a2.25 2.25 0 01-2.25 2.25h-5.25" />
    </svg>
);

export default function ProblemSection_en() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Tired of the Resume Black Hole?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        Manual screening is slow, biased, and inefficient. You&apos;re losing top talent to faster competitors while your team drowns in a sea of irrelevant applications.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Problem 1: Time-Consuming */}
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ClockIcon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Time-Consuming</h3>
                        <p className="text-gray-600">
                            Spending hours, not minutes, on initial screening.
                        </p>
                    </div>

                    {/* Problem 2: Inaccurate */}
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ExclamationCircleIcon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Inaccurate</h3>
                        <p className="text-gray-600">
                            Overlooking qualified candidates due to human error and unconscious bias.
                        </p>
                    </div>

                    {/* Problem 3: Costly */}
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ArchiveBoxXMarkIcon />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Costly</h3>
                        <p className="text-gray-600">
                            Wasting resources on a process that doesn&apos;t deliver the best results.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
