import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

export default function SEO({ 
  title = 'Sibylhaus | Intuitive Tarot Readings & Spiritual Guidance',
  description = 'No sugarcoating. Real tarot readings for real life. Get honest, intuitive guidance on love, career, and life decisions. Audio readings with personalized dashboards.',
  keywords = 'tarot reading, intuitive reading, spiritual guidance, tarot cards, love reading, career reading, oracle cards, psychic reading, life decisions, tarot consultation',
  url = 'https://sibylhaus.com'
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let tag = document.querySelector(selector) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        const [attrName, attrValue] = selector.match(/\[(.*?)="(.*?)"\]/)?.slice(1, 3) || [];
        if (attrName && attrValue) {
          tag.setAttribute(attrName, attrValue);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, value);
    };
    
    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    updateMetaTag('meta[property="og:url"]', 'content', url);
    
    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    
  }, [title, description, keywords, url]);
  
  return null;
}
