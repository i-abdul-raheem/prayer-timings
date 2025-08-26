import { Metadata } from 'next';
import { cities } from '@/lib/cities';
import { CityCard } from '@/components/CityCard';
import { CitiesSearch } from '@/components/CitiesSearch';
import { RegionFilter } from '@/components/RegionFilter';

export const metadata: Metadata = {
  title: 'All Cities - Prayer Times Worldwide',
  description: 'Browse all cities worldwide to find prayer times. Search and filter cities by region, country, or name.',
  keywords: ['cities prayer times', 'worldwide cities', 'prayer times cities', 'islamic cities'],
  openGraph: {
    title: 'All Cities - Prayer Times Worldwide',
    description: 'Browse all cities worldwide to find prayer times. Search and filter cities by region, country, or name.',
  },
};

export default function CitiesPage() {
  const regions = ['Middle East', 'South Asia', 'Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'South America'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            All Cities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through {cities.length} cities worldwide to find accurate prayer times. 
            Search by name, country, or region to quickly locate your city.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <CitiesSearch />
        </div>

        {/* Region Filters */}
        <div className="mb-8">
          <RegionFilter regions={regions} />
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cities.map((city) => (
            <CityCard key={`${city.name}-${city.country}`} city={city} />
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {regions.map((region) => {
              const cityCount = cities.filter(city => city.region === region).length;
              return (
                <div key={region} className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{cityCount}</div>
                  <div className="text-gray-600">{region}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
