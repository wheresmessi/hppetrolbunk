import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('facility');

  const galleryImages = {
    facility: [
      { id: 1, title: 'Main Entrance', src: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Main+Entrance' },
      { id: 2, title: 'Fuel Dispensers', src: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Fuel+Dispensers' },
      { id: 3, title: 'Service Bay', src: 'https://via.placeholder.com/400x300/059669/ffffff?text=Service+Bay' },
      { id: 4, title: 'Customer Lounge', src: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Customer+Lounge' },
      { id: 5, title: 'Oil Change Area', src: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Oil+Change+Area' },
      { id: 6, title: 'Car Wash Station', src: 'https://via.placeholder.com/400x300/0891b2/ffffff?text=Car+Wash+Station' },
    ],
    services: [
      { id: 7, title: 'Professional Oil Change', src: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Oil+Change+Service' },
      { id: 8, title: 'Tire Services', src: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Tire+Services' },
      { id: 9, title: 'Engine Check', src: 'https://via.placeholder.com/400x300/059669/ffffff?text=Engine+Check' },
      { id: 10, title: 'Battery Service', src: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Battery+Service' },
      { id: 11, title: 'Vehicle Inspection', src: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Vehicle+Inspection' },
      { id: 12, title: 'Complete Car Wash', src: 'https://via.placeholder.com/400x300/0891b2/ffffff?text=Complete+Car+Wash' },
    ],
    products: [
      { id: 13, title: 'HP Premium Petrol', src: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=HP+Premium+Petrol' },
      { id: 14, title: 'Speed Diesel', src: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Speed+Diesel' },
      { id: 15, title: 'Engine Oils Range', src: 'https://via.placeholder.com/400x300/059669/ffffff?text=Engine+Oils' },
      { id: 16, title: 'Lubricants', src: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Lubricants' },
      { id: 17, title: 'Auto Care Products', src: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Auto+Care+Products' },
      { id: 18, title: 'Brake Fluids', src: 'https://via.placeholder.com/400x300/0891b2/ffffff?text=Brake+Fluids' },
    ],
    awards: [
      { id: 19, title: 'Best Service Award 2023', src: 'https://via.placeholder.com/400x300/dc2626/ffffff?text=Service+Award+2023' },
      { id: 20, title: 'Safety Excellence 2022', src: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Safety+Excellence' },
      { id: 21, title: 'Customer Choice 2023', src: 'https://via.placeholder.com/400x300/059669/ffffff?text=Customer+Choice' },
      { id: 22, title: 'Environmental Award 2021', src: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Environmental+Award' },
      { id: 23, title: 'Quality Excellence 2023', src: 'https://via.placeholder.com/400x300/ea580c/ffffff?text=Quality+Excellence' },
      { id: 24, title: '30 Years of Service', src: 'https://via.placeholder.com/400x300/0891b2/ffffff?text=30+Years+Service' },
    ]
  };

  const categories = [
    { key: 'facility', label: 'Our Facility', count: galleryImages.facility.length },
    { key: 'services', label: 'Services', count: galleryImages.services.length },
    { key: 'products', label: 'Products', count: galleryImages.products.length },
    { key: 'awards', label: 'Awards & Recognition', count: galleryImages.awards.length },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      {/* Gallery Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-20 lg:py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Take a visual tour of our modern facility, comprehensive services, quality products, 
            and the recognition we've earned over three decades of dedicated service.
          </p>
        </div>
      </section>

      {/* Gallery Filter Tabs */}
      <section className="py-8 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium text-sm uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === category.key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages[activeCategory as keyof typeof galleryImages].map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Visit Our Facility</h2>
          <p className="text-blue-100 mb-8">
            Experience our services firsthand. We're open 24/7 to serve you better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Get Directions
            </button>
            <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
