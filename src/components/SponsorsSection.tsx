// import React, { useEffect, useState } from 'react';

// const SponsorsSection: React.FC = () => {
//   const logos = [
//     {
//       src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg",
//       alt: "Platinum Tabreed",
//       link: "https://www.tabreed.ae/",
//     },
//     {
//       src: "ABB_logo.svg.png",
//       alt: "Hydropower",
//       link: "https://www.hydropower.energy/",
//     },
//     {
//       src: "Rockwell_Automation_logo_(2019).svg.png",
//       alt: "Gold Hitachi",
//       link: "https://www.hitachienergy.com/me/en",
//     },
//     {
//       src: "Real-sense-logo-rgb.png",
//       alt: "Gold IGC",
//       link: "https://intelligent-globe.com/",
//     },
//     {
//       src: "Yaskawa_logo.svg.png",
//       alt: "Gold Siemens",
//       link: "https://www.siemens-energy.com",
//     },
//     {
//       src: "Figure-ai-logo.svg.png",
//       alt: "Silver Minsait",
//       link: "https://www.minsait.com/en",
//     },
//     {
//       src: "images.png",
//       alt: "Abbnew 1",
//       link: "javascript:void(0);",
//     },
//     {
//       src: "Untitled.png",
//       alt: "Bronze PWC",
//       link: "https://www.pwc.com/gx/en.html",
//     },
//     {
//       src: "Black_Full_Logo.webp",
//       alt: "SUEZ",
//       link: "javascript:void(0);",
//     },
//   ];

//   const sponsorTypes = [
//     "Platinum Sponsor",
//     "Platinum Sponsor",
//     "Gold Sponsor",
//     "Gold Sponsor",
//     "Silver Sponsor",
//     "Bronze Sponsor",
//     "Bronze Sponsor",
//     "Bronze Sponsor",
//     "Bronze Sponsor",
//   ];

//   const [visibleIndices, setVisibleIndices] = useState(
//     Array.from({ length: 4 }, (_, i) => i)
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setVisibleIndices((prevIndices) =>
//         prevIndices.map(() => Math.floor(Math.random() * logos.length))
//       );
//     }, 2500);

//     return () => clearInterval(interval);
//   }, [logos.length]);

//   return (
//     <div id='Sponsors-section' className="col-span-full md:col-span-1 p-4">
//       <h1
//         style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
//         className="text-center text-xl md:text-2xl font-bold mb-4"
//       >
//         2025 SPONSORS
//       </h1>

//       {visibleIndices.map((logoIndex, cardIdx) => (
//         <div
//           key={cardIdx}
//           className="flex justify-center items-center p-4 transition-all duration-300"
//         >
//           <div className="flex flex-col items-center bg-white shadow-md p-4 w-full sm:w-64 h-32 justify-center">
//             <h6 className="text-gray-600 text-center text-sm">
//               {sponsorTypes[logoIndex]}
//             </h6>
//             <img
//               src={logos[logoIndex].src}
//               alt={logos[logoIndex].alt}
//               className="object-contain h-full w-full mt-2 lazyload"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SponsorsSection;



import React, { useEffect, useState } from 'react';

const SponsorsSection: React.FC = () => {
  const logos = [
    {
      src: "WhatsApp Image 2025-10-11 at 13.06.55_c7ee6430.jpg",
      alt: "Platinum Tabreed",
      link: "https://www.tabreed.ae/",
      type: "Platinum Sponsor",
    },
    {
      src: "ABB_logo.svg.png",
      alt: "Hydropower",
      link: "https://www.hydropower.energy/",
      type: "Platinum Sponsor",
    },
    {
      src: "Rockwell_Automation_logo_(2019).svg.png",
      alt: "Gold Hitachi",
      link: "https://www.hitachienergy.com/me/en",
      type: "Gold Sponsor",
    },
    {
      src: "Real-sense-logo-rgb.png",
      alt: "Gold IGC",
      link: "https://intelligent-globe.com/",
      type: "Gold Sponsor",
    },
    {
      src: "Yaskawa_logo.svg.png",
      alt: "Gold Siemens",
      link: "https://www.siemens-energy.com",
      type: "Silver Sponsor",
    },
    {
      src: "Figure-ai-logo.svg.png",
      alt: "Silver Minsait",
      link: "https://www.minsait.com/en",
      type: "Bronze Sponsor",
    },
    {
      src: "images.png",
      alt: "Abbnew 1",
      link: "javascript:void(0);",
      type: "Bronze Sponsor",
    },
    {
      src: "Untitled.png",
      alt: "Bronze PWC",
      link: "https://www.pwc.com/gx/en.html",
      type: "Bronze Sponsor",
    },
    {
      src: "Black_Full_Logo.webp",
      alt: "SUEZ",
      link: "javascript:void(0);",
      type: "Bronze Sponsor",
    },
  ];

  const [visibleIndices, setVisibleIndices] = useState([0, 1, 2, 3]);

  useEffect(() => {
    // Ensure we don't try to pick more logos than available
    const numberOfLogosToShow = Math.min(4, logos.length);

    const interval = setInterval(() => {
      // Use a Set to store unique random indices
      const newUniqueIndices = new Set<number>();
      
      // Loop until the Set has the desired number of unique indices
      while (newUniqueIndices.size < numberOfLogosToShow) {
        const randomIndex = Math.floor(Math.random() * logos.length);
        newUniqueIndices.add(randomIndex);
      }
      
      // Convert the Set back to an array and update the state
      setVisibleIndices(Array.from(newUniqueIndices));
    }, 2500);

    return () => clearInterval(interval);
  }, [logos.length]);

  return (
    <div id='Sponsors-section' className="col-span-full md:col-span-1 p-4 scroll-mt-40">
      <h1
        style={{ fontFamily: "'Manrope', sans-serif", color: '#2e376c' }}
        className="text-center text-xl md:text-2xl font-bold mb-4"
      >
        SPONSORS
      </h1>

      {visibleIndices.map((logoIndex) => (
        <div
          key={logoIndex} // Use the unique logoIndex as the key
          className="flex justify-center items-center p-4 transition-all duration-300"
        >
          <div className="flex flex-col items-center bg-white shadow-md p-4 w-full sm:w-64 h-32 justify-center">
            <h6 className="text-gray-600 text-center text-sm">
              {logos[logoIndex].type}
            </h6>
            <a href={logos[logoIndex].link} target="_blank" rel="noopener noreferrer" className="flex-grow flex items-center justify-center w-full">
              <img
                src={logos[logoIndex].src}
                alt={logos[logoIndex].alt}
                className="object-contain max-h-16 w-full mt-2"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsorsSection;