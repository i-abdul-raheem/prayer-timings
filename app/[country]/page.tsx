import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Globe, Users } from 'lucide-react';
import { getAllCountries, getCountryBySlug } from '@/lib/countries-index';

interface CountryPageProps {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country) => ({
    country: country.slug,
  }));
}

export async function generateMetadata({ params }: CountryPageProps): Promise<Metadata> {
  const countrySlug = params.country;
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    return {
      title: 'Country Not Found',
    };
  }

  return {
    title: `${country.name} Cities - Prayer Times`,
    description: `Find prayer times for cities in ${country.name}. Browse through ${country.cityCount} cities and get accurate prayer times.`,
    keywords: [`${country.name} prayer times`, `${country.name} cities`, `prayer times ${country.name}`],
    openGraph: {
      title: `${country.name} Cities - Prayer Times`,
      description: `Find prayer times for cities in ${country.name}. Browse through ${country.cityCount} cities and get accurate prayer times.`,
    },
  };
}

export default function CountryPage({ params }: CountryPageProps) {
  const countrySlug = params.country;
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-12 h-12 text-primary-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {country.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through {country.cityCount.toLocaleString()} cities in {country.name} to find accurate prayer times. 
            Click on any city to view detailed prayer times and information.
          </p>
        </div>

        {/* Country Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600">{country.cityCount.toLocaleString()}</div>
            <div className="text-gray-600">Cities</div>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600">1</div>
            <div className="text-gray-600">Country</div>
          </div>
          
          <div className="card text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <div className="text-3xl font-bold text-primary-600">24/7</div>
            <div className="text-gray-600">Available</div>
          </div>
        </div>

        {/* Cities Grid - ALL CITIES INCLUDED */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {country.cities.map((city: string) => {
            const citySlug = city.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
            
            return (
              <Link 
                key={city} 
                href={`/${countrySlug}/${citySlug}`}
                className="group"
              >
                <div className="card hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                      <MapPin className="w-8 h-8 text-primary-600" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
                      {city}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">{country.name}</p>
                    
                    <div className="text-sm text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                      View Prayer Times →
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="text-center space-x-4">
          <Link href="/" className="btn-secondary">
            ← Back to Home
          </Link>
          <Link href="/cities" className="btn-primary">
            View All Cities
          </Link>
        </div>
      </div>
    </div>
  );
}
