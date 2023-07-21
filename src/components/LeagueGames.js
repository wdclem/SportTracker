import React, { useEffect, useContext, useState } from 'react';
import { LeagueContext } from '../LeagueContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import NavBar from './navBar';
import ScoreCard from './scoreCard';
import LeagueButton from './leagueButton';
import '../styles/league.css';

const LeagueGames = ({ selectedBackground, selectedBackgroundColor}) => {
  const { selectedLeagues } = useContext(LeagueContext);
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const { selectedLeague } = useParams();
  const isSmallScreen = useMediaQuery({ maxWidth: 1100});
  const isSmallHeight= useMediaQuery({ maxHeight: 550});

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await fetch(`https://bscore-back.fly.dev/scrape/${selectedLeague}`);
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
    <NavBar/>
    <div className={`${isSmallScreen ? 'flex justify-center gap-2' : 'fix-button-container'} pb-8 justify-center}`}>
        <LeagueButton className={`custom-button NBA`} league="NBA" onClick={handleButton} />
        <LeagueButton className={`custom-button NFL`} league="NFL" onClick={handleButton} />
        <LeagueButton className={`custom-button NHL`} league="NHL" onClick={handleButton} />
        <LeagueButton className={`custom-button MLB`} league="MLB" onClick={handleButton} />
    </div>
    <div className="flex items-center justify-center z-10">
      <p className="text-center text-lg font-bold text-rose-200 lg:text-xl dark:text-[#593228]"></p>
      <h2 className="text-center text-2xl font-extrabold text-[#593228]">{selectedLeague} Result</h2>
    </div>
    <div className="max-h-[66vh] overflow-y-auto w-auto items-center justify-center mb-[30px]">
        {games.map((game) => {
          const awayScore = parseInt(game.awayScore, 10);
          const homeScore = parseInt(game.homeScore, 10);
          return (
            <div key={game.id} className="flex">
              <div className="mx-auto my-auto md:inline-flex">
              <div className="mr-4">
                <ScoreCard
                  logo={game.awayLogo}
                  teamName={game.awayTeam}
                  score={game.awayScore}
                  result={game.awayScore > game.homeScore ? 'win' : 'lose'}
                  location='away'
                />
              </div>
              <div className="mr-4 pb-4">
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
