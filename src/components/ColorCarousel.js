import React, { useState, useEffect } from 'react';
import '../styles/style.css';

const ColorCarousel = ({ options, children }) => {
  const [selectedBackgroundImage, setSelectedBackgroundImage] = useState('');
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * options.length);
    const selectedOption = options[randomIndex];
    setSelectedBackgroundImage(selectedOption.backgroundImage);
    setSelectedBackgroundColor(selectedOption.backgroundColor);
    console.log('Selected Background Image:', selectedOption.backgroundImage);
  }, [options]);

  return (
    <div className="color-carousel-container" >
      {children({ selectedBackgroundImage, selectedBackgroundColor })}
    </div>
  );
};

export default ColorCarousel;
