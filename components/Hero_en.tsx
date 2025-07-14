import Link from 'next/link';
import { Button } from './ui/button'; // Assuming button is in components/ui

export default function Hero_en() {
    return (
        <section className="bg-linear-to-br from-blue-50 to-indigo-100 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                        Stop Wasting Time on Unqualified Resumes. Start Hiring Smarter with
                        QualifAI.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Our free, open-source resume screening tool uses advanced AI to
                        instantly identify the best candidates, so you can focus on what
                        matters: building great teams.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                        <Link href="/early-access" >
                          <Button size="lg" asChild>Analyze Resumes for Free</Button>
                        </Link>
                        <Link href="/early-access">
                          <Button size="lg" variant="secondary" asChild>Learn More</Button>
                        </Link>
                    </div>
                    <p className="text-sm text-gray-500">
                        Join 200+ recruiters already hiring smarter.
                    </p>
                </div>
            </div>
        </section>
    );
}
