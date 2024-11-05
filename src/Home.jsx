import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Home() {
  const images = [
    { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/300x200', alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/300x200', alt: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/300x200', alt: 'Image 4' },
  ];

  const items = images.map((image) => (
    <div className="item" key={image.id}>
      <img src={image.src} alt={image.alt} className="rounded shadow-lg w-full h-full object-cover" />
    </div>
  ));

  return (
    <div className="text-center p-4">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Home Page</h2>
      <p className="text-gray-600 mb-6">This is a protected page accessible after login.</p>

      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite
        disableButtonsControls
        disableDotsControls
        mouseTracking
      />
    </div>
  );
}

export default Home;
