// app/privacy/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Prayer Times",
  description:
    "Privacy Policy for Prayer Times: how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Last updated: <time dateTime="2025-08-30">Aug 30, 2025</time>
          </p>

          <div className="prose max-w-4xl mx-auto prose-headings:scroll-mt-20">
            <p>
              This Privacy Policy explains how <strong>Prayer Times</strong> (“we”,
              “us”, or “our”) collects, uses, and shares information when you use
              our website and services.
            </p>

            <h2 id="information-we-collect">1. Information we collect</h2>
            <ul>
              <li>
                <strong>Usage data:</strong> basic analytics (pages viewed, referrer,
                device/browser info, approximate location) to improve our service.
              </li>
              <li>
                <strong>Contact data (optional):</strong> the information you submit
                via forms (e.g., name, email, message).
              </li>
              <li>
                <strong>Cookies:</strong> used for essential functionality and, if
                enabled, analytics. You can control cookies in your browser settings.
              </li>
            </ul>

            <h2 id="how-we-use">2. How we use your information</h2>
            <ul>
              <li>To provide, operate, and improve our services and features.</li>
              <li>To respond to your inquiries and support requests.</li>
              <li>To monitor usage, detect, prevent, and address security issues.</li>
            </ul>

            <h2 id="sharing">3. Sharing & third parties</h2>
            <p>
              We do not sell your personal data. We may share limited data with
              service providers (e.g., hosting, analytics, email) solely to operate
              our service. These providers are bound by confidentiality and data
              protection obligations.
            </p>

            <h2 id="data-retention">4. Data retention</h2>
            <p>
              We retain data only as long as necessary for the purposes outlined in
              this Policy, unless a longer retention period is required by law.
            </p>

            <h2 id="your-rights">5. Your rights</h2>
            <p>
              Depending on your location, you may have rights to access, correct,
              delete, or restrict the processing of your personal data. To make a
              request, contact us at{" "}
              <a href="mailto:hello@prayertimes.example">hello@prayertimes.example</a>.
            </p>

            <h2 id="security">6. Security</h2>
            <p>
              We implement reasonable technical and organizational measures to
              protect your information. However, no method of transmission or
              storage is 100% secure.
            </p>

            <h2 id="children">7. Children’s privacy</h2>
            <p>
              Our services are not directed to children under 13 (or applicable age
              in your jurisdiction). We do not knowingly collect data from children.
            </p>

            <h2 id="international">8. International transfers</h2>
            <p>
              Your information may be processed in countries other than your own.
              Where required, we rely on appropriate safeguards for such transfers.
            </p>

            <h2 id="changes">9. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We’ll post the
              new version on this page and update the “Last updated” date.
            </p>

            <h2 id="contact">10. Contact us</h2>
            <p>
              Questions? Email{" "}
              <a href="mailto:hello@prayertimes.example">hello@prayertimes.example</a>{" "}
              or visit our <Link href="/contact">Contact</Link> page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}