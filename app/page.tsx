import { Metadata } from 'next';
import Link from 'next/link';
import { cities, getCitiesByRegion } from '@/lib/cities';
import { SearchBar } from '@/components/SearchBar';
import { CityCard } from '@/components/CityCard';
import { RegionSection } from '@/components/RegionSection';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'Prayer Times - Accurate Islamic Prayer Times Worldwide',
  description: 'Get accurate prayer times for cities worldwide. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.',
  keywords: ['prayer times', 'salah times', 'islamic prayer', 'fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'muslim prayer'],
  openGraph: {
    title: 'Prayer Times - Accurate Islamic Prayer Times Worldwide',
    description: 'Get accurate prayer times for cities worldwide. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.',
  },
};

export default function HomePage() {
  const featuredCities = cities.slice(0, 12);
  const regions = ['Middle East', 'South Asia', 'Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'South America'];
  
  // We'll load countries dynamically to avoid importing the massive file
  const featuredCountries = [
    'Pakistan', 'India', 'Saudi Arabia', 'UAE', 'Egypt', 'Turkey',
    'Indonesia', 'Malaysia', 'UK', 'France', 'Germany', 'USA'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Accurate{' '}
            <span className="text-gradient">Prayer Times</span>
            <br />
            Worldwide
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get precise prayer times for cities around the world. Find Fajr, Dhuhr, Asr, Maghrib, and Isha times with reliable calculations.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <SearchBar />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">45,000+</div>
              <div className="text-gray-600">Cities Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">242</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600">Free Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Cities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCities.map((city) => (
              <CityCard key={`${city.name}-${city.country}`} city={city} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/cities" className="btn-primary">
              View All Cities
            </Link>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Country
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredCountries.map((country) => {
              const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
              
              return (
                <Link key={country} href={`/${countrySlug}`} className="group">
                  <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer text-center">
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
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/countries" className="btn-primary">
              View All Countries
            </Link>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse by Region
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <RegionSection key={region} region={region} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50" id='why-us'>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Prayer Times?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">Using reliable astronomical calculations and multiple calculation methods</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Coverage</h3>
              <p className="text-gray-600">Prayer times for cities across all continents and time zones</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Methods</h3>
              <p className="text-gray-600">Support for different calculation methods used worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
