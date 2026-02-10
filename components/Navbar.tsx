"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-primary sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-3xl">📚</span>
                        <span className="text-white font-bold text-xl hidden sm:inline">NCERT Books</span>
                    </Link>

                    {/* Quick Links - Desktop */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/#classes" className="text-white hover:text-white/80 text-sm font-medium">
                            All Classes
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <Link
                            href="/#classes"
                            className="block text-white/80 hover:text-white py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            All Classes
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

