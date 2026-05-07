import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '../config/siteConfig';
import type { SEOMetadata } from '../types';

interface SEOProps extends SEOMetadata {
  jsonLd?: Record<string, unknown>[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = '/favicon.svg',
  breadcrumbs,
  articleSchema,
  jsonLd = [],
}) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Title
    const fullTitle = title.includes(siteConfig.businessName)
      ? title
      : `${title} | ${siteConfig.businessName}`;
    document.title = fullTitle;

    // 2. Canonical URL
    const canonicalUrl = canonical || `${siteConfig.siteUrl}${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 3. Meta helper
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Standard meta
    setMeta('description', description);
    setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Open Graph
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', siteConfig.businessName, true);
    setMeta('og:image', ogImage.startsWith('http') ? ogImage : `${siteConfig.siteUrl}${ogImage}`, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage.startsWith('http') ? ogImage : `${siteConfig.siteUrl}${ogImage}`);

    // 4. JSON-LD Schemas
    const schemas: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteConfig.businessName,
        url: siteConfig.siteUrl,
        logo: `${siteConfig.siteUrl}/favicon.svg`,
        description: siteConfig.positioning,
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'Customer Support',
          email: siteConfig.contactEmail,
          url: siteConfig.telegramUrl,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteConfig.businessName,
        url: siteConfig.siteUrl,
        description: siteConfig.tagline,
      },
      ...jsonLd,
    ];

    // Add Breadcrumb schema if breadcrumbs exist
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: crumb.label,
          item: crumb.href ? `${siteConfig.siteUrl}${crumb.href}` : canonicalUrl,
        })),
      });
    }

    // Add Article schema if applicable
    if (articleSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: articleSchema.headline,
        description: articleSchema.description,
        datePublished: articleSchema.publishedTime,
        dateModified: articleSchema.modifiedTime || articleSchema.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.businessName,
          url: siteConfig.siteUrl,
        },
      });
    }

    // Inject JSON-LD script
    let scriptTag = document.getElementById('paperworks-schema-jsonld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'paperworks-schema-jsonld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas);

    // Track Google Analytics page_view if configured
    if (siteConfig.gaMeasurementId && typeof window !== 'undefined') {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'page_view', {
          page_title: fullTitle,
          page_location: window.location.href,
          page_path: location.pathname,
        });
      }
    }
  }, [title, description, canonical, ogType, ogImage, breadcrumbs, articleSchema, jsonLd, location.pathname]);

  return null;
};
