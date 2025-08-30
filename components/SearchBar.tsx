'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, MapPin } from 'lucide-react';
import { searchCities } from '@/lib/cities';
import { City } from '@/lib/types';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<City[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 2) {
      const searchResults = searchCities(query);
      setResults(searchResults.slice(0, 10));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleCitySelect = (city: City) => {
    const slug = `${city.country.toLowerCase().replace(/\s+/g, '-')}/${city.name.toLowerCase().replace(/\s+/g, '-')}`;
    router.push(`/${slug}`);
    setIsOpen(false);
    setQuery('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      handleCitySelect(results[0]);
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for a city..."
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200 bg-white shadow-lg"
          />
        </div>
        
        {isOpen && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {results.map((city) => (
              <button
                key={`${city.name}-${city.country}`}
                onClick={() => handleCitySelect(city)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 flex items-center space-x-3 transition-colors duration-150"
              >
                <MapPin className="text-gray-400 w-4 h-4 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">{city.name}</div>
                  <div className="text-sm text-gray-500">{city.country}, {city.region}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </form>
      
      {isOpen && results.length === 0 && query.length > 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 p-4 text-center text-gray-500">
          No cities found for "{query}"
        </div>
      )}
    </div>
  );
}
