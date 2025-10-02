import Link from 'next/link';

import { Facebook, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export const Footer = () => {
  return (
    <footer className="max-w-9xl font-playfair text-white/80">
      <div className="container mx-auto py-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="my-4 text-center text-lg text-white/80">
            © {new Date().getFullYear()} BABI Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-label={link.label}
                className="text-secondary"
              >
                <link.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
