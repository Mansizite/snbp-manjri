// "use client";

// import { useState } from "react";
// import Image from "next/image";

// // Define categories with cover images
// const categories = [
//   { name: "independence-day", cover: "/images/independence-day/1.jpg" },
//   { name: "republic-day", cover: "/images/republic-day/1.jpg" },
//   { name: "annual-day", cover: "/images/annual-day/1.jpg" },
//   { name: "environment-day", cover: "/images/environment-day/1.jpg" },
//   { name: "science-exhibition", cover: "/images/science-exhibition/1.jpg" },
//   { name: "marathi-day", cover: "/images/marathi-day/1.jpg" },
//   { name: "dandiya-celebration", cover: "/images/dandiya-celebration/1.jpg" },
//   { name: "rakhi-celebration", cover: "/images/rakhi-celebration/1.jpg" },

//   { name: "smart-classrooms", cover: "/images/smart-classrooms/1.jpg" },
// ];

// // Define images for each category
// const categoryImages: Record<string, string[]> = {
//   "independence-day": Array.from({ length: 10 }, (_, i) => `/images/independence-day/${i + 1}.jpg`),
//   "republic-day": Array.from({ length: 10 }, (_, i) => `/images/republic-day/${i + 1}.jpg`),
//   "annual-day": Array.from({ length: 10 }, (_, i) => `/images/annual-day/${i + 1}.jpg`),
//   "marathi-day": Array.from({ length: 4 }, (_, i) => `/images/marathi-day/${i + 1}.jpg`),
//   "science-exhibition": Array.from({ length: 10 }, (_, i) => `/images/science-exhibition/${i + 1}.jpg`),
//   "children-day": Array.from({ length: 10 }, (_, i) => `/images/children-day/${i + 1}.jpg`),
//   "dandiya-celebration": Array.from({ length: 9 }, (_, i) => `/images/dandiya-celebration/${i + 1}.jpg`),
//   "constitutional-day": Array.from({ length: 10 }, (_, i) => `/images/constitutional-day/${i + 1}.jpg`),
//   "environment-day": Array.from({ length: 6 }, (_, i) => `/images/environment-day/${i + 1}.jpg`),
//   "smart-classrooms": Array.from({ length: 8 }, (_, i) => `/images/smart-classrooms/${i + 1}.jpg`),
//   "rakhi-celebration": Array.from({ length: 5}, (_, i) => `/images/rakhi-celebration/${i + 1}.jpg`),
// };

// export default function GalleryHome() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 animate-fadeIn">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold text-center text-primary mb-12 animate-fadeIn delay-100">
//           Gallery
//         </h1>

//         {/* Show categories if none is selected */}
//         {!selectedCategory ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn delay-200">
//             {categories.map((category) => (
//               <div
//                 key={category.name}
//                 className="cursor-pointer relative h-60 w-full rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//                 onClick={() => setSelectedCategory(category.name)}
//               >
//                 <Image
//                   src={category.cover}
//                   alt={`${category.name} cover`}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded-lg"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3 text-xl font-semibold capitalize">
//                   {category.name.replace("-", " ")}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           // Show images for the selected category
//           <div>
//             <button
//               className="mb-5 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               onClick={() => setSelectedCategory(null)}
//             >
//               ⬅ Back to Categories
//             </button>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 animate-fadeIn delay-300">
//               {categoryImages[selectedCategory]?.map((img, index) => (
//                 <div
//                   key={index}
//                   className="relative w-full h-48 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
//                 >
//                   <Image
//                     src={img}
//                     alt={`${selectedCategory} ${index + 1}`}
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import { ArrowLeft, Grid3x3, X } from "lucide-react";

// const categories = [
//   { name: "independence-day", cover: "/images/independence-day/1.jpg" },
//   { name: "republic-day", cover: "/images/republic-day/1.jpg" },
//   { name: "annual-day", cover: "/images/annual-day/1.jpg" },
//   { name: "environment-day", cover: "/images/environment-day/1.jpg" },
//   { name: "science-exhibition", cover: "/images/science-exhibition/1.jpg" },
//   { name: "marathi-day", cover: "/images/marathi-day/1.jpg" },
//   { name: "dandiya-celebration", cover: "/images/dandiya-celebration/1.jpg" },
//   { name: "rakhi-celebration", cover: "/images/rakhi-celebration/1.jpg" },
//   { name: "smart-classrooms", cover: "/images/smart-classrooms/1.jpg" },
// ];

// const categoryImages: Record<string, string[]> = {
//   "independence-day": Array.from({ length: 10 }, (_, i) => `/images/independence-day/${i + 1}.jpg`),
//   "republic-day": Array.from({ length: 10 }, (_, i) => `/images/republic-day/${i + 1}.jpg`),
//   "annual-day": Array.from({ length: 10 }, (_, i) => `/images/annual-day/${i + 1}.jpg`),
//   "marathi-day": Array.from({ length: 4 }, (_, i) => `/images/marathi-day/${i + 1}.jpg`),
//   "science-exhibition": Array.from({ length: 10 }, (_, i) => `/images/science-exhibition/${i + 1}.jpg`),
//   "children-day": Array.from({ length: 10 }, (_, i) => `/images/children-day/${i + 1}.jpg`),
//   "dandiya-celebration": Array.from({ length: 9 }, (_, i) => `/images/dandiya-celebration/${i + 1}.jpg`),
//   "constitutional-day": Array.from({ length: 10 }, (_, i) => `/images/constitutional-day/${i + 1}.jpg`),
//   "environment-day": Array.from({ length: 6 }, (_, i) => `/images/environment-day/${i + 1}.jpg`),
//   "smart-classrooms": Array.from({ length: 8 }, (_, i) => `/images/smart-classrooms/${i + 1}.jpg`),
//   "rakhi-celebration": Array.from({ length: 5}, (_, i) => `/images/rakhi-celebration/${i + 1}.jpg`),
// };

