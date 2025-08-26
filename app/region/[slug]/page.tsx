import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCitiesByRegion } from '@/lib/cities';
import { CityCard } from '@/components/CityCard';

interface RegionPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const regions = ['Middle East', 'South Asia', 'Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'South America'];
  
  return regions.map((region) => ({
    slug: region.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: RegionPageProps): Promise<Metadata> {
  const region = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const cities = getCitiesByRegion(region);
  
  if (cities.length === 0) {
    return {
      title: 'Region Not Found',
    };
  }

  return {
    title: `${region} Cities - Prayer Times`,
    description: `Find prayer times for cities in ${region}. Browse through ${cities.length} cities and get accurate prayer times.`,
    keywords: [`${region} prayer times`, `${region} cities`, `prayer times ${region}`],
    openGraph: {
      title: `${region} Cities - Prayer Times`,
      description: `Find prayer times for cities in ${region}. Browse through ${cities.length} cities and get accurate prayer times.`,
    },
  };
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const cities = getCitiesByRegion(region);
  
  if (cities.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {region} Cities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through {cities.length} cities in {region} to find accurate prayer times. 
            Click on any city to view detailed prayer times and information.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <CityCard key={`${city.name}-${city.country}`} city={city} />
          ))}
        </div>

        {/* Back to All Cities */}
        <div className="text-center mt-16">
          <a href="/cities" className="btn-secondary">
            ← Back to All Cities
          </a>
        </div>
      </div>
    </div>
  );
}
