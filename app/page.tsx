export default function Page() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <h1 className="text-4xl font-bold text-deep-blue mb-4">This is main homepage</h1>
            <a href="/en" className="text-accent-green hover:underline text-lg">Go to English version</a>
        </div>
    );
}
