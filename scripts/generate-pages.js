#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the data.json file
const dataPath = path.join(__dirname, '..', 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

console.log('🚀 Starting page generation...');
console.log(`📊 Found ${Object.keys(data).length} countries with cities`);

// Count total cities
let totalCities = 0;
Object.values(data).forEach(cities => {
  totalCities += cities.length;
});
console.log(`🏙️  Total cities: ${totalCities}`);

// Generate sitemap entries
const sitemapEntries = [];
const baseUrl = 'https://prayer-timings.com';

// Add static pages
sitemapEntries.push({
  url: baseUrl,
  lastModified: new Date().toISOString(),
  changeFrequency: 'daily',
  priority: 1,
});

sitemapEntries.push({
  url: `${baseUrl}/cities`,
  lastModified: new Date().toISOString(),
  changeFrequency: 'weekly',
  priority: 0.8,
});

// Add country pages
Object.keys(data).forEach(country => {
  const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
  sitemapEntries.push({
    url: `${baseUrl}/${countrySlug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.7,
  });
});

// Add city pages
Object.entries(data).forEach(([country, cities]) => {
  const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
  cities.forEach(city => {
    sitemapEntries.push({
      url: `${baseUrl}/${countrySlug}/${city}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.6,
    });
  });
});

// Generate sitemap.xml
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml);
console.log(`✅ Generated sitemap.xml with ${sitemapEntries.length} URLs`);

// Generate countries index page
const countriesIndex = Object.keys(data).map(country => {
  const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
  const cityCount = data[country].length;
  return `  {
    name: "${country}",
    slug: "${countrySlug}",
    cityCount: ${cityCount},
    cities: ${JSON.stringify(data[country])}
  }`;
}).join(',\n');

const countriesIndexContent = `// Auto-generated countries index
export const countriesData = [
${countriesIndex}
];

export const getCountryBySlug = (slug: string) => {
  return countriesData.find(country => country.slug === slug);
};

export const getAllCountries = () => {
  return countriesData;
};

export const getTotalCities = () => {
  return countriesData.reduce((total, country) => total + country.cityCount, 0);
};
`;

// Write countries index
const countriesIndexPath = path.join(__dirname, '..', 'lib', 'countries-index.ts');
fs.writeFileSync(countriesIndexPath, countriesIndexContent);
console.log('✅ Generated countries index file');

// Generate README with statistics
const readmeStats = `## 📊 Current Statistics

- **Total Countries**: ${Object.keys(data).length}
- **Total Cities**: ${totalCities}
- **Regions Covered**: 8 (Middle East, South Asia, Asia, Europe, North America, Africa, Oceania, South America)

### Countries by City Count

${Object.entries(data)
  .sort(([,a], [,b]) => b.length - a.length)
  .map(([country, cities]) => `- **${country}**: ${cities.length} cities`)
  .join('\n')}

### URL Structure

The application now supports the following URL patterns:

- **Homepage**: \`/\`
- **All Cities**: \`/cities\`
- **Country Page**: \`/[country]\` (e.g., \`/pakistan\`)
- **City Page**: \`/[country]/[city]\` (e.g., \`/pakistan/lahore\`)

### Generated Pages

${Object.entries(data).map(([country, cities]) => {
  const countrySlug = country.toLowerCase().replace(/\s+/g, '-');
  return `#### ${country} (\`/${countrySlug}\`)
${cities.map(city => `- [${city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}](\`/${countrySlug}/${city}\`)`).join('\n')}`;
}).join('\n\n')}
`;

console.log('📝 Generated README statistics');

// Summary
console.log('\n🎉 Page generation completed successfully!');
console.log('\n📋 Summary:');
console.log(`   Countries: ${Object.keys(data).length}`);
console.log(`   Cities: ${totalCities}`);
console.log(`   Total URLs: ${sitemapEntries.length}`);
console.log(`   Sitemap: public/sitemap.xml`);
console.log(`   Countries Index: lib/countries-index.ts`);
console.log('\n🚀 You can now build and deploy your application!');
console.log('   Run: npm run build');
console.log('   Deploy: npm run export');
