import React from 'react';

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
            question: 'What is QualifAI and how does it work?',
            answer: 'QualifAI is an AI-powered resume screening and analysis tool designed to help recruiters and hiring managers identify the best candidates quickly. It uses natural language processing and machine learning to understand job requirements and evaluate resumes based on skills, experience, and qualifications, rather than just keywords.',
        },
        {
            question: 'Is QualifAI biased?',
            answer: 'We have designed QualifAI to significantly reduce unconscious bias in the hiring process. By focusing on objective qualifications and skills, the platform helps ensure that every candidate is evaluated fairly. We are continuously monitoring and improving our algorithms to prevent any form of bias.',
        },
        {
            question: 'What languages do you support?',
            answer: 'Currently, QualifAI supports resumes in English, French, Spanish, and German. We are actively working on adding more languages to our platform to support global talent acquisition.',
        },
        {
            question: 'How secure is my data?',
            answer: 'Data security is our top priority. We use industry-standard encryption for data in transit and at rest. All resume data is processed securely and stored in compliance with GDPR and other major data protection regulations. We never share your data with third parties.',
        },
        {
            question: 'Do you offer a free trial?',
            answer: "Yes! You can get started with our free plan which allows you to analyze up to 10 resumes per month to see how QualifAI can benefit your hiring process. For higher volumes and more advanced features, you can upgrade to one of our paid plans at any time.",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Have questions? We have answers.
                    </p>
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
                        Still have questions?{' '}
                        <a href="/en/contact" className="text-blue-600 hover:underline">
                            Contact Us
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FaqSection_en;
