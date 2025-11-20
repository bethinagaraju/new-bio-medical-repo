import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Privacy Policy</h1>
        <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">Privacy Policy for AI, ML & Robotics Conference</h2>
        <p className="text-lg mb-6 text-gray-700">
          World Conference on Artificial Intelligence, Machine Learning, and Robotics
          <br />
          July 28–30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
        </p>

        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
            <p>
              This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website or participate in the ROBOTICS-2026 conference. We are committed to safeguarding your privacy and ensuring compliance with applicable data protection laws.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, job title, company name, and contact details when you register for the conference, submit abstracts, or contact us. We also collect usage data through cookies and similar technologies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. How We Use Your Information</h3>
            <p>
              Your information is used to process registrations, communicate event updates, manage submissions, and provide services related to the conference. We may share data with sponsors or partners unless you opt out.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Data Sharing and Disclosure</h3>
            <p>
              We do not sell your personal information. However, we may share it with service providers, sponsors, or as required by law. You can opt out of marketing communications at any time.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Data Security</h3>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Your Rights</h3>
            <p>
              You have the right to access, update, or delete your personal information. To exercise these rights, please contact us using the information provided below.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">7. Cookies</h3>
            <p>
              Our website uses cookies to enhance your experience. You can manage cookie preferences through your browser settings or our cookie consent tool.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">8. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
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

export default PrivacyPolicyPage;
