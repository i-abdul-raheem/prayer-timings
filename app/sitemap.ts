import { cities } from '@/lib/cities';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://prayer-timings.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/cities`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // City pages
  const cityPages = cities.map((city) => {
    const slug = `${city.name.toLowerCase().replace(/\s+/g, '-')}-${city.country.toLowerCase().replace(/\s+/g, '-')}`;
    return {
      url: `${baseUrl}/city/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    };
  });

  // Region pages
  const regions = ['Middle East', 'South Asia', 'Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'South America'];
  const regionPages = regions.map((region) => {
    const slug = region.toLowerCase().replace(/\s+/g, '-');
    return {
      url: `${baseUrl}/region/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    };
  });

  return [...staticPages, ...cityPages, ...regionPages];
}
