"use client";

import Link from "next/link";
import { useState } from "react";
import { searchChapters } from "@/data/books";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const searchResults = searchQuery.length > 2 ? searchChapters(searchQuery).slice(0, 5) : [];

    return (
        <nav className="bg-primary sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-3xl">📚</span>
                        <span className="text-white font-bold text-xl hidden sm:inline">NCERT Books</span>
                    </Link>

                    {/* Search Bar - Desktop */}
                    <div className="hidden md:block relative flex-1 max-w-md mx-8">
                        <input
                            type="text"
                            placeholder="Search chapters..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setShowResults(true);
                            }}
                            onFocus={() => setShowResults(true)}
                            onBlur={() => setTimeout(() => setShowResults(false), 200)}
                            className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                        />
                        {showResults && searchResults.length > 0 && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden">
                                {searchResults.map((result, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/class/${result.classId}/${result.subject.id}`}
                                        className="block px-4 py-3 hover:bg-gray-50 border-b last:border-0"
                                    >
                                        <div className="font-medium text-gray-800 text-sm">
                                            {result.chapter.title}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {result.className} • {result.subject.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

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
                        <input
                            type="text"
                            placeholder="Search chapters..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 text-sm mb-4"
                        />
                        {searchQuery.length > 2 && searchResults.length > 0 && (
                            <div className="bg-white rounded-lg mb-4 overflow-hidden">
                                {searchResults.map((result, idx) => (
                                    <Link
                                        key={idx}
                                        href={`/class/${result.classId}/${result.subject.id}`}
                                        className="block px-4 py-3 hover:bg-gray-50 border-b last:border-0"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <div className="font-medium text-gray-800 text-sm">
                                            {result.chapter.title}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {result.className} • {result.subject.name}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
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
