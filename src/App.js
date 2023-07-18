import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import './styles/style.css';

const App = ({ selectedBackgroundImage, selectedBackgroundColor }) => {
  const [isSoundMuted, setIsSoundMuted] = useState(false);

  const toggleSound = () => {
    setIsSoundMuted((prevState) => !prevState);
  };

  const handleGoBack = () => {
    if (!isLandingPage) {
    }
  };


  return (
    <Router>
      <div className={`app ${isSoundMuted ? 'muted' : ''}`}>
        <AppRoutes
          selectedBackgroundImage={selectedBackgroundImage}
          selectedBackgroundColor={selectedBackgroundColor}
        />
      </div>
    </Router>
  );
};

export default App;
