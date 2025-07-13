import React from 'react';
import { Clock, AlertCircle, ArchiveX } from 'lucide-react';

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
                            <Clock className="w-8 h-8 text-blue-600" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Time-Consuming</h3>
                        <p className="text-gray-600">
                            Spending hours, not minutes, on initial screening.
                        </p>
                    </div>

                    {/* Problem 2: Inaccurate */}
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-8 h-8 text-orange-600" strokeWidth={2} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Inaccurate</h3>
                        <p className="text-gray-600">
                            Overlooking qualified candidates due to human error and unconscious bias.
                        </p>
                    </div>

                    {/* Problem 3: Costly */}
                    <div className="text-center p-6 border border-gray-200 rounded-lg">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ArchiveX className="w-8 h-8 text-red-600" strokeWidth={2} />
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
