import React from 'react';
import Link from 'next/link';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900"
            >
                <span>{question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="mt-4 text-gray-600">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

interface FaqSectionProps {
    openFaq: number | null;
    toggleFaq: (index: number) => void;
}

const FaqSection_en: React.FC<FaqSectionProps> = ({ openFaq, toggleFaq }) => {
    const faqs = [
        {
            question: 'Why is QualifAI free?',
            answer: 'QualifAI is committed to being free forever. As an open-source project under the MIT license, we believe in removing cost barriers and fostering a community where everyone can use and contribute to the platform. We are driven by the goal of building the best possible tool for recruiters, together.',
        },
        {
            question: 'Is my data secure?',
            answer: 'Absolutely. Data security is our top priority. All uploaded data is encrypted both in transit and at rest. We use industry-standard security protocols to ensure your information is always protected.',
        },
        {
            question: "How is this different from my current ATS?",
            answer: "While traditional ATS systems rely on simple keyword matching, QualifAI uses advanced AI to understand context, skill equivalency, and experience nuances. It doesn\'t just find words; it understands what they mean in a professional context.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Your Questions, Answered</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openFaq === index}
                            onClick={() => toggleFaq(index)}
                        />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-600">
                        Have more questions?{' '}
                        <Link href="/faq" className="text-blue-600 hover:underline">
                            Read our full FAQ
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FaqSection_en;
