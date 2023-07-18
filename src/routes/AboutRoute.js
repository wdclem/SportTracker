import React from 'react';
import AboutSection from '../components/about';

const AboutRoute = ({ selectedBackground, selectedBackgroundColor}) => {
  return <AboutSection selectedBackground={selectedBackground} selectedBackgroundColor={selectedBackgroundColor}/>;
};

export default AboutRoute;
