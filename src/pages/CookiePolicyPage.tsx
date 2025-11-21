// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import EndFooter from '../components/EndFooter';

// const CookiePolicyPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <section className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Cookie Policy</h1>
//         <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">Cookie Policy for AI, ML & Robotics Conference</h2>
//         <p className="text-lg mb-6 text-gray-700">
//           World Conference on Artificial Intelligence, Machine Learning, and Robotics
//           <br />
//           July 28–30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
//         </p>

//         <div className="space-y-6 text-gray-800">
//           <div>
//             <h3 className="text-xl font-semibold mb-2">1. What Are Cookies</h3>
//             <p>
//               Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">2. How We Use Cookies</h3>
//             <p>
//               We use cookies to enhance your experience on our website, including remembering your login details, preferences, and providing personalized content. Cookies also help us analyze website traffic and improve our services.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">3. Types of Cookies We Use</h3>
//             <ul className="list-disc list-inside space-y-2">
//               <li><strong>Essential Cookies:</strong> Necessary for the website to function properly.</li>
//               <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
//               <li><strong>Functional Cookies:</strong> Remember your preferences and settings.</li>
//               <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">4. Managing Cookies</h3>
//             <p>
//               You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, disabling cookies may affect the functionality of our website.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">5. Third-Party Cookies</h3>
//             <p>
//               Some cookies may be set by third-party services that appear on our pages. We have no control over these cookies, and they are subject to the respective third party's privacy policy.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-2">6. Updates to This Policy</h3>
//             <p>
//               We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated effective date.
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 text-center text-gray-600">
//           <p>Last Updated: October 16, 2025</p>
//           <p>For questions, contact us at <a href="mailto:secretary@roboticsaisummit.com" className="text-blue-600 underline">secretary@roboticsaisummit.com</a></p>
//         </div>
//       </section>
//       {/* <Footer /> */}
//       <EndFooter />
//     </div>
//   );
// };

// export default CookiePolicyPage;



import React from 'react';
import Header from '../components/Header';
import EndFooter from '../components/EndFooter';

const CookiePolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-16 px-4 md:px-16 max-w-7xl mx-auto text-sm">
        {/* <h1 className="text-4xl font-bold text-center mb-8 text-[#002d45]">Cookie Policy</h1> */}

        <h2 className="text-2xl font-semibold mb-4 text-[#2e376d]">
          Cookie Policy for AI, ML & Robotics International Conference
        </h2>

        <p className="text-base mb-6 text-gray-700">
          World Conference on Artificial Intelligence, Machine Learning, and Robotics  
          <br />
          July 28–30, 2026 | Crowne Plaza – St. Peter’s, Rome, Italy
        </p>

        <div className="space-y-8 text-gray-800 leading-relaxed">

          {/* 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">1. What Are Cookies</h3>
            <p className="mb-3 text-sm">
              Cookies are small text files placed on your device when you access our website. These files help us 
              understand user behavior, improve site performance, and provide a customized online experience. Cookies 
              contain anonymous information such as unique identifiers, website preferences, and browsing history. 
              By collecting and analyzing cookie data, we can improve our services, optimize content delivery, 
              and enhance user experience. We use cookies to remember your preferences, such as language, location, 
              and other settings, so that you do not need to re-enter them every time you visit our website.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">2. How We Use Cookies</h3>
            <p className="mb-3 text-sm">
              Cookies enable us to provide a seamless browsing experience. We use them to:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Remember login sessions and user preferences</li>
              <li>Analyze website traffic patterns</li>
              <li>Enhance security and prevent fraudulent activity</li>
              <li>Display relevant conference updates and announcements</li>
              <li>Measure the performance of our digital content</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">3. Types of Cookies We Use</h3>
            <ul className="list-disc ml-6 space-y-2 text-sm">
              <li>
                <strong>Essential Cookies: </strong>  
                Required for core functionality such as navigation and secure logins.
              </li>

              <li>
                <strong>Analytics Cookies: </strong>  
                Track user activity, page views, and content interaction to help us improve site performance.
              </li>

              <li>
                <strong>Functional Cookies: </strong>  
                Store your language preferences, region, submission data, or other customization settings.
              </li>

              <li>
                <strong>Marketing Cookies: </strong>  
                Used to display tailored promotional material and conference-related ads.
              </li>

              <li>
                <strong>Performance Cookies: </strong>  
                Measure how quickly pages load and identify performance bottlenecks.
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">4. Duration of Cookies (Session vs. Persistent)</h3>
            <p className="mb-3 text-sm">
              Cookies used on our website may remain stored on your device for different lengths of time. 
              Session cookies are deleted automatically when you close the browser, while persistent cookies 
              remain on your device until manually deleted or expired. This allows us to personalize content 
              and streamline user experience across multiple sessions.
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li><strong>Session Cookies: </strong> Deleted automatically when you close the browser.</li>
              <li><strong>Persistent Cookies: </strong> Remain on your device until manually deleted or expired.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">5. Third-Party Cookies</h3>
            <p className="mb-3 text-sm">
              Third-party service providers may place their own cookies on our site for analytics, advertising, 
              or content display purposes. These include:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Google Analytics</li>
              <li>Payment Gateway Providers</li>
              <li>YouTube / Vimeo (if embedded videos appear)</li>
              <li>Social Media platforms (LinkedIn, Facebook, Twitter)</li>
            </ul>
            <p className="mt-2 mb-3 text-sm">
              We do not control these cookies and encourage you to review each provider’s privacy policy.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">6. Managing and Disabling Cookies</h3>
            <p className="mb-3 text-sm">
              Most browsers allow you to manage cookies through built-in settings. You may:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Block all cookies</li>
              <li>Accept cookies selectively</li>
              <li>Automatically delete cookies after each session</li>
              <li>Receive a prompt each time a cookie is being set</li>
            </ul>
            <p className="mt-2 mb-3 text-sm">
              However, disabling cookies may impact your ability to use certain features of the conference website.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">7. Consent for Cookies</h3>
            <p className="mb-3 text-sm">
              Upon your first visit, our website displays a cookie consent banner. By clicking “Accept,” you allow us 
              to use cookies as described in this policy. You can change or withdraw consent anytime. By giving us 
              your consent, you acknowledge that you have read and understood this Cookie Policy and that you agree 
              with the use of cookies by our website as described in this policy. If you do not agree with the use of 
              cookies by our website, you should not use our website or click on the “Accept” button in the cookie consent 
              banner. If you have already clicked on the “Accept” button, but you wish to withdraw your consent for 
              the use of cookies by our website, you should delete all cookies placed by our website and change your 
              browser settings to refuse all cookies from our website or to notify you when cookies are being placed by 
              our website. If you do not delete the cookies placed by our website, they will remain active until 
              their expiration date or until you manually delete them.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">8. Use of Cookies for Event Applications</h3>
            <p className="mb-3 text-sm">
              If we use a mobile app or online platform for event registration, navigation, or networking, additional 
              cookies or local storage mechanisms may be used to:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-sm">
              <li>Store QR code data for badge scanning and access control</li>
              <li>Remember personalized schedules and event preferences</li>
              <li>Sync messages, announcements, or notifications across devices</li>
              <li>Enhance user experience through location-based services and personalized content</li>
            </ul>
          </div>

          {/* 9 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">9. Security and Privacy Enforcement</h3>
            <p className="mb-3 text-sm">
              We prioritize the security of your data and ensure that cookie-related information is encrypted wherever 
              possible. We do not use cookies to store sensitive personal details such as passwords or payment data.
              Additionally, we take measures to protect your data from unauthorized access, disclosure, modification, 
              or destruction. We have implemented appropriate technical and organizational security measures to protect 
              your data, including, but not limited to, access controls, encryption methods, regular security testing, 
              and secure transmission protocols.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h3 className="text-xl font-semibold mb-3">10. Updates to This Cookie Policy</h3>
            <p className="mb-3 text-sm">
              We may revise this policy periodically to reflect changes in technology, regulations, or conference 
              operations. All updates will be posted on this page with a revised “Last Updated” date. We encourage you 
              to review this policy periodically to stay informed about our cookie practices and how we may be using 
              your personal data to enhance your experience. If we make any changes to this policy, we will post the 
              changes on this page and update the “Last Updated” date above. We may also notify you of any changes to 
              this policy through email or other communication channels.
            </p>
          </div>

        </div>

        <div className="mt-10 text-center text-gray-600 text-sm">
          <p>Last Updated: October 16, 2025</p>
          <p>
            For questions, contact us at{" "}
            <a href="mailto:secretary@roboticsaisummit.com" className="text-blue-600 underline text-sm">
              secretary@roboticsaisummit.com
            </a>
          </p>
        </div>
      </section>

      <EndFooter />
    </div>
  );
};

export default CookiePolicyPage;

