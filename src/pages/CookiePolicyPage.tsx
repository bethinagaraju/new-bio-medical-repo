import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Cookie Policy</h1>
        <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">Cookie Policy for AI, ML & Robotics Conference</h2>
        <p className="text-lg mb-6 text-gray-700">
          World Conference on Artificial Intelligence, Machine Learning, and Robotics
          <br />
          July 28–30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
        </p>

        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. What Are Cookies</h3>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. How We Use Cookies</h3>
            <p>
              We use cookies to enhance your experience on our website, including remembering your login details, preferences, and providing personalized content. Cookies also help us analyze website traffic and improve our services.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Managing Cookies</h3>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect the functionality of our website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h3>
            <p>
              Some cookies may be set by third-party services that appear on our pages. We have no control over these cookies, and they are subject to the respective third party's privacy policy.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Updates to This Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>Last Updated: October 16, 2025</p>
          <p>For questions, contact us at <a href="mailto:secretary@roboticsaisummit.com" className="text-blue-600 underline">secretary@roboticsaisummit.com</a></p>
        </div>
      </section>
      {/* <Footer /> */}
      <EndFooter />
    </div>
  );
};

export default CookiePolicyPage;
