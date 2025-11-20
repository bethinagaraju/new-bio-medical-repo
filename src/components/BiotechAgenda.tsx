// // import React, { useState } from 'react';
// // import { User } from 'lucide-react';
// // import Header from './Header';

// // // Defines the type for a single event in the schedule
// // interface ScheduleItem {
// //   time: string;
// //   title: string;
// //   description: string;
// //   speaker: string | null; // Speaker can be a string or null if not applicable
// // }

// // // Defines the type for the entire schedule object
// // interface ScheduleData {
// //   day1: ScheduleItem[];
// //   day2: ScheduleItem[];
// // }



// // const scheduleData: ScheduleData = {
// //   day1: [
// //     {
// //       time: '08:00 - 09:00',
// //       title: 'Registration & Welcome Coffee',
// //       description: 'Check-in, collect your badge, and network with peers over coffee.',
// //       speaker: null,
// //     },
// //     {
// //       time: '09:00 - 10:00',
// //       title: 'Keynote: Engineering the Future of Medicine',
// //       description: 'How biomedical engineering is bridging the gap between clinical challenges and technological solutions.',
// //       speaker: 'Dr. Aris Thorne, Director at the Institute for Medical Engineering',
// //     },
// //     {
// //       time: '10:00 - 11:30',
// //       title: 'Panel: Next-Generation Medical Devices',
// //       description: 'Experts discuss innovations in diagnostics, therapeutics, and wearable technology from lab to clinic.',
// //       speaker: 'Moderated by Dr. Lena Hanson',
// //     },
// //     {
// //       time: '11:30 - 12:00',
// //       title: 'Coffee & Networking Break',
// //       description: 'Connect with speakers and attendees.',
// //       speaker: null,
// //     },
// //     {
// //       time: '12:00 - 13:30',
// //       title: 'Track 1: Advances in Biomaterials & Tissue Engineering',
// //       description: 'Exploring novel materials for regenerative medicine and drug delivery systems.',
// //       speaker: 'Prof. Kenji Tanaka, Center for Regenerative Medicine',
// //     },
// //     {
// //       time: '13:30 - 14:30',
// //       title: 'Networking Lunch',
// //       description: 'Enjoy a catered lunch while discussing the morning sessions.',
// //       speaker: null,
// //     },
// //     {
// //       time: '14:30 - 16:00',
// //       title: 'Track 2: Innovations in Medical Imaging & Diagnostics',
// //       description: 'A deep dive into AI-powered diagnostics and the latest in imaging technology.',
// //       speaker: 'Dr. Isabella Rossi, Lead Imaging Scientist',
// //     },
// //   ],
// //   day2: [
// //     {
// //       time: '08:30 - 09:00',
// //       title: 'Morning Coffee & Networking',
// //       description: 'Start the day with fresh coffee and new connections.',
// //       speaker: null,
// //     },
// //     {
// //       time: '09:00 - 10:00',
// //       title: 'Keynote: AI & Robotics in Modern Healthcare',
// //       description: 'The transformative impact of intelligent systems in surgical procedures and patient care.',
// //       speaker: 'Dr. Samuel Chen, CEO of MedBotics Inc.',
// //     },
// //     {
// //       time: '10:00 - 11:30',
// //       title: 'Panel: Commercializing Biomedical Innovations',
// //       description: 'Founders and venture capitalists discuss navigating regulatory pathways and securing funding.',
// //       speaker: 'Featuring panelists from MedTech Ventures & Health Innovate',
// //     },
// //     {
// //       time: '11:30 - 12:00',
// //       title: 'Coffee & Networking Break',
// //       description: 'A final opportunity to exchange contacts.',
// //       speaker: null,
// //     },
// //     {
// //       time: '12:00 - 13:30',
// //       title: 'Workshop: Computational Modeling in Biomechanics',
// //       description: 'A hands-on session using modern software for simulating biological systems.',
// //       speaker: 'Dr. Maria Flores, Bio-Signal Processing Lab',
// //     },
// //     {
// //       time: '13:30 - 14:30',
// //       title: 'Networking Lunch',
// //       description: 'Final networking lunch.',
// //       speaker: null,
// //     },
// //     {
// //       time: '14:30 - 16:00',
// //       title: 'Closing Remarks & Future Outlook',
// //       description: 'A summary of key takeaways and a look at the future of biomedical engineering.',
// //       speaker: 'Conference Chair',
// //     },
// //   ],


  
  
