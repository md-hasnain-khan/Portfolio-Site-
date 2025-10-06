import React, { useEffect, useState } from 'react';

const ProjectCard = () => {

   const [cards, setCards] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:5000/cards')                  //  json-server API URL
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => console.error('Error fetching cards:', err));
  }, []);


  return (
    <>
     
        <div className="w-full min-h-screen p-6">
           <div className="w-full px-4 mb-10">
        <span className="font-semibold">{cards.length}</span> items.
      </div>
      <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white rounded-xl shadow-md p-1">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[200px] md:h-[250px] object-cover rounded-xl"
            />
            <div className="p-4">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                {card.shortDesc}
              </p>
              <div className="flex gap-2">
                <button className="mt-2 w-full bg-transparent text-base font-medium text-black py-2 border-1 border-blue-600 rounded-lg hover:border-green-600 transition cursor-pointer">
                  <a href={card.previewUrl} target="_blank" rel="noopener noreferrer">
                    Preview
                  </a>
                </button>
                <button className="mt-2 w-full bg-transparent text-base font-medium text-black py-2 border-1 border-blue-600 rounded-lg hover:border-green-600 transition cursor-pointer">
                  <a href={card.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Code Source
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProjectCard;
