# PaperWorks — Research, Project & Professional Document Support

> **Tagline:** Research. Projects. Professional Documents.  
> **Positioning:** Research, Project & Professional Document Support

PaperWorks is a specialized lead-generation and credibility website for a boutique technical document consultancy. The platform presents structured professional support for academic manuscripts (research papers, review papers, IEEE formatting, literature reviews), engineering major and capstone projects (synopses, SRS documents, thesis reports, viva coaching), ATS-parseable resumes, and university seminar presentations.

---

## 1. Project Overview & Business Purpose

- **Commercial Intent:** Lead generation and credibility establishing for technical document editing, formatting, mentoring, and reporting.
- **Direct Conversion Channels:** Primary interaction flows directly through **Telegram** and **Email** without unnecessary account creation, backend databases, or authentication overhead in version 1.
- **Academic Integrity:** All services operate strictly within ethical standards—providing formatting, structural guidance, technical editing, and presentation coaching. Never promoting exam cheating, ghostwriting, plagiarism, or guaranteed publications/grades.

---

## 2. Technology Stack

- **Framework:** React 19 with TypeScript
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS v4 with bespoke editorial tokens (`#F7F7F5` background, `#111827` primary slate, `#3157D5` royal cobalt accent)
- **Routing:** React Router v7 (`react-router-dom`) with client-side SPA routing and automatic scroll-to-top
- **Icons:** Lucide Icons (`lucide-react`)
- **Linting & Code Quality:** Oxlint / TypeScript compiler (`tsc -b`)
- **Hosting Target:** Netlify (static deployment with `_redirects` and `_headers` security rules)

---

## 3. Project Directory Structure

```text
PaperWorks/
├── public/
│   ├── _headers               # Production security headers (CSP, HSTS, Permissions-Policy)
│   ├── _redirects             # Netlify SPA fallback redirect rule (/* /index.html 200)
│   ├── 404.html               # Fallback redirect script for static web hosts
│   ├── favicon.svg            # Crisp geometric paper-fold brand mark
│   ├── robots.txt             # Search crawler directives referencing sitemap.xml
│   └── sitemap.xml            # Full XML sitemap containing all 34 indexable routes
├── src/
│   ├── components/
│   │   ├── common/            # BrandLogo, Button, TrustStrip, FAQAccordion, ProcessTimeline, CTASection, ContactCard
│   │   ├── layout/            # Navbar with mega-menu & mobile drawer, Footer, Breadcrumbs
│   │   ├── previews/          # Bespoke visual mockups: IEEDocumentPreview, ResearchPaperMockup, ProjectReportPreview, ResumePreview
│   │   ├── resources/         # ResourceCard for educational guides
│   │   └── services/          # ServiceCard, ServiceEditorialBlock
│   ├── config/
│   │   └── siteConfig.ts      # Centralized business configuration (businessName, URLs, emails, hours)
│   ├── data/
│   │   ├── faqsData.ts        # Central repository of honest, categorized FAQs
│   │   ├── portfolioData.ts   # Curated sample work items labeled 'Sample' and 'Demo'
│   │   ├── resourcesData.ts   # 7 comprehensive student guides with technical checklists
│   │   └── servicesData.ts    # 13 complete service models with deliverables and rubrics
│   ├── layouts/
│   │   └── RootLayout.tsx     # Shell with accessibility skip-link, ScrollToTop, Navbar, and Footer
│   ├── lib/
│   │   └── analytics.ts       # Safe Google Analytics 4 event tracking helper
│   ├── pages/
│   │   ├── legal/             # PrivacyPolicyPage, TermsPage, RefundPolicyPage
│   │   ├── resources/         # ResourcesHubPage, ResourceArticlePage
│   │   ├── services/          # ResearchHubPage, ProjectsHubPage, CareerHubPage, AcademicHubPage, ServiceDetailPage
│   │   ├── AboutPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FAQPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PortfolioPage.tsx
│   │   └── PricingPage.tsx
│   ├── seo/
│   │   └── SEO.tsx            # Dynamic head injection: Title, Meta Description, Canonical, OpenGraph, JSON-LD
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces for services, resources, FAQs, and SEO
│   ├── App.tsx                # Complete client-side routing definitions
│   ├── index.css              # Tailwind CSS v4 design tokens, grid textures, and accessibility styles
│   └── main.tsx               # Application entry point
├── .env.example               # Template for environment variables
├── .gitignore                 # Exclusion rules for local secrets, node_modules, and dist
├── index.html                 # HTML shell with Google Fonts preconnects (Manrope & Newsreader)
├── package.json               # Dependency declarations and build scripts
├── tsconfig.json              # TypeScript root configuration
└── vite.config.ts             # Vite plugins and bundle chunking optimizations
```

---

## 4. Local Development Setup

### Prerequisites
- Node.js (version 20+ or 22+ recommended)
- npm (version 10+ or 11+)

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/piyushb03/PaperWorks.git
cd PaperWorks
npm install
```

### Configure Environment
Copy `.env.example` to create your local `.env`:
```bash
cp .env.example .env
```

### Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 5. Environment Variables Configuration

Configure the following variables in `.env` or your deployment platform (e.g., Netlify Environment Variables):

| Variable | Description | Default Fallback |
| :--- | :--- | :--- |
| `VITE_SITE_URL` | Canonical public URL used for SEO, Open Graph, and JSON-LD schemas | `https://paperworks.pro` |
| `VITE_TELEGRAM_URL` | Direct Telegram support channel / username link | `https://t.me/paperworkssupport` |
| `VITE_CONTACT_EMAIL` | Official email address for inquiries and document attachments | `contact@paperworks.pro` |
| `VITE_GA_MEASUREMENT_ID` | *(Optional)* Google Analytics 4 ID (e.g. `G-XXXXXXXXXX`) | Empty (disabled) |

