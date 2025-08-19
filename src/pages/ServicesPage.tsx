import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  timing: string;
  image: string;
  color: string;
  highlight?: boolean;
}

export default function ServicesPage() {
  // General Services
  const generalServices: Service[] = [
    {
      id: 'pollution-testing',
      title: 'Pollution Testing Centre',
      tagline: 'Stay Compliant. Drive with Confidence',
      description: 'Quick and certified emission testing for bikes, cars, autos, and trucks – all under one roof.',
      timing: '10:30 AM - 4:30 PM',
      image: 'https://images.unsplash.com/photo-1631549916768-41152fbb3e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      color: 'bg-green-50 border-green-200'
    },
    {
      id: 'instant-insurance',
      title: 'Instant Insurance',
      tagline: 'Insurance Made Easy, Instantly',
      description: 'With our partner Jubilant Insurance Broking Services Pvt. Ltd., get instant policies for two-wheelers, cars, autos, and trucks.',
      timing: '9:30 AM - 7:30 PM',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      id: 'oil-change',
      title: 'Free Oil Change (Two-Wheelers)',
      tagline: 'Fresh Oil. Smooth Ride. Free in 20 Minutes',
      description: 'Get your two-wheeler\'s oil changed absolutely free with genuine HP oil (outside oil not accepted)',
      timing: '6:00 AM - 12:00 PM',
      image: 'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1388&q=80',
      color: 'bg-amber-50 border-amber-200'
    },
    {
      id: 'windshield-cleaning',
      title: 'Free Windshield Cleaning (Cars)',
      tagline: 'See the Road Clearly, Every Time',
      description: 'Enjoy a complimentary windshield cleaning for all cars – safe, clear, and streak-free.',
      timing: 'All Day',
      image: 'https://images.unsplash.com/photo-1597938430467-e7df881d7b0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      color: 'bg-cyan-50 border-cyan-200'
    }
  ];

  // Advertisement Section
  const advertisement: Service = {
    id: 'education-wall',
    title: 'Education Wall – Advertise with Us',
    tagline: 'Your Brand, Our Wall, Maximum Reach',
    description: 'Promote your business on our Education Wall and get noticed by thousands of daily visitors.',
    timing: 'Contact for Details',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    color: 'bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300',
    highlight: true
  };

  // Service Card Component
  const ServiceCard = ({ service }: { service: Service }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border">
      <div className="h-48 bg-gray-200 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <h3 className="text-xl font-bold text-white">{service.title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {service.timing}
        </div>
        <h4 className="text-lg font-semibold text-gray-800 mb-2">{service.tagline}</h4>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">Enhancing your driving experience with premium automotive care</p>
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Advertisement Space</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <div 
                    className="h-64 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${advertisement.image})` }}
                  ></div>
                </div>
                <div className="p-8 md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{advertisement.title}</h3>
                  <p className="text-lg text-gray-700 mb-4">{advertisement.tagline}</p>
                  <p className="text-gray-600 mb-6">{advertisement.description}</p>
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {advertisement.timing}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Services Section */}
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {generalServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}