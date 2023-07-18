import React, { useEffect, useContext, useState } from 'react';
import { LeagueContext } from '../LeagueContext';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from './navBar';
import ScoreCard from './scoreCard';
import '../styles/league.css';

const LeagueGames = ({ selectedBackground, selectedBackgroundColor}) => {
  const { selectedLeagues } = useContext(LeagueContext);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const { selectedLeague } = useParams();

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/scrape/${selectedLeague}`);
        const data = await response.json();
        setGames(data);
      } catch (error) {
        console.error(`Error fetching game data:`, error);
      }
    };

    fetchGameData();
  }, [selectedLeague]);


  const handleButton = (league) => {
    if (selectedLeague !== league) {
      navigate(`/league-results/${league}`);
    }
  };


  let bgColor = null;

  if (selectedBackground) {
    const backImage = selectedBackground.split('/').pop().split('.')[0];

    if (backImage === 'mia') {
      bgColor= 'mia';
    } else if (backImage === 'aliali') {
      bgColor= 'ali';
    } else if (backImage === 'bigdav') {
      bgColor= 'bigdav';
    } else if (backImage === 'ichi') {
      bgColor= 'ichi';
    } else if (backImage === 'jordan') {
      bgColor= 'jojo';
    } else if (backImage === 'lbj') {
      bgColor= 'lebron';
    } else if (backImage === 'rick') {
      bgColor= 'rick';
    } else if (backImage === 'sere') {
      bgColor= 'serena';
    } else if (backImage === 'steph') {
      bgColor= 'steph';
    } else if (backImage === 'ubolt') {
      bgColor= 'usain';
    }
  }
  // console.log(bgColor, selectedBackgroundColor, games);
  
  return (
    <div className="bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100">
   <div className='relative>'>   
   {/* <div className="diagonal-box bg-[#38C968] z-1"></div> */}
   </div>
     <div className="fix-button-container py-5 justify-start">
        <button className={`custom-button nba bg-${bgColor}`} onClick={() => handleButton('NBA')} style={{ '--clr': '#71AED7' }}>
            <i></i>
          </button>
          <button className="custom-button nfl" onClick={() => handleButton('NFL')} style={{ '--clr': '#71AED7' }}>
            <i></i>
          </button>
          <button className="custom-button nhl" onClick={() => handleButton('NHL')} style={{ '--clr': '#71AED7' }}>
            <i></i>
          </button>
          <button className="custom-button mlb" onClick={() => handleButton('MLB')} style={{ '--clr': '#71AED7' }}>
            <i></i>
          </button>
      </div>
    <NavBar/>
    <div className="flex items-center justify-center z-10">
      <p className="text-center text-lg font-bold text-rose-200 lg:text-xl dark:text-[#593228]"></p>
      <h2 className="text-center text-2xl font-extrabold text-[#593228]">{selectedLeague} Result</h2>
    </div>
    <div className="mx-auto px-4 md:px-0">
        {games.map((game) => {
          const awayScore = parseInt(game.awayScore, 10);
          const homeScore = parseInt(game.homeScore, 10);
          return (
            <div key={game.id} className="flex justify-center">
              <div className="md:inline-flex ">
              <div className="mr-4">
                <ScoreCard
                  logo={game.awayLogo}
                  teamName={game.awayTeam}
                  score={game.awayScore}
                  result={game.awayScore > game.homeScore ? 'win' : 'lose'}
                  location='away'
                />
              </div>
              <div className="mr-4">
                <ScoreCard
                  logo={game.homeLogo}
                  teamName={game.homeTeam}
                  score={game.homeScore}
                  result={game.homeScore > game.awayScore ? 'win' : 'lose'}
                  location='home'
                />
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    //     <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
    //         <span style={{
    //           background: 'linear-gradient(to right, #BA9010, #352B2D)',
    //           WebkitBackgroundClip: 'text',
    //           WebkitTextFillColor: 'transparent',
    //           }}> BScore </span>
    //         <span className='text-[#593228]'>League Result</span>
    //       </h1>
   
    // </div>
  );
      }
  
    

export default LeagueGames;