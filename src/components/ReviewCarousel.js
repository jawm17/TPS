import React, { useState, useEffect } from 'react';

const ReviewCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % items.length;
      setCurrentIndex(nextIndex);
    }, 3000); // Adjust the interval as needed (e.g., 3000 milliseconds for 3 seconds)

    return () => clearInterval(interval);
  }, [currentIndex, items.length]);

  const translateValue = `-${currentIndex * 100 / 3}%`;

  return (
    <div style={{ width: '300px', overflow: 'hidden' }}>
      <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(${translateValue})` }}>
        {items.map((item, index) => (
          <div key={index} style={{ flex: '0 0 33.33%', boxSizing: 'border-box', padding: '8px' }}>
            {/* Your content for each item goes here */}
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;

