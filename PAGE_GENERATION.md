# Page Generation System

This document explains how to use the new page generation system that creates the structure `example.com/[country]/[city]` based on your `data.json` file.

## 🚀 Overview

The system automatically generates:
- **Country pages**: `/[country]` (e.g., `/pakistan`)
- **City pages**: `/[country]/[city]` (e.g., `/pakistan/lahore`)
- **Sitemap**: `public/sitemap.xml` with all URLs
- **Countries index**: `lib/countries-index.ts` for programmatic access

## 📁 File Structure

```
app/
├── [country]/
│   ├── page.tsx              # Country listing page
│   └── [city]/
│       └── page.tsx          # Individual city page
├── countries/
│   └── page.tsx              # All countries listing
├── cities/
│   └── page.tsx              # All cities listing
└── page.tsx                  # Homepage with country links

scripts/
└── generate-pages.js         # Page generation script

lib/
├── countries-index.ts        # Auto-generated countries data
└── cities.ts                 # Original cities data

data.json                     # Your countries and cities data
```

## 📊 Data Structure

Your `data.json` file should follow this format:

```json
{
  "Pakistan": ["lahore", "multan", "karachi", "islamabad"],
  "India": ["new-delhi", "mumbai", "bangalore", "chennai"],
  "Saudi Arabia": ["mecca", "medina", "riyadh", "jeddah"]
}
```

### Rules:
- **Country names**: Use proper capitalization (e.g., "Pakistan", "Saudi Arabia")
- **City names**: Use lowercase with hyphens (e.g., "lahore", "new-delhi", "ho-chi-minh-city")
- **URLs**: Automatically converted to lowercase with hyphens

## 🛠️ Usage

### 1. Generate Pages

```bash
# Generate all pages once
npm run generate

# Watch for changes in data.json
npm run generate:watch
```

### 2. Build and Deploy

```bash
# Build the application
npm run build

# Export static files
npm run export
```

### 3. Add New Countries/Cities

1. **Edit `data.json`**:
   ```json
   {
     "New Country": ["city1", "city2", "city3"]
   }
   ```

2. **Run generator**:
   ```bash
   npm run generate
   ```

3. **Build and deploy**:
   ```bash
   npm run build
   npm run export
   ```

## 🌐 URL Examples

### Country Pages
- `/pakistan` - Lists all cities in Pakistan
- `/india` - Lists all cities in India
- `/saudi-arabia` - Lists all cities in Saudi Arabia

### City Pages
- `/pakistan/lahore` - Prayer times for Lahore, Pakistan
- `/india/new-delhi` - Prayer times for New Delhi, India
- `/saudi-arabia/mecca` - Prayer times for Mecca, Saudi Arabia

## 📈 Generated Statistics

The system automatically generates:

- **Total Countries**: 49
- **Total Cities**: 306
- **Total URLs**: 357
- **Sitemap**: `public/sitemap.xml`
- **Countries Index**: `lib/countries-index.ts`

## 🔧 Customization

### Modify City Data

Edit the helper functions in `app/[country]/[city]/page.tsx`:

```typescript
function getCityCoordinates(cityName: string, countryName: string) {
  // Add your city coordinates here
  const coordinates = {
    'Lahore': { latitude: 31.5204, longitude: 74.3587 },
    // ... more cities
  };
  return coordinates[cityName] || { latitude: 0, longitude: 0 };
}

function getCityTimezone(cityName: string, countryName: string) {
  // Add your city timezones here
  const timezones = {
    'Pakistan': 'Asia/Karachi',
    // ... more countries
  };
  return timezones[countryName] || 'UTC';
}
```

### Modify Regions

Update the `getRegionByCountry` function to map countries to regions:

```typescript
function getRegionByCountry(country: string): string {
  const regionMap = {
    'Pakistan': 'South Asia',
    'India': 'South Asia',
    // ... more mappings
  };
  return regionMap[country] || 'Unknown';
}
```

## 📱 SEO Features

Each generated page includes:

- **Dynamic meta tags** based on country/city names
- **Open Graph data** for social media sharing
- **Structured URLs** for better search engine indexing
- **Sitemap entries** with proper priorities
- **Breadcrumb navigation** between pages

## 🚨 Important Notes

### 1. Data Format
- Ensure city names in `data.json` use hyphens (e.g., "ho-chi-minh-city")
- Country names should be properly capitalized
- Avoid special characters in names

### 2. Build Process
- Always run `npm run generate` after modifying `data.json`
- The build will fail if `generateStaticParams` doesn't match your data
- Test locally with `npm run dev` before deploying

### 3. File Naming
- Country slugs: `Pakistan` → `/pakistan`
- City slugs: `lahore` → `/pakistan/lahore`
- URLs are automatically generated and cannot be manually changed

## 🔍 Troubleshooting

### Build Errors
```bash
# If build fails, check:
npm run generate  # Regenerate pages
npm run build     # Try building again
```

### Missing Cities
- Verify city names exist in `data.json`
- Check for typos in city names
- Ensure city names use hyphens, not spaces

### 404 Errors
- Run `npm run generate` to create missing pages
- Check that `data.json` is valid JSON
- Verify country and city slugs match exactly

## 📚 API Integration

The system integrates with the Aladhan Prayer Times API:

- **Automatic coordinate lookup** for prayer time calculations
- **Timezone detection** for accurate time display
- **Multiple calculation methods** support
- **Error handling** for API failures

## 🚀 Deployment

### Static Export
```bash
npm run generate  # Generate all pages
npm run build     # Build the application
npm run export    # Export static files
```

### Hosting
- Deploy to Vercel, Netlify, or any static hosting
- All pages are pre-generated for optimal performance
- Sitemap automatically included for search engines

## 📊 Performance

- **Static Generation**: All pages pre-built at build time
- **Fast Loading**: No server-side rendering delays
- **SEO Optimized**: Search engines can crawl all pages immediately
- **Scalable**: Easy to add thousands of cities without performance impact

## 🔄 Automation

### Watch Mode
```bash
npm run generate:watch
```
Automatically regenerates pages when `data.json` changes.

### CI/CD Integration
Add to your deployment pipeline:
```yaml
- name: Generate Pages
  run: npm run generate
- name: Build Application
  run: npm run build
- name: Deploy
  run: npm run export
```

## 📞 Support

If you encounter issues:

1. Check the console output from `npm run generate`
2. Verify `data.json` format is correct
3. Ensure all city names use hyphens
4. Run `npm run generate` after any data changes

---

**Happy generating! 🎉**
