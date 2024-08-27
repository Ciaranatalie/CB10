import React from 'react';
import Card from '../components/card';

const Home: React.FC = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the first card description.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 2',
      description: 'This is the second card description.',
      imageUrl: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 3',
      description: 'This is the third card description.',
      imageUrl: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Il mio primo progetto Next.js con TS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
