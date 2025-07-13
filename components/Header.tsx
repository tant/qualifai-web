'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const Header = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    const scrollToFeatures = () => {
        // Close sheet on navigation
        setIsSheetOpen(false); 
        const featuresSection = document.getElementById('features');
        if (featuresSection) {
            featuresSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Function to close the sheet when a link is clicked
    const closeSheet = () => setIsSheetOpen(false);

    return (
        // Sticky header classes
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-xs">
            {/* Use justify-between to create two main groups: Logo and the rest */}
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo - Left Group */}
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="QualifAI Logo" width={120} height={32} />
                </Link>

                {/* Right Group: Contains Desktop Nav, CTA, and Mobile Nav Trigger */}
                <div className="flex items-center gap-x-6">
                    {/* Desktop Navigation - hidden on mobile */}
                    <nav className="hidden md:flex items-center gap-x-2">
                        <Button variant="link" onClick={scrollToFeatures} className="text-gray-700">
                            Features
                        </Button>
                        <Button variant="link" asChild className="text-gray-700">
                            <Link href="/why-us">Why Us</Link>
                        </Button>
                        <Button variant="link" asChild className="text-gray-700">
                            <Link href="/faq">FAQ</Link>
                        </Button>
                    </nav>

                    {/* CTA - hidden on mobile */}
                    <div className="hidden md:flex">
                        <Button>Analyze Resumes Free</Button>
                    </div>

                    {/* Mobile Navigation - Hamburger - shown only on mobile */}
                    <div className="md:hidden">
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" aria-label="Open menu">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                                <SheetTitle>
                                    <span className="sr-only">Mobile Navigation</span>
                                </SheetTitle>
                                <nav className="flex flex-col space-y-4 mt-8">
                                    <Button variant="ghost" onClick={scrollToFeatures} className="justify-start text-lg">
                                        Features
                                    </Button>
                                    <Button variant="ghost" asChild className="justify-start text-lg">
                                        <Link href="/why-us" onClick={closeSheet}>Why Us</Link>
                                    </Button>
                                    <Button variant="ghost" asChild className="justify-start text-lg">
                                        <Link href="/faq" onClick={closeSheet}>FAQ</Link>
                                    </Button>
                                    <Button className="w-full mt-4">Analyze Resumes Free</Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
