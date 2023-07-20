import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPageRoute from './LandingPageRoute';
import LeagueSelectorRoute from './LeagueSelectorRoute';
import LeagueGamesRoute from './LeagueGamesRoute';
import AboutRoute from './AboutRoute';
import ContactRoute from './ContactRoute';

const AppRoutes = ({ selectedBackgroundImage, selectedBackgroundColor }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPageRoute 
          selectedBackground={selectedBackgroundImage} 
          selectedBackgroundColor={selectedBackgroundColor} />}
      />
      <Route
        path="/league-selector"
        element={<LeagueSelectorRoute 
          selectedBackgroundImage={selectedBackgroundImage} 
          selectedBackgroundColor={selectedBackgroundColor} />}
      />
      <Route 
        path="/league-results/:selectedLeague" 
        element={<LeagueGamesRoute 
          selectedBackground={selectedBackgroundImage} 
          selectedBackgroundColor={selectedBackgroundColor} />}
      />
      <Route 
        path="/contact" 
        element={<ContactRoute
          selectedBackground={selectedBackgroundImage} 
          selectedBackgroundColor={selectedBackgroundColor} />}
      />
      <Route 
        path="/about" 
        element={<AboutRoute
          selectedBackground={selectedBackgroundImage} 
          selectedBackgroundColor={selectedBackgroundColor} />}
      />
    </Routes>
  );
};

export default AppRoutes;
