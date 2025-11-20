
import React from 'react';
import { Link } from 'react-router-dom';

const ContentSection: React.FC = () => {
  return (
    <section id='about-section' className="py-12 px-4 sm:px-6 lg:px-32 scroll-mt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-8 md:gap-12 items-center">
          <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-base text-gray-700 mb-4 sm:mb-6">
              Join the global community of visionaries at the International Conference on Artificial Intelligence,
               Machine Learning, and Robotics, taking place from July 28–30, 2026, at Crowne Plaza – St. Peter’s Rome, Italy.
                This world-class event brings together researchers, technologists, industry leaders, and innovators to explore groundbreaking advancements transforming industries and society
            </p>

            <p style={{ fontFamily: "'Manrope', sans-serif" }} className="text-base text-gray-700 mb-4 sm:mb-6">
       Engage in insightful discussions and hands-on sessions on deep learning, autonomous systems, generative AI, human–robot collaboration, robotics in healthcare, and ethical AI frameworks. Explore how these technologies are transforming industries, enhancing decision-making, and improving human life through intelligent, adaptive systems. Gain valuable insights from global experts and innovators driving real-world AI and robotics applications. Join this dynamic platform that fosters collaboration, discovery, and innovation, shaping the next era of intelligent and sustainable technological progress.
            </p>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 mt-4">
              
              <Link to="/register">
                <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,72,139,1) 0%, rgba(15,133,255,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
                  REGISTER
                </button>
              </Link>
              <a href="/#contact-form">
                <button style={{ backgroundImage: "linear-gradient(90deg, rgba(0,47,48,1) 0%, rgba(0,0,48,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
                  SPONSORSHIP ENQUIRY
                </button>
              </a>

              <Link to="/AbstractSubmission">
                <button style={{ backgroundImage: "linear-gradient(90deg, rgba(35,35,87,1) 0%, rgba(76,109,166,1) 100%)" }} className="text-white px-6 py-2 font-semibold text-sm transition-colors">
                  ABSTRACT SUBMISSION
                </button>
              </Link>
              
            </div>

          </div>

          <div className="w-full">


              <div className="relative pb-[56.25%] h-0 overflow-hidden shadow-lg">
  <video
    className="absolute top-0 left-0 w-full h-full object-cover bg-white"
    src="/94be53a887684f6ead6a2a2fe9323a3f.mp4"
    controls
    autoPlay={true}
    muted={true}
  >
    Your browser does not support the video tag.
  </video>

</div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
