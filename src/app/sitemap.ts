import type { MetadataRoute } from 'next';

import { getAllServiceSlugs } from '@/lib/services-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arpondental.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/dentist`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/reviews`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/new-patients`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/faq`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
