// components/Footer.tsx
"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1) Logo + description */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 group">
              <span className="text-gradient text-2xl font-bold">Prayer Times</span>
            </Link>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Accurate prayer times worldwide with reliable calculations and global coverage.
              Find Fajr, Dhuhr, Asr, Maghrib, and Isha times for your city.
            </p>
          </div>

          {/* 2) Important Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Links</h3>
            <ul className="space-y-3 text-gray-700">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li><Link href="/#contact-us" className="hover:text-primary-600">Contact Us</Link></li>
              <li><Link href="/#why-us" className="hover:text-primary-600">Why Choose Us</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-primary-600">Sitemap</Link></li>
            </ul>
          </div>

          {/* 3) Contact button & Social */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in touch</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-4">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on X/Twitter"
                  className="inline-flex rounded-full border border-gray-200 p-2 hover:bg-gray-100"
                >
                  {/* X/Twitter */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3l18 18M21 3L3 21" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on Facebook"
                  className="inline-flex rounded-full border border-gray-200 p-2 hover:bg-gray-100"
                >
                  {/* Facebook */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M14 9h3V6h-3a3 3 0 00-3 3v3H8v3h3v6h3v-6h3l1-3h-4V9a1 1 0 011-1z" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow on Instagram"
                  className="inline-flex rounded-full border border-gray-200 p-2 hover:bg-gray-100"
                >
                  {/* Instagram */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Prayer Times. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-primary-600">Privacy</Link>
            <Link href="/terms" className="hover:text-primary-600">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}