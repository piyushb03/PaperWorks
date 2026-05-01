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
