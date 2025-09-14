interface Award {
  id: number;
  title: string;
  year: string;
  logo: string;
}

interface AwardsCarouselProps {
  awards?: Award[];
}

const defaultAwards = [
  { 
    id: 1, 
    title: 'Best Service Award 2023', 
    year: '2023',
    logo: '/award.png'
  },
  { 
    id: 2, 
    title: 'Safety Excellence', 
    year: '2022',
    logo: '/award.png'
  },
  { 
    id: 3, 
    title: 'Customer Choice', 
    year: '2023',
    logo: '/award.png'
  },
  { 
    id: 4, 
    title: 'Environmental Stewardship', 
    year: '2021',
    logo: '/award.png'
  },
  { 
    id: 5, 
    title: 'Quality Excellence', 
    year: '2023',
    logo: '/award.png'
  },
];

function AwardsCarousel({ awards = defaultAwards }: AwardsCarouselProps) {
  // Create duplicated awards array for seamless loop
  const duplicatedAwards = [...awards, ...awards];

  return (
    <div className="relative overflow-hidden h-[80px] w-full mx-auto">
      <div className="absolute left-0 flex animate-scroll">
        {duplicatedAwards.map((award, index) => (
          <div
            key={`award-${index}`}
            className="flex-shrink-0 w-[280px] flex items-center justify-center px-4"
          >
            <div className="flex items-center space-x-3 sm:space-x-4 rounded-lg px-4 sm:px-6 py-3 sm:py-4 transition-all duration-300 filter sepia-[0.3] hue-rotate-[200deg] saturate-[0.8] brightness-[0.9] hover:filter-none">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <img
                  src={award.logo}
                  alt={`${award.title} logo`}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold mb-1" style={{ color: '#012F73' }}>
                  {award.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm">{award.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardsCarousel;
