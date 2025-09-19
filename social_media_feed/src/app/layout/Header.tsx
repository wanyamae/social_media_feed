
import React from 'react';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Job Search', href: '/search' },
	{ name: 'Saved Jobs', href: '/my-jobs' },
	{ name: 'Profile', href: '/profile' },
];

export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md border-b border-gray-200">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
				{/* Logo */}
				<div className="flex items-center gap-2">
					<span className="text-xl font-bold text-blue-600">Job Board</span>
				</div>
				{/* Navigation */}
				<nav className="hidden md:flex gap-6">
					{navLinks.map((link) => (
						<a
							key={link.name}
							href={link.href}
							className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1 rounded hover:bg-blue-50"
						>
							{link.name}
						</a>
					))}
				</nav>
				{/* User/Login section */}
				<div className="flex items-center gap-3">
					{/* Placeholder for user info or login button */}
					<button className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition-colors font-semibold shadow-sm">
						Login
					</button>
				</div>
				{/* Mobile menu button */}
				<div className="md:hidden flex items-center">
					<button className="p-2 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
						<svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
					</button>
				</div>
			</div>
		</header>
	);
}
