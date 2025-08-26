import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin, Globe, Clock } from 'lucide-react';
import { getAllCountries, getCountryBySlug } from '@/lib/countries-index';
import { getCityInfo } from '@/lib/cities-database';
import { PrayerTimesDisplay } from '@/components/PrayerTimesDisplay';
import { CityInfo } from '@/components/CityInfo';
import { CalculationMethodSelector } from '@/components/CalculationMethodSelector';

interface CityPageProps {
  params: {
    country: string;
    city: string;
  };
}

export async function generateStaticParams() {
  const countries = getAllCountries();
  const params: Array<{ country: string; city: string }> = [];
  
  countries.forEach((country) => {
    // Generate static params for ALL cities - NO LIMITS!
    country.cities.forEach((city) => {
      const citySlug = city.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-');
      params.push({
        country: country.slug,
        city: citySlug,
      });
    });
  });
  
  return params;
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = params;
  
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    return {
      title: 'Country Not Found',
    };
  }

  const cityName = country.cities.find(
    (city) => city.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') === citySlug
  );
  
  if (!cityName) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Prayer Times in ${cityName}, ${country.name}`,
    description: `Get accurate prayer times for ${cityName}, ${country.name}. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.`,
    keywords: [`prayer times ${cityName}`, `salah times ${cityName}`, `${cityName} prayer times`, `${country.name} prayer times`],
    openGraph: {
      title: `Prayer Times in ${cityName}, ${country.name}`,
      description: `Get accurate prayer times for ${cityName}, ${country.name}. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.`,
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const { country: countrySlug, city: citySlug } = params;
  
  const country = getCountryBySlug(countrySlug);
  
  if (!country) {
    notFound();
  }

  const cityName = country.cities.find(
    (city) => city.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-') === citySlug
  );
  
  if (!cityName) {
    notFound();
  }

  // Get city info from the database
  const cityInfo = getCityInfo(cityName, country.name);
  
  // Create a city object for the existing components
  const city = {
    name: cityName,
    country: country.name,
    region: cityInfo?.region || 'Unknown',
    latitude: cityInfo?.latitude || 0,
    longitude: cityInfo?.longitude || 0,
    timezone: cityInfo?.timezone || 'UTC',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            href={`/${countrySlug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {country.name}
          </Link>
        </div>

        {/* City Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 text-primary-600 mr-4" />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {cityName}
              </h1>
              <p className="text-xl text-gray-600">
                {country.name} • {city.region}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <PrayerTimesDisplay city={city} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <CityInfo city={city} />
            <CalculationMethodSelector />
            
            {/* Quick Navigation */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
              <div className="space-y-3">
                <Link 
                  href={`/${countrySlug}`}
                  className="block text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  ← All Cities in {country.name}
                </Link>
                <Link 
                  href="/cities"
                  className="block text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  ← All Cities Worldwide
                </Link>
                <Link 
                  href="/"
                  className="block text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
