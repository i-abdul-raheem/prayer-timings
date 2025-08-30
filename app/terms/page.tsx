// app/terms/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Prayer Times",
  description: "Terms of Service for using the Prayer Times website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Terms of Service
          </h1>
          <p className="text-center text-gray-500 mb-12">
            Last updated: <time dateTime="2025-08-30">Aug 30, 2025</time>
          </p>

          <div className="prose max-w-4xl mx-auto prose-headings:scroll-mt-20">
            <p>
              Welcome to <strong>Prayer Times</strong>. By accessing or using our
              website and services, you agree to these Terms of Service (“Terms”).
              If you do not agree, please do not use the service.
            </p>

            <h2 id="use">1. Use of the service</h2>
            <ul>
              <li>You must be at least the age of majority in your jurisdiction.</li>
              <li>
                You agree not to misuse the service (e.g., interfere with normal
                operation, attempt unauthorized access, scrape at abusive rates).
              </li>
            </ul>

            <h2 id="content">2. Content & intellectual property</h2>
            <p>
              The site’s design, text, graphics, and other materials are protected
              by applicable intellectual property laws. You may not copy, modify,
              distribute, or create derivative works without permission, except as
              permitted by law.
            </p>

            <h2 id="accuracy">3. Accuracy & availability</h2>
            <p>
              We aim to provide accurate prayer times and related information; however,
              we do not warrant that the service will be error-free, uninterrupted,
              or available at all times. Use of the service is at your own risk.
            </p>

            <h2 id="accounts">4. Accounts (if applicable)</h2>
            <p>
              If accounts are offered, you are responsible for safeguarding your
              credentials and for all activities under your account.
            </p>

            <h2 id="third-parties">5. Third-party services</h2>
            <p>
              The service may include links or integrations with third-party
              services (e.g., map or prayer calculation APIs). We are not
              responsible for third-party content or practices. Their terms and
              privacy policies apply.
            </p>

            <h2 id="limitation">6. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any
              indirect, incidental, special, consequential, or punitive damages, or
              any loss of profits or revenues, whether incurred directly or
              indirectly, or any loss of data, use, goodwill, or other intangible
              losses resulting from your use of the service.
            </p>

            <h2 id="indemnity">7. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Prayer Times and its
              affiliates from claims arising out of your misuse of the service or
              violation of these Terms.
            </p>

            <h2 id="changes">8. Changes to the terms</h2>
            <p>
              We may modify these Terms at any time. We’ll post the updated Terms on
              this page and update the “Last updated” date. Your continued use
              after changes indicates acceptance.
            </p>

            <h2 id="termination">9. Termination</h2>
            <p>
              We may suspend or terminate access to the service at any time for any
              reason, including if you violate these Terms.
            </p>

            <h2 id="governing-law">10. Governing law</h2>
            <p>
              These Terms are governed by the laws of your applicable jurisdiction,
              without regard to conflict of law provisions.
            </p>

            <h2 id="contact">11. Contact</h2>
            <p>
              Questions about these Terms? Email{" "}
              <a href="mailto:hello@prayertimes.example">hello@prayertimes.example</a>{" "}
              or visit our <Link href="/contact">Contact</Link> page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}