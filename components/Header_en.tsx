"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

const Header_en = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#F6F9FC] bg-white/80 backdrop-blur-xs shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]">
            <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/logo.png" alt="QualifAI Logo" width={120} height={32} />
                </Link>
                <div className="flex items-center gap-x-6">
                    <nav className="hidden md:flex items-center gap-x-2">
                        <Button variant="tertiary" asChild className="text-[#0A2540] hover:text-[#00C853] focus-visible:ring-2 focus-visible:ring-[#00C853] transition-all duration-200 ease-in-out text-base px-3 py-2">
                            <Link href="/#features">Features</Link>
                        </Button>
                        <Button variant="tertiary" asChild className="text-[#0A2540] hover:text-[#00C853] focus-visible:ring-2 focus-visible:ring-[#00C853] transition-all duration-200 ease-in-out text-base px-3 py-2">
                            <Link href="/why-us">Why Us</Link>
                        </Button>
                        <Button variant="tertiary" asChild className="text-[#0A2540] hover:text-[#00C853] focus-visible:ring-2 focus-visible:ring-[#00C853] transition-all duration-200 ease-in-out text-base px-3 py-2">
                            <Link href="/faq">FAQ</Link>
                        </Button>
                    </nav>
                    <div className="hidden md:flex">
                        <Button variant="primary" asChild className="text-base px-5 py-2 shadow-sm rounded-[4px]">
                          <Link href="/early-access">Analyze Resumes Free</Link>
                        </Button>
                    </div>
                    <div className="md:hidden">
                        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                            <SheetTrigger asChild>
                                <Button variant="tertiary" size="icon" aria-label="Open menu" className="rounded-[4px]">
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
                                    <Button variant="tertiary" asChild className="justify-start text-lg">
                                        <Link href="/#features">Features</Link>
                                    </Button>
                                    <Button variant="tertiary" asChild className="justify-start text-lg">
                                        <Link href="/why-us">Why Us</Link>
                                    </Button>
                                    <Button variant="tertiary" asChild className="justify-start text-lg">
                                        <Link href="/faq">FAQ</Link>
                                    </Button>
                                    <Button className="w-full mt-4" asChild>
                                      <Link href="/early-access">Analyze Resumes Free</Link>
                                    </Button>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header_en;