// // };

// // const BiotechAgenda: React.FC = () => {
// //   const [activeDay, setActiveDay] = useState<number>(1);
// //   const themeColor = '#2e366c'; 

// //   const renderSchedule = (day: ScheduleItem[]) => {
// //     return day.map((item, index) => (
// //       <div key={index} className="flex flex-col sm:flex-row border-t border-gray-200 py-6">
// //         <div className="w-full sm:w-1/4 pr-4 mb-2 sm:mb-0 sm:text-right">
// //           <p className="font-bold text-lg" style={{ color: themeColor }}>
// //             {item.time}
// //           </p>
// //         </div>
// //         <div className="w-full sm:w-3/4 pl-4 sm:border-l border-gray-200">
// //           <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
// //           <p className="text-gray-600 mt-1">{item.description}</p>
// //           {item.speaker && (
// //             <div className="flex items-center mt-3 text-gray-500">
// //               <User size={16} className="mr-2 flex-shrink-0" />
// //               <span className="text-sm font-medium">{item.speaker}</span>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     ));
// //   };

// //   return (
// //     <div>
      
// //       <section className="bg-white py-16 px-4">
// //         <div className="max-w-6xl mx-auto">
// //           {/* <h2 className="text-4xl font-extrabold text-center" style={{color: '#f4aa3d'}}>
// //             CONFERENCE AGENDA
// //           </h2> */}

// //              <h1
// //         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
// //         className="text-2xl md:text-4xl font-bold text-center mb-4"
// //       >
// //         CONFERENCE AGENDA
// //       </h1>
// //           <br/>
// //           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// //             Explore our two-day agenda packed with insightful keynotes, expert panels, and networking opportunities in Biomedical Engineering.
// //           </p>

// //           {/* Day Toggle Buttons */}
// //           <div className="flex justify-center mb-10 gap-2 sm:gap-4 p-1 bg-gray-100 max-w-xs mx-auto">

// //             <button
// //               onClick={() => setActiveDay(1)}
// //               className={`w-full px-6 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ease-in-out ${
// //                 activeDay === 1 ? 'text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
// //               }`}
// //               style={{ backgroundColor: activeDay === 1 ? themeColor : '' }}
// //             >
// //               Day 1
// //             </button>

// //             <button
// //               onClick={() => setActiveDay(2)}
// //               className={`w-full px-6 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ease-in-out ${
// //                 activeDay === 2 ? 'text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'
// //               }`}
// //               style={{ backgroundColor: activeDay === 2 ? themeColor : '' }}
// //             >
// //               Day 2
// //             </button>

// //           </div>

// //           {/* Schedule Display */}
// //           <div className="transition-opacity duration-500 ease-in-out">
// //             {activeDay === 1
// //               ? renderSchedule(scheduleData.day1)
// //               : renderSchedule(scheduleData.day2)}
// //           </div>

          

// //           {/* Register Button */}
// //           <div className="flex justify-center mt-10">
// //             <a href="#" className="bg-[#f4aa3d] hover:bg-teal-600 text-white px-6 py-2 rounded font-semibold text-sm transition-colors">
// //               Register Now
// //             </a>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default BiotechAgenda;




// import React, { useState } from 'react';
// import { User } from 'lucide-react';
// import Header from './Header';
// import { Link } from 'react-router-dom';

// // Defines the type for a single event in the schedule
// interface ScheduleItem {
//   time: string;
//   title: string;
//   description: string;
//   speaker: string | null; // Speaker can be a string or null if not applicable
// }

// // Defines the type for the entire schedule object
// interface ScheduleData {
//   day1: ScheduleItem[];
//   day2: ScheduleItem[];
//   day3: ScheduleItem[];
// }



