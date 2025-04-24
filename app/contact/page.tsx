// import React from "react";
// import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

// const ContactUs = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Animated Header */}
//         <div className="text-center mb-16 space-y-4 animate-slideIn">
//           <h1 className="text-5xl font-bold text-gray-900">
//             Get in <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
//           </h1>
//           <p className="text-xl text-gray-600">We'd love to hear from you</p>
//         </div>

//         {/* Contact Card */}
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-10">
//             {/* Left Column */}
//             <div className="space-y-10">
//               {/* Contact Info Blocks */}
//               <div className="flex items-start space-x-4 group">
//                 <div className="p-3 bg-blue-100 rounded-xl">
//                   <MapPin className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Campus</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     SNBP International School, Manjri<br />
//                     126/2A Manjri-Keshavnagar,<br />
//                     Near Shivkrushshn, Mangal Karyalay,<br />
//                     Pune - 411036
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 group">
//                 <div className="p-3 bg-indigo-100 rounded-xl">
//                   <Mail className="h-8 w-8 text-indigo-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
//                   <a
//                     href="mailto:snbpskeshavnagar@gmail.com"
//                     className="text-blue-600 hover:text-indigo-700 transition-colors flex items-center gap-2"
//                   >
//                     snbpskeshavnagar@gmail.com
//                     <ArrowUpRight className="h-4 w-4" />
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4 group">
//                 <div className="p-3 bg-green-100 rounded-xl">
//                   <Phone className="h-8 w-8 text-green-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
//                   <div className="space-y-1">
//                     <p className="text-gray-600">Office: 8446534553</p>
//                     <p className="text-gray-600">Director: 8888398035 / 8888308035</p>
//                     <p className="text-gray-600">Admin: 9767432665</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="space-y-10">
//               {/* Timings Card */}
//               <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//                 <div className="flex items-center gap-3 mb-6">
//                   <Clock className="h-8 w-8 text-purple-600" />
//                   <h2 className="text-2xl font-bold text-gray-900">Operating Hours</h2>
//                 </div>

//                 <div className="space-y-6">
//                   {/* School Timings */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Academic Hours</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600">Nursery</span>
//                         <span className="font-medium text-gray-700">9:00 AM - 11:45 AM</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600">Pre-primary</span>
//                         <span className="font-medium text-gray-700">9:00 AM - 12:30 PM</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600">Primary (1-5)</span>
//                         <span className="font-medium text-gray-700">8:30 AM - 3:00 PM</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-600">Secondary (6-12)</span>
//                         <span className="font-medium text-gray-700">
//                           Mon-Fri: 8:30 AM - 3:00 PM<br />
//                           Sat: 9:00 AM - 12:30 PM
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Office Timings */}
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Office Hours</h3>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">Morning</span>
//                       <span className="font-medium text-gray-700">10:00 AM - 12:00 PM</span>
//                     </div>
//                     <div className="flex justify-between items-center">
//                       <span className="text-gray-600">Afternoon</span>
//                       <span className="font-medium text-gray-700">2:00 PM - 3:30 PM</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="border-t border-gray-200">
//             <div className="p-10">
//               <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//                 Campus Location
//               </h2>
//               <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8593531136758!2d73.9534340749631!3d18.527045982567717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2377a1ac41f%3A0x7ebc7c78cab6014!2sSNBP%20School!5e1!3m2!1sen!2sin!4v1743591862391!5m2!1sen!2sin"
//                   className="w-full h-full"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
import React from "react";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeInUp">
          <h1 className="text-5xl font-bold text-gray-900 md:text-6xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-medium">Connect with our vibrant learning community</p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              {/* Address Card */}
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transition-all hover:scale-[1.02]">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Campus</h3>
                  <p className="text-gray-600 leading-relaxed space-y-1.5">
                    <span className="block">SNBP's International School, Manjri</span>
                    <span className="block">126/2A Manjri-Keshavnagar,</span>
                    <span className="block">Near Shivkrushshn, Mangal Karyalay,</span>
                    <span className="block">Pune - 411036</span>
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl transition-all hover:scale-[1.02]">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Mail className="h-7 w-7 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Email Us</h3>
                  <a
                    href="mailto:snbpskeshavnagar@gmail.com"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-indigo-700 transition-colors group font-medium"
                  >
                    <span>snbpskeshavnagar@gmail.com</span>
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-cyan-50 rounded-2xl transition-all hover:scale-[1.02]">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                  <Phone className="h-7 w-7 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Call Us</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">Office:</span>
                      <a href="tel:8446534553" className="font-medium text-gray-900 hover:text-blue-600">
                      +91 8080774499 / 8956351916 / 8999395453
                      </a>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Timings */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200/50">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <Clock className="h-7 w-7 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Operating Hours</h2>
                </div>

                <div className="space-y-8">
                  {/* Academic Hours */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 border-gray-200">
                      Academic Schedule
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <div>
                          <h4 className="font-medium text-gray-900">Nursery</h4>
                          <p className="text-sm text-gray-500">Monday - Friday</p>
                        </div>
                        <span className="text-blue-600 font-medium">09:00 - 11:45 AM</span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <div>
                          <h4 className="font-medium text-gray-900">Pre-primary</h4>
                          <p className="text-sm text-gray-500">LKG & UKG</p>
                        </div>
                        <span className="text-blue-600 font-medium">09:00 AM - 12:30 PM</span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <div>
                          <h4 className="font-medium text-gray-900">Primary School</h4>
                          <p className="text-sm text-gray-500">Grade 1 - 5</p>
                        </div>
                        <span className="text-blue-600 font-medium">08:30 AM - 03:00 PM</span>
                      </div>

                      <div className="p-3 bg-white rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium text-gray-900">Secondary School</h4>
                          <span className="text-blue-600 font-medium">Grade 6 - 12</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Mon-Fri</span>
                          <span className="text-gray-700">08:30 AM - 03:00 PM</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Saturday</span>
                          <span className="text-gray-700">09:00 AM - 12:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2 border-gray-200">
                      Office Hours
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="text-gray-700">Morning Session</span>
                        <span className="text-blue-600 font-medium">10:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm">
                        <span className="text-gray-700">Afternoon Session</span>
                        <span className="text-blue-600 font-medium">02:00 PM - 03:30 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="px-8 lg:px-12 pb-12">
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Campus Location
              </h2>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-200/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.8593531136758!2d73.9534340749631!3d18.527045982567717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2377a1ac41f%3A0x7ebc7c78cab6014!2sSNBP%20School!5e1!3m2!1sen!2sin!4v1743591862391!5m2!1sen!2sin"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;