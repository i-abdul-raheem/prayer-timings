# Prayer Times - Worldwide Islamic Prayer Times

A comprehensive Next.js application that provides accurate prayer times for cities worldwide using the Aladhan Prayer Times API.

## Features

- 🌍 **Global Coverage**: Prayer times for 100+ cities across all continents
- 🕐 **Accurate Calculations**: Multiple calculation methods supported
- 🔍 **Smart Search**: Find cities by name, country, or region
- 📱 **Responsive Design**: Modern, mobile-friendly interface
- 🎯 **SEO Optimized**: Built with SEO best practices for better discoverability
- 🚀 **Fast Performance**: Optimized for speed and user experience

## Prayer Times Included

- **Fajr** (Dawn)
- **Sunrise**
- **Dhuhr** (Noon)
- **Asr** (Afternoon)
- **Sunset**
- **Maghrib** (Evening)
- **Isha** (Night)
- **Imsak** (Pre-dawn)
- **Midnight**
- **First Third of Night**
- **Last Third of Night**

## Calculation Methods

The application supports 15 different calculation methods:

1. Muslim World League
2. Islamic Society of North America (ISNA) - Default
3. Egyptian General Authority of Survey
4. Umm Al-Qura University, Makkah
5. University Of Islamic Sciences, Karachi
6. Institute of Geophysics, Tehran
7. Shia Ithna Ashari
8. Gulf Region
9. Kuwait
10. Qatar
11. Majlis Ugama Islam Singapura
12. Union Organization Islamic de France
13. Diyanet İşleri Başkanlığı
14. Spiritual Administration of Muslims of Russia
15. Moonsighting Committee Worldwide

## Regions Covered

- **Middle East**: Saudi Arabia, UAE, Egypt, Turkey, Iran, Iraq, Syria
- **South Asia**: India, Pakistan, Bangladesh
- **Asia**: Indonesia, Malaysia, Singapore, Thailand, Vietnam, Cambodia, Laos, Myanmar
- **Europe**: UK, France, Germany, Spain, Italy, Netherlands, Belgium, Austria, Czech Republic, Hungary
- **North America**: USA, Canada, Mexico
- **Africa**: Nigeria, DR Congo, Angola, Tanzania, Kenya, Ethiopia, Morocco, Algeria, Tunisia
- **Oceania**: Australia, New Zealand
- **South America**: Brazil, Argentina, Peru, Colombia, Chile, Venezuela

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **HTTP Client**: Axios
- **API**: Aladhan Prayer Times API

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/prayer-timings.git
cd prayer-timings
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Static Export

```bash
npm run export
```

## Project Structure

```
prayer-timings/
├── app/                    # Next.js App Router
│   ├── city/[slug]/       # Dynamic city pages
│   ├── region/[slug]/     # Dynamic region pages
│   ├── cities/            # All cities listing
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/             # React components
│   ├── CityCard.tsx       # City display card
│   ├── PrayerTimesDisplay.tsx # Prayer times display
│   ├── SearchBar.tsx      # Search functionality
│   └── ...                # Other components
├── lib/                    # Utility functions
│   ├── api.ts             # API service
│   ├── cities.ts          # Cities data
│   └── types.ts           # TypeScript types
├── public/                 # Static assets
└── package.json           # Dependencies and scripts
```

## API Integration

The application integrates with the [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api) to fetch accurate prayer times. The API provides:

- Prayer times based on coordinates or city names
- Multiple calculation methods
- Hijri and Gregorian date support
- Timezone handling
- Qibla direction calculations

## SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Open Graph**: Rich previews for social media
- **Structured Data**: Semantic HTML and proper heading hierarchy
- **Performance**: Optimized loading and Core Web Vitals
- **Accessibility**: ARIA labels and keyboard navigation
- **Mobile-First**: Responsive design for all devices

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api) for providing accurate prayer time calculations
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## Support

If you have any questions or need support, please open an issue on GitHub or contact the development team.

---

**Note**: This application is designed to provide accurate prayer times for educational and informational purposes. Users should verify prayer times with their local Islamic authorities for religious observances.
