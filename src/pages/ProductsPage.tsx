import React, { useState } from 'react';
import { useState as useStateEffect, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  MdLocalGasStation, 
  MdOilBarrel, 
  MdVerifiedUser, 
  MdPeople
} from 'react-icons/md';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

interface ProductItem {
  name: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  badge?: string;
  image: string;
  specifications?: string[];
}

interface ProductCategory {
  category: string;
  icon: React.ReactElement;
  color: string;
  items: ProductItem[];
}

export default function ProductsPage() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [visibleSections, setVisibleSections] = useStateEffect<Set<string>>(new Set());

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

  const toggleCard = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const products: ProductCategory[] = [
    {
      category: "Petroleum Products",
      icon: <MdLocalGasStation className="w-8 h-8" />,
      color: "from-blue-50 to-blue-100",
      items: [
        { 
          name: "Premium Petrol (Motor Spirit)", 
          shortDescription: "High-quality unleaded petrol with advanced cleaning formula",
          fullDescription: "Commonly referred to as Motor Spirit (MS) in the oil industry, HPCL distributes high-quality petrol through a wide network of retail pumps across India. Every batch is produced in compliance with prescribed specifications, ensuring it is completely free from contamination or adulteration. To maintain this standard, products undergo regular quality checks by trained personnel at outlets. Additionally, Club HP Mobile Labs and Industry Mobile Labs conduct surprise inspections at retail locations to guarantee fuel purity and consistency.",
          features: [
            "Complete freedom from contamination or adulteration",
            "Regular quality checks by trained personnel",
            "Surprise inspections by Club HP Mobile Labs",
            "Compliance with prescribed specifications"
          ],
          badge: "Popular",
          image: "/images/petrol.png"
        },
        { 
          name: "Premium Diesel (High-Speed Diesel)", 
          shortDescription: "Superior diesel for enhanced engine performance and reliability",
          fullDescription: "Known in the oil industry as High-Speed Diesel (HSD), HPCL supplies premium diesel through retail pumps, terminals, and depots nationwide. Manufactured to meet strict quality specifications, HPCL diesel is assured to be free from impurities or adulteration. Continuous monitoring is carried out by outlet personnel, complemented by surprise inspections from Club HP Mobile Labs and Industry Mobile Labs, ensuring customers receive clean, reliable fuel at all times.",
          features: [
            "Manufactured to strict quality specifications",
            "Free from impurities or adulteration",
            "Continuous monitoring by outlet personnel",
            "Clean and reliable fuel guaranteed"
          ],
          badge: "Best Seller",
          image: "/images/Diesel.png"
        }
      ]
    },
    {
      category: "Engine Oils & Lubricants",
      icon: <MdOilBarrel className="w-8 h-8" />,
      color: "from-red-50 to-red-100",
      items: [
        { 
          name: "HP Milcy Turbo Tech", 
          shortDescription: "Premium-grade diesel engine oil for modern emission-compliant engines",
          fullDescription: "HP Milcy Turbo Tech is a premium-grade diesel engine oil crafted from high-quality paraffinic base stocks and advanced additive technology. It is specifically engineered to meet the challenges of modern emission-compliant diesel engines, including those with Exhaust Gas Recirculation (EGR) and Cooled EGR systems. Designed for superior operational performance and enhanced engine life, Milcy Turbo ensures reliability even under demanding conditions.",
          features: [
            "Excellent soot dispersancy to prevent oil thickening",
            "Superior wear control and protection against acidic corrosion",
            "Reduced oil consumption for better efficiency",
            "High shear stability for consistent performance",
            "Extended drain intervals, reducing downtime",
            "Lower overall maintenance costs"
          ],
          badge: "Premium",
          image: "/images/Milcy turbo .png"
        },
        { 
          name: "HP Milcy Super 20W-40", 
          shortDescription: "High-quality multigrade engine oil for modern diesel engines",
          fullDescription: "Hylube Milcy Super 20W-40 is a high-quality multigrade engine oil engineered to meet the demanding lubrication needs of modern diesel engines. It is formulated to comply with API CD/SF, MIL-L-2104C, E-DL 3/E-PL 2 of IS:13656:1993 and passes the Mack T-7 engine test requirements. Ideal for use in commercial vehicles, tractors, diesel passenger cars, and jeeps from leading manufacturers, Milcy Super ensures optimal engine performance and protection under diverse operating conditions.",
          features: [
            "Extended TBN reserves for sustained performance",
            "Prevents oil thickening and prolongs oil life",
            "Superior protection against corrosive wear",
            "Exceptional thermal and oxidation stability",
            "Longer engine life with extended drain intervals",
            "Maintains outstanding engine cleanliness"
          ],
          specifications: ["API CD/SF", "MIL-L-2104C", "E-DL 3/E-PL 2 of IS:13656:1993", "Mack T-7 engine test compliant"],
          image: "/images/Milcy super .png"
        },
        { 
          name: "HP Cruise Premium SAE 10W-40", 
          shortDescription: "High-performance, long-drain petrol engine oil for modern cars",
          fullDescription: "Cruise Premium SAE 10W-40 is a high-performance, long-drain petrol engine oil designed for modern cars and passenger vehicles. It delivers premium lubrication, ensuring smooth performance and extended engine protection. Formulated to meet API SL/CF, ACEA A2/B2, E-PL5/E-DL2 of IS 13656 standards, this oil is ideal for new-generation BS III (Euro III) petrol vehicles and remains equally effective for older models.",
          features: [
            "Extends oil life by up to 50%",
            "Provides exceptional wear protection for prolonged engine life",
            "Enhances fuel efficiency",
            "Helps lower emissions for a cleaner drive"
          ],
          specifications: ["API SL/CF", "ACEA A2/B2", "E-PL5/E-DL2 of IS 13656", "BS III (Euro III) compatible"],
          badge: "Best Seller",
          image: "/images/Cruise Premium .png"
        },
        { 
          name: "HP Lal Ghoda 20W-40", 
          shortDescription: "High-quality multigrade diesel engine oil for diverse applications",
          fullDescription: "HP Lal Ghoda 20W-40 is a high-quality multigrade diesel engine oil designed to deliver superior cleanliness, efficient lubrication, and reliable performance across diverse applications. Suitable for all types of diesel engines, it ensures smooth operation and protection for vehicles and machinery, including trucks, buses, MUVs, taxis, tractors, pumpsets, and D.G. sets.",
          features: [
            "Maintains engine cleanliness for longer life",
            "Provides efficient and consistent lubrication",
            "Delivers dependable all-round performance"
          ],
          image: "/images/Laal Ghoda oil .png"
        },
        { 
          name: "HP Racer4", 
          shortDescription: "Multipurpose engine oil for 4-stroke two-wheelers",
          fullDescription: "HPRacer4 is a multipurpose engine oil formulated for optimal lubrication of engines, gearboxes, and wet clutches in 4-stroke two-wheelers. It ensures smooth clutch operation at high speeds, even under challenging driving conditions, and maintains sufficient oil film thickness for high-temperature protection. Its low-viscosity formulation is engineered for improved fuel efficiency, reduced wear, and long-lasting durability. Available in 20W-40, 20W-50, 10W-30, and 15W-50 grades, it meets API SL and JASO MA2 specifications, making it compatible with motorcycles, scooters, mopeds, and scooterettes.",
          features: [
            "Optimized friction control for enhanced performance",
            "Excellent oxidation stability to extend oil life",
            "Prevents sludge and varnish formation",
            "Strong gear, anti-wear, and extreme-pressure properties"
          ],
          specifications: ["API SL", "JASO MA2", "Available in 20W-40, 20W-50, 10W-30, 15W-50"],
          badge: "Popular",
          image: "/images/Racer 4 .png"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div 
        id="hero"
        data-animate="true"
        className={`relative bg-gradient-to-r from-[#012F73] to-blue-600 text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          visibleSections.has('hero') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/Powered by HP.png')" }}
        ></div>
        
        {/* Content */}
        <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ease-out delay-300 ${
          visibleSections.has('hero') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Quality Fuels & Lubricants</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto px-4">
            Premium HPCL products to keep your vehicles running smoothly and efficiently
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main 
        id="products-content"
        data-animate="true"
        className={`max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ease-out ${
          visibleSections.has('products-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Products by Category */}
        <div className="space-y-12 sm:space-y-16">
          {products.map((category, categoryIndex) => (
            <section 
              key={categoryIndex}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-24"
            >
              {/* Category Header */}
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-row items-center justify-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} border border-gray-200 shadow-sm w-fit`}>
                    {React.cloneElement(category.icon, { 
                      className: `w-5 h-5 sm:w-6 sm:h-6 ${categoryIndex === 0 ? 'text-[#012F73]' : 'text-red-600'}` 
                    })}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#012F73]">{category.category}</h2>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="flex flex-wrap gap-6">
                {category.items.map((item, itemIndex) => {
                  const cardId = `${categoryIndex}-${itemIndex}`;
                  const isExpanded = expandedCard === cardId;
                  
                  return (
                    <div 
                      key={itemIndex}
                      className="w-full lg:w-[calc(50%-12px)] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 self-start"
                    >
                      {/* Product Header */}
                      <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                          {/* Product Image */}
                          {item.image && (
                            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0 flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          
                          {/* Product Info */}
                          <div className="flex-1 text-center sm:text-left">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 space-y-2 sm:space-y-0">
                              <h3 className="font-bold text-lg sm:text-xl text-[#012F73] leading-tight">{item.name}</h3>
                              {item.badge && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium self-center sm:self-start ${
                                  item.badge === 'Popular' 
                                    ? 'bg-blue-100 text-blue-800' 
                                    : item.badge === 'Best Seller'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{item.shortDescription}</p>
                          </div>
                        </div>
                        
                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleCard(cardId)}
                          className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 sm:py-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-lg transition-all duration-200 text-[#012F73] font-medium text-sm sm:text-base"
                        >
                          <span>{isExpanded ? 'Show Less' : 'Show More Details'}</span>
                          {isExpanded ? (
                            <BiChevronUp className="w-4 h-4" />
                          ) : (
                            <BiChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100">
                          {/* Full Description */}
                          <div className="mt-3 sm:mt-4">
                            <h4 className="font-semibold text-[#012F73] mb-2 text-sm sm:text-base">Product Description</h4>
                            <p className="text-gray-700 text-xs sm:text-sm leading-relaxed text-justify">{item.fullDescription}</p>
                          </div>

                          {/* Features */}
                          <div className="mt-3 sm:mt-4">
                            <h4 className="font-semibold text-[#012F73] mb-2 sm:mb-3 text-sm sm:text-base">Key Features & Benefits</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                  <span className="text-xs sm:text-sm text-gray-700 leading-relaxed">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Specifications */}
                          {item.specifications && (
                            <div className="mt-3 sm:mt-4">
                              <h4 className="font-semibold text-[#012F73] mb-2 sm:mb-3 text-sm sm:text-base">Technical Specifications</h4>
                              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {item.specifications.map((spec, specIndex) => (
                                  <span 
                                    key={specIndex} 
                                    className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
                                  >
                                    {spec}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Enhanced Quality Assurance Section */}
      <section 
        id="quality-section"
        data-animate="true"
        className={`mt-12 sm:mt-16 bg-gradient-to-b from-blue-100 to-blue-100 py-8 sm:py-12 px-4 sm:px-6 border-t border-blue-200 transition-all duration-1000 ease-out ${
          visibleSections.has('quality-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#012f73' }}>
              Quality Assurance
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-red-500 to-blue-600 mx-auto rounded-full mb-4 sm:mb-6"></div>
            <p className="text-blue-700 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              All our products meet the highest industry standards and are backed by HP's commitment to excellence.
            </p>
          </div>
          
          {/* Quality Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {[
              { 
                icon: <img src="/iso-9001-certification.png" alt="ISO Certificate" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />,
                title: "ISO Certified", 
                desc: "ISO9001:2000 certified quality management system", 
                color: "from-red-500 to-blue-600" 
              },
              { 
                icon: <MdVerifiedUser className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "HP Authorized", 
                desc: "Official HP dealer with genuine products", 
                color: "from-red-500 to-blue-600" 
              },
              { 
                icon: <MdPeople className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Expert Service", 
                desc: "Professional staff with years of experience", 
                color: "from-red-500 to-blue-600" 
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative text-center p-6 sm:p-8 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div style={{ color: '#012f73' }}>{item.icon}</div>
                </div>
                
                {/* Title */}
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-blue-700 leading-relaxed text-xs sm:text-sm lg:text-base">
                  {item.desc}
                </p>
                
                {/* Decorative element */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-2 h-2 bg-gradient-to-r from-red-500 to-blue-600 rounded-full opacity-50"></div>
              </div>
            ))}
          </div>
          
          {/* Bottom Accent */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="inline-flex items-center space-x-2 text-blue-700">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-xs sm:text-sm font-medium">Trusted by thousands of customers</span>
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}