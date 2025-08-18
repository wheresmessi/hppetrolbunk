import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BiSolidGasPump, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { MdOilBarrel, MdLocalGasStation } from "react-icons/md";

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
          image: "/petrol.jpg"
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
          image: "/four-gas-stat.jpg"
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
      <div className="bg-gradient-to-r from-[#012F73] to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Quality Fuels & Lubricants</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Premium HPCL products to keep your vehicles running smoothly and efficiently
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Products by Category */}
        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <section 
              key={categoryIndex}
              id={category.category.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-24"
            >
              {/* Category Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} border border-gray-200 shadow-sm`}>
                    {React.cloneElement(category.icon, { 
                      className: `w-6 h-6 ${categoryIndex === 0 ? 'text-[#012F73]' : 'text-red-600'}` 
                    })}
                  </div>
                  <h2 className="text-3xl font-bold text-[#012F73]">{category.category}</h2>
                </div>
                <p className="text-gray-600 ml-12 text-lg">Premium quality {category.category.toLowerCase()} for optimal performance</p>
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
                      <div className="p-6">
                        <div className="flex items-start space-x-4">
                          {/* Product Image */}
                          {item.image && (
                            <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2 border border-gray-200">
                              <img 
                                src={item.image} 
                                alt={item.name}
                                className="h-16 w-16 object-contain"
                                onError={(e) => {
                                  (e.target as HTMLImageElement).style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                          
                          {/* Product Info */}
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="font-bold text-lg text-[#012F73] leading-tight">{item.name}</h3>
                              {item.badge && (
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
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
                            <p className="text-gray-600 text-sm leading-relaxed">{item.shortDescription}</p>
                          </div>
                        </div>
                        
                        {/* Expand/Collapse Button */}
                        <button
                          onClick={() => toggleCard(cardId)}
                          className="mt-4 w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-lg transition-all duration-200 text-[#012F73] font-medium"
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
                        <div className="px-6 pb-6 border-t border-gray-100">
                          {/* Full Description */}
                          <div className="mt-4">
                            <h4 className="font-semibold text-[#012F73] mb-2">Product Description</h4>
                            <p className="text-gray-700 text-sm leading-relaxed text-justify">{item.fullDescription}</p>
                          </div>

                          {/* Features */}
                          <div className="mt-4">
                            <h4 className="font-semibold text-[#012F73] mb-3">Key Features & Benefits</h4>
                            <div className="grid grid-cols-1 gap-2">
                              {item.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-start space-x-2">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Specifications */}
                          {item.specifications && (
                            <div className="mt-4">
                              <h4 className="font-semibold text-[#012F73] mb-3">Technical Specifications</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.specifications.map((spec, specIndex) => (
                                  <span 
                                    key={specIndex} 
                                    className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border border-gray-200"
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

        {/* Quality Assurance Section */}
        <section className="mt-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#012F73] mb-2">Quality Assurance</h2>
            <p className="text-gray-700">HPCL's commitment to excellence and purity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <BiSolidGasPump className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#012F73] mb-2">Regular Quality Checks</h3>
              <p className="text-sm text-gray-600">Trained personnel conduct regular quality checks at all outlets</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MdOilBarrel className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#012F73] mb-2">Mobile Lab Inspections</h3>
              <p className="text-sm text-gray-600">Club HP Mobile Labs conduct surprise inspections</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <MdLocalGasStation className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-[#012F73] mb-2">Certified Purity</h3>
              <p className="text-sm text-gray-600">Products are guaranteed free from contamination and adulteration</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
