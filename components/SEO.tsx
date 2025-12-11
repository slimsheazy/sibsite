import React, { useEffect } from 'react';
import { generateSEOContent } from '../services/geminiService';

export const SEO: React.FC = () => {
  useEffect(() => {
    const optimizeSEO = async () => {
      // In a real app, this context would come from the current route/page content
      const context = "Homepage of Sibylhaus, a high-end Tarot and Divination shop featuring intuitive audio readings, energy checks, and relationship insights.";
      
      try {
        const seoData = await generateSEOContent(context);
        
        document.title = seoData.title;
        
        // Update Meta Description
        let metaDesc = document.querySelector("meta[name='description']");
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute('content', seoData.description);

        // Update Keywords
        let metaKeywords = document.querySelector("meta[name='keywords']");
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', seoData.keywords.join(', '));
        
        console.log("SEO Optimized by Gemini:", seoData);
      } catch (e) {
        console.warn("SEO optimization skipped");
      }
    };

    optimizeSEO();
  }, []);

  return null;
};