// const scheduleData: ScheduleData = {
//   day1: [
//     {
//       time: '08:00 - 09:00',
//       title: 'Registration & Welcome Coffee',
//       description: 'Check-in, collect your badge, and network with peers over coffee.',
//       speaker: null,
//     },
//     {
//       time: '09:00 - 10:00',
//       title: 'Keynote: Engineering the Future of Medicine',
//       description: 'How biomedical engineering is bridging the gap between clinical challenges and technological solutions.',
//       speaker: 'Dr. Aris Thorne, Director at the Institute for Medical Engineering',
//     },
//     {
//       time: '10:00 - 11:30',
//       title: 'Panel: Next-Generation Medical Devices',
//       description: 'Experts discuss innovations in diagnostics, therapeutics, and wearable technology from lab to clinic.',
//       speaker: 'Moderated by Dr. Lena Hanson',
//     },
//     {
//       time: '11:30 - 12:00',
//       title: 'Coffee & Networking Break',
//       description: 'Connect with speakers and attendees.',
//       speaker: null,
//     },
//     {
//       time: '12:00 - 13:30',
//       title: 'Track 1: Advances in Biomaterials & Tissue Engineering',
//       description: 'Exploring novel materials for regenerative medicine and drug delivery systems.',
//       speaker: 'Prof. Kenji Tanaka, Center for Regenerative Medicine',
//     },
//     {
//       time: '13:30 - 14:30',
//       title: 'Networking Lunch',
//       description: 'Enjoy a catered lunch while discussing the morning sessions.',
//       speaker: null,
//     },
//     {
//       time: '14:30 - 16:00',
//       title: 'Track 2: Innovations in Medical Imaging & Diagnostics',
//       description: 'A deep dive into AI-powered diagnostics and the latest in imaging technology.',
//       speaker: 'Dr. Isabella Rossi, Lead Imaging Scientist',
//     },
//   ],
//   day2: [
//     {
//       time: '08:30 - 09:00',
//       title: 'Morning Coffee & Networking',
//       description: 'Start the day with fresh coffee and new connections.',
//       speaker: null,
//     },
//     {
//       time: '09:00 - 10:00',
//       title: 'Keynote: AI & Robotics in Modern Healthcare',
//       description: 'The transformative impact of intelligent systems in surgical procedures and patient care.',
//       speaker: 'Dr. Samuel Chen, CEO of MedBotics Inc.',
//     },
//     {
//       time: '10:00 - 11:30',
//       title: 'Panel: Commercializing Biomedical Innovations',
//       description: 'Founders and venture capitalists discuss navigating regulatory pathways and securing funding.',
//       speaker: 'Featuring panelists from MedTech Ventures & Health Innovate',
//     },
//     {
//       time: '11:30 - 12:00',
//       title: 'Coffee & Networking Break',
//       description: 'A final opportunity to exchange contacts.',
//       speaker: null,
//     },
//     {
//       time: '12:00 - 13:30',
//       title: 'Workshop: Computational Modeling in Biomechanics',
//       description: 'A hands-on session using modern software for simulating biological systems.',
//       speaker: 'Dr. Maria Flores, Bio-Signal Processing Lab',
//     },
//     {
//       time: '13:30 - 14:30',
//       title: 'Networking Lunch',
//       description: 'Final networking lunch.',
//       speaker: null,
//     },
//     {
//       time: '14:30 - 16:00',
//       title: 'Closing Remarks & Future Outlook',
//       description: 'A summary of key takeaways and a look at the future of biomedical engineering.',
//       speaker: 'Conference Chair',
//     },
//   ],
//   day3: [
//     {
//       time: '09:00 - 09:30',
//       title: 'Welcome & Recap of Previous Days',
//       description: 'A brief recap of key insights and announcements.',
//       speaker: 'Event Coordinator',
//     },
//     {
//       time: '09:30 - 11:00',
//       title: 'Panel: Future of AI-Powered Healthcare Systems',
//       description: 'Experts discuss the next big steps for AI and ML applications in hospitals and telemedicine.',
//       speaker: 'Panelists from HealthAI & DeepMed',
//     },
//     {
//       time: '11:00 - 11:30',
//       title: 'Coffee & Networking Break',
//       description: 'Relax and network with fellow attendees and speakers.',
//       speaker: null,
//     },
//     {
//       time: '11:30 - 13:00',
//       title: 'Workshop: Robotics in Precision Surgery',
//       description: 'Live demonstration of robotic systems in medical applications and simulation environments.',
//       speaker: 'Dr. Nina Alvarez, Robotics Research Lab',
//     },
//     {
//       time: '13:00 - 14:00',
//       title: 'Lunch & Networking',
//       description: 'Enjoy lunch while exchanging ideas with global experts.',
//       speaker: null,
//     },
//     {
//       time: '14:00 - 15:30',
//       title: 'Innovation Showcase & Award Ceremony',
//       description: 'Presentation of top student research and industry innovations, followed by the Excellence Awards.',
//       speaker: 'Conference Committee',
//     },
//     {
//       time: '15:30 - 16:00',
//       title: 'Farewell & Closing Speech',
//       description: 'Official closing of the conference with highlights and next-year plans.',
//       speaker: 'Conference Chair',
//     },
//   ],
// };



