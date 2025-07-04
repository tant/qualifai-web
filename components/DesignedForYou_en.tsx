import React from 'react';

// Icon components (replace with actual icons from a library like heroicons)
const UserIcon = () => (
    <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const BuildingOffice2Icon = () => (
    <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" />
    </svg>
);

const UsersIcon = () => (
    <svg className="w-12 h-12 mx-auto mb-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-8.048 9.58 9.58 0 00-1.506-5.493 9.349 9.349 0 00-4.121-3.048 9.58 9.58 0 00-5.493-1.506A9.349 9.349 0 006 6.088a9.58 9.58 0 00-1.506 5.493 9.337 9.337 0 004.121 8.048 9.38 9.38 0 002.625.372M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const DesignedForYou_en = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Built for the Demands of Modern Recruitment
                    </h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    {/* Column 1: Freelance Recruiters */}
                    <div className="p-6">
                        <UserIcon />
                        <h3 className="text-xl font-semibold">Freelance Recruiters</h3>
                    </div>

                    {/* Column 2: In-House HR Teams */}
                    <div className="p-6">
                        <BuildingOffice2Icon />
                        <h3 className="text-xl font-semibold">In-House HR Teams</h3>
                    </div>

                    {/* Column 3: Agency Recruiters */}
                    <div className="p-6">
                        <UsersIcon />
                        <h3 className="text-xl font-semibold">Agency Recruiters</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignedForYou_en;
