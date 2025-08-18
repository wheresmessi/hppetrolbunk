import { useState, useEffect } from 'react';

// Awards data for the carousel
const getPlaceholderImage = (text: string, index: number) => {
  const colors = ['4A90E2', '50E3C2', 'F5A623', '7ED321', 'BD10E0'];
  const bgColor = colors[index % colors.length];
  return `https://via.placeholder.com/100x100/${bgColor}/FFFFFF?text=${encodeURIComponent(text.charAt(0))}`;
};

const awards = [
  { 
    id: 1, 
    title: 'Best Service Award 2023', 
    year: '2023',
    logo: getPlaceholderImage('Service', 0)
  },
  { 
    id: 2, 
    title: 'Safety Excellence', 
    year: '2022',
    logo: getPlaceholderImage('Safety', 1)
  },
  { 
    id: 3, 
    title: 'Customer Choice', 
    year: '2023',
    logo: getPlaceholderImage('Choice', 2)
  },
  { 
    id: 4, 
    title: 'Environmental Stewardship', 
    year: '2021',
    logo: getPlaceholderImage('Eco', 3)
  },
  { 
    id: 5, 
    title: 'Quality Excellence', 
    year: '2023',
    logo: getPlaceholderImage('Quality', 4)
  },
];

export default function CombinedPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slides every 3 seconds for awards carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-sm font-medium py-2 w-full">
        <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
          <span>ISO9001:2000 certified | since 1994</span>
          <span>Authorised dealer for HP products and lubes</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-blue-900 text-white h-20 flex items-center shadow-lg">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto px-4">
          <div className="flex gap-6 items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 border border-dashed border-white border-opacity-40 flex items-center justify-center rounded text-xs text-white text-opacity-70">
              LOGO 1
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 border border-dashed border-white border-opacity-40 flex items-center justify-center rounded text-xs text-white text-opacity-70">
              LOGO 2
            </div>
          </div>
          <div className="font-bold text-xl text-center flex-grow px-8 whitespace-nowrap">
            ANNA NAGAR AUTO SERVICE
          </div>
          <div className="flex gap-6 items-center">
            <div className="w-12 h-12 bg-white bg-opacity-20 border border-dashed border-white border-opacity-40 flex items-center justify-center rounded text-xs text-white text-opacity-70">
              LOGO 3
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 border border-dashed border-white border-opacity-40 flex items-center justify-center rounded text-xs text-white text-opacity-70">
              LOGO 4
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Links */}
      <div className="bg-blue-800 w-full shadow-md">
        <div className="max-w-6xl mx-auto flex justify-center px-4">
          <a href="#" className="text-white no-underline py-3 px-5 text-sm font-medium uppercase tracking-wider hover:bg-white hover:bg-opacity-10 transition-all">HOME</a>
          <a href="#" className="text-white no-underline py-3 px-5 text-sm font-medium uppercase tracking-wider hover:bg-white hover:bg-opacity-10 transition-all">PRODUCTS</a>
          <a href="#" className="text-white no-underline py-3 px-5 text-sm font-medium uppercase tracking-wider hover:bg-white hover:bg-opacity-10 transition-all">GALLERY</a>
          <a href="#contact" className="text-white no-underline py-3 px-5 text-sm font-medium uppercase tracking-wider hover:bg-white hover:bg-opacity-10 transition-all">CONTACT</a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-50 min-h-screen flex justify-center items-center py-8 px-4 relative overflow-hidden">
        <div className="flex items-center justify-between w-full max-w-7xl gap-16">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-6xl font-extrabold text-blue-900 leading-tight text-left tracking-tight mb-6">
              POWERED BY HP.<br />
              TRUSTED BY CHENNAI.
            </h1>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img 
              src="/buk.jpg" 
              alt="Petrol Bunk" 
              className="max-w-full h-auto max-h-screen rounded-lg shadow-2xl border border-gray-200" 
            />
          </div>
        </div>
      </section>

      {/* Awards Carousel */}
      <section className="w-full my-8 text-center">
        <h2 className="text-xl text-blue-800 mb-5 font-semibold">Awards & Recognition</h2>
        <div className="w-full overflow-hidden bg-gray-100 relative min-h-30 flex items-center px-4">
          <div 
            className="flex w-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {awards.map((award) => (
              <div
                key={award.id}
                className="min-w-full flex-shrink-0 py-6 px-4 flex items-center justify-center gap-6 transition-all duration-300"
              >
                <div className="w-15 h-15 flex items-center justify-center">
                  <img
                    src={award.logo}
                    alt={`${award.title} logo`}
                    className="w-15 h-15 object-contain rounded-full shadow-md"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-blue-800 mb-1">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 px-6 bg-gradient-to-r from-blue-50 via-blue-25 to-white relative overflow-hidden border-t border-b border-blue-200 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto relative">
          <div className="text-left mb-10 max-w-4xl">
            <h2 className="text-blue-900 text-4xl mb-2 font-bold leading-tight">Fueling Trust</h2>
            <div className="flex flex-col gap-1 text-3xl text-gray-700 leading-relaxed">
              <span>in the Heart of <span className="text-red-600 font-extrabold text-4xl uppercase tracking-wide">Anna Nagar</span></span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Carrying the name of the Renowned Saint, Mr. JANTONY was born in the year when India became Republic, 
                in the month that has the minimum alphabets, on the day next to the sweetest number, has a vast acumen 
                in the field of business, with varied ventures including construction, transport, education besides others, 
                which he was transformed in developing this HP outlet.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Annanagar Auto Service was brought into being in the year 1994, under the able leadership of Mr. JANTONY. 
                Right from the outset, the outlet was customer friendly, succeeding in customer satisfaction for nearly 
                two decades. Our monthly turnover is around 800KL and yearly turn over is close to 10,000KL.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                The outlet is well administered under the leadership of Mr. JANTONY and his daughter Mrs. ELIZABETH, 
                who is a MBA Graduate with a lot of desire and vision for the future, as partner. The organisation 
                is well knit with a vertical form, where the day-to-day activities are traditional and simple formula 
                is <strong>100% customer satisfaction</strong> and the motto <em>"We serve to grow, and we grow to serve."</em>
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                He is backed by a handful of experienced staff chosen from good floor charges. The workers are well 
                trained and instructed to handle customers in a pleasing manner with their Namaste at the time of 
                receiving and sending a customer, treating them with suave manners and sweet temperament.
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm bg-gray-200 border-2 border-dashed border-gray-400 rounded-lg p-12 flex items-center justify-center">
                <div className="text-gray-600 text-center">
                  <div className="text-lg font-medium mb-2">Image Coming Soon</div>
                  <div className="text-sm">Leadership Photo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HPCL Section */}
      <section className="bg-white py-16 px-6 relative">
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2 py-4">
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                <span className="text-red-600 mr-2">HP</span>
                <span className="text-blue-800">Energizing India with Every Drop.</span>
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Hindustan Petroleum Corporation Limited (HPCL) is an Indian oil and natural gas company with its headquarters in Mumbai, Maharashtra. 
                  It is a state-owned enterprise of the Government of India and operates two major refineries producing a wide variety of petroleum 
                  fuels and specialties. HPCL is committed to innovation and sustainability, powering the nation's growth while maintaining 
                  environmental responsibility.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a vast network of over 17,000 retail outlets, HPCL has been at the forefront of meeting the energy needs of millions of 
                  Indians. The company has consistently demonstrated excellence in refining, marketing, and distribution of petroleum products, 
                  earning the trust of customers across the country. HPCL's commitment to quality and service has made it one of the most 
                  respected names in the Indian energy sector.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  HPCL continues to expand its operations and invest in new technologies to ensure energy security for the nation. The company 
                  is actively involved in exploration and production activities, as well as in the development of alternative energy sources, 
                  reinforcing its position as a forward-thinking energy company.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">Registered Office and Corporate Headquarters</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  17, Jamshedji Tata Road,<br />
                  Mumbai - 400020,<br />
                  Maharashtra, India<br />
                  Phone: +91-22-22021234
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">Marketing Headquarters</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Petroleum House,<br />
                  17, Jamshedji Tata Road,<br />
                  Mumbai - 400020,<br />
                  Maharashtra, India
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">Regional Office</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
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

      {/* Contact Section */}
      <section id="contact" className="bg-blue-100 py-8 px-6 text-left">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-blue-800 mb-4 text-xl font-semibold">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Address</h4>
              <p className="text-blue-700 text-base leading-relaxed">
                Anna Nagar Auto Service<br />
                HP Petrol Bunk<br />
                Anna Nagar, Chennai<br />
                Tamil Nadu, India
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Contact Details</h4>
              <p className="text-blue-700 text-base leading-relaxed">
                Phone: +91-XX-XXXXXXXX<br />
                Email: info@annanagar-hp.com<br />
                Operating Hours: 24/7
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Services</h4>
              <ul className="text-blue-700 text-base leading-relaxed list-disc list-inside">
                <li>Petrol & Diesel</li>
                <li>Engine Oil & Lubricants</li>
                <li>Car Wash Services</li>
                <li>Tire Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center text-base py-4 tracking-wide">
        Copyrights reserved
      </footer>
    </div>
  );
}
