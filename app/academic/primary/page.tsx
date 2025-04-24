// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image"; // Import the Image component from Next.js
// import "/styles/globals.css"; // Make sure the CSS file is imported

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-gray-50 fade-in">
//       {/* Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Sidebar */}
//           <div className="lg:col-span-1 fade-in">
//             <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
//               <h3 className="text-xl font-bold mb-4 text-primary">Academic</h3>
//               <ul className="space-y-2">
//                 <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
//                   <Link href="/academic/primary">Primary</Link>
//                 </li>
//                 <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
//                   <Link href="/academic/pre-primary">Pre-Primary</Link>
//                 </li>
//                 <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
//                   <Link href="/academic/secondary">Secondary</Link>
//                 </li>
//                 <li className="border-l-4 border-transparent hover:border-primary pl-3 text-gray-600 hover:text-primary transition-colors">
//                   <Link href="/academic/sr-secondary">SR-Secondary</Link>
//                 </li>
//               </ul>

//               <div className="mt-8 bg-gray-50 p-4 rounded-lg border fade-in">
//                 <h4 className="font-semibold text-primary mb-2">
//                   Have a question?
//                 </h4>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Contact our admissions office for more information about our
//                   school.
//                 </p>
//                 <Button className="w-full">Contact Us</Button>
//               </div>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8 fade-in">
//             <div className="bg-white p-10 rounded-lg shadow-md">
//               <div
//                 className="relative h-68 w-full md:w-4/3 rounded-lg overflow-hidden flex justify-center items-center"
//                 style={{ margin: "auto" }}
//               >
//                 {/* Centered Image */}
//                 <Image
//                   src="/primary2.jpeg" // Replace with the path to your image
//                   alt="Primary Education"
//                   width={600}
//                   height={400}
//                   className="mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
//                   style={{ height: "300px" }}
//                 />
//               </div>
//               <div className="flex flex-col md:flex-center gap-6 items-start mb-5">
//                 <div
//                   className="md:w-5/3"
//                   style={{ margin: "auto", marginTop: "30px" }}
//                 >
//                   <h2
//                     className="text-2xl md:text-2xl font-semibold mb-10 text-primary"
//                     style={{ marginLeft: "200px" }}
//                   >
//                     Primary Education at Our School
//                   </h2>
//                   <p className="text-gray-700 mb-4 leading-relaxed">
//                     At SNBP's, we are committed to nurturing young minds by
//                     fostering creativity, innovation, and a strong sense of
//                     cultural identity. Our approach integrates modern
//                     educational methodologies with traditional values, ensuring
//                     a well-rounded learning experience for every child.
//                   </p>

//                   <p className="text-gray-700 mb-4 leading-relaxed">
//                     We emphasize experiential learning through interactive
//                     activities such as storytelling, dramatization, and visual
//                     engagement. Our curriculum leverages audio-visual aids,
//                     multimedia tools, and structured play to enhance
//                     comprehension and retention, creating an engaging and
//                     enriching environment.
//                   </p>

//                   <p className="text-gray-700 mb-4 leading-relaxed">
//                     Research suggests that early childhood education plays a
//                     crucial role in cognitive development. At SNBP's, we provide a
//                     stimulating and supportive atmosphere where children can
//                     explore, learn, and grow into confident, well-rounded
//                     individuals. With a focus on holistic education, we ensure
//                     that every student receives the best foundation for future
//                     success.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-center fade-in">
//               <Link href="/about">
//                 <Button variant="outline" className="flex items-center">
//                   <ArrowLeft className="mr-2 h-4 w-4" />
//                   Back to About Us
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
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
                      href={`/academic/${item.toLowerCase()}`}
                      className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 
                        ${
                          item === "Primary"
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
                  Schedule Consultation
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
                  src="/primary2.jpeg"
                  alt="Primary Education"
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
                      Primary Education
                    </h1>
                    <p className="text-lg text-gray-200 font-medium max-w-2xl mx-auto">
                      Empowering young minds with creativity, innovation, and foundational learning.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paragraph Sections */}
              <div className="px-8 py-12">
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200/30 shadow-md">
                        <Image
                          src="/images/smart-classrooms/4.jpg"
                          alt="Interactive Learning"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed text-md">
                        At SNBP's, we foster creativity and cultural identity through a blend of traditional values and modern educational methods. Our environment promotes innovation and curiosity, nurturing young minds into independent thinkers.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                    <div className="w-full md:w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200/30 shadow-md">
                        <Image
                          src="/primary3.jpeg"
                          alt="Interactive Activities"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed text-md">
                        We use storytelling, dramatization, and visual engagement, paired with audio-visual tools, to make learning immersive and enjoyable. This experiential learning approach boosts retention and enhances understanding.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                      <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200/30 shadow-md">
                        <Image
                          src="\prim2.jpeg"
                          alt="Growth and Exploration"
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                        
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="text-gray-700 leading-relaxed text-md">
                        Early education shapes cognitive development. SNBP's provides a supportive, exploratory environment where children learn and grow holistically—intellectually, emotionally, and socially.
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
