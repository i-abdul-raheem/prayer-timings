import Link from 'next/link';
import { getCitiesByRegion } from '@/lib/cities';

interface RegionSectionProps {
  region: string;
}

export function RegionSection({ region }: RegionSectionProps) {
  const cities = getCitiesByRegion(region);
  const cityCount = cities.length;
  const slug = region.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/region/${slug}`} className="group">
      <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-center">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
          <span className="text-2xl font-bold text-primary-600">
            {region.charAt(0)}
          </span>
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {region}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {cityCount} cities
        </p>
        
        <div className="text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
          Browse Cities →
        </div>
      </div>
    </Link>
  );
}
