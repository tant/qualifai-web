import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer_en = () => {
    return (
        <footer className="bg-[#0A2540] text-white border-t border-[#F6F9FC] mt-16">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <Image src="/logo-white.png" alt="QualifAI Logo" width={140} height={40} />
                        </div>
                        <p className="text-[#B0B8C1] max-w-xs text-base">
                            AI-powered resume screening to help you find the best talent, faster.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider mb-4 text-base">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/#features" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-us" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Why Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider mb-4 text-base">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider mb-4 text-base">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/term-of-service" className="text-[#B0B8C1] hover:text-[#00C853] transition-all duration-200 ease-in-out text-base">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-[#F6F9FC] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[#B0B8C1] text-base">
                    <span>&copy; {new Date().getFullYear()} QualifAI. All rights reserved.</span>
                    <span>Made with <span className="text-[#00C853]">&#10084;</span> in Vietnam</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer_en;
