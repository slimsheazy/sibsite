import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ 
  title = 'Sibylhaus | Intuitive Tarot Readings & Spiritual Guidance',
  description = 'No sugarcoating. Real tarot readings for real life. Get honest, intuitive guidance on love, career, and life decisions. Audio readings with personalized dashboards.',
  keywords = 'tarot reading, intuitive reading, spiritual guidance, tarot cards, love reading, career reading, oracle cards, psychic reading, life decisions, tarot consultation'
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;
    
    // Set or update meta description
    let descMeta = document.querySelector('meta[name="description"]');
    if (!descMeta) {
      descMeta = document.createElement('meta');
      descMeta.name = 'description';
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute('content', description);
    
    // Set or update keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.name = 'keywords';
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', keywords);
    
    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://sibylhaus.com' },
    ];
    
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
    
  }, [title, description, keywords]);
  
  return null;
}