// const BiotechAgenda: React.FC = () => {
//   const [activeDay, setActiveDay] = useState<number>(1);
//   const themeColor = '#2e366c';

//   const renderSchedule = (day: ScheduleItem[]) =>
//     day.map((item, index) => (
//       <div key={index} className="flex flex-col sm:flex-row border-t border-gray-200 py-6">
//         <div className="w-full sm:w-1/4 pr-4 mb-2 sm:mb-0 sm:text-right">
//           <p className="font-bold text-lg" style={{ color: themeColor }}>
//             {item.time}
//           </p>
//         </div>
//         <div className="w-full sm:w-3/4 pl-4 sm:border-l border-gray-200">
//           <h3 className="text-base font-bold text-gray-800 sm:text-xl" style={{ fontFamily: "'Manrope', sans-serif" }}>{item.title}</h3>
//           <p className="text-gray-600 mt-1 " style={{ fontFamily: "'Manrope', sans-serif" }}>{item.description}</p>
//           {/* {item.speaker && (
//             <div className="flex items-center mt-3 text-gray-500">
//               <User size={16} className="mr-2 flex-shrink-0" />
//               <span className="text-sm font-medium">{item.speaker}</span>
//             </div>
//           )} */}
//         </div>
//       </div>
//     ));

//   return (
//     <div>
//       <section id='agenda-section' className="bg-white py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1
//             style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
//             className="text-2xl md:text-4xl font-bold text-center mb-4"
//           >
//             CONFERENCE AGENDA
//           </h1>

//           <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontSize: '1rem', font: "sans-serif" }}>
//             Experience three days of inspiring keynotes, hands-on workshops, and cutting-edge innovations in AI, ML, and Robotics.
//           </p>

//           {/* Day Toggle Buttons */}
//           <div className="flex justify-center mb-10 gap-2 sm:gap-4 p-1 bg-gray-100 max-w-sm mx-auto rounded-full">
//             {[1, 2, 3].map((day) => (
//               <button
//                 key={day}
//                 onClick={() => setActiveDay(day)}
//                 className={`w-full px-5 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ${
//                   activeDay === day
//                     ? 'text-white shadow-md'
//                     : 'text-gray-600 hover:bg-gray-200'
//                 }`}
//                 style={{ backgroundColor: activeDay === day ? themeColor : '' }}
//               >
//                 Day {day}
//               </button>
//             ))}
//           </div>

//           {/* Schedule Display */}
//           <div className="transition-opacity duration-500 ease-in-out">
//             {activeDay === 1
//               ? renderSchedule(scheduleData.day1)
//               : activeDay === 2
//               ? renderSchedule(scheduleData.day2)
//               : renderSchedule(scheduleData.day3)}
//           </div>

//           {/* Register Button */}
//           <div className="flex justify-center mt-10">
//             <Link to="/register">
//               <a
//                 className="bg-[#2e366c] hover:bg-[#4967a0] text-white px-6 py-2 font-semibold text-sm transition-colors"
//               >
//                 Register Now
//               </a>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default BiotechAgenda;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react'; // Icon for the accordion
import Header from './Header';

// --- Data Structure for Conference Tracks ---
// We define the shape of a track object
interface Track {
  id: number;
  title: string;
  description: string;
  subtopicsLabel: string; // "Subtopics" or "Topics Include"
  subtopics: string[];
  buttonText: string;
  submitLink: string; // A unique link for each track's submission
}

