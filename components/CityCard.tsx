import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';
import { City } from '@/lib/types';

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  const slug = `${city.name.toLowerCase().replace(/\s+/g, '-')}-${city.country.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <Link href={`/city/${slug}`} className="group">
      <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
              {city.name}
            </h3>
            <p className="text-gray-600">{city.country}</p>
          </div>
          <div className="text-right">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-800 rounded-full">
              {city.region}
            </span>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{city.latitude.toFixed(4)}, {city.longitude.toFixed(4)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-2" />
            <span>{city.timezone}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
            View Prayer Times →
          </div>
        </div>
      </div>
    </Link>
  );
}