---

## 6. Building for Production

To perform TypeScript compilation and assemble the optimized static bundle:
```bash
npm run build
```
The output is written to the `dist/` directory with code splitting:
- `dist/assets/vendor-react-*.js` — Core React runtime and router
- `dist/assets/vendor-icons-*.js` — Icon assets
- `dist/assets/index-*.js` — Application bundle
- `dist/assets/index-*.css` — Compiled Tailwind CSS v4 styling

To preview the production build locally:
```bash
npm run preview
```

---

## 7. Deployment Configuration

### Deploying to Netlify (Recommended)
1. Link your repository to Netlify via the Netlify dashboard.
2. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Add environment variables under **Site configuration > Environment variables**:
   - `VITE_SITE_URL` = your live production domain (e.g., `https://your-domain.com`)
   - `VITE_TELEGRAM_URL` = your live Telegram link
   - `VITE_CONTACT_EMAIL` = your business email address
4. Single Page Application routing is pre-configured via `public/_redirects`:
   ```text
   /*    /index.html   200
   ```
5. HTTP Security headers (CSP, HSTS, X-Frame-Options) are pre-configured via `public/_headers`.

### Deploying to Cloudflare Pages or Other Static Hosts
- Build command: `npm run build`
- Output directory: `dist`
- For static web hosts that require 404 fallback routing, `public/404.html` is automatically provided.

---

## 8. Complete Route Hierarchy

### Primary Pages
- `/` — Homepage (Hero, Trust Strip, 4 Service Areas, 5-Step Process, Visual Previews, Resources, FAQ, Final CTA)
- `/pricing` — Quote estimation determinants, transparent criteria, zero artificial discounts
- `/portfolio` — Visual sample work showcase (IEEE papers, capstone reports, SRS specs, ATS resumes)
- `/about` — Founding philosophy, academic integrity principles, and contact information
- `/faq` — Searchable FAQ knowledge base categorized by domain
- `/contact` — Telegram link, email channel, and interactive pre-formatted message composer

### Core Service Hubs & Service Detail Pages
- `/research` — Research Hub
  - `/research-paper` — Research Paper Support & Technical Structuring
  - `/review-paper` — Review Paper & Systematic Survey Support
  - `/ieee-formatting` — IEEE Formatting Support & Standards Compliance
  - `/literature-review` — Literature Review Support & Scholarly Synthesis
  - `/paper-editing` — Paper Editing, Proofreading & Academic Polish
- `/projects` — Engineering Projects Hub
  - `/major-project` — Major Project Support & Technical Guidance
  - `/final-year-project` — Final-Year Project Support & Capstone Mentorship
  - `/project-report` — Project Report Preparation & University Formatting
  - `/project-documentation` — Project Documentation, Synopsis & IEEE 830 SRS
- `/career` — Career Documents Hub
  - `/ats-resume` — ATS-Friendly Resume Support for Freshers & Engineers
  - `/cv` — Academic Curriculum Vitae (CV) Support for Graduate Admissions
- `/academic` — Academic Documents Hub
  - `/academic-documents` — Academic Seminar & Technical Reports Support
  - `/presentations` — Technical Presentations & Defense Slide Deck Support

### Free Educational Resources & Guides
- `/resources` — Resources Hub
  - `/resources/how-to-write-research-paper` — How to Write a Research Paper: A Step-by-Step Engineering Guide
  - `/resources/ieee-format-guide` — IEEE Research Paper Format Explained: Two-Column Guidelines & Checklists
  - `/resources/review-paper-vs-research-paper` — Research Paper vs Review Paper: Structural Differences & When to Choose Each
  - `/resources/literature-review-guide` — How to Write a Comprehensive Literature Review: Thematic Synthesis & Gap Identification
  - `/resources/final-year-project-guide` — The Complete Engineering Final-Year Project Guide: From Concept to Defense
  - `/resources/project-report-format` — Engineering Project Report Structure & Formatting Guidelines: Complete Chapter Breakdown
  - `/resources/ats-resume-guide` — ATS Resume Guide for Freshers: Formatting Rules, Keywords & Common Traps

### Compliance & Legal Pages
- `/privacy` — Privacy Policy & Confidentiality Terms
- `/terms` — Terms of Service & Academic Honor Code
- `/refund-policy` — Revision & Refund Guidelines

---

## 9. Technical SEO & Search Console Next Steps

1. **Custom Domain:** Connect your production domain in Netlify and update `VITE_SITE_URL` in `.env`.
2. **Sitemap Submission:** In Google Search Console, add your domain property and submit:
   ```text
   https://your-domain.com/sitemap.xml
   ```
3. **Structured Data:** The site dynamically injects JSON-LD schemas for `Organization`, `WebSite`, `BreadcrumbList`, and `Article` on every route.
4. **Verification:** Test sample URLs using the Google Rich Results Test to verify metadata and schema accuracy.

---

## 10. Code Quality & Linting

Run Oxlint across all 47 files:
```bash
npm run lint
```
Run type-checking:
```bash
npm run build
```

---

## 11. License & Intellectual Property

&copy; 2026 PaperWorks. All rights reserved. Code and documentation prepared for commercial deployment.
