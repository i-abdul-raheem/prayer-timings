import axios from 'axios';
import { PrayerTimesResponse, PrayerTimes } from './types';

class PrayerTimesAPI {
  private static instance: PrayerTimesAPI;
  private baseURL = 'https://api.aladhan.com/v1';

  private constructor() {}

  public static getInstance(): PrayerTimesAPI {
    if (!PrayerTimesAPI.instance) {
      PrayerTimesAPI.instance = new PrayerTimesAPI();
    }
    return PrayerTimesAPI.instance;
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
    try {
      const response = await axios.get(`${this.baseURL}/timings`, { params });
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
    try {
      // Use OpenStreetMap Nominatim (free geocoding service)
      const query = encodeURIComponent(`${city}, ${country}`);
      const response = await axios.get(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`);
      
      if (response.data && response.data.length > 0) {
        const location = response.data[0];
        return {
          latitude: parseFloat(location.lat),
          longitude: parseFloat(location.lon)
        };
      }
      
      // Fallback: try with just city name
      const cityQuery = encodeURIComponent(city);
      const cityResponse = await axios.get(`https://nominatim.openstreetmap.org/search?q=${cityQuery}&format=json&limit=1`);
      
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
    try {
      const response = await axios.get(`${this.baseURL}/calendar`, { params });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch calendar: ${error}`);
    }
  }

  async getQiblaDirection(params: {
    latitude: number;
    longitude: number;
  }): Promise<any> {
    try {
      const response = await axios.get(`${this.baseURL}/qibla`, { params });
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch qibla direction: ${error}`);
    }
  }

  // Get qibla direction by city name
  async getQiblaDirectionByCity(city: string, country: string): Promise<any> {
    try {
      const coordinates = await this.getCityCoordinates(city, country);
      return await this.getQiblaDirection(coordinates);
    } catch (error) {
      throw new Error(`Failed to fetch qibla direction for ${city}, ${country}: ${error}`);
    }
  }
}

export const prayerTimesAPI = PrayerTimesAPI.getInstance();
