import React, { createContext, useState } from 'react';


export const LeagueContext = createContext();

export const LeagueProvider = ({ children }) => {
  const [selectedLeagues, setSelectedLeagues] = useState([]);

  return (
    <LeagueContext.Provider value={{ selectedLeagues, setSelectedLeagues }}>
      {children}
    </LeagueContext.Provider>
  );
};
