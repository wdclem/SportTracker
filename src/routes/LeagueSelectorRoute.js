import React from 'react';
import LeagueSelector from '../components/LeagueSelector';

const LeagueSelectorRoute = ({ selectedBackgroundImage, selectedBackgroundColor }) => {
  return <LeagueSelector selectedBackgroundImage={selectedBackgroundImage} selectedBackgroundColor={selectedBackgroundColor} />;
};

export default LeagueSelectorRoute;
