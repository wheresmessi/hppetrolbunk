import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const awards = [
  { 
    id: 1, 
    title: 'Best Service Award 2023', 
    year: '2023',
    logo: '/award.png'
  },
  { 
    id: 2, 
    title: 'Safety Excellence', 
    year: '2022',
    logo: '/award.png'
  },
  { 
    id: 3, 
    title: 'Customer Choice', 
    year: '2023',
    logo: '/award.png'
  },
  { 
    id: 4, 
    title: 'Environmental Stewardship', 
    year: '2021',
    logo: '/award.png'
  },
  { 
    id: 5, 
    title: 'Quality Excellence', 
    year: '2023',
    logo: '/award.png'
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  // Hero slider - using same image in loop for now
  const heroSlides = [
    { id: 1, image: '/1.jpg'},
    { id: 2, image: '/2.jpg'},
    { id: 3, image: '/3.jpg'},
    { id: 4, image: '/4.jpg'}
  ];

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
      { threshold: 0.3, rootMargin: '50px' }
    );

    // Observe animated sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-advance hero slides every 4 seconds
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setHeroSlideIndex((prevIndex) => (prevIndex + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  // Auto-advance awards slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Slider */}
      <section className="relative overflow-hidden hero-slider-container">
        <div className="relative">
          <div 
            className="flex hero-slider hero-slide-transition"
            style={{ transform: `translateX(-${heroSlideIndex * 100}%)` }}
          >
            {heroSlides.map((slide) => (
              <div key={slide.id} className="min-w-full relative">
                <img
                  src={slide.image}
                  className="w-full h-auto object-contain"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slider Indicators - Red Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-2 sm:space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setHeroSlideIndex(index)}
                className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                  index === heroSlideIndex 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-red-200 hover:bg-red-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      

      {/* About + Junior Legal Expert + Elizabeth Section */}
      <section className="flex flex-col gap-12 w-full max-w-[1800px] mx-auto">
        {/* About Us Section */}
        <section 
          id="about" 
          data-animate="true"
          className={`py-12 sm:py-16   sm:px-6 relative overflow-hidden flex items-center transition-all duration-1000 ease-out ${
            visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Wave Design */}
          <div className="absolute top-0 left-0 w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 lg:h-20 transform rotate-180">
              <path d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z" fill="#2563eb" opacity="0.8" />
              <path d="M0,20 C150,80 350,20 600,50 C850,80 1050,20 1200,50 L1200,120 L0,120 Z" fill="#1d4ed8" opacity="0.6" />
              <path d="M0,40 C150,100 350,40 600,70 C850,100 1050,40 1200,70 L1200,120 L0,120 Z" fill="#1e40af" opacity="0.4" />
            </svg>
          </div>

          <div className="w-full max-w-5xl py-6 mx-auto relative text-center lg:text-center transition-all duration-700 delay-200 ease-out">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-bold leading-tight text-[#012F73]">Fueling Trust</h2>
            <div className="flex flex-col gap-1 text-xl sm:text-2xl lg:text-3xl text-gray-700 leading-relaxed mb-8">
              <span>in the Heart of <span className="text-red-600 font-extrabold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide">Anna Nagar</span></span>
            </div>
          </div>
        </section>
        {/* Mr. J. Antony Section */}
         <div className="flex items-center justify-center w-full">
    <p className="text-justify text-gray-700 leading-relaxed text-base sm:text-lg lg:text-lg max-w-5xl px-2">
      Annanagar Auto Service was founded by the late Mr. J. Antony, a visionary entrepreneur 
      and authorized dealer of HP fuels, products, and lubricants. Built on a foundation of 
      passion for customer service and a commitment to excellence, the business continues to 
      carry forward his remarkable legacy.
    </p>
  </div>
        <section className="w-full flex items-center justify-center px-10">
  <div className="w-full max-w-4xl">
    
    {/* Mobile View (stacked card) */}
    <div className="relative bg-blue-200 rounded-lg shadow-lg p-6 flex flex-col items-center md:hidden h-[525px]">
      <h2 className="text-xl font-bold text-black mb-3 underline decoration-red-200 decoration-2 underline-offset-4">
  Mr. J. Antony
</h2>

      <p className="text-gray-700 text-sm mb-6">
        Born in 1950 — the year India became a Republic — in February, the month with the 
        fewest letters, and on the day after the “sweetest” number, the second, Mr. J. Antony 
        displayed exceptional intellect and business acumen. His ventures spanned construction, 
        transport, and education, but his most enduring accomplishment came on April 29, 
        1994, with the establishment of Annanagar Auto Service and a clear vision to create a 
        customer-first culture.
      </p>
      <img
        src="/antony.png"
        alt="Mr. J. Antony - Founder"
        className="absolute h-auto object-contain bottom-0 right-0"
      />
    </div>

    {/* Desktop / Tablet View (absolute positioning) */}
    <div className="hidden md:block relative w-full max-w-4xl h-80">
      {/* Blue Box Background */}
      <div className="absolute inset-0 top-16 bg-blue-200 rounded-lg shadow-lg"></div>
      
      {/* Content Box */}
      <div className="absolute left-0 top-16 w-3/4 h-64 bg-blue-200 rounded-lg p-8 flex flex-col justify-center z-10">
        <h2 className="text-xl font-bold text-black mb-3 underline decoration-red-200 decoration-2 underline-offset-4">
  Mr. J. Antony
</h2>
<p className="text-gray-700 mb-6">
          Born in 1950 — the year India became a Republic — in February, the month with the 
          fewest letters, and on the day after the “sweetest” number, the second, Mr. J. Antony 
          displayed exceptional intellect and business acumen. His ventures spanned construction, 
          transport, and education, but his most enduring accomplishment came on April 29, 
          1994, with the establishment of Annanagar Auto Service and a clear vision to create a 
          customer-first culture.
        </p>
      </div>
      
      {/* Antony Image - Bottom Right */}
      <div className="absolute right-0 bottom-0 w-3/6 z-20">
        <img
          src="/antony.png"
          alt="Mr. J. Antony - Founder"
          className="w-full h-full object-contain"
        />
      </div>
    </div>

  </div>
</section>


        {/* Company Philosophy and Legacy Section */}
        <section className="w-full px-4 sm:px-6 py-12 md:py-16">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-justify text-base sm:text-lg lg:text-lg max-w-5xl mx-auto">
                From the beginning, the philosophy was clear: 100% customer satisfaction. Guided by 
                the motto "We serve to grow, and we grow to serve," the outlet quickly earned a 
                reputation for quality products and exceptional service. Under Mr. Antony's leadership, 
                milestones included achieving the highest sales in 1995 and becoming the leading 
                dealer of lubricants in Chennai.
              </p>
              
              <p className="text-justify text-base sm:text-lg lg:text-lg max-w-5xl mx-auto">
                A carefully selected and well-trained team became the backbone of the operation, 
                ensuring every customer was treated with warmth and respect. The heartfelt "Namaste" 
                greeting became a hallmark of the service experience — a reflection of the company's 
                values of politeness, professionalism, and care.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Excellence Section */}
        <section 
          id="askq-elizabeth" 
          data-animate="true"
          className={`py-16 px-0 transition-all duration-1000 ease-out ${
            visibleSections.has('askq-elizabeth') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-full mx-auto">
            {/* Mobile Layout */}
            <div className="lg:hidden">
              <div className="mx-4 mb-6 bg-blue-200 rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 border-b-4 border-red-200 pb-2 inline-block">Mrs. A. Elizabeth</h3>
                <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
                  Following Mr. Antony's passing, leadership transitioned to Mrs. A. Elizabeth, an MBA graduate with a vision for innovation and growth. Under her stewardship, the business reached new heights:
                </p>
                <ul className="space-y-2 text-black text-sm sm:text-base">
                  <li><strong>2019 –</strong> Highest sales in South India</li>
                  <li><strong>2020 –</strong> Highest lube sales and best performance in HP Pay</li>
                  <li><strong>2021 –</strong> Recognition for presentation at Yeskaud</li>
                  <li><strong>2022 –</strong> Best Women Dealer Award (Nov 29)</li>
                </ul>
              </div>
              <div className="relative mx-4 h-80 mb-6">
                <div className="absolute inset-x-0 top-16 h-64 bg-red-200 rounded-xl shadow-lg"></div>
                <div className="absolute inset-x-0 bottom-0 h-80 z-10">
                  <img src="/elizabeth.png" alt="Elizabeth" className="w-full h-full object-contain" />
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:block relative h-96">
              <div className="absolute left-0 top-16 w-2/4 h-80 bg-red-200 rounded-r-xl shadow-lg"></div>
              <div className="absolute left-0 top-0 w-2/4 h-full z-5">
                <img src="/elizabeth.png" alt="Elizabeth" className="w-full h-full object-contain rounded-r-xl" />
              </div>
              <div className="absolute right-0 top-0 w-2/3 h-80 bg-blue-200 rounded-l-xl shadow-lg p-6 sm:p-8 flex flex-col justify-center">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 border-b-4 border-red-200 pb-2 inline-block">Mrs. A. Elizabeth</h3>
                <p className="text-black text-sm sm:text-base leading-relaxed mb-4">
                  Following Mr. Antony's passing, leadership transitioned to Mrs. A. Elizabeth, an MBA graduate with a vision for innovation and growth. Under her stewardship, the business reached new heights:
                </p>
                <ul className="space-y-2 text-black text-sm sm:text-base">
                  <li><strong>2019 –</strong> Highest sales in South India</li>
                  <li><strong>2020 –</strong> Highest lube sales and best performance in HP Pay</li>
                  <li><strong>2021 –</strong> Recognition for presentation at Yeskaud</li>
                  <li><strong>2022 –</strong> Best Women Dealer Award (Nov 29)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Company Growth and Performance */}
      <section className="w-full px-4 sm:px-6 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Our <span className="text-red-600">Growth</span> Journey
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-justify text-base sm:text-lg lg:text-lg max-w-5xl mx-auto">
                Today, <span className="font-bold text-red-600">Annanagar Auto Service</span> maintains a monthly turnover of <span className="font-semibold">800KL</span> and an annual
                turnover nearing <span className="font-semibold">10,000KL</span>. A tightly knit, vertically structured team ensures smooth day-
                to-day operations and a consistent focus on service excellence.
              </p>
              <p className="text-justify text-base sm:text-lg lg:text-lg max-w-5xl mx-auto">
                With a strong foundation built on tradition and an eye toward the future, <span className="font-bold text-red-600">Annanagar Auto
                Service</span> remains committed to innovation, sustainability, and delivering the highest
                standards of customer satisfaction in the automotive service industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HPCL Section */}
      <section 
        id="hpcl" 
        data-animate="true"
        className={`bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative transition-all duration-1000 ease-out ${
          visibleSections.has('hpcl') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 sm:mb-12">
            <div className={`lg:col-span-2 py-2 sm:py-4 transition-all duration-700 delay-200 ease-out ${
              visibleSections.has('hpcl') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="text-red-600 font-bold text-5xl sm:text-6xl lg:text-7xl leading-none transition-all duration-500 hover:scale-105">HP</div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl sm:text-2xl lg:text-3xl text-gray-700" >Energizing India</span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold "style={{ color: '#012F73' }}>with Every Drop</span>
                </div>
              </div>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Hindustan Petroleum Corporation Limited (HPCL) is an Indian oil and natural gas company with its headquarters in Mumbai, Maharashtra. 
                  It is a state-owned enterprise of the Government of India and operates two major refineries producing a wide variety of petroleum 
                  fuels and specialties. HPCL is committed to innovation and sustainability, powering the nation's growth while maintaining 
                  environmental responsibility.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  With a vast network of over 17,000 retail outlets, HPCL has been at the forefront of meeting the energy needs of millions of 
                  Indians. The company has consistently demonstrated excellence in refining, marketing, and distribution of petroleum products, 
                  earning the trust of customers across the country. HPCL's commitment to quality and service has made it one of the most 
                  respected names in the Indian energy sector.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  HPCL continues to expand its operations and invest in new technologies to ensure energy security for the nation. The company 
                  is actively involved in exploration and production activities, as well as in the development of alternative energy sources, 
                  reinforcing its position as a forward-thinking energy company.
                </p>
              </div>
            </div>
            
            <div className={`space-y-4 sm:space-y-6 transition-all duration-700 delay-400 ease-out ${
              visibleSections.has('hpcl') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-gradient-to-r from-transparent to-blue-300/70 p-4 sm:p-6 rounded-lg border border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="font-semibold mb-3 text-sm sm:text-base" style={{ color: '#012F73' }}>Registered Office and Corporate Headquarters</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  17, Jamshedji Tata Road,<br />
                  Mumbai - 400020,<br />
                  Maharashtra, India<br />
                  Phone: +91-22-22021234
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-transparent to-blue-300/70 p-4 sm:p-6 rounded-lg border border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 delay-100">
                <h3 className="font-semibold mb-3 text-sm sm:text-base" style={{ color: '#012F73' }}>Marketing Headquarters</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Petroleum House,<br />
                  17, Jamshedji Tata Road,<br />
                  Mumbai - 400020,<br />
                  Maharashtra, India
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-transparent to-blue-300/70 p-4 sm:p-6 rounded-lg border border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 delay-200">
                <h3 className="font-semibold mb-3 text-sm sm:text-base" style={{ color: '#012F73' }}>Regional Office</h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  No. 1, Gandhi Irwin Road,<br />
                  Egmore,<br />
                  Chennai - 600008,<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Awards Carousel */}
      <section className="bg-white w-full my-4 sm:my-8 text-center px-4">
        <h2 className="text-lg sm:text-xl mb-4 sm:mb-5 font-semibold" style={{ color: '#012F73' }}>Awards & Recognition</h2>
        <div className="w-full overflow-hidden relative min-h-24 sm:min-h-30 flex items-center px-2 sm:px-4">
          <div 
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="min-w-full flex-shrink-0 py-4 sm:py-6 px-2 sm:px-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-15 sm:h-15 flex items-center justify-center">
                  <img
                    src={award.logo}
                    alt={`${award.title} logo`}
                    className="w-12 h-12 sm:w-15 sm:h-15 object-contain rounded-full shadow-md"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-sm sm:text-lg font-bold mb-1" style={{ color: '#012F73' }}>{award.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Stats */}
      <section className="bg-gradient-to-b from-white to-red-200 py-16 px-6 border-t">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Journey in Numbers</h2>
            <p className="text-gray-700 text-lg">Three decades of excellence and service</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600 font-medium">Years of Service</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">KL Annual Turnover</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Service Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-red-200 via-blue-200 to-blue-200 py-6 sm:py-8 px-4 sm:px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <h3 className="mb-4 text-lg sm:text-xl font-semibold text-center lg:text-left" style={{ color: '#012F73' }}>Contact Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#012F73' }}>Address</h4>
              <p className="text-blue-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                Anna Nagar Auto Service<br />
                HP Petrol Bunk<br />
                Anna Nagar, Chennai<br />
                Tamil Nadu, India
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#012F73' }}>Contact Details</h4>
              <p className="text-blue-700 text-xs sm:text-sm lg:text-base leading-relaxed">
                Phone: +91-XX-XXXXXXXX<br />
                Email: info@annanagar-hp.com<br />
                Operating Hours: 24/7
              </p>
            </div>
            <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{ color: '#012F73' }}>Services</h4>
              <ul className="text-blue-700 text-xs sm:text-sm lg:text-base leading-relaxed list-disc list-inside">
                <li>Petrol & Diesel</li>
                <li>Engine Oil & Lubricants</li>
                <li>Car Wash Services</li>
                <li>Tire Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
