import React from 'react';
import Image from 'next/image';

const TestimonialsSection_en = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold">Why Recruiters Love QualifAI</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Don&apos;t just take our word for it. Here&apos;s what our users say.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/placeholder.svg" // Replace with actual user photo
                                alt="User 1"
                                width={48}
                                height={48}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">Sarah Johnson</p>
                                <p className="text-sm text-gray-500">Lead Recruiter, TechCorp</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            &quot;QualifAI has transformed our recruitment process. The AI-driven insights
                            are incredibly accurate and save us so much time!&quot;
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/placeholder.svg" // Replace with actual user photo
                                alt="User 2"
                                width={48}
                                height={48}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">Michael Chen</p>
                                <p className="text-sm text-gray-500">Hiring Manager, Innovate Ltd.</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            &quot;We&apos;ve tried other ATS solutions, but QualifAI is in a league of its
                            own. The contextual understanding of resumes is a game changer.&quot;
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <Image
                                src="/placeholder.svg" // Replace with actual user photo
                                alt="User 3"
                                width={48}
                                height={48}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <p className="font-semibold">Emily Rodriguez</p>
                                <p className="text-sm text-gray-500">HR Director, Global Solutions</p>
                            </div>
                        </div>
                        <p className="text-gray-600 italic">
                            &quot;The customer support is outstanding! QualifAI truly cares about their
                            clients and continuously improves the platform based on feedback.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection_en;
