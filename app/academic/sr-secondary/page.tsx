"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, GraduationCap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="fade-in">
            <div className="bg-white p-6 rounded-2xl shadow-xl sticky top-24 border border-gray-200/30 backdrop-blur-lg">
              <h3 className="text-2xl font-extrabold mb-6 text-gray-900 font-sans">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                  Academic Programs
                </span>
                <span className="block w-14 h-1 bg-gradient-to-r from-primary to-blue-400 mt-2 rounded-full" />
              </h3>
              <ul className="space-y-2">
                {["Primary", "Pre-Primary", "Secondary", "Senior Secondary"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/academic/${item.toLowerCase().replace(" ", "-")}`}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 
                        ${
                          item === "Senior Secondary"
                            ? "bg-gradient-to-r from-primary/10 to-blue-50 border-l-4 border-primary font-semibold text-gray-900"
                            : "text-gray-600 hover:bg-gray-100/70 hover:border-l-4 hover:border-primary"
                        }`}
                    >
                      <GraduationCap className="h-4 w-4 text-primary/80" />
                      <span className="ml-3 text-sm">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 bg-gradient-to-br from-indigo-800 to-blue-800 p-6 rounded-2xl border border-gray-200/30 text-white shadow-lg">
                <h4 className="font-bold text-lg mb-3">Need Assistance?</h4>
                <p className="text-sm text-gray-200 mb-5 leading-relaxed">
                  Our admissions team is ready to help with any questions about our programs.
                </p>
                <Button className="w-full bg-white/90 text-gray-900 hover:bg-white shadow-md backdrop-blur-sm transition-transform hover:scale-105">
                  Contact Us
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="space-y-8 fade-in">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200/30">
              {/* Hero Section */}
              <div className="relative h-80 w-full group">
                <Image
                  src="/sr-secondary .jpg"
                  alt="Senior Secondary Education"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/70" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="max-w-3xl mx-auto text-center">
                    <Sparkles className="h-10 w-10 text-primary mx-auto mb-4 animate-pulse backdrop-blur-sm p-2 rounded-full bg-white/10" />
                    <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-xl">
                      Senior Secondary Education
                    </h1>
                    <p className="text-lg text-gray-200 font-medium max-w-2xl mx-auto">
                      Preparing students for higher education, leadership, and lifelong success.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraph Sections */}
              <div className="px-8 py-12">
                <div className="space-y-12">
                  {/* Section 1 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200/30 shadow-md">
                        <Image
                          src="/sr-secondary .jpg"
                          alt="Learning Environment"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed text-md">
                        Senior secondary education is a crucial stage in a child's academic journey. 
                        It prepares them for higher education and professional paths. 
                        Our school offers a robust and dynamic learning environment 
                        where students can excel academically and develop personally.
                      </p>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200/30 shadow-md">
                        <Image
                          src="/pra2.jpg"
                          alt="Collaboration and Innovation"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed text-md">
                        At this stage, we emphasize critical thinking, problem-solving, and innovation. 
                        Our classrooms are designed to encourage collaboration, 
                        and our faculty is highly dedicated to providing guidance and mentorship.
                      </p>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200/30 shadow-md">
                        <Image
                          src="/sr-2.jpg"
                          alt="Modern Facilities"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed text-md">
                        Students have access to modern technology, laboratories, 
                        and extracurricular opportunities, ensuring a well-rounded education. 
                        Our commitment is to help every student achieve their fullest potential 
                        and prepare them for future success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Button */}
            <div className="flex justify-start fade-in">
              <Link href="/">
                <Button className="group px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Return to Home
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
