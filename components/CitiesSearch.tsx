'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export function CitiesSearch() {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search cities by name, country, or region..."
          className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors duration-200 bg-white shadow-lg"
        />
      </div>
    </div>
  );
}
