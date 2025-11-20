import React, { useState } from 'react';
import { User } from 'lucide-react';
import Header from './Header';
import { Link } from 'react-router-dom';

// Defines the type for a single event in the schedule
interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  speaker: string | null; // Speaker can be a string or null if not applicable
}

// Defines the type for the entire schedule object
interface ScheduleData {
  day1: ScheduleItem[];
  day2: ScheduleItem[];
  day3: ScheduleItem[];
}



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


const scheduleData: ScheduleData = {
  day1: [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Welcome Coffee',
      description: 'Check-in, collect your conference materials, and meet fellow AI, ML, and robotics enthusiasts over coffee.',
      speaker: null,
    },
    {
      time: '09:00 - 10:00',
      title: 'Keynote: The Dawn of Intelligent Systems',
      description: 'An inspiring keynote on how Artificial Intelligence and Machine Learning are redefining industries and human potential.',
      speaker: 'Dr. Aris Thorne, Director of Global AI Research Institute',
    },
    {
      time: '10:00 - 11:30',
      title: 'Panel: The Future of Robotics and Automation',
      description: 'Industry leaders discuss the role of robotics in transforming manufacturing, healthcare, and everyday life.',
      speaker: 'Moderated by Dr. Lena Hanson, Robotics Vision Lab',
    },
    {
      time: '11:30 - 12:00',
      title: 'Coffee & Networking Break',
      description: 'Network with researchers, engineers, and entrepreneurs in the AI and robotics ecosystem.',
      speaker: null,
    },
    {
      time: '12:00 - 13:30',
      title: 'Track 1: Deep Learning & Neural Network Innovations',
      description: 'Explore cutting-edge models and frameworks driving today’s breakthroughs in AI applications.',
      speaker: 'Prof. Kenji Tanaka, Tokyo Institute of AI Research',
    },
    {
      time: '13:30 - 14:30',
      title: 'Networking Lunch',
      description: 'Enjoy a buffet lunch while discussing ideas and collaborations.',
      speaker: null,
    },
    {
      time: '14:30 - 16:00',
      title: 'Track 2: Robotics and Human-Machine Interaction',
      description: 'A deep dive into adaptive robotics, motion planning, and the integration of human intuition in automation.',
      speaker: 'Dr. Isabella Rossi, Lead Robotics Scientist, RoboMind Labs',
    },
  ],
  day2: [
    {
      time: '08:30 - 09:00',
      title: 'Morning Coffee & Networking',
      description: 'Start the day with fresh coffee and meet leading professionals in AI and robotics research.',
      speaker: null,
    },
    {
      time: '09:00 - 10:00',
      title: 'Keynote: AI & Robotics Shaping the Next Industrial Revolution',
      description: 'A visionary talk on how AI-driven robotics will redefine productivity, creativity, and global economies.',
      speaker: 'Dr. Samuel Chen, CEO of RoboAI Systems',
    },
    {
      time: '10:00 - 11:30',
      title: 'Panel: From Research to Real-World AI Applications',
      description: 'Experts and investors discuss challenges in commercializing AI models, from startups to enterprise adoption.',
      speaker: 'Featuring panelists from NeuralTech Ventures & AI Innovate',
    },
    {
      time: '11:30 - 12:00',
      title: 'Coffee & Networking Break',
      description: 'A perfect time to connect with keynote speakers and panelists.',
      speaker: null,
    },
    {
      time: '12:00 - 13:30',
      title: 'Workshop: Building Ethical and Responsible AI Systems',
      description: 'A practical session focusing on transparency, bias reduction, and fairness in machine learning systems.',
      speaker: 'Dr. Maria Flores, Lead Data Ethics Researcher, BioSignal Lab',
    },
    {
      time: '13:30 - 14:30',
      title: 'Networking Lunch',
      description: 'Collaborate with AI engineers, roboticists, and data scientists over lunch.',
      speaker: null,
    },
    {
      time: '14:30 - 16:00',
      title: 'Closing Keynote: The Road Ahead for Machine Intelligence',
      description: 'A reflection on the evolution of AI and robotics and what lies beyond today’s technological horizon.',
      speaker: 'Conference Chair, Global AI Alliance',
    },
  ],
  day3: [
    {
      time: '09:00 - 09:30',
      title: 'Welcome & Recap of Key Highlights',
      description: 'A quick recap of insights and breakthroughs from previous sessions.',
      speaker: 'Event Coordinator',
    },
    {
      time: '09:30 - 11:00',
      title: 'Panel: AI and Robotics in Everyday Life',
      description: 'Experts discuss how autonomous systems and generative AI are shaping transportation, education, and smart cities.',
      speaker: 'Panelists from DeepMind, OpenBotics, and UrbanAI Labs',
    },
    {
      time: '11:00 - 11:30',
      title: 'Coffee & Networking Break',
      description: 'Relax and chat with fellow researchers and innovators.',
      speaker: null,
    },
    {
      time: '11:30 - 13:00',
      title: 'Workshop: Hands-On with Autonomous Agents',
      description: 'Interactive session on training and simulating autonomous agents for robotics and reinforcement learning.',
      speaker: 'Dr. Nina Alvarez, Robotics Research Lab, MIT',
    },
    {
      time: '13:00 - 14:00',
      title: 'Lunch & Networking',
      description: 'Connect with attendees over lunch to discuss collaborative opportunities.',
      speaker: null,
    },
    {
      time: '14:00 - 15:30',
      title: 'Innovation Showcase & Awards',
      description: 'Live demos of AI-driven robots and startup pitches, followed by the AI Excellence Awards ceremony.',
      speaker: 'Conference Committee',
    },
    {
      time: '15:30 - 16:00',
      title: 'Farewell & Closing Speech',
      description: 'Official closing with acknowledgments and announcements for next year’s AI, ML & Robotics Conference.',
      speaker: 'Conference Chair',
    },
  ],
};




const Agenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1);
  const themeColor = '#2e366c';

  const renderSchedule = (day: ScheduleItem[]) =>
    day.map((item, index) => (
      <div key={index} className="flex flex-col sm:flex-row border-t border-gray-200 py-6">
        <div className="w-full sm:w-1/4 pr-4 mb-2 sm:mb-0 sm:text-right">
          <p className="font-bold text-lg" style={{ color: themeColor }}>
            {item.time}
          </p>
        </div>
        <div className="w-full sm:w-3/4 pl-4 sm:border-l border-gray-200">
          <h3 className="text-base font-bold text-gray-800 sm:text-xl" style={{ fontFamily: "'Manrope', sans-serif" }}>{item.title}</h3>
          <p className="text-gray-600 mt-1 " style={{ fontFamily: "'Manrope', sans-serif" }}>{item.description}</p>
          {/* {item.speaker && (
            <div className="flex items-center mt-3 text-gray-500">
              <User size={16} className="mr-2 flex-shrink-0" />
              <span className="text-sm font-medium">{item.speaker}</span>
            </div>
          )} */}
        </div>
      </div>
    ));

  return (
    <div>
      <section id='agenda-section' className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1
            style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
            className="text-2xl md:text-4xl font-bold text-center mb-4"
          >
            CONFERENCE AGENDA
          </h1>

          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto" style={{ fontSize: '1rem', font: "sans-serif" }}>
            Experience three days of inspiring keynotes, hands-on workshops, and cutting-edge innovations in AI, ML, and Robotics.
          </p>

          {/* Day Toggle Buttons */}
          <div className="flex justify-center mb-10 gap-2 sm:gap-4 p-1 bg-gray-100 max-w-sm mx-auto rounded-full">
            {[1, 2, 3].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`w-full px-5 py-3 text-sm sm:text-base font-bold rounded-full transition-all duration-300 ${
                  activeDay === day
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-200'
                }`}
                style={{ backgroundColor: activeDay === day ? themeColor : '' }}
              >
                Day {day}
              </button>
            ))}
          </div>

          {/* Schedule Display */}
          <div className="transition-opacity duration-500 ease-in-out">
            {activeDay === 1
              ? renderSchedule(scheduleData.day1)
              : activeDay === 2
              ? renderSchedule(scheduleData.day2)
              : renderSchedule(scheduleData.day3)}
          </div>

          {/* Register Button */}
          <div className="flex justify-center mt-10">
            <Link to="/register">
              <a
                className="bg-[#2e366c] hover:bg-[#4967a0] text-white px-6 py-2 font-semibold text-sm transition-colors"
              >
                Register Now
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agenda;