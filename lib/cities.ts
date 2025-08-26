export interface City {
  name: string;
  country: string;
  region: string;
  latitude: number;
  longitude: number;
  timezone: string;
  population?: number;
}

export const cities: City[] = [
  // Middle East
  { name: "Mecca", country: "Saudi Arabia", region: "Middle East", latitude: 21.4225, longitude: 39.8262, timezone: "Asia/Riyadh" },
  { name: "Medina", country: "Saudi Arabia", region: "Middle East", latitude: 24.5247, longitude: 39.5692, timezone: "Asia/Riyadh" },
  { name: "Riyadh", country: "Saudi Arabia", region: "Middle East", latitude: 24.7136, longitude: 46.6753, timezone: "Asia/Riyadh" },
  { name: "Dubai", country: "UAE", region: "Middle East", latitude: 25.2048, longitude: 55.2708, timezone: "Asia/Dubai" },
  { name: "Abu Dhabi", country: "UAE", region: "Middle East", latitude: 24.4539, longitude: 54.3773, timezone: "Asia/Dubai" },
  { name: "Cairo", country: "Egypt", region: "Middle East", latitude: 30.0444, longitude: 31.2357, timezone: "Africa/Cairo" },
  { name: "Istanbul", country: "Turkey", region: "Middle East", latitude: 41.0082, longitude: 28.9784, timezone: "Europe/Istanbul" },
  { name: "Tehran", country: "Iran", region: "Middle East", latitude: 35.6892, longitude: 51.3890, timezone: "Asia/Tehran" },
  { name: "Baghdad", country: "Iraq", region: "Middle East", latitude: 33.3152, longitude: 44.3661, timezone: "Asia/Baghdad" },
  { name: "Damascus", country: "Syria", region: "Middle East", latitude: 33.5138, longitude: 36.2765, timezone: "Asia/Damascus" },

  // Asia
  { name: "Jakarta", country: "Indonesia", region: "Asia", latitude: -6.2088, longitude: 106.8456, timezone: "Asia/Jakarta" },
  { name: "Kuala Lumpur", country: "Malaysia", region: "Asia", latitude: 3.1390, longitude: 101.6869, timezone: "Asia/Kuala_Lumpur" },
  { name: "Singapore", country: "Singapore", region: "Asia", latitude: 1.3521, longitude: 103.8198, timezone: "Asia/Singapore" },
  { name: "Bangkok", country: "Thailand", region: "Asia", latitude: 13.7563, longitude: 100.5018, timezone: "Asia/Bangkok" },
  { name: "Manila", country: "Philippines", region: "Asia", latitude: 14.5995, longitude: 120.9842, timezone: "Asia/Manila" },
  { name: "Ho Chi Minh City", country: "Vietnam", region: "Asia", latitude: 10.8231, longitude: 106.6297, timezone: "Asia/Ho_Chi_Minh" },
  { name: "Hanoi", country: "Vietnam", region: "Asia", latitude: 21.0285, longitude: 105.8542, timezone: "Asia/Ho_Chi_Minh" },
  { name: "Phnom Penh", country: "Cambodia", region: "Asia", latitude: 11.5564, longitude: 104.9282, timezone: "Asia/Phnom_Penh" },
  { name: "Vientiane", country: "Laos", region: "Asia", latitude: 17.9757, longitude: 102.6331, timezone: "Asia/Vientiane" },
  { name: "Yangon", country: "Myanmar", region: "Asia", latitude: 16.8661, longitude: 96.1951, timezone: "Asia/Yangon" },

  // South Asia
  { name: "New Delhi", country: "India", region: "South Asia", latitude: 28.6139, longitude: 77.2090, timezone: "Asia/Kolkata" },
  { name: "Mumbai", country: "India", region: "South Asia", latitude: 19.0760, longitude: 72.8777, timezone: "Asia/Kolkata" },
  { name: "Bangalore", country: "India", region: "South Asia", latitude: 12.9716, longitude: 77.5946, timezone: "Asia/Kolkata" },
  { name: "Chennai", country: "India", region: "South Asia", latitude: 13.0827, longitude: 80.2707, timezone: "Asia/Kolkata" },
  { name: "Kolkata", country: "India", region: "South Asia", latitude: 22.5726, longitude: 88.3639, timezone: "Asia/Kolkata" },
  { name: "Hyderabad", country: "India", region: "South Asia", latitude: 17.3850, longitude: 78.4867, timezone: "Asia/Kolkata" },
  { name: "Pune", country: "India", region: "South Asia", latitude: 18.5204, longitude: 73.8567, timezone: "Asia/Kolkata" },
  { name: "Ahmedabad", country: "India", region: "South Asia", latitude: 23.0225, longitude: 72.5714, timezone: "Asia/Kolkata" },
  { name: "Surat", country: "India", region: "South Asia", latitude: 21.1702, longitude: 72.8311, timezone: "Asia/Kolkata" },
  { name: "Jaipur", country: "India", region: "South Asia", latitude: 26.9124, longitude: 75.7873, timezone: "Asia/Kolkata" },

  // Pakistan
  { name: "Karachi", country: "Pakistan", region: "South Asia", latitude: 24.8607, longitude: 67.0011, timezone: "Asia/Karachi" },
  { name: "Lahore", country: "Pakistan", region: "South Asia", latitude: 31.5204, longitude: 74.3587, timezone: "Asia/Karachi" },
  { name: "Faisalabad", country: "Pakistan", region: "South Asia", latitude: 31.4180, longitude: 73.0790, timezone: "Asia/Karachi" },
  { name: "Rawalpindi", country: "Pakistan", region: "South Asia", latitude: 33.6844, longitude: 73.0479, timezone: "Asia/Karachi" },
  { name: "Multan", country: "Pakistan", region: "South Asia", latitude: 30.1575, longitude: 71.5249, timezone: "Asia/Karachi" },
  { name: "Islamabad", country: "Pakistan", region: "South Asia", latitude: 33.6844, longitude: 73.0479, timezone: "Asia/Karachi" },
  { name: "Peshawar", country: "Pakistan", region: "South Asia", latitude: 34.0150, longitude: 71.5249, timezone: "Asia/Karachi" },
  { name: "Quetta", country: "Pakistan", region: "South Asia", latitude: 30.1798, longitude: 66.9749, timezone: "Asia/Karachi" },
  { name: "Sialkot", country: "Pakistan", region: "South Asia", latitude: 32.4927, longitude: 74.5313, timezone: "Asia/Karachi" },
  { name: "Gujranwala", country: "Pakistan", region: "South Asia", latitude: 32.1877, longitude: 74.1945, timezone: "Asia/Karachi" },

  // Bangladesh
  { name: "Dhaka", country: "Bangladesh", region: "South Asia", latitude: 23.8103, longitude: 90.4125, timezone: "Asia/Dhaka" },
  { name: "Chittagong", country: "Bangladesh", region: "South Asia", latitude: 22.3419, longitude: 91.8132, timezone: "Asia/Dhaka" },
  { name: "Khulna", country: "Bangladesh", region: "South Asia", latitude: 22.8456, longitude: 89.5403, timezone: "Asia/Dhaka" },
  { name: "Rajshahi", country: "Bangladesh", region: "South Asia", latitude: 24.3745, longitude: 88.6042, timezone: "Asia/Dhaka" },
  { name: "Sylhet", country: "Bangladesh", region: "South Asia", latitude: 24.8949, longitude: 91.8687, timezone: "Asia/Dhaka" },

  // Europe
  { name: "London", country: "UK", region: "Europe", latitude: 51.5074, longitude: -0.1278, timezone: "Europe/London" },
  { name: "Paris", country: "France", region: "Europe", latitude: 48.8566, longitude: 2.3522, timezone: "Europe/Paris" },
  { name: "Berlin", country: "Germany", region: "Europe", latitude: 52.5200, longitude: 13.4050, timezone: "Europe/Berlin" },
  { name: "Madrid", country: "Spain", region: "Europe", latitude: 40.4168, longitude: -3.7038, timezone: "Europe/Madrid" },
  { name: "Rome", country: "Italy", region: "Europe", latitude: 41.9028, longitude: 12.4964, timezone: "Europe/Rome" },
  { name: "Amsterdam", country: "Netherlands", region: "Europe", latitude: 52.3676, longitude: 4.9041, timezone: "Europe/Amsterdam" },
  { name: "Brussels", country: "Belgium", region: "Europe", latitude: 50.8503, longitude: 4.3517, timezone: "Europe/Brussels" },
  { name: "Vienna", country: "Austria", region: "Europe", latitude: 48.2082, longitude: 16.3738, timezone: "Europe/Vienna" },
  { name: "Prague", country: "Czech Republic", region: "Europe", latitude: 50.0755, longitude: 14.4378, timezone: "Europe/Prague" },
  { name: "Budapest", country: "Hungary", region: "Europe", latitude: 47.4979, longitude: 19.0402, timezone: "Europe/Budapest" },

  // North America
  { name: "New York", country: "USA", region: "North America", latitude: 40.7128, longitude: -74.0060, timezone: "America/New_York" },
  { name: "Los Angeles", country: "USA", region: "North America", latitude: 34.0522, longitude: -118.2437, timezone: "America/Los_Angeles" },
  { name: "Chicago", country: "USA", region: "North America", latitude: 41.8781, longitude: -87.6298, timezone: "America/Chicago" },
  { name: "Houston", country: "USA", region: "North America", latitude: 29.7604, longitude: -95.3698, timezone: "America/Chicago" },
  { name: "Phoenix", country: "USA", region: "North America", latitude: 33.4484, longitude: -112.0740, timezone: "America/Phoenix" },
  { name: "Philadelphia", country: "USA", region: "North America", latitude: 39.9526, longitude: -75.1652, timezone: "America/New_York" },
  { name: "San Antonio", country: "USA", region: "North America", latitude: 29.4241, longitude: -98.4936, timezone: "America/Chicago" },
  { name: "San Diego", country: "USA", region: "North America", latitude: 32.7157, longitude: -117.1611, timezone: "America/Los_Angeles" },
  { name: "Dallas", country: "USA", region: "North America", latitude: 32.7767, longitude: -96.7970, timezone: "America/Chicago" },
  { name: "San Jose", country: "USA", region: "North America", latitude: 37.3382, longitude: -121.8863, timezone: "America/Los_Angeles" },

  // Canada
  { name: "Toronto", country: "Canada", region: "North America", latitude: 43.6532, longitude: -79.3832, timezone: "America/Toronto" },
  { name: "Montreal", country: "Canada", region: "North America", latitude: 45.5017, longitude: -73.5673, timezone: "America/Montreal" },
  { name: "Vancouver", country: "Canada", region: "North America", latitude: 49.2827, longitude: -123.1207, timezone: "America/Vancouver" },
  { name: "Calgary", country: "Canada", region: "North America", latitude: 51.0447, longitude: -114.0719, timezone: "America/Edmonton" },
  { name: "Edmonton", country: "Canada", region: "North America", latitude: 53.5461, longitude: -113.4938, timezone: "America/Edmonton" },

  // Africa
  { name: "Lagos", country: "Nigeria", region: "Africa", latitude: 6.5244, longitude: 3.3792, timezone: "Africa/Lagos" },
  { name: "Cairo", country: "Egypt", region: "Africa", latitude: 30.0444, longitude: 31.2357, timezone: "Africa/Cairo" },
  { name: "Kinshasa", country: "DR Congo", region: "Africa", latitude: -4.4419, longitude: 15.2663, timezone: "Africa/Kinshasa" },
  { name: "Luanda", country: "Angola", region: "Africa", latitude: -8.8383, longitude: 13.2343, timezone: "Africa/Luanda" },
  { name: "Dar es Salaam", country: "Tanzania", region: "Africa", latitude: -6.8235, longitude: 39.2695, timezone: "Africa/Dar_es_Salaam" },
  { name: "Nairobi", country: "Kenya", region: "Africa", latitude: -1.2921, longitude: 36.8219, timezone: "Africa/Nairobi" },
  { name: "Addis Ababa", country: "Ethiopia", region: "Africa", latitude: 9.0320, longitude: 38.7636, timezone: "Africa/Addis_Ababa" },
  { name: "Casablanca", country: "Morocco", region: "Africa", latitude: 33.5731, longitude: -7.5898, timezone: "Africa/Casablanca" },
  { name: "Algiers", country: "Algeria", region: "Africa", latitude: 36.7538, longitude: 3.0588, timezone: "Africa/Algiers" },
  { name: "Tunis", country: "Tunisia", region: "Africa", latitude: 36.8065, longitude: 10.1815, timezone: "Africa/Tunis" },

  // Australia & Oceania
  { name: "Sydney", country: "Australia", region: "Oceania", latitude: -33.8688, longitude: 151.2093, timezone: "Australia/Sydney" },
  { name: "Melbourne", country: "Australia", region: "Oceania", latitude: -37.8136, longitude: 144.9631, timezone: "Australia/Melbourne" },
  { name: "Brisbane", country: "Australia", region: "Oceania", latitude: -27.4698, longitude: 153.0251, timezone: "Australia/Brisbane" },
  { name: "Perth", country: "Australia", region: "Oceania", latitude: -31.9505, longitude: 115.8605, timezone: "Australia/Perth" },
  { name: "Adelaide", country: "Australia", region: "Oceania", latitude: -34.9285, longitude: 138.6007, timezone: "Australia/Adelaide" },
  { name: "Auckland", country: "New Zealand", region: "Oceania", latitude: -36.8485, longitude: 174.7633, timezone: "Pacific/Auckland" },
  { name: "Wellington", country: "New Zealand", region: "Oceania", latitude: -41.2866, longitude: 174.7756, timezone: "Pacific/Auckland" },

  // South America
  { name: "São Paulo", country: "Brazil", region: "South America", latitude: -23.5505, longitude: -46.6333, timezone: "America/Sao_Paulo" },
  { name: "Rio de Janeiro", country: "Brazil", region: "South America", latitude: -22.9068, longitude: -43.1729, timezone: "America/Sao_Paulo" },
  { name: "Buenos Aires", country: "Argentina", region: "South America", latitude: -34.6118, longitude: -58.3960, timezone: "America/Argentina/Buenos_Aires" },
  { name: "Lima", country: "Peru", region: "South America", latitude: -12.0464, longitude: -77.0428, timezone: "America/Lima" },
  { name: "Bogotá", country: "Colombia", region: "South America", latitude: 4.7110, longitude: -74.0721, timezone: "America/Bogota" },
  { name: "Santiago", country: "Chile", region: "South America", latitude: -33.4489, longitude: -70.6693, timezone: "America/Santiago" },
  { name: "Caracas", country: "Venezuela", region: "South America", latitude: 10.4806, longitude: -66.9036, timezone: "America/Caracas" },
  { name: "Mexico City", country: "Mexico", region: "North America", latitude: 19.4326, longitude: -99.1332, timezone: "America/Mexico_City" }
];

export const getCitiesByRegion = (region: string): City[] => {
  return cities.filter(city => city.region === region);
};

export const getCitiesByCountry = (country: string): City[] => {
  return cities.filter(city => city.country === country);
};

export const searchCities = (query: string): City[] => {
  const lowercaseQuery = query.toLowerCase();
  return cities.filter(city => 
    city.name.toLowerCase().includes(lowercaseQuery) ||
    city.country.toLowerCase().includes(lowercaseQuery) ||
    city.region.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCityBySlug = (slug: string): City | undefined => {
  const [cityName, countryName] = slug.split('-').map(part => 
    part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  );
  
  return cities.find(city => 
    city.name.toLowerCase().replace(/\s+/g, '-') === cityName.toLowerCase() &&
    city.country.toLowerCase().replace(/\s+/g, '-') === countryName.toLowerCase()
  );
};