// Populate the data from your provided content
const tracksData: Track[] = [
  {
    id: 1,
    title: '1️⃣ Core Robotics & AI Foundations',
    description:
      'This track focuses on machine learning and AI techniques for autonomous robots, including perception, decision-making, multi-robot coordination, and neuromorphic computing.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'Advances in Machine Learning for Robotics',
      'Deep Learning Architectures for Intelligent Robotics Systems',
      'Reinforcement Learning for Autonomous Agents',
      'Human–Robot Interaction (HRI)',
      'Cognitive Robotics and Perception Systems',
      'Swarm Intelligence & Multi-Robot Coordination',
      'Neuromorphic Computing in Robotics',
    ],
    buttonText: 'Submit Abstract for Core Robotics & AI Foundations',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 2,
    title: '2️⃣ Industrial & Service Robotics',
    description:
      'This track covers robotics applications in industries, smart manufacturing, logistics, healthcare, agriculture, construction, and maintenance.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'Smart Manufacturing & Industry 4.0',
      'Collaborative Robots (Cobots)',
      'Robotics in Logistics & Supply Chain Automation',
      'Agricultural Robotics & Smart Farming',
      'Healthcare & Assistive Robotics',
      'Construction & Mining Robots',
      'Cleaning & Maintenance Robots',
    ],
    buttonText: 'Submit Abstract for Industrial & Service Robotics',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 3,
    title: '3️⃣ Aerospace, Space & Defense Robotics',
    description:
      'Focus on autonomous systems in space, aerospace, defense, and drone technologies for exploration, maintenance, and operations.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'Autonomous Spacecraft & Planetary Rovers',
      'AI in Satellite Operations & Maintenance',
      'Drone Technologies & UAV Swarm Control',
      'Robotics for Orbital Assembly & Repair',
      'Space Exploration Robotics & Navigation',
      'AI for Aerospace Safety & Predictive Maintenance',
    ],
    buttonText: 'Submit Abstract for Aerospace, Space & Defense Robotics',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 4,
    title: '4️⃣ AI Research & Applications',
    description:
      'This track emphasizes AI research in perception, decision-making, generative models, explainable AI, ethics, and next-generation computing.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'Natural Language Processing & Human Communication',
      'Computer Vision & Object Recognition',
      'Generative AI & Creativity',
      'AI for Decision-Making & Optimization',
      'Trustworthy & Explainable AI (XAI)',
      'Ethics, Bias & Regulation in AI',
      'Quantum AI & Next-Gen Computing',
    ],
    buttonText: 'Submit Abstract for AI Research & Applications',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 5,
    title: '5️⃣ Intelligent Systems & Integration',
    description:
      'Track on integrating AI into cyber-physical systems, edge intelligence, sensor fusion, digital twins, intelligent control, and predictive analytics.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'Cyber-Physical Systems',
      'Edge AI & Embedded Intelligence',
      'Sensor Fusion & Perception Technologies',
      'Digital Twins for Robotics & Aerospace',
      'Intelligent Control Systems',
      'Data Analytics & Predictive Modeling for Robotics',
    ],
    buttonText: 'Submit Abstract for Intelligent Systems & Integration',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 6,
    title: '6️⃣ Sustainability & Societal Impact',
    description:
      'Focus on robotics and AI solutions for renewable energy, disaster response, climate modeling, ethical design, social well-being, and workforce transformation.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'AI & Robotics for Renewable Energy Systems',
      'Disaster Response & Humanitarian Robotics',
      'AI for Climate Modeling & Resource Optimization',
      'Ethical & Responsible Robotics Design',
      'Social Robots & Human Well-being',
      'Reskilling the Workforce for an Automated Future',
    ],
    buttonText: 'Submit Abstract for Sustainability & Societal Impact',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 7,
    title: '7️⃣ Demos, Competitions & Innovation Showcases',
    description:
      'Interactive and competitive sessions including hackathons, model benchmarking, student competitions, startup pitches, and live robotics demonstrations.',
    subtopicsLabel: 'Subtopics:',
    subtopics: [
      'Robotics Hackathon & Design Challenge',
      'AI Model Benchmarking Session',
      'Student Robotics Competitions',
      'Startups in Robotics & AI Pitch Session',
      'Interactive Demonstrations (drones, robots, smart systems)',
    ],
    buttonText: 'Submit Abstract for Demos, Competitions & Innovation Showcases',
    submitLink: '/AbstractSubmission',
  },
  {
    id: 8,
    title: '8️⃣ Panel & Roundtable Topics',
    description:
      'Discussion forums on AI and robotics ethics, regulation, commercialization, human-machine collaboration, and space exploration.',
    subtopicsLabel: 'Topics Include:',
    subtopics: [
      'The Future of Human–Machine Collaboration',
      'AI Regulation: Balancing Innovation and Safety',
      'Robotics in Space Exploration: Beyond Mars',
      'From Labs to Market: Commercializing AI & Robotics Innovations',
      'AI in Defense and Ethical Implications',
    ],
    buttonText: 'Submit Abstract for Propose a Panel Topic',
    submitLink: '/AbstractSubmission',
  },
];

