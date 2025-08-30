import { Metadata } from 'next';
import Link from 'next/link';
import { Globe, MapPin, Users } from 'lucide-react';
import countriesData from '@/countries_cities.json';

export const metadata: Metadata = {
  title: 'All Countries - Prayer Times Worldwide',
  description: 'Browse all countries to find prayer times for cities. Each country page lists all available cities with prayer times.',
  keywords: ['countries prayer times', 'worldwide countries', 'prayer times countries', 'islamic countries'],
  openGraph: {
    title: 'All Countries - Prayer Times Worldwide',
    description: 'Browse all countries to find prayer times for cities. Each country page lists all available cities with prayer times.',
  },
};

export default function CountriesPage() {
  // We'll load this data dynamically to avoid importing the massive file
  // For now, showing a loading state and will be populated by the generator
  const featuredCountries = Object.keys(countriesData).sort();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-12 h-12 text-primary-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              All Countries
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through 242 countries to find prayer times for cities worldwide. 
            Each country page provides a comprehensive list of cities with accurate prayer times.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600">242</div>
            <div className="text-gray-600">Countries</div>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600">45,000+</div>
            <div className="text-gray-600">Cities</div>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
        </div>

        {/* Featured Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCountries.map((country) => {
            const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <Link key={country} href={`/${countrySlug}`} className="group">
                <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                      <span className="text-2xl font-bold text-primary-600">
                        {country.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                      {country}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      View Cities
                    </p>
                    
                    <div className="text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                      Browse Cities →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="text-center mt-16">
          <Link href="/" className="btn-secondary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
