import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';

// Core Pages
import { HomePage } from './pages/HomePage';
import { PricingPage } from './pages/PricingPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { AboutPage } from './pages/AboutPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Service Hubs & Service Detail
import { ResearchHubPage } from './pages/services/ResearchHubPage';
import { ProjectsHubPage } from './pages/services/ProjectsHubPage';
import { CareerHubPage } from './pages/services/CareerHubPage';
import { AcademicHubPage } from './pages/services/AcademicHubPage';
import { ServiceDetailPage } from './pages/services/ServiceDetailPage';

// Resources
import { ResourcesHubPage } from './pages/resources/ResourcesHubPage';
import { ResourceArticlePage } from './pages/resources/ResourceArticlePage';

// Legal Pages
import { PrivacyPolicyPage } from './pages/legal/PrivacyPolicyPage';
import { TermsPage } from './pages/legal/TermsPage';
import { RefundPolicyPage } from './pages/legal/RefundPolicyPage';

// Dynamic Resource Param Wrapper
const DynamicResourceWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <ResourceArticlePage slug={slug || ''} />;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Homepage */}
          <Route index element={<HomePage />} />

          {/* Core Hub Pages */}
          <Route path="research" element={<ResearchHubPage />} />
          <Route path="projects" element={<ProjectsHubPage />} />
          <Route path="career" element={<CareerHubPage />} />
          <Route path="academic" element={<AcademicHubPage />} />

          {/* Research & Papers Services */}
