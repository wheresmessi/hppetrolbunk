import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <>
      

      {/* Navbar */}
      <nav className="text-white h-auto sm:h-20 flex items-center shadow-lg py-3 sm:py-0" style={{ backgroundColor: '#012F73' }}>
        <div className="flex flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-8">
          {/* Left Logos - Visible on all devices */}
          <div className="flex gap-2 sm:gap-3 lg:gap-6 items-center">
            <div className="w-6 h-10 sm:w-8 sm:h-12 lg:w-12 lg:h-16 rounded overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo-1.png" 
                alt="Logo 1" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-6 h-10 sm:w-8 sm:h-12 lg:w-12 lg:h-16 rounded overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo-2.png" 
                alt="Logo 2" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          
          {/* Company Name */}
          <Link to="/" className="font-bold text-sm sm:text-lg md:text-2xl lg:text-3xl text-center flex-1 px-4 sm:px-6 lg:px-8 text-white no-underline hover:text-gray-200 transition-all duration-300">
            <span className="block sm:inline">ANNA NAGAR</span>
            <span className="block sm:inline sm:ml-2">AUTO SERVICE</span>
          </Link>
          
          {/* Right Logos - Visible on all devices */}
          <div className="flex gap-2 sm:gap-3 lg:gap-6 items-center">
            <div className="w-6 h-10 sm:w-8 sm:h-12 lg:w-12 lg:h-16 rounded overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo-3.jpg" 
                alt="Logo 3" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-6 h-10 sm:w-8 sm:h-12 lg:w-12 lg:h-16 rounded overflow-hidden transition-transform duration-300 hover:scale-105">
              <img 
                src="/logo-5.jpg" 
                alt="Logo 5" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Top Banner */}
      <div className="bg-red-600 text-white text-xs sm:text-sm font-medium py-2 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-6 lg:px-8 gap-1 sm:gap-0">
          <span className="text-center">ISO9001:2000 certified | since 1994</span>
          <span className="text-center">Authorised dealer for HP products and lubes</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="bg-white w-full shadow-md overflow-x-auto">
        <div className="flex justify-center min-w-max px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="no-underline py-2 sm:py-3 px-2 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap"
            style={{ color: '#012F73' }}
          >
            HOME
            {location.pathname === '/' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 animate-slideIn"></div>
            )}
          </Link>
          
          <Link 
            to="/products" 
            className="no-underline py-2 sm:py-3 px-2 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap"
            style={{ color: '#012F73' }}
          >
            PRODUCTS
            {location.pathname === '/products' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 animate-slideIn"></div>
            )}
          </Link>
          
          <Link 
            to="/gallery" 
            className="no-underline py-2 sm:py-3 px-2 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap"
            style={{ color: '#012F73' }}
          >
            GALLERY
            {location.pathname === '/gallery' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 animate-slideIn"></div>
            )}
          </Link>
          
          <Link 
            to="/contact" 
            className="no-underline py-2 sm:py-3 px-2 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wider transition-all duration-300 relative whitespace-nowrap"
            style={{ color: '#012F73' }}
          >
            CONTACT
            {location.pathname === '/contact' && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 animate-slideIn"></div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}
