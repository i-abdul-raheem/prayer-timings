import axios from 'axios';
import { PrayerTimesResponse, PrayerTimes } from './types';

class PrayerTimesAPI {
  private static instance: PrayerTimesAPI;
  private baseURL = 'https://api.aladhan.com/v1';

  private constructor() {}

  /**
   * Ensure this code only runs on the server to avoid browser CORS issues.
   * If this file is imported in a client component and methods are called
   * from the browser, CORS will block the requests to third-party APIs.
   */
  private ensureServerSide() {
    if (typeof window !== 'undefined') {
      throw new Error(
        'PrayerTimesAPI methods are intended for server-side usage only. Call them in a Next.js API route, server component, getServerSideProps, or revalidate on the server to avoid CORS.'
      );
    }
  }

  async getPrayerTimes(params: {
    latitude: number;
    longitude: number;
    method?: number;
    school?: number;
    date?: string;
    timeformat?: number;
    tune?: string;
  }): Promise<PrayerTimesResponse> {
    this.ensureServerSide();
    try {
      const response = await axios.get(`${this.baseURL}/timings`, {
        params,
        timeout: 15000
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch prayer times: ${error}`);
    }
  }

  // New method: Get prayer times by city name and country
  async getPrayerTimesByCity(params: {
    city: string;
    country: string;
    method?: number;
    school?: number;
    date?: string;
    timeformat?: number;
    tune?: string;
  }): Promise<PrayerTimesResponse> {
    this.ensureServerSide();
    try {
      // First, try to get coordinates for the city using a geocoding service
      const coordinates = await this.getCityCoordinates(params.city, params.country);
      
      // Then use the coordinates to get prayer times
      return await this.getPrayerTimes({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
        method: params.method,
        school: params.school,
        date: params.date,
        timeformat: params.timeformat,
        tune: params.tune
      });
    } catch (error) {
      throw new Error(`Failed to fetch prayer times for ${params.city}, ${params.country}: ${error}`);
    }
  }

  // Get city coordinates using a free geocoding service
  private async getCityCoordinates(city: string, country: string): Promise<{ latitude: number; longitude: number }> {
    this.ensureServerSide();
    try {
      // Use OpenStreetMap Nominatim (free geocoding service)
      const query = encodeURIComponent(`${city}, ${country}`);
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`, {
        headers: {
          'User-Agent': 'prayer-timings-app/1.0 (contact: youremail@example.com)',
          'Referer': 'https://yourdomain.com/'
        }
      });
      
      if (response.data && response.data.length > 0) {
        const location = response.data[0];
        return {
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon)
        };
      }
      
      // Fallback: try with just city name
      const cityQuery = encodeURIComponent(city);
      const cityResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${cityQuery}&format=json&limit=1`, {
        headers: {
          'User-Agent': 'prayer-timings-app/1.0 (contact: youremail@example.com)',
          'Referer': 'https://yourdomain.com/'
        }
      });
      
      if (cityResponse.data && cityResponse.data.length > 0) {
        const location = cityResponse.data[0];
        return {
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon)
        };
      }
      
      throw new Error(`Could not find coordinates for ${city}, ${country}`);
    } catch (error) {
      // If geocoding fails, throw a helpful error
      throw new Error(`Geocoding failed for ${city}, ${country}. Please provide coordinates manually.`);
    }
  }

  async getPrayerTimesByCityName(cityName: string, countryName: string, date?: string): Promise<PrayerTimesResponse> {
    return this.getPrayerTimesByCity({
      city: cityName,
      country: countryName,
      date: date
    });
  }

  async getCalendar(params: {
    latitude: number;
    longitude: number;
    month: number;
    year: number;
    method?: number;
    school?: number;
    timeformat?: number;
    tune?: string;
  }): Promise<any> {
    this.ensureServerSide();
    try {
      const response = await axios.get(`${this.baseURL}/calendar`, {
        params,
        timeout: 15000
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch calendar: ${error}`);
    }
  }

  async getQiblaDirection(params: {
    latitude: number;
    longitude: number;
  }): Promise<any> {
    this.ensureServerSide();
    try {
      const response = await axios.get(`${this.baseURL}/qibla`, {
        params,
        timeout: 15000
      });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch qibla direction: ${error}`);
    }
  }

  // Get qibla direction by city name
  async getQiblaDirectionByCity(city: string, country: string): Promise<any> {
    this.ensureServerSide();
    try {
      const coordinates = await this.getCityCoordinates(city, country);
      return await this.getQiblaDirection(coordinates);
    } catch (error) {
      throw new Error(`Failed to fetch qibla direction for ${city}, ${country}: ${error}`);
    }
  }
}

export const prayerTimesAPI = PrayerTimesAPI.getInstance();
