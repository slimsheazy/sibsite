import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export default function SEO({ 
  title = 'Sibylhaus | Intuitive Tarot Readings & Spiritual Guidance',
  description = 'No sugarcoating. Real tarot readings for real life. Get honest, intuitive guidance on love, career, and life decisions. Audio readings with personalized dashboards.',
  keywords = 'tarot reading, intuitive reading, spiritual guidance, tarot cards, love reading, career reading, oracle cards, psychic reading, life decisions, tarot consultation',
  url = 'https://sibylhaus.com',
  image = 'https://sibylhaus.com/og-image.jpg'
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Helper function to update or create meta tags with type safety
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        const match = selector.match(/\[(.*?)=["'](.*?)["']\]/);
        if (match) {
          const [, attrName, attrValue] = match;
          tag.setAttribute(attrName, attrValue);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, value);
    };
    
    // Set or update meta description
    updateMetaTag('meta[name="description"]', 'content', description);
    
    // Set or update keywords
    updateMetaTag('meta[name="keywords"]', 'content', keywords);
    
    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    updateMetaTag('meta[property="og:url"]', 'content', url);
    updateMetaTag('meta[property="og:image"]', 'content', image);
    
    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', image);
    
  }, [title, description, keywords, url, image]);
  
  return null;
}
