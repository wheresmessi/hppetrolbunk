import { useState, useEffect } from 'react';

import Header from '../components/Header';

import Footer from '../components/Footer';

import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';



export default function ContactPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  const [formData, setFormData] = useState({

    name: '',

    email: '',

    phone: '',

    subject: '',

    message: ''

  });

  // Intersection Observer for smooth scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    // Observe animated sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {

    const { name, value } = e.target;

    setFormData(prev => ({

      ...prev,

      [name]: value

    }));

  };



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is now handled by FormSubmit
    console.log('Form submitted:', formData);
  };



  return (

    <div className="min-h-screen bg-white">

      <Header />

      

      {/* Contact Hero Section */}
      <div 
        id="hero"
        data-animate="true"
        className={`relative bg-gradient-to-r from-[#012F73] to-blue-600 text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1200 ease-out ${
          visibleSections.has('hero') ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/contact.png')", backgroundPosition: 'center 25%' }}
        ></div>
        
        {/* Content */}
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1200 ease-out delay-500 ${
          visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ease-out delay-700 ${
            visibleSections.has('hero') ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>Contact Us</h1>
          <p className={`text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4 transition-all duration-1000 ease-out delay-900 ${
            visibleSections.has('hero') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            Get in touch with us for any queries, feedback, or support.
          </p>
        </div>
      </div>



      {/* Main Contact Content */}

      <section 
        id="contact-content"
        data-animate="true"
        className={`py-16 px-6 transition-all duration-1000 ease-out ${
          visibleSections.has('contact-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            

            {/* Contact Information */}

            <div className={`w-full transition-all duration-1000 ease-out delay-200 ${
              visibleSections.has('contact-content') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>

              <h2 className="text-3xl font-bold mb-8" style={{ color: '#012F73' }}>Get in Touch</h2>

              

              {/* Contact Cards */}

              <div className="space-y-6">

                <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out ${
                  visibleSections.has('contact-content') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '600ms' }}>

                  <div className="flex items-start space-x-4">

                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">

                      <MapPinIcon className="w-6 h-6" style={{ color: '#012F73' }} />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#012F73' }}>Visit Our Station</h3>

                      <p className="text-gray-700">

                        No E, 1, Anna Nagar 3rd Main Rd,<br />

                        Block E, Annanagar East,<br />

                        Chennai, Tamil Nadu<br />

                        Pin - 600102

                      </p>

                    </div>

                  </div>

                </div>



                <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out ${
                  visibleSections.has('contact-content') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '800ms' }}>

                  <div className="flex items-start space-x-4">

                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">

                      <PhoneIcon className="w-6 h-6 text-red-600" />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#012F73' }}>Call Us</h3>

                      <p className="text-gray-700">

                        9940277977<br />

                        9840843943

                      </p>

                    </div>

                  </div>

                </div>



                <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out ${
                  visibleSections.has('contact-content') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '1000ms' }}>

                  <div className="flex items-start space-x-4">

                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">

                      <EnvelopeIcon className="w-6 h-6" style={{ color: '#012F73' }} />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#012F73' }}>Email Us</h3>

                      <p className="text-gray-700">

                        talk2eliz81@yahoo.in<br />

                        antonyj4343@yahoo.com

                      </p>

                    </div>

                  </div>

                </div>



                <div className={`bg-white rounded-lg shadow-lg p-6 border border-gray-200 transition-all duration-700 ease-out ${
                  visibleSections.has('contact-content') 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-4'
                }`} style={{ transitionDelay: '1200ms' }}>

                  <div className="flex items-start space-x-4">

                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">

                      <ClockIcon className="w-6 h-6 text-red-600" />

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#012F73' }}>Operating Hours</h3>

                      <p className="text-gray-700">

                        <strong>Petrol & Diesel</strong> 24/7<br />
                        <strong>Pollution Testing Centre</strong> 10:30 AM - 4:30 PM <br />
                        <strong>Instant Insurance Services</strong> 9:30 AM - 7:30 PM <br />
                        <strong>Free Oil Change - Two-Wheelers</strong> 6:00 AM - 12:00 PM <br />
                        <strong>Free Windshield Cleaning - Cars</strong> 9:30 AM - 7:30 PM
                        

                      </p>

                    </div>

                  </div>

                </div>



              </div>

            </div>



            {/* Contact Form */}

            <div className={`transition-all duration-1000 ease-out delay-400 ${
              visibleSections.has('contact-content') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>

              <h2 className="text-3xl font-bold mb-8" style={{ color: '#012F73' }}>Send Us a Message</h2>

              

              <form 

        action="https://formsubmit.co/annanagarautoservicehp@gmail.com" 

        method="POST"

        onSubmit={handleSubmit} 

        className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"

      >

        {/* Add hidden fields for FormSubmit configuration */}

        <input type="hidden" name="_subject" value="New Contact Form Submission" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                  <div>

                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">

                      Full Name *

                    </label>

                    <input

                      type="text"

                      id="name"

                      name="name"

                      value={formData.name}

                      onChange={handleInputChange}

                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"

                      placeholder="Enter your full name"

                    />

                  </div>

                  

                  <div>

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

                      Email Address *

                    </label>

                    <input

                      type="email"

                      id="email"

                      name="email"

                      value={formData.email}

                      onChange={handleInputChange}

                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"

                      placeholder="Enter your email"

                    />

                  </div>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                  <div>

                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">

                      Phone Number

                    </label>

                    <input

                      type="tel"

                      id="phone"

                      name="phone"

                      value={formData.phone}

                      onChange={handleInputChange}

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"

                      placeholder="Enter your phone number"

                    />

                  </div>

                  

                  <div>

                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">

                      Subject *

                    </label>

                    <select

                      id="subject"

                      name="subject"

                      value={formData.subject}

                      onChange={handleInputChange}

                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"

                    >

                      <option value="">Select a subject</option>

                      <option value="general">General Inquiry</option>

                      <option value="service">Service Request</option>

                      <option value="complaint">Complaint</option>

                      <option value="feedback">Feedback</option>

                      <option value="business">Business Partnership</option>

                      <option value="other">Other</option>

                    </select>

                  </div>

                </div>



                <div className="mb-6">

                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

                    Message *

                  </label>

                  <textarea

                    id="message"

                    name="message"

                    value={formData.message}

                    onChange={handleInputChange}

                    required

                    rows={6}

                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"

                    placeholder="Enter your message here..."

                  />

                </div>



                <button

                  type="submit"

                  className="w-full text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 focus:ring-2 focus:ring-red-500 focus:ring-offset-2" style={{ backgroundColor: '#012F73' }}

                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d2454'}

                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#012F73'}

                >

                  Send Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>



      {/* Map Section */}

      <section 
        id="map-section"
        data-animate="true"
        className={`bg-white py-16 px-6 border-t transition-all duration-1000 ease-out ${
          visibleSections.has('map-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >

        <div className="max-w-6xl mx-auto">

          <div className={`text-center mb-12 transition-all duration-1000 ease-out delay-200 ${
            visibleSections.has('map-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>

            <h2 className="text-4xl font-bold mb-2" style={{ color: '#012F73' }}>Find Us on Map</h2>

            <p className="text-gray-700 text-lg">E/100, 3rd Avenue, Anna Nagar, Chennai - 600 102</p>

          </div>

          

          <div className={`bg-white rounded-xl shadow-xl overflow-hidden border-2 transition-all duration-1000 ease-out delay-400 transform ${
            visibleSections.has('map-section') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ borderColor: '#012F73' }}>

            <div className="h-[500px] w-full">

              <iframe

                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.347393178132!2d80.2117!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjgiTiA4MMKwMTInNDIuMSJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"

                width="100%"

                height="100%"

                style={{ border: 0 }}

                allowFullScreen

                loading="lazy"

                title="Location Map"

                className="w-full h-full"

              ></iframe>

            </div>

          </div>

        </div>

      </section>





      <Footer />

    </div>

  );

}