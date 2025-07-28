import { FaIndustry } from 'react-icons/fa';

const TiltedBanner = () => {
  const items = [
    'Quality Product',
    'Shipping Across India',
    'Quality Product',
    'Shipping Across India',
    'Quality Product',
  ];

  return (
    <div className="overflow-hidden bg-blue-100 transform rotate-[-2deg]">
      <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-4 text-blue-900 font-semibold text-sm transform">
        {items.map((text, i) => (
          <div className="flex items-center gap-2 whitespace-nowrap" key={i}>
            <FaIndustry className="text-base" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TiltedBanner;
