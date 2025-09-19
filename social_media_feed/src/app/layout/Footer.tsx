import React from 'react';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Job Search', href: '/search' },
    { name: 'Saved Jobs', href: '/my-jobs' },
    { name: 'Profile', href: '/profile' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-700 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                <span className="text-sm">© 2023 Job Board. All rights reserved.</span>
                <nav className="flex gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </footer>
    );
}