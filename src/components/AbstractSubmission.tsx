// // // // import React, { useState } from 'react';
// // // // import { FileText, Award, Bell, Upload, Lock } from 'lucide-react';

// // // // // Defines the type for the form's data
// // // // interface AbstractFormData {
// // // //   title: string;
// // // //   fullName: string;
// // // //   phoneNumber: string;
// // // //   emailAddress: string;
// // // //   organization: string;
// // // //   country: string;
// // // //   interestedIn: string;
// // // //   session: string;
// // // //   abstractFile: File | null;
// // // //   securityCode: string;
// // // // }

// // // // const AbstractSubmission: React.FC = () => {
// // // //   const themeColor = '#00a99d'; // ✨ IMPORTANT: Change this to your website's main color
// // // //   const securityCodeChars = 'A7B3DC'; // Simple static code for example

// // // //   const [formData, setFormData] = useState<AbstractFormData>({
// // // //     title: 'Dr.',
// // // //     fullName: '',
// // // //     phoneNumber: '',
// // // //     emailAddress: '',
// // // //     organization: '',
// // // //     country: 'United States',
// // // //     interestedIn: 'Oral Presentation',
// // // //     session: '',
// // // //     abstractFile: null,
// // // //     securityCode: '',
// // // //   });

// // // //   const [fileName, setFileName] = useState<string>('PDF only (max 25MB)');

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prevState) => ({
// // // //       ...prevState,
// // // //       [name]: value,
// // // //     }));
// // // //   };

// // // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // // //     if (e.target.files && e.target.files[0]) {
// // // //       const file = e.target.files[0];
// // // //       setFormData((prevState) => ({
// // // //         ...prevState,
// // // //         abstractFile: file,
// // // //       }));
// // // //       setFileName(file.name);
// // // //     }
// // // //   };

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();
// // // //     if (formData.securityCode !== securityCodeChars) {
// // // //       alert('Security verification failed. Please enter the correct code.');
// // // //       return;
// // // //     }
// // // //     // In a real app, you would handle the file upload and data submission to a server.
// // // //     alert('Abstract Submitted! Check the console for the form data.');
// // // //     console.log('Abstract Form Data:', formData);
// // // //   };

// // // //   return (
// // // //     <section className="bg-gray-50 py-16 px-4">
// // // //       <div className="max-w-4xl mx-auto">
// // // //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
// // // //           Abstract Submission
// // // //         </h2>
// // // //         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// // // //           Submit your research abstract for the Renewable Energy Summit 2026.
// // // //         </p>

// // // //         {/* Info Cards Section */}
// // // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
// // // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // // //             <Award className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// // // //             <h3 className="font-bold text-lg text-gray-800">Abstract Deadline</h3>
// // // //             <p className="text-gray-600">March 15, 2026</p>
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // // //             <Bell className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// // // //             <h3 className="font-bold text-lg text-gray-800">Notification</h3>
// // // //             <p className="text-gray-600">March 25, 2026</p>
// // // //           </div>
// // // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // // //             <FileText className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// // // //             <h3 className="font-bold text-lg text-gray-800">File Format</h3>
// // // //             <p className="text-gray-600">PDF, DOC, DOCX</p>
// // // //           </div>
// // // //         </div>

// // // //         {/* Abstract Form */}
// // // //         <div className="bg-white p-8 rounded-lg shadow-md">
// // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //               {/* Title */}
// // // //               <div>
// // // //                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
// // // //                 <select id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // // //                   <option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option>
// // // //                 </select>
// // // //               </div>

// // // //               {/* Full Name */}
// // // //               <div>
// // // //                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
// // // //                 <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // // //               </div>

// // // //               {/* Phone & Email */}
// // // //               <div>
// // // //                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
// // // //                 <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // // //               </div>
// // // //               <div>
// // // //                 <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
// // // //                 <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // // //               </div>

// // // //               {/* Organization & Country */}
// // // //               <div>
// // // //                 <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
// // // //                 <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // // //               </div>
// // // //               <div>
// // // //                 <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
// // // //                 <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // // //                   <option>United States</option><option>Japan</option><option>Germany</option><option>India</option><option>United Kingdom</option>
// // // //                 </select>
// // // //               </div>

// // // //               {/* Interested In & Session */}
// // // //                <div>
// // // //                 <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">Interested In <span className="text-red-500">*</span></label>
// // // //                 <select id="interestedIn" name="interestedIn" value={formData.interestedIn} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // // //                   <option>Oral Presentation</option><option>Poster Presentation</option><option>Workshop</option>
// // // //                 </select>
// // // //               </div>
// // // //               <div>
// // // //                 <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-1">Session <span className="text-red-500">*</span></label>
// // // //                 <input type="text" id="session" name="session" placeholder="e.g., Solar Technology" value={formData.session} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // // //               </div>
              
// // // //               {/* Abstract File */}
// // // //               <div className="md:col-span-2">
// // // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Abstract File <span className="text-red-500">*</span></label>
// // // //                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
// // // //                   <div className="space-y-1 text-center">
// // // //                     <Upload className="mx-auto h-12 w-12 text-gray-400" />
// // // //                     <div className="flex text-sm text-gray-600">
// // // //                       <label htmlFor="abstractFile" className="relative cursor-pointer bg-white rounded-md font-medium" style={{ color: themeColor }}>
// // // //                         <span>Upload a file</span>
// // // //                         <input id="abstractFile" name="abstractFile" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
// // // //                       </label>
// // // //                       <p className="pl-1">or drag and drop</p>
// // // //                     </div>
// // // //                     <p className="text-xs text-gray-500">{fileName}</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Security Verification */}
// // // //               <div className="md:col-span-2">
// // // //                 <label htmlFor="securityCode" className="block text-sm font-medium text-gray-700 mb-1">Security Verification</label>
// // // //                 <div className="flex items-center gap-4">
// // // //                   <div className="select-none p-2 text-lg font-bold tracking-[.5em] text-center bg-gray-200 rounded-md text-gray-600">
// // // //                     {securityCodeChars}
// // // //                   </div>
// // // //                   <input type="text" id="securityCode" name="securityCode" value={formData.securityCode} onChange={handleChange} required maxLength={6} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" placeholder="Enter code" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* Submit Button */}
// // // //             <div className="text-center pt-4">
// // // //               <button type="submit" className="inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: themeColor }}>
// // // //                 <FileText size={18} className="mr-2" />
// // // //                 Submit Abstract
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default AbstractSubmission;








// // // import React, { useState, useEffect } from 'react';
// // // import { FileText, Award, Bell, Upload, Lock, RotateCw } from 'lucide-react'; // Added RotateCw icon
// // // import Header from './Header';

// // // // Defines the type for the form's data
// // // interface AbstractFormData {
// // //   title: string;
// // //   fullName: string;
// // //   phoneNumber: string;
// // //   emailAddress: string;
// // //   organization: string;
// // //   country: string;
// // //   interestedIn: string;
// // //   session: string;
// // //   abstractFile: File | null;
// // //   securityCode: string; // User's input for captcha
// // // }

// // // const generateCaptchaCode = (): string => {
// // //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// // //   let result = '';
// // //   for (let i = 0; i < 6; i++) {
// // //     result += chars.charAt(Math.floor(Math.random() * chars.length));
// // //   }
// // //   return result;
// // // };

// // // const AbstractSubmission: React.FC = () => {
// // //   const themeColor = '#00a99d'; // ✨ IMPORTANT: Change this to your website's main color

// // //   const [formData, setFormData] = useState<AbstractFormData>({
// // //     title: 'Dr.',
// // //     fullName: '',
// // //     phoneNumber: '',
// // //     emailAddress: '',
// // //     organization: '',
// // //     country: 'United States',
// // //     interestedIn: 'Oral Presentation',
// // //     session: '',
// // //     abstractFile: null,
// // //     securityCode: '', // User's input for captcha
// // //   });

// // //   const [fileName, setFileName] = useState<string>('PDF only (max 25MB)');
// // //   const [captchaCode, setCaptchaCode] = useState<string>(generateCaptchaCode()); // State for the captcha image text
// // //   const [captchaError, setCaptchaError] = useState<boolean>(false);

// // //   // Initialize captcha code on component mount
// // //   useEffect(() => {
// // //     setCaptchaCode(generateCaptchaCode());
// // //   }, []);

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// // //     const { name, value } = e.target;
// // //     setFormData((prevState) => ({
// // //       ...prevState,
// // //       [name]: value,
// // //     }));
// // //   };

// // //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// // //     if (e.target.files && e.target.files[0]) {
// // //       const file = e.target.files[0];
// // //       setFormData((prevState) => ({
// // //         ...prevState,
// // //         abstractFile: file,
// // //       }));
// // //       setFileName(file.name);
// // //     }
// // //   };

// // //   const handleRefreshCaptcha = () => {
// // //     setCaptchaCode(generateCaptchaCode());
// // //     setFormData((prevState) => ({ ...prevState, securityCode: '' })); // Clear user's input on refresh
// // //     setCaptchaError(false); // Clear error on refresh
// // //   };

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();
// // //     setCaptchaError(false); // Reset error state

// // //     // Case-insensitive captcha verification
// // //     if (formData.securityCode.toLowerCase() !== captchaCode.toLowerCase()) {
// // //       setCaptchaError(true);
// // //       alert('Security verification failed. Please enter the correct code.');
// // //       return;
// // //     }

// // //     // In a real app, you would handle the file upload and data submission to a server.
// // //     alert('Abstract Submitted! Check the console for the form data.');
// // //     console.log('Abstract Form Data:', formData);
// // //     // Optionally reset form after submission
// // //     // setFormData({ ...initialFormData, securityCode: '' });
// // //     // setFileName('PDF only (max 25MB)');
// // //     // setCaptchaCode(generateCaptchaCode());
// // //   };

// // //   return (
// // //     <section className="bg-gray-50 py-16 px-4">
   
// // //       <div className="max-w-4xl mx-auto">
// // //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
// // //           Abstract Submission
// // //         </h2>
// // //         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// // //           Submit your research abstract for the Renewable Energy Summit 2026.
// // //         </p>

// // //         {/* Info Cards Section */}
// // //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
// // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // //             <Award className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// // //             <h3 className="font-bold text-lg text-gray-800">Abstract Deadline</h3>
// // //             <p className="text-gray-600">March 15, 2026</p>
// // //           </div>
// // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // //             <Bell className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// // //             <h3 className="font-bold text-lg text-gray-800">Notification</h3>
// // //             <p className="text-gray-600">March 25, 2026</p>
// // //           </div>
// // //           <div className="bg-white p-6 rounded-lg shadow-sm">
// // //             <FileText className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// // //             <h3 className="font-bold text-lg text-gray-800">File Format</h3>
// // //             <p className="text-gray-600">PDF, DOC, DOCX</p>
// // //           </div>
// // //         </div>

// // //         {/* Abstract Form */}
// // //         <div className="bg-white p-8 rounded-lg shadow-md">
// // //           <form onSubmit={handleSubmit} className="space-y-6">
// // //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //               {/* Title */}
// // //               <div>
// // //                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
// // //                 <select id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // //                   <option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option>
// // //                 </select>
// // //               </div>

// // //               {/* Full Name */}
// // //               <div>
// // //                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
// // //                 <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>

// // //               {/* Phone & Email */}
// // //               <div>
// // //                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
// // //                 <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>
// // //               <div>
// // //                 <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
// // //                 <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>

// // //               {/* Organization & Country */}
// // //               <div>
// // //                 <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
// // //                 <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>
// // //               <div>
// // //                 <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
// // //                 <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // //                   <option>United States</option><option>Japan</option><option>Germany</option><option>India</option><option>United Kingdom</option>
// // //                 </select>
// // //               </div>

// // //               {/* Interested In & Session */}
// // //                <div>
// // //                 <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">Interested In <span className="text-red-500">*</span></label>
// // //                 <select id="interestedIn" name="interestedIn" value={formData.interestedIn} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// // //                   <option>Oral Presentation</option><option>Poster Presentation</option><option>Workshop</option>
// // //                 </select>
// // //               </div>
// // //               <div>
// // //                 <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-1">Session <span className="text-red-500">*</span></label>
// // //                 <input type="text" id="session" name="session" placeholder="e.g., Solar Technology" value={formData.session} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// // //               </div>
              
// // //               {/* Abstract File */}
// // //               <div className="md:col-span-2">
// // //                 <label className="block text-sm font-medium text-gray-700 mb-1">Abstract File <span className="text-red-500">*</span></label>
// // //                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
// // //                   <div className="space-y-1 text-center">
// // //                     <Upload className="mx-auto h-12 w-12 text-gray-400" />
// // //                     <div className="flex text-sm text-gray-600">
// // //                       <label htmlFor="abstractFile" className="relative cursor-pointer bg-white rounded-md font-medium" style={{ color: themeColor }}>
// // //                         <span>Upload a file</span>
// // //                         <input id="abstractFile" name="abstractFile" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
// // //                       </label>
// // //                       <p className="pl-1">or drag and drop</p>
// // //                     </div>
// // //                     <p className="text-xs text-gray-500">{fileName}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               {/* Security Verification Section (Updated) */}
// // //               <div className="md:col-span-2">
// // //                 <div className="bg-gray-100 p-6 rounded-lg">
// // //                   <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Security Verification</h3>
// // //                   <div className="flex items-center gap-3 mb-4">
// // //                     <div
// // //                       className="flex-shrink-0 px-4 py-2 text-2xl font-bold tracking-widest text-center bg-gray-800 text-white rounded-md select-none"
// // //                       style={{ letterSpacing: '0.4em' }}
// // //                     >
// // //                       {captchaCode}
// // //                     </div>
// // //                     <button
// // //                       type="button"
// // //                       onClick={handleRefreshCaptcha}
// // //                       className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors flex-shrink-0"
// // //                       aria-label="Refresh captcha"
// // //                     >
// // //                       <RotateCw size={20} />
// // //                     </button>
// // //                     {/* Empty div for visual spacing matching the image */}
// // //                     <div className="flex-grow h-1 bg-transparent"></div>
// // //                   </div>

// // //                   <label htmlFor="securityCodeInput" className="sr-only">Enter the code shown above</label>
// // //                   <input
// // //                     type="text"
// // //                     id="securityCodeInput" // Changed ID to avoid conflict with name="securityCode"
// // //                     name="securityCode"
// // //                     value={formData.securityCode}
// // //                     onChange={handleChange}
// // //                     required
// // //                     maxLength={6}
// // //                     className={`w-full p-3 border rounded-md shadow-sm focus:ring-2 ${
// // //                       captchaError ? 'border-red-500' : 'border-gray-300'
// // //                     }`}
// // //                     placeholder="Enter the code shown above"
// // //                     style={{'--tw-ring-color': themeColor} as React.CSSProperties}
// // //                   />
// // //                   {captchaError && (
// // //                     <p className="text-red-500 text-sm mt-1">Incorrect code. Please try again.</p>
// // //                   )}
// // //                   <p className="text-gray-500 text-sm mt-3 flex items-center">
// // //                     <Lock size={16} className="mr-2" /> Please enter the 6-character code to verify you're human
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* Submit Button */}
// // //             <div className="text-center pt-4">
// // //               <button type="submit" className="inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: themeColor }}>
// // //                 <FileText size={18} className="mr-2" />
// // //                 Submit Abstract
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default AbstractSubmission;


// // import React, { useState, useEffect } from 'react';
// // import { FileText, Award, Bell, Upload, Lock, RotateCw } from 'lucide-react';

// // interface AbstractFormData {
// //   title: string;
// //   fullName: string;
// //   phoneNumber: string;
// //   emailAddress: string;
// //   organization: string;
// //   country: string;
// //   interestedIn: string;
// //   session: string;
// //   abstractFile: File | null;
// //   securityCode: string;
// // }

// // const generateCaptchaCode = (): string => {
// //   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// //   let result = '';
// //   for (let i = 0; i < 6; i++) {
// //     result += chars.charAt(Math.floor(Math.random() * chars.length));
// //   }
// //   return result;
// // };

// // const AbstractSubmission: React.FC = () => {
// //   const themeColor = '#00a99d';
// //   const [formData, setFormData] = useState<AbstractFormData>({
// //     title: 'Dr.',
// //     fullName: '',
// //     phoneNumber: '',
// //     emailAddress: '',
// //     organization: '',
// //     country: 'United States',
// //     interestedIn: 'Oral Presentation',
// //     session: '',
// //     abstractFile: null,
// //     securityCode: '',
// //   });

// //   const [showSuccess, setShowSuccess] = useState(false);
// //   const [fileName, setFileName] = useState<string>('PDF only (max 25MB)');
// //   const [captchaCode, setCaptchaCode] = useState<string>(generateCaptchaCode());
// //   const [captchaError, setCaptchaError] = useState<boolean>(false);

// //   useEffect(() => {
// //     setCaptchaCode(generateCaptchaCode());
// //   }, []);

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       const file = e.target.files[0];
// //       setFormData((prevState) => ({
// //         ...prevState,
// //         abstractFile: file,
// //       }));
// //       setFileName(file.name);
// //     }
// //   };

// //   const handleRefreshCaptcha = () => {
// //     setCaptchaCode(generateCaptchaCode());
// //     setFormData((prevState) => ({ ...prevState, securityCode: '' }));
// //     setCaptchaError(false);
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setCaptchaError(false);

// //     if (formData.securityCode.toLowerCase() !== captchaCode.toLowerCase()) {
// //       setCaptchaError(true);
// //       alert('Security verification failed. Please enter the correct code.');
// //       return;
// //     }

// //     const form = new FormData();
// //     form.append("titlePrefix", formData.title);
// //     form.append("name", formData.fullName);
// //     form.append("email", formData.emailAddress);
// //     form.append("phone", formData.phoneNumber);
// //     form.append("organizationName", formData.organization);
// //     form.append("country", formData.country);
// //     form.append("abstractFile", formData.abstractFile as File);

// //     try {
// //       const response = await fetch("http://zynconfback.theroboticssummit.com/api/form-submission/submit", {
// //         method: "POST",
// //         body: form,
// //         headers: {
// //           "Origin": "https://globalrenewablemeet.com"
// //         }
// //       });

// //       if (response.ok) {
// //         const text = await response.text();
// //         if (text.includes("Form submitted successfully")) {
// //           setShowSuccess(true);
// //           // Optionally reset form:
// //           // setFormData({ ...initialFormData, securityCode: '' });
// //           // setFileName('PDF only (max 25MB)');
// //           // setCaptchaCode(generateCaptchaCode());
// //         } else {
// //           alert("Submission failed: " + text);
// //         }
// //       } else {
// //         alert("Submission failed with status " + response.status);
// //       }
// //     } catch (err) {
// //       alert("An error occurred: " + err);
// //     }
// //   };

// //   return (
// //     <section className="bg-gray-50 py-16 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
// //           Abstract Submission
// //         </h2>
// //         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
// //           Submit your research abstract for the Renewable Energy Summit 2026.
// //         </p>

// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
// //           <div className="bg-white p-6 rounded-lg shadow-sm">
// //             <Award className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// //             <h3 className="font-bold text-lg text-gray-800">Abstract Deadline</h3>
// //             <p className="text-gray-600">March 15, 2026</p>
// //           </div>
// //           <div className="bg-white p-6 rounded-lg shadow-sm">
// //             <Bell className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// //             <h3 className="font-bold text-lg text-gray-800">Notification</h3>
// //             <p className="text-gray-600">March 25, 2026</p>
// //           </div>
// //           <div className="bg-white p-6 rounded-lg shadow-sm">
// //             <FileText className="mx-auto mb-3" size={32} style={{ color: themeColor }} />
// //             <h3 className="font-bold text-lg text-gray-800">File Format</h3>
// //             <p className="text-gray-600">PDF, DOC, DOCX</p>
// //           </div>
// //         </div>

// //         <div className="bg-white p-8 rounded-lg shadow-md">
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //               <div>
// //                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
// //                 <select id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// //                   <option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
// //                 <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// //               </div>
// //               <div>
// //                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
// //                 <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// //               </div>
// //               <div>
// //                 <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
// //                 <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// //               </div>
// //               <div>
// //                 <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
// //                 <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// //               </div>
// //               <div>
// //                 <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
// //                 <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// //                   <option>United States</option><option>Japan</option><option>Germany</option><option>India</option><option>United Kingdom</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-1">Interested In <span className="text-red-500">*</span></label>
// //                 <select id="interestedIn" name="interestedIn" value={formData.interestedIn} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
// //                   <option>Oral Presentation</option><option>Poster Presentation</option><option>Workshop</option>
// //                 </select>
// //               </div>
// //               <div>
// //                 <label htmlFor="session" className="block text-sm font-medium text-gray-700 mb-1">Session <span className="text-red-500">*</span></label>
// //                 <input type="text" id="session" name="session" placeholder="e.g., Solar Technology" value={formData.session} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
// //               </div>
// //               <div className="md:col-span-2">
// //                 <label className="block text-sm font-medium text-gray-700 mb-1">Abstract File <span className="text-red-500">*</span></label>
// //                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
// //                   <div className="space-y-1 text-center">
// //                     <Upload className="mx-auto h-12 w-12 text-gray-400" />
// //                     <div className="flex text-sm text-gray-600">
// //                       <label htmlFor="abstractFile" className="relative cursor-pointer bg-white rounded-md font-medium" style={{ color: themeColor }}>
// //                         <span>Upload a file</span>
// //                         <input id="abstractFile" name="abstractFile" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
// //                       </label>
// //                       <p className="pl-1">or drag and drop</p>
// //                     </div>
// //                     <p className="text-xs text-gray-500">{fileName}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="md:col-span-2">
// //                 <div className="bg-gray-100 p-6 rounded-lg">
// //                   <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Security Verification</h3>
// //                   <div className="flex items-center gap-3 mb-4">
// //                     <div className="flex-shrink-0 px-4 py-2 text-2xl font-bold tracking-widest text-center bg-gray-800 text-white rounded-md select-none" style={{ letterSpacing: '0.4em' }}>
// //                       {captchaCode}
// //                     </div>
// //                     <button
// //                       type="button"
// //                       onClick={handleRefreshCaptcha}
// //                       className="p-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors flex-shrink-0"
// //                       aria-label="Refresh captcha"
// //                     >
// //                       <RotateCw size={20} />
// //                     </button>
// //                     <div className="flex-grow h-1 bg-transparent"></div>
// //                   </div>
// //                   <label htmlFor="securityCodeInput" className="sr-only">Enter the code shown above</label>
// //                   <input
// //                     type="text"
// //                     id="securityCodeInput"
// //                     name="securityCode"
// //                     value={formData.securityCode}
// //                     onChange={handleChange}
// //                     required
// //                     maxLength={6}
// //                     className={`w-full p-3 border rounded-md shadow-sm focus:ring-2 ${captchaError ? 'border-red-500' : 'border-gray-300'}`}
// //                     placeholder="Enter the code shown above"
// //                     style={{'--tw-ring-color': themeColor} as React.CSSProperties}
// //                   />
// //                   {captchaError && (
// //                     <p className="text-red-500 text-sm mt-1">Incorrect code. Please try again.</p>
// //                   )}
// //                   <p className="text-gray-500 text-sm mt-3 flex items-center">
// //                     <Lock size={16} className="mr-2" /> Please enter the 6-character code to verify you're human
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="text-center pt-4">
// //               <button type="submit" className="inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: themeColor }}>
// //                 <FileText size={18} className="mr-2" />
// //                 Submit Abstract
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //       {showSuccess && (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
// //           <div className="bg-white p-6 rounded shadow text-center">
// //             <h2 className="text-lg font-bold mb-2">Form submitted successfully.</h2>
// //             <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded" 
// //                 onClick={() => setShowSuccess(false)}>
// //               OK
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </section>
// //   );
// // };

// // export default AbstractSubmission;



// import React, { useState, useEffect } from 'react';
// import { FileText, Award, Bell, Upload, Lock, RotateCw } from 'lucide-react';


// export const countries = [
//   "Afghanistan",
//   "Albania",
//   "Algeria",
//   "Andorra",
//   "Angola",
//   "Antigua and Barbuda",
//   "Argentina",
//   "Armenia",
//   "Australia",
//   "Austria",
//   "Azerbaijan",
//   "Bahamas",
//   "Bahrain",
//   "Bangladesh",
//   "Barbados",
//   "Belarus",
//   "Belgium",
//   "Belize",
//   "Benin",
//   "Bhutan",
//   "Bolivia",
//   "Bosnia and Herzegovina",
//   "Botswana",
//   "Brazil",
//   "Brunei",
//   "Bulgaria",
//   "Burkina Faso",
//   "Burundi",
//   "Cabo Verde",
//   "Cambodia",
//   "Cameroon",
//   "Canada",
//   "Central African Republic",
//   "Chad",
//   "Chile",
//   "China",
//   "Colombia",
//   "Comoros",
//   "Congo (Congo-Brazzaville)",
//   "Costa Rica",
//   "Croatia",
//   "Cuba",
//   "Cyprus",
//   "Czech Republic",
//   "Democratic Republic of the Congo",
//   "Denmark",
//   "Djibouti",
//   "Dominica",
//   "Dominican Republic",
//   "Ecuador",
//   "Egypt",
//   "El Salvador",
//   "Equatorial Guinea",
//   "Eritrea",
//   "Estonia",
//   "Eswatini (Swaziland)",
//   "Ethiopia",
//   "Fiji",
//   "Finland",
//   "France",
//   "Gabon",
//   "Gambia",
//   "Georgia",
//   "Germany",
//   "Ghana",
//   "Greece",
//   "Grenada",
//   "Guatemala",
//   "Guinea",
//   "Guinea-Bissau",
//   "Guyana",
//   "Haiti",
//   "Honduras",
//   "Hungary",
//   "Iceland",
//   "India",
//   "Indonesia",
//   "Iran",
//   "Iraq",
//   "Ireland",
//   "Israel",
//   "Italy",
//   "Jamaica",
//   "Japan",
//   "Jordan",
//   "Kazakhstan",
//   "Kenya",
//   "Kiribati",
//   "Kuwait",
//   "Kyrgyzstan",
//   "Laos",
//   "Latvia",
//   "Lebanon",
//   "Lesotho",
//   "Liberia",
//   "Libya",
//   "Liechtenstein",
//   "Lithuania",
//   "Luxembourg",
//   "Madagascar",
//   "Malawi",
//   "Malaysia",
//   "Maldives",
//   "Mali",
//   "Malta",
//   "Marshall Islands",
//   "Mauritania",
//   "Mauritius",
//   "Mexico",
//   "Micronesia",
//   "Moldova",
//   "Monaco",
//   "Mongolia",
//   "Montenegro",
//   "Morocco",
//   "Mozambique",
//   "Myanmar (Burma)",
//   "Namibia",
//   "Nauru",
//   "Nepal",
//   "Netherlands",
//   "New Zealand",
//   "Nicaragua",
//   "Niger",
//   "Nigeria",
//   "North Korea",
//   "North Macedonia",
//   "Norway",
//   "Oman",
//   "Pakistan",
//   "Palau",
//   "Panama",
//   "Papua New Guinea",
//   "Paraguay",
//   "Peru",
//   "Philippines",
//   "Poland",
//   "Portugal",
//   "Qatar",
//   "Romania",
//   "Russia",
//   "Rwanda",
//   "Saint Kitts and Nevis",
//   "Saint Lucia",
//   "Saint Vincent and the Grenadines",
//   "Samoa",
//   "San Marino",
//   "Sao Tome and Principe",
//   "Saudi Arabia",
//   "Senegal",
//   "Serbia",
//   "Seychelles",
//   "Sierra Leone",
//   "Singapore",
//   "Slovakia",
//   "Slovenia",
//   "Solomon Islands",
//   "Somalia",
//   "South Africa",
//   "South Korea",
//   "South Sudan",
//   "Spain",
//   "Sri Lanka",
//   "Sudan",
//   "Suriname",
//   "Sweden",
//   "Switzerland",
//   "Syria",
//   "Taiwan",
//   "Tajikistan",
//   "Tanzania",
//   "Thailand",
//   "Timor-Leste",
//   "Togo",
//   "Tonga",
//   "Trinidad and Tobago",
//   "Tunisia",
//   "Turkey",
//   "Turkmenistan",
//   "Tuvalu",
//   "Uganda",
//   "Ukraine",
//   "United Arab Emirates",
//   "United Kingdom",
//   "United States",
//   "Uruguay",
//   "Uzbekistan",
//   "Vanuatu",
//   "Vatican City",
//   "Venezuela",
//   "Vietnam",
//   "Yemen",
//   "Zambia",
//   "Zimbabwe"
// ];


// interface AbstractFormData {
//   title: string;
//   fullName: string;
//   phoneNumber: string;
//   emailAddress: string;
//   organization: string;
//   country: string;
//   abstractFile: File | null;
//   securityCode: string;
// }

// const generateCaptchaCode = (): string => {
//   const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = '';
//   for (let i = 0; i < 6; i++) {
//     result += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return result;
// };

// const AbstractSubmission: React.FC = () => {
//   const themeColor = '#00a99d';
//   const [formData, setFormData] = useState<AbstractFormData>({
//     title: 'Dr.',
//     fullName: '',
//     phoneNumber: '',
//     emailAddress: '',
//     organization: '',
//     country: 'United States',
//     abstractFile: null,
//     securityCode: '',
//   });

//   const [showSuccess, setShowSuccess] = useState(false);
//   const [fileName, setFileName] = useState<string>('PDF only (max 25MB)');
//   const [captchaCode, setCaptchaCode] = useState<string>(generateCaptchaCode());
//   const [captchaError, setCaptchaError] = useState<boolean>(false);

//   useEffect(() => {
//     setCaptchaCode(generateCaptchaCode());
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0];
//       setFormData((prevState) => ({
//         ...prevState,
//         abstractFile: file,
//       }));
//       setFileName(file.name);
//     }
//   };

//   const handleRefreshCaptcha = () => {
//     setCaptchaCode(generateCaptchaCode());
//     setFormData((prevState) => ({ ...prevState, securityCode: '' }));
//     setCaptchaError(false);
//   };

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setCaptchaError(false);

//   //   if (formData.securityCode.toLowerCase() !== captchaCode.toLowerCase()) {
//   //     setCaptchaError(true);
//   //     alert('Security verification failed. Please enter the correct code.');
//   //     return;
//   //   }

//   //   const form = new FormData();
//   //   form.append("titlePrefix", formData.title);
//   //   form.append("name", formData.fullName);
//   //   form.append("email", formData.emailAddress);
//   //   form.append("phone", formData.phoneNumber);
//   //   form.append("organizationName", formData.organization);
//   //   form.append("country", formData.country);
//   //   form.append("abstractFile", formData.abstractFile as File);

//   //   try {
//   //     const response = await fetch("http://zynconfback.theroboticssummit.com/api/form-submission/submit", {
//   //       method: "POST",
//   //       body: form,
//   //       headers: {
//   //         "Origin": "https://nursingmeet2026.com"
//   //       }
//   //     });

//   //     if (response.ok) {
//   //       const text = await response.text();
//   //       if (text.includes("Form submitted successfully")) {
//   //         setShowSuccess(true);
//   //       } else {
//   //         alert("Submission failed: " + text);
//   //       }
//   //     } else {
//   //       alert("Submission failed with status " + response.status);
//   //     }
//   //   } catch (err) {
//   //     alert("An error occurred: " + err);
//   //   }
//   // };

//   const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setCaptchaError(false);

//   if (formData.securityCode.toLowerCase() !== captchaCode.toLowerCase()) {
//     setCaptchaError(true);
//     alert("Security verification failed. Please enter the correct code.");
//     return;
//   }

//   if (!formData.abstractFile) {
//     alert("Please upload a file before submitting.");
//     return;
//   }

//   // Prepare FormData for backend
//   const form = new FormData();
//   form.append("title", formData.title);
//   form.append("fullName", formData.fullName);
//   form.append("phoneNumber", formData.phoneNumber);
//   form.append("emailAddress", formData.emailAddress);
//   form.append("organization", formData.organization);
//   form.append("country", formData.country);
//   form.append("document", formData.abstractFile);

//   try {
//     const response = await fetch("https://robotics-backend-node.vercel.app/api/abstracts", {
//     // const response = await fetch("https://robotics-backend-node-countrys.vercel.app/api/abstracts", {
//       method: "POST",
//       body: form,
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log("✅ Server Response:", data);
//       setShowSuccess(true);
//       setFormData({
//         title: "Dr.",
//         fullName: "",
//         phoneNumber: "",
//         emailAddress: "",
//         organization: "",
//         country: "United States",
//         abstractFile: null,
//         securityCode: "",
//       });
//       setFileName("PDF only (max 25MB)");
//       setCaptchaCode(generateCaptchaCode());
//     } else {
//       const err = await response.text();
//       alert("Submission failed: " + err);
//     }
//   } catch (err) {
//     console.error("❌ Network error:", err);
//     alert("An error occurred while submitting: " + err);
//   }
// };



//   return (
//     <section className="bg-gray-50 py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-4xl font-extrabold text-center text-[#303b71] mb-4">
//           Abstract Submission
//         </h2>
//         <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
//           Submit your research abstract for the Artificial Intelligence, Machine Learning, and Robotics Conference 2026.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <Award className="mx-auto mb-3" size={32} style={{ color: '#344177' }} />
//             <h3 className="font-bold text-lg text-gray-800">Abstract Deadline</h3>
//             <p className="text-gray-600">March 15, 2026</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <Bell className="mx-auto mb-3" size={32} style={{ color: '#344177' }} />
//             <h3 className="font-bold text-lg text-gray-800">Notification</h3>
//             <p className="text-gray-600">March 25, 2026</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-sm">
//             <FileText className="mx-auto mb-3" size={32} style={{ color: '#344177' }} />
//             <h3 className="font-bold text-lg text-gray-800">File Format</h3>
//             <p className="text-gray-600">PDF</p>
//           </div>
//         </div>

//         <div className="bg-white p-8 rounded-lg shadow-md">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
//                 <select id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
//                   <option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option>
//                 </select>
//               </div>
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
//                 <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
//               </div>
//               <div>
//                 <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
//                 <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
//               </div>
//               <div>
//                 <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
//                 <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
//               </div>
//               <div>
//                 <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
//                 <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
//               </div>
//               <div>
                
