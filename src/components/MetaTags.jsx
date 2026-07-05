import { useEffect } from 'react';
import {
  siteUrl,
  defaultTitle,
  defaultDescription,
  defaultKeywords,
  siteName,
  twitterHandle,
  logoPath,
} from '../config/seo';

/**
 * Sets document-level SEO and social meta tags.
 *
 * @param {string} [title] - Page title (brand name appended automatically).
 * @param {string} [description] - Meta description.
 * @param {string} [keywords] - Comma-separated keywords.
 * @param {string} [image] - Absolute or root-relative image URL for Open Graph / Twitter.
 * @param {string} [path] - Current page path (e.g. "/about") used to build the canonical URL.
 * @param {string} [type] - Open Graph type (default "website").
 * @param {string} [robots] - Robots directive (default "index, follow").
 * @param {object} [schema] - JSON-LD structured data object.
 */
function MetaTags({
  title,
  description,
  keywords,
  image,
  path = '',
  type = 'website',
  robots = 'index, follow',
  schema,
}) {
  const pageTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const canonicalUrl = `${siteUrl}${path}`;
  const imageUrl = image ? `${siteUrl}${image}` : `${siteUrl}${logoPath}`;

  useEffect(() => {
    document.title = pageTitle;

    const setMeta = (selector, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const nameOrProperty = selector.match(/\[name="([^"]+)"\]/);
        const property = selector.match(/\[property="([^"]+)"\]/);
        if (nameOrProperty) element.setAttribute('name', nameOrProperty[1]);
        if (property) element.setAttribute('property', property[1]);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    setMeta('meta[name="description"]', pageDescription);
    setMeta('meta[name="keywords"]', pageKeywords);
    setMeta('meta[name="robots"]', robots);

    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', pageDescription);
    setMeta('meta[property="og:image"]', imageUrl);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[property="og:type"]', type);
    setMeta('meta[property="og:site_name"]', siteName);

    setMeta('meta[name="twitter:card"]', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', pageDescription);
    setMeta('meta[name="twitter:image"]', imageUrl);
    setMeta('meta[name="twitter:site"]', twitterHandle);

    setLink('canonical', canonicalUrl);

    let scriptTag = document.getElementById('json-ld');
    if (schema) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        scriptTag.id = 'json-ld';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        ...schema,
      });
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      // Leave canonical/meta in place for SPA; cleanup would require tracking.
    };
  }, [pageTitle, pageDescription, pageKeywords, canonicalUrl, imageUrl, type, robots, schema]);

  return null;
}

export default MetaTags;
