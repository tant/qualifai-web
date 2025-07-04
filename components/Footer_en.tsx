import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer_en = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2">
                        <div className="mb-4">
                            <Image src="/logo-white.png" alt="QualifAI Logo" width={140} height={40} />
                        </div>
                        <p className="text-gray-500 max-w-xs">
                            AI-powered resume screening to help you find the best talent, faster.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#features" className="text-gray-400 hover:text-white">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/why-us" className="text-gray-400 hover:text-white">
                                    Why Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-400 hover:text-white">
                                    Pricing
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-400 hover:text-white">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/tos" className="text-gray-400 hover:text-white">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} QualifAI. All rights reserved.
                    </p>
                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </Link>
                        <Link href="#" aria-label="GitHub" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.477 2 12.019c0 4.438 2.865 8.225 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 2.163c3.197 0 3.593.012 4.85.07 1.357.058 2.24.293 2.743.615a5.507 5.507 0 011.885 1.885c.322.503.557 1.386.615 2.743.058 1.257.07 1.653.07 4.85s-.012 3.593-.07 4.85c-.058 1.357-.293 2.24-.615 2.743a5.507 5.507 0 01-1.885 1.885c-.503.322-1.386.557-2.743.615-1.257.058-1.653.07-4.85.07s-3.593-.012-4.85-.07c-1.357-.058-2.24-.293-2.743-.615a5.507 5.507 0 01-1.885-1.885c-.322-.503-.557-1.386-.615-2.743C2.175 15.756 2.163 15.36 2.163 12s.012-3.593.07-4.85c.058-1.357.293-2.24.615-2.743a5.507 5.507 0 011.885-1.885C7.56 2.175 8.443 1.94 9.8 1.882 11.057 1.824 11.453 1.812 12 1.812zm0-2.163C8.741 0 8.335.012 7.078.07 5.82.127 4.9.293 4.2.615A7.507 7.507 0 00.615 4.2C.293 4.9.127 5.82.07 7.078.012 8.335 0 8.741 0 12c0 3.259.012 3.665.07 4.922.058 1.257.293 2.177.615 2.743.322.503.771.952 1.285 1.366.334.334.683.634 1.05.895.366.261.766.487 1.2.682.434.195.898.354 1.366.482.469.128.96.227 1.485.293.525.067 1.086.113 1.682.163.596.05 1.227.086 1.922.086s1.326-.036 1.922-.086c.596-.05 1.157-.096 1.682-.163.525-.066 1.016-.165 1.485-.293.469-.128.932-.287 1.366-.482.434-.195.834-.421 1.2-.682.366-.261.716-.561 1.05-.895.514-.414.963-.863 1.285-1.366.322-.566.557-1.486.615-2.743.058-1.257.07-1.663.07-4.922 0-3.259-.012-3.665-.07-4.922-.058-1.257-.293-2.177-.615-2.743a7.507 7.507 0 00-1.285-1.366c-.334-.334-.683-.634-1.05-.895-.366-.261-.766-.487-1.2-.682-.434-.195-.898-.354-1.366-.482-.469-.128-.96-.227-1.485-.293-.525-.067-1.086-.113-1.682-.163-.596-.05-1.227-.086-1.922-.086s-1.326.036-1.922.086c-.596.05-1.157.096-1.682.163-.525.066-1.016.165-1.485.293-.469.128-.932.287-1.366.482-.434.195-.834.421-1.2.682-.366.261-.716.561-1.05.895-.514.414-.963.863-1.285 1.366-.322.566-.557 1.486-.615 2.743C2.175 15.756 2.163 16.152 2.163 12c0-3.259-.012-3.665-.07-4.922-.058-1.257-.293-2.177-.615-2.743A7.507 7.507 0 014.2 2.078C4.9 1.756 5.82 1.59 7.078 1.533 8.335 1.475 8.741 1.463 12 1.463z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.66H9.34V9h3.42v1.56h.05c.47-1.06 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.44c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zM3.56 9h3.56v11.45H3.56V9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer_en;
