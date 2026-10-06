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
          <Route path="research-paper" element={<ServiceDetailPage slug="research-paper" />} />
          <Route path="review-paper" element={<ServiceDetailPage slug="review-paper" />} />
          <Route path="ieee-formatting" element={<ServiceDetailPage slug="ieee-formatting" />} />
          <Route path="literature-review" element={<ServiceDetailPage slug="literature-review" />} />
          <Route path="paper-editing" element={<ServiceDetailPage slug="paper-editing" />} />

          {/* Major & Final-Year Projects Services */}
          <Route path="major-project" element={<ServiceDetailPage slug="major-project" />} />
          <Route path="final-year-project" element={<ServiceDetailPage slug="final-year-project" />} />
          <Route path="project-report" element={<ServiceDetailPage slug="project-report" />} />
          <Route path="project-documentation" element={<ServiceDetailPage slug="project-documentation" />} />

          {/* Career Documents Services */}
          <Route path="ats-resume" element={<ServiceDetailPage slug="ats-resume" />} />
          <Route path="cv" element={<ServiceDetailPage slug="cv" />} />

          {/* Academic Documents Services */}
          <Route path="academic-documents" element={<ServiceDetailPage slug="academic-documents" />} />
          <Route path="presentations" element={<ServiceDetailPage slug="presentations" />} />

          {/* Supporting Commercial Pages */}
          <Route path="pricing" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Resources & Guides */}
          <Route path="resources" element={<ResourcesHubPage />} />
          <Route path="resources/how-to-write-research-paper" element={<ResourceArticlePage slug="how-to-write-research-paper" />} />
          <Route path="resources/ieee-format-guide" element={<ResourceArticlePage slug="ieee-format-guide" />} />
          <Route path="resources/review-paper-vs-research-paper" element={<ResourceArticlePage slug="review-paper-vs-research-paper" />} />
          <Route path="resources/literature-review-guide" element={<ResourceArticlePage slug="literature-review-guide" />} />
          <Route path="resources/final-year-project-guide" element={<ResourceArticlePage slug="final-year-project-guide" />} />
          <Route path="resources/project-report-format" element={<ResourceArticlePage slug="project-report-format" />} />
          <Route path="resources/ats-resume-guide" element={<ResourceArticlePage slug="ats-resume-guide" />} />
          <Route path="resources/:slug" element={<DynamicResourceWrapper />} />

          {/* Legal Pages */}
          <Route path="privacy" element={<PrivacyPolicyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
