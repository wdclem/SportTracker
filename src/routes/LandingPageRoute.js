import React from 'react';
import LandingPage from '../components/LandingPage';

const LandingPageRoute = ({ selectedBackground, selectedBackgroundColor }) => {
  return <LandingPage selectedBackground={selectedBackground} selectedBackgroundColor={selectedBackgroundColor} />;
};

export default LandingPageRoute;
