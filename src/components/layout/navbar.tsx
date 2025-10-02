'use client';

import React, { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { X } from 'lucide-react';

// import { ThemeToggle } from '@/components/theme-toggle';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  const ITEMS = [
    { label: 'About us', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="absolute top-0 right-0 left-0 z-50"
      style={{ borderBottom: 'none !important', border: 'none !important' }}
    >
      <div
        className="container max-w-7xl"
        style={{ border: 'none !important', borderBottom: 'none !important' }}
      >
        <div
          className="flex items-center justify-between py-4"
          style={{ border: 'none !important', borderBottom: 'none !important' }}
        >
          {/* Restaurant Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/layout/logoo.svg"
              alt="Restaurant Logo"
              width={200}
              height={80}
              className="h-14 w-auto md:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="ml-auto hidden items-center gap-8 lg:flex">
            <NavigationMenuList className="text-white drop-shadow-lg">
              {ITEMS.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'p-2 text-white drop-shadow-lg hover:text-white/80 lg:text-base',
                      pathname === link.href && 'text-white/70',
                    )}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2.5">
            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="relative -mt-3 flex size-10 text-white drop-shadow-lg lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute top-1/2 left-1/2 block w-[24px] -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'bg-background fixed inset-0 z-40 flex h-screen w-screen flex-col px-6 py-20 transition-all duration-300 ease-in-out lg:hidden',
          isMenuOpen
            ? 'visible translate-x-0 opacity-100'
            : 'invisible translate-x-full opacity-0',
        )}
      >
        {/* Close button */}
        <div className="flex w-full justify-end">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex size-12 items-center justify-center text-white hover:text-white/80"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Full screen navigation */}
        <nav className="flex flex-1 flex-col items-center justify-center gap-8 text-center">
          {ITEMS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                'text-2xl font-medium text-white hover:text-white/80',
                pathname === link.href && 'text-white/70',
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
