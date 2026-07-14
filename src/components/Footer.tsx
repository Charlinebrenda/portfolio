// src/components/Footer.tsx
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

const Footer = () => {
  const { locale } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const translations = locale === 'fr' ? {
    name: 'Charline Brenda Yamenjeu',
    description: 'Étudiante ingénieure passionnée par la création de solutions innovantes alliant développement web, mobile et intelligence artificielle.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Nkomkana, Yaoundé · Cameroun',
    copyright: 'Tous droits réservés.',
    builtWith: 'Conçu avec Next.js & Tailwind CSS',
    navLinks: [
      { href: '#experience', label: 'Expérience' },
      { href: '#projects', label: 'Projets' },
      { href: '#skills', label: 'Compétences' },
      { href: '#contact', label: 'Contact' }
    ]
  } : {
    name: 'Charline Brenda Yamenjeu',
    description: 'Engineering student passionate about building innovative solutions combining web, mobile development and artificial intelligence.',
    navigation: 'Navigation',
    contact: 'Contact',
    location: 'Nkomkana, Yaoundé · Cameroon',
    copyright: 'All rights reserved.',
    builtWith: 'Built with Next.js & Tailwind CSS',
    navLinks: [
      { href: '#experience', label: 'Experience' },
      { href: '#projects', label: 'Projects' },
      { href: '#skills', label: 'Skills' },
      { href: '#contact', label: 'Contact' }
    ]
  };

  return (
    <footer className="bg-white dark:bg-[#1a1625] border-t border-gray-100 dark:border-[#3d3650] mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          
          {/* Colonne 1: Identité */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-tighter">
              CHARLINE <span className="text-accent">BRENDA.</span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
              {translations.description}
            </p>
          </div>

          {/* Colonne 2: Navigation rapide */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              {translations.navigation}
            </h4>
            <ul className="space-y-2">
              {translations.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Contact Direct */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              {translations.contact}
            </h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              
              {/* Email */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:tchaweuc@gmail.com" className="hover:text-accent transition-colors">
                  tchaweuc@gmail.com
                </a>
              </li>

              {/* Téléphone */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+237657729964" className="hover:text-accent transition-colors tracking-tight">
                  +237 657 729 964
                </a>
              </li>

              {/* Localisation */}
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{translations.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-[#3d3650] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            © {currentYear} {translations.name}. {translations.copyright}
          </p>
          <p className="text-xs text-gray-400 font-mono italic">
            {translations.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
