import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = {
    "General Questions": [
        {
            question: "Why is QualifAI free forever?",
            answer: "QualifAI is committed to being free forever. As an open-source project under the MIT license, we believe in removing cost barriers and fostering a community where everyone can use and contribute. We are driven by the goal of building the best possible **AI recruitment software** for recruiters, together.",
        },
        {
            question: "Is QualifAI open source?",
            answer: "Yes! QualifAI is an open-source project licensed under MIT. This means you are free to use, modify, and distribute the software. We believe in transparency and community collaboration to build the best **technical recruiter tool**. We welcome contributions from the community and you can find our repository on GitHub.",
        },
        {
            question: "Who is behind QualifAI?",
            answer: "QualifAI is developed and backed by WitData, a technology company with a strong mission to drive digital transformation for businesses by optimizing data utilization. QualifAI is the direct result of our expertise in data science and **AI for talent acquisition** to solve the complex challenges of modern technical recruitment.",
        },
    ],
    "Product & Technology": [
        {
            question: "How does the AI resume screening work?",
            answer: "Our **AI resume screening** technology goes beyond simple keywords. It uses advanced Natural Language Processing (NLP) to understand the context and meaning within a resume and job description. The **candidate matching AI** then scores candidates based on a deep analysis of their skills, experience, and qualifications against the role's true requirements, providing a more accurate and nuanced shortlist.",
        },
        {
            question: "What makes QualifAI different from a traditional Applicant Tracking System (ATS)?",
            answer: "While traditional ATS systems rely on simple keyword matching, QualifAI's **resume parser AI** uses advanced artificial intelligence to understand context, skill equivalency, and experience nuances. Our **job description analysis AI** decodes the core needs of a role, allowing for a much more intelligent and accurate match. It doesn't just find words; it understands what they mean in a professional context, helping you **reduce time-to-hire with AI**.",
        },
        {
            question: "Can QualifAI help reduce hiring bias?",
            answer: "Yes. By focusing purely on skills, experience, and qualifications relevant to the job description, our platform acts as a powerful **hiring bias reduction tool**. It standardizes the initial screening process, providing an objective, data-driven ranking that can help mitigate unconscious biases that may arise during manual review.",
        },
        {
            question: "How does the AI generate interview questions?",
            answer: "Our **AI tool to generate interview questions** analyzes a candidate's resume in relation to the job description. It identifies areas that may need clarification, such as specific technical skills or gaps in experience, and then creates tailored, insightful questions. This helps you conduct more effective and targeted interviews to better assess a candidate's suitability.",
        },
        {
            question: "What file types can I upload for resumes?",
            answer: "You can upload resumes in the most common file formats, including PDF, DOCX, and TXT. Our **resume parser AI** is designed to handle various layouts and structures to effectively extract information.",
        },
        {
            question: "Is there a limit to how many resumes I can process?",
            answer: "As part of our 'free forever' commitment, our goal is to provide generous limits for typical recruitment needs. We are focused on providing the **best AI tool for IT recruiters** without prohibitive costs. For specific details on usage tiers or for enterprise-level requirements, please contact us.",
        },
    ],
    "Data & Security": [
        {
            question: "Is my data secure?",
            answer: "Absolutely. Data security is our top priority. All uploaded data is encrypted both in transit (using TLS) and at rest. We use industry-standard security protocols and best practices to ensure your information and your candidates' data are always protected.",
        },
        {
            question: "What happens to my data if I delete my account?",
            answer: "When you delete your account, all your data—including uploaded job descriptions, resumes, and candidate analysis—is permanently and irretrievably deleted from our servers in accordance with our data retention policy. We believe in data ownership, and your data is yours to control.",
        },
    ],
};

export default function FaqPage() {
    return (
        <div className="min-h-screen bg-[hsl(var(--color-background))] text-[hsl(var(--color-foreground))] font-sans transition-colors duration-200">
            <div className="container max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[hsl(var(--color-foreground))] mb-4 leading-[1.2]">
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-2 text-lg leading-[1.6] text-[hsl(var(--color-muted-foreground))]">
                        Can&apos;t find the answer you&apos;re looking for? Reach out to our team.
                    </p>
                </div>
                <div className="mt-12">
                    {Object.entries(faqData).map(([category, faqs]) => (
                        <div key={category} className="mb-10">
                            <h2 className="text-2xl font-semibold text-[hsl(var(--color-primary))] mb-4 leading-[1.2]">
                                {category}
                            </h2>
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem value={`item-${category}-${index}`} key={index} className="border-b border-[hsl(var(--color-border))]">
                                        <AccordionTrigger className="text-left text-lg font-medium text-[hsl(var(--color-foreground))] focus-visible:outline-2 focus-visible:outline-[hsl(var(--color-ring))]">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-base text-[hsl(var(--color-muted-foreground))]">
                                            <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
