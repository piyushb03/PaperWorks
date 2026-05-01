import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

// Scroll to top automatically on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' as ScrollBehavior,
    });
  }, [pathname]);

  return null;
};

export const RootLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111827] selection:bg-[#3157D5]/15 selection:text-[#111827]">
      {/* Skip to Main Content Link for Screen Readers & Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#111827] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
