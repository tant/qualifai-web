import React from 'react';
import { User, Building2, Users } from 'lucide-react';

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
                        <User className="w-12 h-12 mx-auto mb-4 text-blue-600" strokeWidth={2} />
                        <h3 className="text-xl font-semibold">Freelance Recruiters</h3>
                    </div>

                    {/* Column 2: In-House HR Teams */}
                    <div className="p-6">
                        <Building2 className="w-12 h-12 mx-auto mb-4 text-blue-600" strokeWidth={2} />
                        <h3 className="text-xl font-semibold">In-House HR Teams</h3>
                    </div>

                    {/* Column 3: Agency Recruiters */}
                    <div className="p-6">
                        <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" strokeWidth={2} />
                        <h3 className="text-xl font-semibold">Agency Recruiters</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DesignedForYou_en;
