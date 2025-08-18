import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BiSolidGasPump } from "react-icons/bi";
import { MdOilBarrel } from "react-icons/md";

export default function ProductsPage() {
  const products = [
    {
      category: "Petroleum Products",
      icon: <BiSolidGasPump className="w-8 h-8 text-blue-600" />,
      color: "from-blue-50 to-blue-100",
      items: [
        { 
          name: "Premium Petrol", 
          description: "High-quality unleaded petrol with advanced cleaning formula", 
          badge: "Popular",
          image: "/images/premium-petrol.jpg"
        },
        { 
          name: "Speed Diesel", 
          description: "Superior diesel for enhanced engine performance", 
          badge: "Best Seller",
          image: "/images/speed-diesel.jpg"
        },
        { 
          name: "Power Petrol", 
          description: "Enhanced octane petrol for high-performance vehicles", 
          badge: "Premium",
          image: "/images/power-petrol.jpg"
        },
      ],
      features: [
        "Advanced cleaning formula for engine protection",
        "Improved fuel efficiency",
        "Reduced emissions",
        "Enhanced engine performance"
      ]
    },
    {
      category: "Engine Oils & Lubricants",
      icon: <MdOilBarrel className="w-8 h-8 text-red-600" />,
      color: "from-red-50 to-red-100",
      items: [
        { 
          name: "HP Cruise Petrol Engine Oil", 
          description: "15W-40, 3L - High performance engine oil for petrol engines",
          badge: "Best Seller",
          image: "/images/Cruise Premium .png"
        },
        { 
          name: "HP Racer Motorcycle Engine Oil", 
          description: "15W-50, 2.5L - Advanced protection for high-performance motorcycles",
          badge: "Popular",
          image: "/images/Racer 4 .png"
        },
        { 
          name: "HP Milcy Turbo Tech Diesel Engine Oil", 
          description: "15W-40, 7.5L - Premium diesel engine oil with turbo protection",
          image: "/images/Milcy turbo .png"
        },
        { 
          name: "HP Laal Ghoda Diesel Engine Oil", 
          description: "20W-40, 5L - Reliable protection for heavy-duty diesel engines",
          image: "/images/Laal Ghoda oil .png"
        },
        { 
          name: "HP Milcy Super Diesel Engine Oil", 
          description: "20W-40, 5L - Superior protection for diesel engines in all conditions",
          image: "/images/Milcy super .png"
        }
      ],
      features: [
        "Superior engine protection and performance",
        "Extended engine life with reduced wear",
        "Improved fuel economy and efficiency",
        "Optimal thermal stability in all conditions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Quality Fuels & Lubricants</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Premium products to keep your vehicles running smoothly and efficiently
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
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`p-2 rounded-lg ${category.color.replace('from-', 'bg-').replace(' to-', ' ')}`}>
                    {React.cloneElement(category.icon, { className: 'w-6 h-6 text-white' })}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
                </div>
                <p className="text-gray-600 ml-11">Premium quality {category.category.toLowerCase()} for optimal performance</p>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex">
                      {/* Product Image */}
                      {item.image && (
                        <div className="w-24 flex-shrink-0 bg-gray-50 flex items-center justify-center p-2">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="h-20 w-20 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                      
                      {/* Product Info */}
                      <div className="p-4 flex-1">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">{item.name}</h3>
                          {'badge' in item && item.badge && (
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              item.badge === 'Popular' || item.badge === 'Free' 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {category.features.slice(0, 2).map((feature, i) => (
                            <span key={i} className="text-xs bg-gray-50 text-gray-600 px-2 py-0.5 rounded border border-gray-100">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
