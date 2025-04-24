

"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

// ... (keep your existing categories and categoryImages arrays)
const categories = [
  { name: "independence-day", cover: "/images/independence-day/1.JPG" },
  { name: "republic-day", cover: "/images/republic-day/1.JPG" },
  { name: "annual-day", cover: "/images/annual-day/1.JPG" },
  { name: "environment-day", cover: "/images/environment-day/1.JPG" },
  { name: "science-exhibition", cover: "/images/science-exhibition/1.JPG" },
  { name: "marathi-day", cover: "/images/marathi-day/1.JPG" },
  { name: "dandiya-celebration", cover: "/images/dandiya-celebration/1.JPG" },
  { name: "rakhi-celebration", cover: "/images/rakhi-celebration/1.JPG" },
  { name: "smart-classrooms", cover: "/images/smart-classrooms/1.JPG" },
];

const categoryImages: Record<string, string[]> = {
  "independence-day": Array.from({ length: 10 }, (_, i) => `/images/independence-day/${i + 1}.JPG`),
  "republic-day": Array.from({ length: 10 }, (_, i) => `/images/republic-day/${i + 1}.JPG`),
  "annual-day": Array.from({ length: 10 }, (_, i) => `/images/annual-day/${i + 1}.JPG`),
  "marathi-day": Array.from({ length: 4 }, (_, i) => `/images/marathi-day/${i + 1}.JPG`),
  "science-exhibition": Array.from({ length: 10 }, (_, i) => `/images/science-exhibition/${i + 1}.JPG`),
  "children-day": Array.from({ length: 10 }, (_, i) => `/images/children-day/${i + 1}.JPG`),
  "dandiya-celebration": Array.from({ length: 9 }, (_, i) => `/images/dandiya-celebration/${i + 1}.JPG`),
  "constitutional-day": Array.from({ length: 10 }, (_, i) => `/images/constitutional-day/${i + 1}.JPG`),
  "environment-day": Array.from({ length: 6 }, (_, i) => `/images/environment-day/${i + 1}.JPG`),
  "smart-classrooms": Array.from({ length: 8 }, (_, i) => `/images/smart-classrooms/${i + 1}.JPG`),
  "rakhi-celebration": Array.from({ length: 5}, (_, i) => `/images/rakhi-celebration/${i + 1}.JPG`),
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
