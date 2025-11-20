import React, { useState } from 'react';

import Header from './Header';
import HeroSection from './HeroSection';
import StatisticsSection from './StatisticsSection';
import ContentSection from './ContentSection';
import SpeakersSection from './SpeakersSection';
import ExhibitingCompanies from './ExhibitingCompanies';
import EventOverview from './EventOverview';
import ShowHighlights from './ShowHighlights';
import PartnerLogos from './PartnerLogos';
import Footer from './Footer';
import Mixcomponents from './Mixcomponents';
import HighletOne from './HighletOne';
import EndFooter from './EndFooter';
import CookieConsent from './CookieConsent';
import ConferenceRegistration from './ConferenceRegistration';
import AbstractSubmission from './AbstractSubmission';
import BiotechAgenda from './BiotechAgenda';
import ConferenceDetails from './ConferenceDetails';
import Overview from './Overview';
import RegionChartComponent from './RegionChartComponent';
import Agenda from './Agenda';


function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);




  return (
    <div className="min-h-screen bg-white">
      <CookieConsent />
      <Header />
      <HeroSection />
      <StatisticsSection />
      
      <ContentSection />

      <Mixcomponents/>
      <RegionChartComponent/>
      <Overview />0
      <Agenda />
      {/* <SpeakersSection speakers={speakers} />
      <ExhibitingCompanies companies={companies} /> */}
      {/* <ConferenceDetails /> */}
      
      
      <EventOverview />
      {/* <ConferenceRegistration />
      <AbstractSubmission /> */}
      
      {/* <ShowHighlights currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} /> */}
      {/* <HighletOne/> */}
      
      <ShowHighlights/>
      <PartnerLogos />
      <Footer />
      <EndFooter/>

      


      
    </div>
  );
}

export default HomePage;
