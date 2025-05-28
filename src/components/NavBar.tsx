'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProjects = () => setIsProjectsOpen(!isProjectsOpen);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/construction', label: 'RUIS CONSTRUCTION' },
    { href: '/holding', label: 'RUIS HOLDINGS' },
    { href: '/team', label: 'MEET THE TEAM' },
    { href: '/vacation-rentals', label: 'VACATION RENTALS' },
    { href: '/contact', label: 'CONTACT' },
  ];

  const projectLinks: { href: string; label: string }[] = [
    // Removed 'Silos Living' link
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/ruis-holdings-logo.png"
              alt="Ruis Holdings Logo"
              width={180}
              height={48}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.label === 'Projects' ? (
                <div key={link.label} className="relative group">
                  <button
                    onClick={toggleProjects}
                    className="text-sm uppercase tracking-wider font-semibold text-gray-800 hover:text-primary transition-colors duration-200 flex items-center"
                    aria-expanded={isProjectsOpen}
                    aria-haspopup="true"
                  >
                    PROJECTS
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden group-hover:block">
                    <div className="py-1">
                      {projectLinks.map((projectLink) => (
                        <Link
                          key={projectLink.href}
                          href={projectLink.href}
                          className="block px-4 py-2 text-sm uppercase tracking-wider font-semibold text-gray-800 hover:bg-gray-100 hover:text-primary"
                        >
                          {projectLink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm uppercase tracking-wider font-semibold text-gray-800 hover:text-primary transition-colors duration-200 ${pathname === link.href ? 'text-primary underline underline-offset-4' : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm uppercase tracking-wider font-semibold text-gray-800 hover:text-primary hover:bg-gray-50 ${pathname === link.href ? 'text-primary underline underline-offset-4' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {projectLinks.map((projectLink) => (
                <Link
                  key={projectLink.href}
                  href={projectLink.href}
                  className="block px-3 py-2 rounded-md text-sm uppercase tracking-wider font-semibold text-gray-800 hover:text-primary hover:bg-gray-50 pl-6"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {projectLink.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar; 