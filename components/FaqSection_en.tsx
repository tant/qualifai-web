import React from 'react';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
    {
        question: 'Is QualifAI really free?',
        answer: 'QualifAI is committed to being free forever. As an open-source project under the MIT license, we believe in removing cost barriers and fostering a community where everyone can use and contribute to the platform. We are driven by the goal of building the best possible tool for recruiters, together.',
    },
    {
        question: 'What makes QualifAI different from other screening tools?',
        answer: "While traditional ATS systems rely on simple keyword matching, QualifAI uses advanced AI to understand context, skill equivalency, and experience nuances. It doesn't just find words; it understands what they mean in a professional context.",
    },
    {
        question: 'Is my data secure?',
        answer: 'Absolutely. Data security is our top priority. All uploaded data is encrypted both in transit and at rest. We use industry-standard security protocols to ensure your information is always protected.',
    },
];

const FaqSection_en = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg font-medium text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-gray-600">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
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