// export default function GalleryHome() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   const formatCategoryName = (name: string) => {
//     return name.split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50 py-12">
//       <div className="container mx-auto px-4 max-w-7xl">
//         <h1 className="text-5xl font-bold text-center text-gray-900 mb-8 animate-fadeIn">
//           <span className="bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent">
//             School Gallery
//           </span>
//         </h1>

//         {!selectedCategory ? (
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
//             {categories.map((category) => (
//               <div
//                 key={category.name}
//                 className="group relative aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:z-10"
//                 onClick={() => setSelectedCategory(category.name)}
//               >
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/60 z-10" />
//                 <Image
//                   src={category.cover}
//                   alt={category.name}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
//                   <h2 className="text-xl font-bold text-white drop-shadow-xl">
//                     {formatCategoryName(category.name)}
//                   </h2>
//                   <p className="text-gray-200 text-sm font-medium mt-1">
//                     {categoryImages[category.name]?.length} Photos
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-8">
//             <div className="flex items-center justify-between bg-white/90 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-sm border border-gray-200/30">
//               <button
//                 onClick={() => setSelectedCategory(null)}
//                 className="flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 rounded-xl hover:bg-gray-50 transition-all 
//                          border border-gray-200/60 shadow-sm hover:shadow-md"
//               >
//                 <ArrowLeft className="h-5 w-5" />
//                 <span className="font-semibold">All Categories</span>
//               </button>
//               <h2 className="text-3xl font-bold text-gray-900">
//                 {formatCategoryName(selectedCategory)}
//               </h2>
//               <div className="w-32" /> {/* Spacer */}
//             </div>

//             <div className="columns-2 md:columns-3 lg:columns-4 gap-4 animate-fadeIn">
//               {categoryImages[selectedCategory]?.map((img, index) => (
//                 <div
//                   key={index}
//                   className="relative mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-lg 
//                            hover:shadow-2xl transition-shadow duration-300 group"
//                 >
//                   <Image
//                     src={img}
//                     alt={`${selectedCategory} ${index + 1}`}
//                     width={400}
//                     height={600}
//                     className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// ... (keep your existing categories and categoryImages arrays)
const categories = [
  { name: "independence-day", cover: "/images/independence-day/1.jpg" },
  { name: "republic-day", cover: "/images/republic-day/1.jpg" },
  { name: "annual-day", cover: "/images/annual-day/1.jpg" },
  { name: "environment-day", cover: "/images/environment-day/1.jpg" },
  { name: "science-exhibition", cover: "/images/science-exhibition/1.jpg" },
  { name: "marathi-day", cover: "/images/marathi-day/1.jpg" },
  { name: "dandiya-celebration", cover: "/images/dandiya-celebration/1.jpg" },
  { name: "rakhi-celebration", cover: "/images/rakhi-celebration/1.jpg" },
  { name: "smart-classrooms", cover: "/images/smart-classrooms/1.jpg" },
];

const categoryImages: Record<string, string[]> = {
  "independence-day": Array.from({ length: 10 }, (_, i) => `/images/independence-day/${i + 1}.jpg`),
  "republic-day": Array.from({ length: 10 }, (_, i) => `/images/republic-day/${i + 1}.jpg`),
  "annual-day": Array.from({ length: 10 }, (_, i) => `/images/annual-day/${i + 1}.jpg`),
  "marathi-day": Array.from({ length: 4 }, (_, i) => `/images/marathi-day/${i + 1}.jpg`),
  "science-exhibition": Array.from({ length: 10 }, (_, i) => `/images/science-exhibition/${i + 1}.jpg`),
  "children-day": Array.from({ length: 10 }, (_, i) => `/images/children-day/${i + 1}.jpg`),
  "dandiya-celebration": Array.from({ length: 9 }, (_, i) => `/images/dandiya-celebration/${i + 1}.jpg`),
  "constitutional-day": Array.from({ length: 10 }, (_, i) => `/images/constitutional-day/${i + 1}.jpg`),
  "environment-day": Array.from({ length: 6 }, (_, i) => `/images/environment-day/${i + 1}.jpg`),
  "smart-classrooms": Array.from({ length: 8 }, (_, i) => `/images/smart-classrooms/${i + 1}.jpg`),
  "rakhi-celebration": Array.from({ length: 5}, (_, i) => `/images/rakhi-celebration/${i + 1}.jpg`),
};

export default function GalleryHome() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const formatCategoryName = (name: string) =>
    name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          Explore Our{" "}
          <span className="relative inline-block before:absolute before:-bottom-2 before:left-0 before:w-full before:h-2 before:bg-blue-200/60 before:rounded-full">
            <span className="relative bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              School Gallery
            </span>
          </span>
        </h1>

        {!selectedCategory ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <div className="relative aspect-square">
                  <Image
                    src={cat.cover}
                    alt={cat.name}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {formatCategoryName(cat.name)}
                  </h3>
                  <p className="mt-1 text-sm text-slate-200/90 font-medium">
                    {categoryImages[cat.name]?.length || 0} Photos
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <div className="flex items-center justify-between mb-10">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 text-slate-700 hover:text-slate-900 font-medium"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Gallery</span>
              </button>
              <h2 className="text-3xl font-bold text-slate-800 text-center">
                {formatCategoryName(selectedCategory)}
              </h2>
              <div className="w-[136px]" /> {/* Maintains layout balance */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoryImages[selectedCategory]?.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-[1.02] group"
                >
                  <Image
                    src={img}
                    alt={`${selectedCategory} ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
