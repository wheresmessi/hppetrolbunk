import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const navigate = useNavigate();

  const galleryImages = {
    awards: [
      { id: 1, title: 'Awards & Recognition', src: '/gallery/awards.jpg' },
      { id: 2, title: 'Achievement Awards', src: '/gallery/awards-2.jpg' },
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
    ]
  };

  // Get all images combined
  const allImages = [
    ...galleryImages.awards,
    ...galleryImages.events,
    ...galleryImages.initiatives,
    ...galleryImages.training
  ];

  const categories = [
    { key: 'all', label: 'All Images', count: allImages.length },
    { key: 'awards', label: 'Awards & Recognition', count: galleryImages.awards.length },
    { key: 'events', label: 'Events & Festivals', count: galleryImages.events.length },
    { key: 'initiatives', label: 'Initiatives & Launches', count: galleryImages.initiatives.length },
    { key: 'training', label: 'Training & Development', count: galleryImages.training.length },
  ];

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
      <section className="py-8 px-6 bg-gray-50 border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-[#012F73] text-white shadow-lg transform scale-105'
                    : 'bg-white text-[#012F73] hover:bg-blue-50 border-2 border-[#012F73] hover:scale-105'
                } transition-transform`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-white via-white to-red-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeCategory === 'all' 
              ? allImages 
              : galleryImages[activeCategory as keyof typeof galleryImages]
            ).map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gray-200"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#012F73] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-gradient-to-b from-red-200 to-blue-200 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Visit Our Facility</h2>
          <p className="text-gray-600 mb-8">
            Experience our services firsthand. We're open 24/7 to serve you better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://maps.google.com/?q=Anna+Nagar+Auto+Service+HP+Petrol+Bunk+Chennai', '_blank')}
              className="bg-[#012F73] text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Directions
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="border-2 border-red-400 text-gray-800 font-semibold py-3 px-8 rounded-lg hover:bg-red-400 hover:text-white transition-colors duration-200"
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
