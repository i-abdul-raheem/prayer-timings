import { MapPin, Clock, Globe, Compass } from 'lucide-react';
import { City } from '@/lib/types';

interface CityInfoProps {
  city: City;
}

export function CityInfo({ city }: CityInfoProps) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">City Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Location</div>
            <div className="font-medium text-gray-900">{city.name}, {city.country}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Globe className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Region</div>
            <div className="font-medium text-gray-900">{city.region}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Compass className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Coordinates</div>
            <div className="font-medium text-gray-900">
              {city.latitude.toFixed(4)}°, {city.longitude.toFixed(4)}°
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-gray-400" />
          <div>
            <div className="text-sm text-gray-500">Timezone</div>
            <div className="font-medium text-gray-900">{city.timezone}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="text-sm text-gray-500 mb-2">Calculation Method</div>
        <div className="text-sm text-gray-700">
          Using ISNA (Islamic Society of North America) calculation method for accurate prayer times.
        </div>
      </div>
    </div>
  );
}
