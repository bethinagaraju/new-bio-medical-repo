
import React, { useState } from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaThumbsUp,
  FaCalendarAlt,
  FaLink,
  FaAt,
} from 'react-icons/fa';
import { FaCookieBite } from 'react-icons/fa6';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

const EndFooter: React.FC = () => {
  const [visibleLeft, setVisibleLeft] = useState(false); // Sidebar state

        const googleCalUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=AI+ML+%26+Robotics+Conference+2026" +
  "&dates=20260728T090000Z/20260730T170000Z" +
  "&details=International+Conference+on+AI,+ML+and+Robotics+in+Rome,+Italy" +
  "&location=Crowne+Plaza+-+St.+Peter's+Rome,+Italy";

  return (
    <footer className="bg-gray-100 text-[#002d45] text-sm">


      <Sidebar
  visible={visibleLeft}
  position="left"
  onHide={() => setVisibleLeft(false)}
  style={{ width: '100%', maxWidth: '500px', background: 'white' }}
  showCloseIcon={true}
>
  <div className="p-6 text-[#002d45] text-sm space-y-6">

    {/* <div className="w-full pb-4 border-b border-gray-400">
        <img src="dmg-600.png" alt="dmg events" className="h-6" />
    </div> */}
    {/* Header */}
    <div>
      {/* <img src="/logo-footer.png" alt="dmg events" className="h-6 mb-3" /> */}
      <h2 className="text-xl font-semibold">Privacy Preference Center</h2>
      <p className="mt-2 text-gray-700">
        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to.
      </p>
      <p className="mt-2 text-gray-700">
        The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings.
      </p>
      <p className="mt-2 text-gray-700">
        However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
      </p>
      <a href="#" className="underline text-blue-600 mt-2 block">More information</a>
    </div>

    {/* Consent Preferences */}
    <div>
      <h3 className="text-base font-semibold mb-4">Manage Consent Preferences</h3>
      <div className="border border-gray-300 rounded overflow-hidden">
        {/* Item 1 */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="font-medium">+ Strictly Necessary Cookies</button>
          <span className="text-blue-700 font-semibold text-sm">Always Active</span>
        </div>

        {/* Item 2 */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="font-medium">+ Targeting Cookies</button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>

        {/* Item 3 */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button className="font-medium">+ Analytics Cookies</button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>

        {/* Item 4 */}
        <div className="flex justify-between items-center px-4 py-3">
          <button className="font-medium">+ Social Media Cookies</button>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white" />
          </label>
        </div>
      </div>
    </div>

    {/* Footer buttons */}
    <div className="flex justify-between gap-4 pt-4">
      <button className="flex-1 bg-black text-white py-2 font-semibold" onClick={() => setVisibleLeft(false)}>Reject All</button>
      <button className="flex-1 bg-yellow-300 hover:bg-yellow-400 text-black py-2 font-semibold" onClick={() => setVisibleLeft(false)}>Confirm My Choices</button>
    </div>

    {/* Onetrust footer */}
    <div className="text-xs text-gray-400 text-center mt-4">
      Powered by <span className="font-semibold">onetrust</span>
    </div>
  </div>
</Sidebar>
  

      {/* Top section */}


      <div className="container mx-auto px-16 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-300">
  {/* Opening Times */}
  <div>
    <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
      <FaCalendarAlt /> OPENING TIMES
    </h3>
    <ul className="mb-4 space-y-2">
      <li><strong>Wednesday 28 July 2026:</strong> 08:00 – 16:00</li>
      <li><strong>Thursday 29 July 2026:</strong> 08:30 – 16:00</li>
      <li><strong>Friday 30 July 2026:</strong> 09:00 – 16:00</li>
    </ul>

    <button
      className="bg-[#3f558d] text-white py-2 px-4"
      onClick={() => window.open(googleCalUrl, "_blank")}
    >
      ADD TO CALENDAR
    </button>
  </div>

  {/* Quick Links */}
  <div>
    <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
      <FaLink /> QUICK LINKS
    </h3>

    <ul className="space-y-2 underline underline-offset-2">
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/AbstractSubmission">Abstract Submission</Link>
      </li>
      <li><a href="/#contact-form">Become a Sponsor</a></li>
    </ul>
  </div>

  {/* Contact Us */}
  <div>
    <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
      <FaAt /> CONTACT US
    </h3>

    <div className="space-y-3">
      <div>
        <p><strong>General Enquiry</strong></p>
        <p>secretary@roboticsaisummit.com</p>
      </div>
      <div>
        <p><strong>Marketing Enquiry</strong></p>
        <p>sponsorship@roboticsaisummit.com</p>
      </div>
      <div>
        <p><strong>Sales Enquiry</strong></p>
        <p>Delegate@roboticsaisummit.com</p>
      </div>
    </div>
  </div>

  {/* Follow Us (moved here to the empty space) */}
  <div className="flex flex-col items-start">
    <h3 className="flex items-center gap-2 text-[#2e376d] font-semibold text-lg mb-4">
      <FaThumbsUp /> FOLLOW US
    </h3>

    <div className="flex items-center space-x-4 text-2xl mt-2">
      <a href="#" aria-label="Facebook"><FaFacebookF /></a>
      <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
      <a href="#" aria-label="YouTube"><FaYoutube /></a>
      <a href="#" aria-label="Instagram"><FaInstagram /></a>
    </div>
  </div>
</div>


      {/* Bottom section */}
      <div className="bg-[#4c5d6c] text-white px-4 pt-10 pb-6 relative">
        <div className="container mx-auto flex flex-col items-center gap-6">
          {/* <div className="flex items-center justify-center w-[70%] border-b border-white pb-4">
          <img src="dmgenergylogowhite_logo.png" alt="dmg events" className="h-8 md:h-10" />
          </div> */}

         

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-white/90 border-t border-white/40 border-b py-3 w-full max-w-4xl">




            {/* <li>ABOUT US</li>
            <li>CAREERS</li> */}
            <li><Link to="/privacy-policy">PRIVACY POLICY</Link></li>
            <li><Link to="/cookie-policy">COOKIE POLICY</Link></li>
            <li onClick={() => setVisibleLeft(true)}><Link>COOKIES SETTINGS</Link></li>
            {/* <li>onClick={() => setVisibleLeft(true)}>COOKIES SETTINGS</li> */}
            {/* <li>COOKIES SETTINGS</li> */}
            <li><Link to="/terms-and-conditions">TERMS AND CONDITIONS</Link></li>
            {/* <li>CONTACT US</li> */}


          


          </ul>

          <span>© 2026 All rights reserved. AI, ML & Robotics Conference</span>

        
        </div>

        {/* 🍪 Cookie Icon */}
        <div className="fixed bottom-4 left-4 z-50 md:bottom-8 md:left-8">
          <button onClick={() => setVisibleLeft(true)} className="focus:outline-none">
            <FaCookieBite className="w-10 h-10 text-black md:w-12 md:h-12" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default EndFooter;
