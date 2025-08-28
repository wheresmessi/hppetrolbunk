import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleImages, setVisibleImages] = useState(12); // Show 12 images initially
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const galleryImages = {
    awards: [
      { id: 1, title: 'Awards & Recognition', src: '/gallery/awards.jpg' },
      { id: 2, title: 'Achievement Awards', src: '/gallery/awards-2.jpg' },
      // HP Uttam Dealer Award 2025
      { id: 101, title: 'HP Uttam Dealer Award 2025 - Certificate', src: '/hp-uttam-award-2025/uttam-award-1.jpg' },
      { id: 102, title: 'HP Uttam Dealer Award 2025 - Ceremony', src: '/hp-uttam-award-2025/uttam-award-2.jpg' },
      { id: 103, title: 'HP Uttam Dealer Award 2025 - Recognition', src: '/hp-uttam-award-2025/uttam-award-3.jpg' },
    ],
    events: [
      { id: 3, title: 'Republic Day Celebration 2018', src: '/gallery/2018-rd-1.jpeg' },
      { id: 4, title: 'Republic Day Event 2018', src: '/gallery/2018-rd-2.jpeg' },
      { id: 5, title: 'Republic Day Function 2018', src: '/gallery/2018-rd-3.jpeg' },
      { id: 6, title: 'Kolu Festival Celebration', src: '/gallery/kolu-1.jpg' },
      { id: 7, title: 'Kolu Festival Display', src: '/gallery/kolu-2.jpg' },
      { id: 8, title: 'Kolu Festival Setup', src: '/gallery/kolu-3.jpg' },
      { id: 9, title: 'Kolu Festival Decorations', src: '/gallery/kolu-4.jpg' },
      { id: 10, title: 'Kolu Festival Arrangements', src: '/gallery/kolu-5.jpg' },
      { id: 11, title: 'Kolu Festival Exhibition', src: '/gallery/kolu-6.jpg' },
      { id: 12, title: 'Kolu Festival Display', src: '/gallery/kolu-7.jpg' },
      { id: 13, title: 'Jallikattu Protest Support', src: '/gallery/jkp-1.jpeg' },
      { id: 14, title: 'Jallikattu Protest Rally', src: '/gallery/jkp-2.jpeg' },
      { id: 15, title: 'Jallikattu Protest Participation', src: '/gallery/jkp-3.jpeg' },
      { id: 16, title: 'Christmas Celebration', src: '/gallery/xmas-1.jpg' },
      { id: 17, title: 'Christmas & New Year', src: '/gallery/xmas-2.jpg' },
      { id: 18, title: 'Christmas Festivities', src: '/gallery/x-mass1.jpg' },
      { id: 19, title: 'New Year Celebration', src: '/gallery/x-mass2.jpg' },
      { id: 20, title: 'Christmas Party', src: '/gallery/x-mass3.jpg' },
      { id: 21, title: 'Xmas Celebration', src: '/gallery/xmass-3.jpg' },
      // Event - 4/10/2022
      { id: 201, title: 'Special Event - October 2022', src: '/event/IMG-20250826-WA0009.jpg' },
      { id: 202, title: 'Team Celebration - October 2022', src: '/event/IMG-20250826-WA0012.jpg' },
      { id: 203, title: 'Event Function - October 2022', src: '/event/IMG-20250826-WA0013.jpg' },
      { id: 204, title: 'Event Ceremony - October 2022', src: '/event/WhatsApp Image 2025-08-26 at 15.19.55_56a6b4c7.jpg' },
      // Independence Day 2023
      { id: 301, title: 'Independence Day 2023 - Flag Hoisting', src: '/independence/IMG-20250826-WA0075.jpg' },
      { id: 302, title: 'Independence Day 2023 - Celebration', src: '/independence/IMG-20250826-WA0076.jpg' },
      { id: 303, title: 'Independence Day 2023 - Team Photo', src: '/independence/IMG-20250826-WA0077.jpg' },
      { id: 304, title: 'Independence Day 2023 - Ceremony', src: '/independence/IMG-20250826-WA0078.jpg' },
      { id: 305, title: 'Independence Day 2023 - Cultural Program', src: '/independence/IMG-20250826-WA0080.jpg' },
      { id: 306, title: 'Independence Day 2023 - Festivities', src: '/independence/IMG-20250826-WA0081.jpg' },
      { id: 307, title: 'Independence Day 2023 - Commemoration', src: '/independence/IMG-20250826-WA0082.jpg' },
      // Gallery-2 Events
      { id: 501, title: 'Event Celebration', src: '/gallery-2/event-1.jpg' },
      { id: 502, title: 'Event Function', src: '/gallery-2/event-2.jpg' },
      { id: 503, title: 'Event Ceremony', src: '/gallery-2/event-3.jpg' },
      { id: 504, title: 'Event Gathering', src: '/gallery-2/event-4.jpg' },
      { id: 505, title: 'Event Program', src: '/gallery-2/event-5.jpg' },
      { id: 506, title: 'Event Activity', src: '/gallery-2/event-6.jpg' },
      { id: 507, title: 'Event Occasion', src: '/gallery-2/event-7.jpg' },
      // Pooja Events
      { id: 508, title: 'Pooja Ceremony', src: '/gallery-2/pooja-1.jpg' },
      { id: 509, title: 'Pooja Celebration', src: '/gallery-2/pooja-2.jpg' },
    ],
    initiatives: [
      { id: 22, title: 'Airtel Payment Bank Launch', src: '/gallery/lapb-1.jpeg' },
      { id: 23, title: 'Payment Bank Services', src: '/gallery/lapb-2.jpeg' },
      { id: 24, title: 'Digital Banking Launch', src: '/gallery/lapb-3.jpeg' },
      { id: 25, title: 'Banking Services Introduction', src: '/gallery/lapb-4.jpeg' },
      { id: 26, title: 'Payment Solutions Launch', src: '/gallery/lapb-5.jpeg' },
      { id: 27, title: 'Synthetic Oil Launch', src: '/gallery/sol-1.jpg' },
      { id: 28, title: 'New Oil Products', src: '/gallery/sol-2.jpg' },
      { id: 29, title: 'Swachh Bharat Abhiyan', src: '/gallery/swaach-1.jpg' },
      { id: 30, title: 'Cleanliness Drive', src: '/gallery/swaach-2.jpg' },
      { id: 31, title: 'Clean India Mission', src: '/gallery/swaach-3.jpg' },
      { id: 32, title: 'Awareness Camp', src: '/gallery/awareness-camp.png' },
      // HP Pay Initiative
      { id: 601, title: 'HP Pay Launch', src: '/gallery-2/hp-pay.jpg' },
      { id: 602, title: 'HP Pay Service', src: '/gallery-2/hp-pay-2.jpg' },
      { id: 603, title: 'HP Pay Implementation', src: '/gallery-2/hp-pay-3.jpg' },
      { id: 604, title: 'HP Pay Promotion', src: '/gallery-2/hp-pay-4.jpg' },
      // Free Health Checkup Initiative
      { id: 605, title: 'Free Health Checkup', src: '/gallery-2/free-health-checkup.jpg' },
      { id: 606, title: 'Free Health Checkup Program', src: '/gallery-2/free-health-checkup-2.jpg' },
    ],
    training: [
      { id: 33, title: 'Training Program Session 1', src: '/gallery/01.jpeg' },
      { id: 34, title: 'Staff Training Program', src: '/gallery/2.jpg' },
      { id: 35, title: 'Professional Development', src: '/gallery/3.jpg' },
      { id: 36, title: 'Skill Enhancement Training', src: '/gallery/4.jpg' },
      { id: 37, title: 'Team Training Session', src: '/gallery/5.jpg' },
      { id: 38, title: 'Learning & Development', src: '/gallery/6.jpg' },
      { id: 39, title: 'Training Workshop', src: '/gallery/9.jpg' },
      { id: 40, title: 'Ayanavaram Branch', src: '/gallery/ayanavaram-branch.jpg' },
      { id: 41, title: 'Location Visit', src: '/gallery/LON.jpg' },
      // Staff Team
      { id: 701, title: 'Our Team Staff', src: '/gallery-2/staffs.jpg' },
    ],
    services: [
      // Customer Service
      { id: 801, title: 'Customer Service Excellence', src: '/gallery-2/customer-service.jpg' },
      { id: 802, title: 'Customer Care Service', src: '/gallery-2/cusotmer-service-2.jpg' },
      { id: 803, title: 'Customer Support Service', src: '/gallery-2/customer-service-3.jpg' },
    ],
    wellness: [
      // Yoga 2022 - 39 images
      { id: 401, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0015.jpg' },
      { id: 402, title: 'Yoga Day 2022', src: '/yoga/IMG-20250826-WA0017.jpg' },
      { id: 403, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0019.jpg' },
      { id: 404, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0022.jpg' },
      { id: 405, title: 'Yoga Training 2022', src: '/yoga/IMG-20250826-WA0024.jpg' },
      { id: 406, title: 'Yoga Class 2022', src: '/yoga/IMG-20250826-WA0026.jpg' },
      { id: 407, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0027.jpg' },
      { id: 408, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0030.jpg' },
      { id: 409, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0032.jpg' },
      { id: 410, title: 'Yoga Day 2022', src: '/yoga/IMG-20250826-WA0033.jpg' },
      { id: 411, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0034.jpg' },
      { id: 412, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0036.jpg' },
      { id: 413, title: 'Yoga Class 2022', src: '/yoga/IMG-20250826-WA0037.jpg' },
      { id: 414, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0042.jpg' },
      { id: 415, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0044.jpg' },
      { id: 416, title: 'Yoga Day 2022', src: '/yoga/IMG-20250826-WA0071.jpg' },
      { id: 417, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0073.jpg' },
      { id: 418, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0083.jpg' },
      { id: 419, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0084.jpg' },
      { id: 420, title: 'Yoga Class 2022', src: '/yoga/IMG-20250826-WA0085.jpg' },
      { id: 421, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0087.jpg' },
      { id: 422, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0088.jpg' },
      { id: 423, title: 'Yoga Day 2022', src: '/yoga/IMG-20250826-WA0089.jpg' },
      { id: 424, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0090.jpg' },
      { id: 425, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0091.jpg' },
      { id: 426, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0092.jpg' },
      { id: 427, title: 'Yoga Class 2022', src: '/yoga/IMG-20250826-WA0093.jpg' },
      { id: 428, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0094.jpg' },
      { id: 429, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0095.jpg' },
      { id: 430, title: 'Yoga Day 2022', src: '/yoga/IMG-20250826-WA0096.jpg' },
      { id: 431, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0097.jpg' },
      { id: 432, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0099.jpg' },
      { id: 433, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0100.jpg' },
      { id: 434, title: 'Yoga Class 2022', src: '/yoga/IMG-20250826-WA0102.jpg' },
      { id: 435, title: 'Yoga Practice 2022', src: '/yoga/IMG-20250826-WA0103.jpg' },
      { id: 436, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0104.jpg' },
      { id: 437, title: 'Yoga Day 2022', src: '/yoga/IMG-20250826-WA0105.jpg' },
      { id: 438, title: 'Yoga Workshop 2022', src: '/yoga/IMG-20250826-WA0106.jpg' },
      { id: 439, title: 'Yoga Session 2022', src: '/yoga/IMG-20250826-WA0108.jpg' },
    ]
  };

  // Get all images combined
  const allImages = [
    ...galleryImages.awards,
    ...galleryImages.events,
    ...galleryImages.initiatives,
    ...galleryImages.training,
    ...galleryImages.services,
    ...galleryImages.wellness
  ];

  const categories = [
    { key: 'all', label: 'All Images', count: allImages.length },
    { key: 'awards', label: 'Awards & Recognition', count: galleryImages.awards.length },
    { key: 'events', label: 'Events & Festivals', count: galleryImages.events.length },
    { key: 'initiatives', label: 'Initiatives & Launches', count: galleryImages.initiatives.length },
    { key: 'training', label: 'Training & Development', count: galleryImages.training.length },
    { key: 'services', label: 'Customer Services', count: galleryImages.services.length },
    { key: 'wellness', label: 'Wellness & Yoga', count: galleryImages.wellness.length },
  ];

  // Get current images to display
  const getCurrentImages = () => {
    const images = activeCategory === 'all' 
      ? allImages 
      : galleryImages[activeCategory as keyof typeof galleryImages];
    return images.slice(0, visibleImages);
  };

  const currentImages = getCurrentImages();
  const totalImages = activeCategory === 'all' 
    ? allImages.length 
    : galleryImages[activeCategory as keyof typeof galleryImages].length;

  const handleShowMore = () => {
    setVisibleImages(prev => prev + 12);
  };

  const handleShowLess = () => {
    setVisibleImages(12);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset visible images when category changes
  useEffect(() => {
    setVisibleImages(12);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Gallery Hero Section */}
      <div className="relative bg-gradient-to-r from-[#012F73] to-blue-600 text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/gallery.png')" }}
        ></div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Take a visual tour of our awards, events, initiatives, and training programs 
            spanning over three decades of dedicated service.
          </p>
        </div>
      </div>

      {/* Gallery Filter Tabs */}
      <section 
        id="gallery-filters" 
        data-animate="true"
        className={`py-8 px-6 bg-gray-50 border-b transition-all duration-1000 ease-out ${
          visibleSections.has('gallery-filters') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.key
                    ? 'bg-[#012F73] text-white shadow-lg scale-105'
                    : 'bg-white text-[#012F73] hover:bg-blue-50 border-2 border-[#012F73]'
                } ${
                  visibleSections.has('gallery-filters') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ 
                  transitionDelay: visibleSections.has('gallery-filters') ? `${index * 100}ms` : '0ms' 
                }}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section 
        id="gallery-grid" 
        data-animate="true"
        className={`py-16 px-6 bg-gradient-to-b from-white via-white to-red-200 transition-all duration-1000 ease-out ${
          visibleSections.has('gallery-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentImages.map((image, index) => (
              <div 
                key={image.id}
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 bg-white border border-gray-200 transform hover:scale-105 ${
                  visibleSections.has('gallery-grid') 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: visibleSections.has('gallery-grid') ? `${index * 100}ms` : '0ms' 
                }}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#012F73] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex items-end">
                  <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <div className="w-12 h-1 bg-red-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More / Show Less Buttons */}
          {totalImages > 12 && (
            <div className="mt-12 text-center">
              {visibleImages < totalImages ? (
                <button
                  onClick={handleShowMore}
                  className="bg-[#012F73] text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 mr-4"
                >
                  Show More ({totalImages - visibleImages} remaining)
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="border-2 border-red-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Visit Us CTA */}
      <section 
        id="gallery-cta" 
        data-animate="true"
        className={`bg-gradient-to-b from-red-200 to-blue-200 py-12 px-6 transition-all duration-1000 ease-out ${
          visibleSections.has('gallery-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl font-bold mb-4 text-gray-800 transition-all duration-700 delay-200 ease-out ${
            visibleSections.has('gallery-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Visit Our Facility
          </h2>
          <p className={`text-gray-600 mb-8 transition-all duration-700 delay-400 ease-out ${
            visibleSections.has('gallery-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Experience our services firsthand. We're open 24/7 to serve you better.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-600 ease-out ${
            visibleSections.has('gallery-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Anna+Nagar+Auto+Service+HP+Petrol+Bunk+Chennai', '_blank')}
              className="bg-[#012F73] text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
            >
              Get Directions
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-red-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-red-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
