import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  // General Services
  const generalServices: Service[] = [
    {
      id: 'pollution-testing',
      title: 'Pollution Testing Centre',
      tagline: 'Stay Compliant. Drive with Confidence',
      description: 'Quick and certified emission testing for bikes, cars, autos, and trucks – all under one roof.',
      timing: '10:30 AM - 4:30 PM',
      image: '/pollution-testing.png',
      color: 'border-blue-200'
    },
    {
      id: 'instant-insurance',
      title: 'Instant Insurance',
      tagline: 'Insurance Made Easy, Instantly',
      description: 'With our partner Jubilant Insurance Broking Services Pvt. Ltd., get instant policies for two-wheelers, cars, autos, and trucks.',
      timing: '9:30 AM - 7:30 PM',
      image: '/insurance.png',
      color: 'border-red-200'
    },
    {
      id: 'oil-change',
      title: 'Free Oil Change (Two-Wheelers)',
      tagline: 'Fresh Oil. Smooth Ride. Free in 20 Minutes',
      description: 'Get your two-wheeler\'s oil changed absolutely free with genuine HP oil (outside oil not accepted)',
      timing: '6:00 AM - 12:00 PM',
      image: '/free-oil.jpg',
      color: 'border-red-200'
    },
    {
      id: 'windshield-cleaning',
      title: 'Free Windshield Cleaning (Cars)',
      tagline: 'See the Road Clearly, Every Time',
      description: 'Enjoy a complimentary windshield cleaning for all cars – safe, clear, and streak-free.',
      timing: 'All Day',
      image: '/car-wash.png',
      color: 'border-blue-200'
    }
  ];

  // Advertisement Section
  const advertisement: Service = {
    id: 'education-wall',
    title: 'Education Wall – Advertise with Us',
    tagline: 'Your Brand, Our Wall, Maximum Reach',
    description: 'Promote your business on our Education Wall and get noticed by thousands of daily visitors.',
    timing: 'Contact for Details',
    image: '/ad-wall.jpg',
    color: 'border-red-300',
    highlight: true
  };

  // Service Card Component
  const ServiceCard = ({ service }: { service: Service }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2" style={{ borderColor: service.color === 'border-red-200' ? '#dc2626' : '#012F73' }}>
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
        <div className="flex items-center text-sm mb-3" style={{ color: '#012F73' }}>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span className="font-semibold">{service.timing}</span>
        </div>
        <h4 className="text-lg font-semibold mb-2" style={{ color: '#012F73' }}>{service.tagline}</h4>
        <p className="text-gray-700">{service.description}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#012F73] to-blue-600 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">Enhancing your driving experience with premium automotive care</p>
          </div>
        </div>

        {/* Advertisement Section */}
        <div className="bg-gradient-to-b from-blue-100 to-red-100 py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#012F73' }}>Advertisement Space</h2>
            <div className="max-w-5xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg border-2 border-red-600">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <div 
                    className="h-80 w-full bg-cover bg-center" 
                    style={{ backgroundImage: `url(${advertisement.image})` }}
                  ></div>
                </div>
                <div className="p-10 md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#012F73' }}>{advertisement.title}</h3>
                  <p className="text-xl text-red-600 mb-6 font-semibold">{advertisement.tagline}</p>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">{advertisement.description}</p>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 self-start shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Us for Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* General Services Section */}
        <div className="bg-gradient-to-b from-red-100 to-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#012F73' }}>Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {generalServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
