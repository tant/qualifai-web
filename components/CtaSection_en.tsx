import Link from 'next/link';

const CtaSection_en = () => (
  <section className="bg-blue-600 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Find the Perfect Candidate?
      </h2>
      <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
        Stop wasting time on unqualified applicants. Let QualifAI build your
        shortlist of top talent in minutes, not weeks.
      </p>
      <Link
        href="/early-access"
        className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
      >
        Analyze Resumes Free
      </Link>
      <p className="mt-4 text-sm text-blue-200">No credit card required.</p>
    </div>
  </section>
);

export default CtaSection_en;