/**
 * A single accordion item component for a conference track.
 */
const TrackAccordionItem: React.FC<{
  track: Track;
  isOpen: boolean;
  onToggle: () => void;
  themeColor: string;
}> = ({ track, isOpen, onToggle, themeColor }) => {
  return (
    
    <div className="border-b border-gray-200 last:border-b-0">
      
      {/* --- Accordion Header / Button --- */}
      <h2>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`track-content-${track.id}`}
          className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
        >
          <span
            className="text-lg sm:text-xl font-semibold"
            style={{ color: themeColor }}
          >
            {track.title}
          </span>
          <ChevronDown
            size={24}
            className={`flex-shrink-0 text-gray-500 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </h2>

      {/* --- Accordion Content (Collapsible Area) --- */}
      <div
        id={`track-content-${track.id}`}
        role="region"
        aria-labelledby={`track-header-${track.id}`}
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0' // Animate height
        }`}
      >
        <div className="px-5 sm:px-6 pb-6 pt-0">
          <p className="text-gray-700 mb-5" style={{ fontFamily: "'Manrope', sans-serif" }}>
            {track.description}
          </p>

          <h4 className="text-base font-semibold text-gray-800 mb-3">
            {track.subtopicsLabel}
          </h4>
          <ul className="list-disc list-inside space-y-1.5 text-gray-600 mb-8">
            {track.subtopics.map((subtopic, index) => (
              <li key={index}>{subtopic}</li>
            ))}
          </ul>

          <Link
            to={track.submitLink}
            className="inline-block text-white font-bold py-3 px-6 rounded-md transition-all duration-300"
            style={{ backgroundColor: themeColor, fontFamily: "'Manrope', sans-serif" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#4967a0')} // Darker hover
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = themeColor)}
          >
            {track.buttonText}
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * Main component to display the list of conference tracks (replaces the old agenda).
 */
const BiotechAgenda: React.FC = () => {
  // State to track which accordion item is currently open
  // null means all are closed. A number means that track.id is open.
  const [openTrackId, setOpenTrackId] = useState<number | null>(null);
  
  const themeColor = '#2e366c'; // Main theme color from original file

  // Toggles an accordion item. If it's already open, close it.
  const handleToggle = (trackId: number) => {
    setOpenTrackId(openTrackId === trackId ? null : trackId);
  };

  return (
    // Note: The original component had no wrapper div, starting directly with <section>.
    // The original also didn't import Header, so I've left it out.
    // If you still need the Header, you can add it back above the <section>.
    <section id="tracks-section" className="bg-gray-50">
      <Header />
      <div className="max-w-4xl mx-auto">
        <h1
          style={{ fontFamily: "'Manrope', sans-serif", color: themeColor }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 pt-16"
        >
          SESSIONS & TRACKS
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-lg" style={{ fontFamily: "'Manrope', sans-serif" }}>
          Explore the conference tracks and submit your abstract.
        </p>

        {/* --- Accordion Container --- */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {tracksData.map((track) => (
            <TrackAccordionItem
              key={track.id}
              track={track}
              isOpen={openTrackId === track.id}
              onToggle={() => handleToggle(track.id)}
              themeColor={themeColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiotechAgenda;