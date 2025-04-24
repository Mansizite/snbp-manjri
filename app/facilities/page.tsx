// import React from "react";

// const facilities = [
//   {
//     title: "SMART CLASSROOM",
//     description:
//       "At SNBP's School, classrooms are equipped with DigiClass solutions, providing e-learning content based on Cognitive Learning Approach.",
//     image: "/images/smart-classrooms/8.jpg", // Make sure this image exists in your public folder
//   },
//   {
//     title: "SCHOOL LIBRARY",
//     description:
//       "The school has a well-resourced library with periodicals, journals, magazines, fiction, and reference books.",
//     image: "school-library.jpg",
//   },
//   {
//     title: "SPORTS",
//     description:
//       "Excellent sports facilities include indoor and outdoor games, with expert trainers.",
//     image: "sports.jpg",
//   },
//   {
//     title: "COMPUTER LAB",
//     description:
//       "The computer lab is equipped with multimedia computers and internet access.",
//     image: "computer-lab.jpg",
//   },
//   {
//     title: "TRANSPORT",
//     description:
//       "The school provides bus transport services from all corners of the city.",
//     image: "transport.jpg",
//   },
//   {
//     title: "MATH LAB",
//     description:
//       "The mathematics lab provides students with interactive tools to explore mathematical concepts.",
//     image: "math-lab.jpg",
//   },
//   {
//     title: "SCIENCE LAB",
//     description:
//       "The science lab allows students to conduct experiments and understand scientific theories.",
//     image: "science-lab.jpg",
//   },
 
// ];



// const Facilities = () => {
//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 animate-pageFadeIn">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             World-Class <span className="text-blue-600">Facilities</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience modern education with state-of-the-art infrastructure designed to inspire innovation and learning excellence.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//           {facilities.map((facility, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={facility.image}
//                   alt={facility.title}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent" />
//                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white tracking-wide">
//                   {facility.title}
//                 </h3>
//               </div>
              
//               <div className="p-6 lg:p-8">
//                 <p className="text-gray-600 leading-relaxed">
//                   {facility.description}
//                 </p>
//                 <div className="mt-4">
//                   <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
//                     Learn More
//                     <svg
//                       className="w-4 h-4 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;

// import React from "react";

// const facilities = [
//   {
//     title: "SMART CLASSROOM",
//     description:
//       "At SNBP's School, classrooms are equipped with DigiClass solutions, providing e-learning content based on Cognitive Learning Approach.",
//     image: "/images/smart-classrooms/8.jpg",
//   },
//   {
//     title: "SCHOOL LIBRARY",
//     description:
//       "The school has a well-resourced library with periodicals, journals, magazines, fiction, and reference books.",
//     image: "school-library.jpg",
//   },
//   {
//     title: "SPORTS",
//     description:
//       "Excellent sports facilities include indoor and outdoor games, with expert trainers.",
//     image: "sports.jpg",
//   },
//   {
//     title: "COMPUTER LAB",
//     description:
//       "The computer lab is equipped with multimedia computers and internet access.",
//     image: "computer-lab.jpg",
//   },
//   {
//     title: "TRANSPORT",
//     description:
//       "The school provides bus transport services from all corners of the city.",
//     image: "transport.jpg",
//   },
//   {
//     title: "MATH LAB",
//     description:
//       "The mathematics lab provides students with interactive tools to explore mathematical concepts.",
//     image: "math-lab.jpg",
//   },
//   {
//     title: "SCIENCE LAB",
//     description:
//       "The science lab allows students to conduct experiments and understand scientific theories.",
//     image: "science-lab.jpg",
//   },
// ];

// const Facilities = () => {
//   return (
//     <section className="bg-gradient-to-b from-gray-50 to-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8 animate-pageFadeIn">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//             World-Class <span className="text-blue-600">Facilities</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Experience modern education with state-of-the-art infrastructure designed to inspire innovation and learning excellence.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//           {facilities.map((facility, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={facility.image}
//                   alt={facility.title}
//                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300 ease-out"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent" />
//                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white tracking-wide">
//                   {facility.title}
//                 </h3>
//               </div>
              
//               <div className="p-6 lg:p-8">
//                 <p className="text-gray-700 leading-relaxed mb-4">
//                   {facility.description}
//                 </p>
//                 <div className="mt-4">
//                   <button className="flex items-center bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-colors">
//                     Learn More
//                     <svg
//                       className="w-4 h-4 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;

// import React from "react";

// const facilities = [
//   {
//     title: "SMART CLASSROOM",
//     description:
//       "At SNBP's School, classrooms are equipped with DigiClass solutions, providing e-learning content based on Cognitive Learning Approach.",
//     image: "/images/smart-classrooms/8.jpg",
//   },
//   {
//     title: "SCHOOL LIBRARY",
//     description:
//       "The school has a well-resourced library with periodicals, journals, magazines, fiction, and reference books.",
//     image: "school-library.jpg",
//   },
//   {
//     title: "SPORTS",
//     description:
//       "Excellent sports facilities include indoor and outdoor games, with expert trainers.",
//     image: "sports.jpg",
//   },
//   {
//     title: "COMPUTER LAB",
//     description:
//       "The computer lab is equipped with multimedia computers and internet access.",
//     image: "computer-lab.jpg",
//   },
//   {
//     title: "TRANSPORT",
//     description:
//       "The school provides bus transport services from all corners of the city.",
//     image: "transport.jpg",
//   },
//   {
//     title: "MATH LAB",
//     description:
//       "The mathematics lab provides students with interactive tools to explore mathematical concepts.",
//     image: "math-lab.jpg",
//   },
//   {
//     title: "SCIENCE LAB",
//     description:
//       "The science lab allows students to conduct experiments and understand scientific theories.",
//     image: "science-lab.jpg",
//   },
// ];



// const Facilities = () => {
//   return (
//     <section className="bg-gradient-to-b from-blue-50/50 to-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 animate-pageFadeIn">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
//             <span className="absolute -bottom-2 left-0 w-full h-2 bg-blue-100/80"></span>
//              <span className="text-blue-600">Facilities</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
//             Experience modern education with state-of-the-art infrastructure designed to inspire innovation and learning excellence.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
//           {facilities.map((facility, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-[1.5rem] shadow-xl hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 border border-gray-100/60"
//             >
//               <div className="relative aspect-[4/3] overflow-hidden rounded-t-[1.5rem]">
//                 <img
//                   src={facility.image}
//                   alt={facility.title}
//                   className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20" />
//                 <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-tight drop-shadow-lg">
//                   {facility.title}
//                   <span className="block w-12 h-1 bg-blue-500 mt-3 rounded-full" />
//                 </h3>
//               </div>
              
//               <div className="p-7 lg:p-8">
//                 <p className="text-gray-600 leading-relaxed mb-5 text-lg font-medium">
//                   {facility.description}
//                 </p>
//                 <div className="mt-4">
                 
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Facilities;
import React from "react";

// Add react-icons for better visual hierarchy
import { FaBook, FaFlask, FaBus, FaLaptopCode, FaChartLine, FaFutbol, FaChalkboardTeacher } from "react-icons/fa";
import Image from 'next/image'
const facilities = [
  {
    title: "SMART CLASSROOM",
    description: "At SNBP's School, classrooms are equipped with DigiClass solutions, providing e-learning content based on Cognitive Learning Approach.",
    image: "secondary3.JPG",
    icon: <FaChalkboardTeacher className="w-6 h-6" />,
    color: "bg-purple-100",
  },
  {
    title: "SCHOOL LIBRARY",
    description: "The school has a well-resourced library with periodicals, journals, magazines, fiction, and reference books.",
    image: "school-library.jpg",
    icon: <FaBook className="w-6 h-6" />,
    color: "bg-orange-100",
  },
  {
    title: "SPORTS",
    description: "Excellent sports facilities include indoor and outdoor games with expert trainers.",
    image: "sports.jpg",
    icon: <FaFutbol className="w-6 h-6" />,
    color: "bg-green-100",
  },
  {
    title: "COMPUTER LAB",
    description: "The computer lab is equipped with multimedia computers and high-speed internet access.",
    image: "secondary.JPG",
    icon: <FaLaptopCode className="w-6 h-6" />,
    color: "bg-blue-100",
  },
  {
    title: "TRANSPORT",
    description: "Safe and reliable bus transport services covering all areas of the city.",
    image: "transport.jpg",
    icon: <FaBus className="w-6 h-6" />,
    color: "bg-red-100",
  },
  {
    title: "MATH LAB",
    description: "Interactive math lab with modern tools to explore mathematical concepts visually.",
    image: "math-lab.jpg",
    icon: <FaChartLine className="w-6 h-6" />,
    color: "bg-yellow-100",
  },
  {
    title: "SCIENCE LAB",
    description: "State-of-the-art science lab for hands-on experiments and practical learning.",
    image: "science-lab.jpg",
    icon: <FaFlask className="w-6 h-6" />,
    color: "bg-cyan-100",
  },
];

const Facilities = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/20 to-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 animate-pageFadeIn overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20">
          <div className="relative inline-block">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="relative inline-block">
                <span className="text-blue-600 z-10 relative">Our Facilities</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-blue-100/80 -rotate-1 -skew-x-6"></span>
              </span>
            </h2>
            <div className="absolute -top-4 right-0 opacity-20 text-9xl text-blue-500">✧</div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed font-medium">
            Discover world-class infrastructure designed to foster innovation, creativity, and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-2 border border-gray-100/80 backdrop-blur-sm"
            >
              <div className="relative aspect-[5/3] overflow-hidden rounded-t-2xl">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/10 transition-opacity duration-300" />
                <div className={`absolute top-4 right-4 ${facility.color} p-3 rounded-xl shadow-sm`}>
                  {facility.icon}
                </div>
                <h3 className="absolute bottom-6 left-6 text-2xl font-bold text-white tracking-tight drop-shadow-lg space-y-2">
                  <span className="inline-block">{facility.title}</span>
                  <span className="block w-8 h-1 bg-blue-400 mt-2 rounded-full transform group-hover:scale-x-125 transition-transform duration-300" />
                </h3>
              </div>
              
              <div className="p-6 lg:p-7">
                <p className="text-gray-600 leading-relaxed text-[1.05rem] font-medium">
                  {facility.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Facilities;