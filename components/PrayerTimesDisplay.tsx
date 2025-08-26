'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Clock, Calendar, AlertCircle, Loader2 } from 'lucide-react';
import { prayerTimesAPI } from '@/lib/api';
import { PrayerTimesResponse, City } from '@/lib/types';

interface PrayerTimesDisplayProps {
  city: City;
}

export function PrayerTimesDisplay({ city }: PrayerTimesDisplayProps) {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calculationMethod, setCalculationMethod] = useState(2); // Default: ISNA

  useEffect(() => {
    fetchPrayerTimes();
  }, [city, selectedDate, calculationMethod]);

  const fetchPrayerTimes = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Use city name and country instead of coordinates
      const response = await prayerTimesAPI.getPrayerTimesByCity({
        city: city.name,
        country: city.country,
        method: calculationMethod,
        date: format(selectedDate, 'dd-MM-yyyy')
      });
      
      setPrayerTimes(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch prayer times');
    } finally {
      setLoading(false);
    }
  };

  const getNextPrayer = (): { name: string; time: string } | null => {
    if (!prayerTimes?.data?.timings) return null;

    const now = new Date();
    const currentTime = format(now, 'HH:mm');
    
    const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    for (const prayer of prayerOrder) {
      const prayerTime = prayerTimes.data.timings[prayer as keyof typeof prayerTimes.data.timings];
      if (prayerTime && prayerTime > currentTime) {
        return { name: prayer, time: prayerTime };
      }
    }
    
    // If no prayers left today, return tomorrow's Fajr
    return { name: 'Fajr (Tomorrow)', time: prayerTimes.data.timings.Fajr || '' };
  };

  const formatTime = (time: string) => {
    try {
      const [hours, minutes] = time.split(':');
      const date = new Date();
      date.setHours(parseInt(hours), parseInt(minutes));
      return format(date, 'h:mm a');
    } catch {
      return time;
    }
  };

  const nextPrayer = getNextPrayer();

  if (loading) {
    return (
      <div className="card text-center py-12">
        <Loader2 className="w-12 h-12 text-primary-600 mx-auto mb-4 animate-spin" />
        <p className="text-gray-600">Loading prayer times for {city.name}...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card text-center py-12">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p className="text-red-600 mb-4">{error}</p>
        <button 
          onClick={fetchPrayerTimes}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!prayerTimes?.data?.timings) {
    return (
      <div className="card text-center py-12">
        <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
        <p className="text-gray-600">No prayer times available for {city.name}</p>
      </div>
    );
  }

  const timings = prayerTimes.data.timings;
  const date = prayerTimes.data.date;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Prayer Times for {city.name}
        </h2>
        <p className="text-gray-600">
          {city.country} • {city.region}
        </p>
        {city.timezone && city.timezone !== 'UTC' && (
          <p className="text-sm text-gray-500 mt-1">
            Timezone: {city.timezone}
          </p>
        )}
      </div>

      {/* Date Display */}
      <div className="text-center">
        <p className="text-lg text-gray-700">
          {date.readable} • {date.hijri.date} {date.hijri.month.ar} {date.hijri.year}
        </p>
      </div>

      {/* Date Selector */}
      <div className="flex items-center justify-center space-x-4">
        <Calendar className="w-5 h-5 text-gray-500" />
        <input
          type="date"
          value={format(selectedDate, 'yyyy-MM-dd')}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      {/* Next Prayer Highlight */}
      {nextPrayer && (
        <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 text-center">
          <Clock className="w-6 h-6 text-primary-600 mx-auto mb-2" />
          <p className="text-sm text-gray-600">Next Prayer</p>
          <p className="text-xl font-bold text-primary-700">{nextPrayer.name}</p>
          <p className="text-lg text-primary-600">{nextPrayer.time}</p>
        </div>
      )}

      {/* Prayer Times Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(timings).map(([prayer, time]) => {
          if (!time) return null;
          
          const isNextPrayer = nextPrayer?.name === prayer;
          
          return (
            <div
              key={prayer}
              className={`card text-center p-4 transition-all duration-200 ${
                isNextPrayer 
                  ? 'bg-primary-50 border-primary-300 shadow-lg transform scale-105' 
                  : 'hover:shadow-md'
              }`}
            >
              <h3 className={`font-semibold mb-2 ${
                isNextPrayer ? 'text-primary-700' : 'text-gray-900'
              }`}>
                {prayer}
              </h3>
              <p className={`text-xl font-bold ${
                isNextPrayer ? 'text-primary-600' : 'text-gray-700'
              }`}>
                {formatTime(time)}
              </p>
              <p className="text-sm text-gray-500 mt-1">{time}</p>
            </div>
          );
        })}
      </div>

      {/* Calculation Method */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Calculation Method: {calculationMethod === 1 ? 'MWL' : calculationMethod === 2 ? 'ISNA' : calculationMethod === 3 ? 'Egypt' : calculationMethod === 4 ? 'Makkah' : calculationMethod === 5 ? 'Karachi' : calculationMethod === 6 ? 'Tehran' : calculationMethod === 7 ? 'Shia Ithna-Ashari' : 'Custom'}
        </p>
        <div className="mt-2 space-x-2">
          <button
            onClick={() => setCalculationMethod(1)}
            className={`px-3 py-1 text-xs rounded ${
              calculationMethod === 1 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            MWL
          </button>
          <button
            onClick={() => setCalculationMethod(2)}
            className={`px-3 py-1 text-xs rounded ${
              calculationMethod === 2 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ISNA
          </button>
          <button
            onClick={() => setCalculationMethod(3)}
            className={`px-3 py-1 text-xs rounded ${
              calculationMethod === 3 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Egypt
          </button>
          <button
            onClick={() => setCalculationMethod(4)}
            className={`px-3 py-1 text-xs rounded ${
              calculationMethod === 4 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Makkah
          </button>
          <button
            onClick={() => setCalculationMethod(5)}
            className={`px-3 py-1 text-xs rounded ${
              calculationMethod === 5 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Karachi
          </button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="text-center text-sm text-gray-500">
        <p>Data provided by Aladhan API</p>
        <p>Location: {city.name}, {city.country}</p>
        {city.latitude !== 0 && city.longitude !== 0 && (
          <p>Coordinates: {city.latitude.toFixed(4)}, {city.longitude.toFixed(4)}</p>
        )}
      </div>
    </div>
  );
}
