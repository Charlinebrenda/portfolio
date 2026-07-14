// src/app/layout.tsx
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import "@/styles/global.css";
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

// 1. Importer les polices depuis next/font
import { Sora, Source_Code_Pro } from 'next/font/google';

// 2. Configurer les polices pour créer des variables CSS
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora', // Sera utilisé comme 'font-sans' dans Tailwind
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro', // Sera utilisé comme 'font-mono' dans Tailwind
  display: 'swap',
});

// Les métadonnées restent les mêmes (elles seront surchargées par le layout de langue)
// Remplace ton bloc metadata actuel par celui-ci :
export const metadata: Metadata = {
  title: "Charline Brenda Yamenjeu | Génie Informatique & Développement Web/Mobile",
  description: "Portfolio de Yamenjeu Tchaweu Charline Brenda, étudiante ingénieure à l'ENSPY spécialisée en développement web, mobile et IA.",
  keywords: [
    "Ingénieur de Conception",
    "Charline Brenda Yamenjeu",
    "Génie Informatique Cameroun",
    "ENSPY",
    "Full-Stack Developer",
    "Laravel",
    "Next.js",
    "SaaS",
    "AI Engineer"
  ],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Charline Brenda Yamenjeu | Ingénieur de Conception Logiciel",
    description: "Conception de solutions logicielles robustes et intelligentes.",
    url: "https://charline-brenda-portfolio.vercel.app",
    siteName: "Portfolio Charline Brenda Yamenjeu",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 3. Appliquer les classes des variables de police à la balise <html>
    <html lang="en" className={`${sora.variable} ${sourceCodePro.variable}`} suppressHydrationWarning>
      {/* 4. Appliquer les couleurs de fond et de texte de base */}
      <body className="bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <TopBar /> 
            <Header />
            {/* On ajoute un conteneur principal pour centrer le contenu */}
            <main className="pt-20 px-6 sm:px-8 lg:px-12 container mx-auto max-w-6xl">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}