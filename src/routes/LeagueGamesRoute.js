import React from 'react';
import LeagueGames from '../components/LeagueGames';

const LeagueGamesRoute = ({ selectedBackground, selectedBackgroundColor}) => {
  return <LeagueGames selectedBackground={selectedBackground}      
  selectedBackgroundColor={selectedBackgroundColor} />;
};

export default LeagueGamesRoute;
