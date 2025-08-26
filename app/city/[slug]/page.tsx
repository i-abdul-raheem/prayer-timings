import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCityBySlug, cities } from '@/lib/cities';
import { PrayerTimesDisplay } from '@/components/PrayerTimesDisplay';
import { CityInfo } from '@/components/CityInfo';
import { CalculationMethodSelector } from '@/components/CalculationMethodSelector';

interface CityPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    slug: `${city.name.toLowerCase().replace(/\s+/g, '-')}-${city.country.toLowerCase().replace(/\s+/g, '-')}`,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.slug);
  
  if (!city) {
    return {
      title: 'City Not Found',
    };
  }

  return {
    title: `Prayer Times in ${city.name}, ${city.country}`,
    description: `Get accurate prayer times for ${city.name}, ${city.country}. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.`,
    keywords: [`prayer times ${city.name}`, `salah times ${city.name}`, `${city.name} prayer times`, `${city.country} prayer times`],
    openGraph: {
      title: `Prayer Times in ${city.name}, ${city.country}`,
      description: `Get accurate prayer times for ${city.name}, ${city.country}. Find Fajr, Dhuhr, Asr, Maghrib, and Isha prayer times with precise calculations.`,
    },
  };
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.slug);
  
  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* City Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prayer Times in {city.name}
          </h1>
          <p className="text-xl text-gray-600">
            {city.country} • {city.region}
          </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}