//                 <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
//                 <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
//                   {countries.map(country => <option key={country}>{country}</option>)}
//                 </select>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Abstract File <span className="text-red-500">*</span></label>
//                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                   <div className="space-y-1 text-center">
//                     <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                     <div className="flex text-sm text-gray-600">
//                       <label htmlFor="abstractFile" className="relative cursor-pointer bg-white rounded-md font-medium" style={{ color: '#344177' }}>
//                         <span>Upload a file</span>
//                         <input id="abstractFile" name="abstractFile" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs text-gray-500">{fileName}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="md:col-span-2">
//                 <div className="bg-gray-100 p-6 rounded-lg">
//                   <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Security Verification</h3>
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="flex-shrink-0 px-4 py-2 text-2xl font-bold tracking-widest text-center bg-gray-800 text-white rounded-md select-none" style={{ letterSpacing: '0.4em' }}>
//                       {captchaCode}
//                     </div>
//                     <button
//                       type="button"
//                       onClick={handleRefreshCaptcha}
//                       className="p-3 rounded-md bg-[#344177] hover:bg-[#4c6ca5] text-white transition-colors flex-shrink-0"
//                       aria-label="Refresh captcha"
//                     >
//                       <RotateCw size={20} />
//                     </button>
//                     <div className="flex-grow h-1 bg-transparent"></div>
//                   </div>
//                   <label htmlFor="securityCodeInput" className="sr-only">Enter the code shown above</label>
//                   <input
//                     type="text"
//                     id="securityCodeInput"
//                     name="securityCode"
//                     value={formData.securityCode}
//                     onChange={handleChange}
//                     required
//                     maxLength={6}
//                     className={`w-full p-3 border rounded-md shadow-sm focus:ring-2 ${captchaError ? 'border-red-500' : 'border-gray-300'}`}
//                     placeholder="Enter the code shown above"
//                     style={{'--tw-ring-color': '#344177'} as React.CSSProperties}
//                   />
//                   {captchaError && (
//                     <p className="text-red-500 text-sm mt-1">Incorrect code. Please try again.</p>
//                   )}
//                   <p className="text-gray-500 text-sm mt-3 flex items-center">
//                     <Lock size={16} className="mr-2" /> Please enter the 6-character code to verify you're human
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center pt-4">
//               <button type="submit" className="inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105" style={{ backgroundColor: '#344177' }}>
//                 <FileText size={18} className="mr-2" />
//                 Submit Abstract
//               </button>
//             </div>

//           </form>
//         </div>
//       </div>
//       {showSuccess && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
//           <div className="bg-white p-6 rounded shadow text-center">
//             <h2 className="text-lg font-bold mb-2">Form submitted successfully.</h2>
//             <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded" 
//                 onClick={() => setShowSuccess(false)}>
//               OK
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default AbstractSubmission;









































import React, { useState, useEffect } from 'react';
import { FileText, Award, Bell, Upload, Lock, RotateCw, Loader2 } from 'lucide-react';

export const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (Swaziland)", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

interface AbstractFormData {
  title: string;
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  organization: string;
  country: string;
  abstractFile: File | null;
  securityCode: string;
}

const generateCaptchaCode = (): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

const AbstractSubmission: React.FC = () => {
  const themeColor = '#00a99d';
  const [formData, setFormData] = useState<AbstractFormData>({
    title: 'Dr.',
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organization: '',
    country: 'United States',
    abstractFile: null,
    securityCode: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  // NEW: State for loading
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [fileName, setFileName] = useState<string>('PDF only (max 4MB)');
  const [captchaCode, setCaptchaCode] = useState<string>(generateCaptchaCode());
  const [captchaError, setCaptchaError] = useState<boolean>(false);

  useEffect(() => {
    setCaptchaCode(generateCaptchaCode());
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        abstractFile: file,
      }));
      setFileName(file.name);
    }
  };

  const handleRefreshCaptcha = () => {
    setCaptchaCode(generateCaptchaCode());
    setFormData((prevState) => ({ ...prevState, securityCode: '' }));
    setCaptchaError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCaptchaError(false);

    if (formData.securityCode.toLowerCase() !== captchaCode.toLowerCase()) {
      setCaptchaError(true);
      alert("Security verification failed. Please enter the correct code.");
      return;
    }

    if (!formData.abstractFile) {
      alert("Please upload a file before submitting.");
      return;
    }

    // Set loading to true
    setIsSubmitting(true);

    // Prepare FormData for backend
    const form = new FormData();
    form.append("title", formData.title);
    form.append("fullName", formData.fullName);
    form.append("phoneNumber", formData.phoneNumber);
    form.append("emailAddress", formData.emailAddress);
    form.append("organization", formData.organization);
    form.append("country", formData.country);
    form.append("document", formData.abstractFile);

    try {
      const response = await fetch("https://robotics-backend-node.vercel.app/api/abstracts", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("✅ Server Response:", data);
        setShowSuccess(true);
        setFormData({
          title: "Dr.",
          fullName: "",
          phoneNumber: "",
          emailAddress: "",
          organization: "",
          country: "United States",
          abstractFile: null,
          securityCode: "",
        });
        setFileName("PDF only (max 4MB)");
        setCaptchaCode(generateCaptchaCode());
      } else {
        const err = await response.text();
        alert("Submission failed: " + err);
      }
    } catch (err) {
      console.error("❌ Network error:", err);
      alert("An error occurred while submitting: " + err);
    } finally {
      // Set loading to false regardless of success or failure
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-[#303b71] mb-4">
          Abstract Submission
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Submit your research abstract for the Artificial Intelligence, Machine Learning, and Robotics Conference 2026.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-center">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Award className="mx-auto mb-3" size={32} style={{ color: '#344177' }} />
            <h3 className="font-bold text-lg text-gray-800">Abstract Deadline</h3>
            <p className="text-gray-600">March 15, 2026</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Bell className="mx-auto mb-3" size={32} style={{ color: '#344177' }} />
            <h3 className="font-bold text-lg text-gray-800">Notification</h3>
            <p className="text-gray-600">March 25, 2026</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <FileText className="mx-auto mb-3" size={32} style={{ color: '#344177' }} />
            <h3 className="font-bold text-lg text-gray-800">File Format</h3>
            <p className="text-gray-600">PDF</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title <span className="text-red-500">*</span></label>
                <select id="title" name="title" value={formData.title} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
                  <option>Dr.</option><option>Prof.</option><option>Mr.</option><option>Mrs.</option><option>Ms.</option>
                </select>
              </div>
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
              </div>
              <div>
                <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-red-500">*</span></label>
                <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization <span className="text-red-500">*</span></label>
                <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}/>
              </div>
              <div>
                
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country <span className="text-red-500">*</span></label>
                <select id="country" name="country" value={formData.country} onChange={handleChange} required className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2" style={{'--tw-ring-color': themeColor} as React.CSSProperties}>
                  {countries.map(country => <option key={country}>{country}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Abstract File <span className="text-red-500">*</span></label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="abstractFile" className="relative cursor-pointer bg-white rounded-md font-medium" style={{ color: '#344177' }}>
                        <span>Upload a file</span>
                        <input id="abstractFile" name="abstractFile" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">{fileName}</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-4">Security Verification</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 px-4 py-2 text-2xl font-bold tracking-widest text-center bg-gray-800 text-white rounded-md select-none" style={{ letterSpacing: '0.4em' }}>
                      {captchaCode}
                    </div>
                    <button
                      type="button"
                      onClick={handleRefreshCaptcha}
                      className="p-3 rounded-md bg-[#344177] hover:bg-[#4c6ca5] text-white transition-colors flex-shrink-0"
                      aria-label="Refresh captcha"
                    >
                      <RotateCw size={20} />
                    </button>
                    <div className="flex-grow h-1 bg-transparent"></div>
                  </div>
                  <label htmlFor="securityCodeInput" className="sr-only">Enter the code shown above</label>
                  <input
                    type="text"
                    id="securityCodeInput"
                    name="securityCode"
                    value={formData.securityCode}
                    onChange={handleChange}
                    required
                    maxLength={6}
                    className={`w-full p-3 border rounded-md shadow-sm focus:ring-2 ${captchaError ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter the code shown above"
                    style={{'--tw-ring-color': '#344177'} as React.CSSProperties}
                  />
                  {captchaError && (
                    <p className="text-red-500 text-sm mt-1">Incorrect code. Please try again.</p>
                  )}
                  <p className="text-gray-500 text-sm mt-3 flex items-center">
                    <Lock size={16} className="mr-2" /> Please enter the 6-character code to verify you're human
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform transform ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`} 
                style={{ backgroundColor: '#344177' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <FileText size={18} className="mr-2" />
                    Submit Abstract
                  </>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <h2 className="text-lg font-bold mb-2">Form submitted successfully.</h2>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded" 
                onClick={() => setShowSuccess(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AbstractSubmission;