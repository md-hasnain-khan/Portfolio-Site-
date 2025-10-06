import React from 'react';

const followerCount = 958;
const avatars = [
  { id: 1, src: 'https://placehold.co/40x40/4F46E5/ffffff?text=A1', alt: 'Avatar 1' },
  { id: 2, src: 'https://placehold.co/40x40/10B981/ffffff?text=A2', alt: 'Avatar 2' },
  { id: 3, src: 'https://placehold.co/40x40/F59E0B/ffffff?text=A3', alt: 'Avatar 3' },
];

const NumberOfPorject = () => {
  return (
    <div className="flex">

      <div className="flex items-center">

        <div className="flex items-center -space-x-3 pr-2">
          {avatars.map((avatar, index) => (
            <div
              key={avatar.id}
              className={`
                relative 
                w-8 h-8
                rounded-full 
                border-2 border-white 
                shadow-lg 
                transform transition duration-300 hover:scale-110
                
                // Control stacking order: first avatar on top
                ${index === 0 ? 'z-30' : index === 1 ? 'z-20' : 'z-10'}

                
              `}
            >
              <img
                src={avatar.src}
                alt={avatar.alt}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          ))}
        </div>

        <div className="text-xl font-semibold text-gray-800 ml-2">
          <span className="text-blue-600 font-bold mr-1">+</span>
          {followerCount}
          <span className="font-base text-gray-600 ml-1">Projects</span>
        </div>
      </div>
    </div>
  );
};

export default NumberOfPorject;
