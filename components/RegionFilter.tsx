'use client';

import { useState } from 'react';
import { Filter } from 'lucide-react';

interface RegionFilterProps {
  regions: string[];
}

export function RegionFilter({ regions }: RegionFilterProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center space-x-4">
      <div className="flex items-center space-x-2 text-gray-600">
        <Filter className="w-5 h-5" />
        <span className="font-medium">Filter by Region:</span>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setSelectedRegion(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
            selectedRegion === null
              ? 'bg-primary-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Regions
        </button>
        
        {regions.map((region) => (
          <button
            key={region}
            onClick={() => setSelectedRegion(region)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              selectedRegion === region
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}
