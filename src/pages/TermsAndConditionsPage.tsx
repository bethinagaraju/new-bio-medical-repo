import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EndFooter from '../components/EndFooter';

const TermsAndConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Terms and Conditions</h1>
        <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">Terms and Conditions - AI, ML & Robotics Conference</h2>
        <p className="text-lg mb-6 text-gray-700">
          World Conference on Artificial Intelligence, Machine Learning, and Robotics
          <br />
          July 28–30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
        </p>

        <div className="space-y-6 text-gray-800">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
            <p>
              By registering for, attending, or submitting content to the World Conference on Artificial Intelligence, Machine Learning, and Robotics (ROBOTICS-2026), you agree to be bound by these Terms and Conditions. These terms apply to all participants, including attendees, speakers, sponsors, and exhibitors.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Registration and Payment</h3>
            <p>
              Registration fees are non-refundable unless otherwise stated in our refund policy. Payment must be made in full via our secure payment gateway. All prices are in USD and subject to change. Registration includes access to sessions as per the selected package.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">3. Abstract Submission</h3>
            <p>
              Abstracts must be submitted by March 15, 2026, in PDF format (max 25MB). Acceptance notifications will be sent by March 25, 2026. Submitted content must be original and not previously published. The organizers reserve the right to reject submissions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">4. Conduct and Behavior</h3>
            <p>
              Participants must conduct themselves professionally. The organizers may remove individuals violating these terms, with no refund provided. Photography and recording are prohibited without prior consent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">5. Liability and Insurance</h3>
            <p>
              The organizers are not liable for any loss, injury, or damage during the event. Participants are responsible for their own travel insurance and personal belongings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">6. Privacy and Data Use</h3>
            <p>
              Personal data collected during registration will be used to manage your participation and may be shared with sponsors unless you opt out. View our Privacy Policy for details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">7. Changes and Cancellations</h3>
            <p>
              The organizers reserve the right to alter the program, venue, or cancel the event due to unforeseen circumstances. In case of cancellation, refunds will be processed minus a processing fee.
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

export default TermsAndConditionsPage;
