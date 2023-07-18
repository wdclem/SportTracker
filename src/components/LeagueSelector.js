import React, { useContext, useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { LeagueContext } from '../LeagueContext';
import LoadingEffect from './LoadingEffect';
import NavBar from './navBar';
import {handleLeagueButton} from '../utilities/buttonhelpers';
import  bleftBlob from '../assets/bleftblob.svg'
import '../styles/league.css';

gsap.registerPlugin(CSSPlugin);

const LeagueSelector = ({ selectedBackgroundImage, selectedBackgroundColor }) => {
  const navigate = useNavigate();
  const { setSelectedLeagues } = useContext(LeagueContext);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ maxWidth: 1199});
  const isLargellScreen = useMediaQuery({ minWidth: 1200});


  const handleClick = (league) => {
    handleLeagueButton(league, navigate, setIsLoading, setSelectedLeagues, containerRef);
  };

return (
  <div className="bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100 full">

  <div ref={containerRef}>
  <div className="diagonal-box" style={{ backgroundColor: selectedBackgroundColor }}></div>
  {/* <div className='absolute' style={{ height: '100vh' }}>
   <div className='bottom-0 left-0'>
    <img src={bleftBlob} alt='bottom-left-blob' className='h-full w-full object-cover' />
   </div>
  </div> */}
    {isLoading && (
      <LoadingEffect
        duration={3000}
        selectedBackgroundImage={selectedBackgroundImage}
        selectedBackgroundColor={selectedBackgroundColor}
      />
    )}
  <NavBar/>
  <div className="flex items-center justify-center z-1">
    <div className={isSmallScreen ? 'Large-Container mt-4 pt-20 ml-10 row items-center' : 'LargeContainer items-center ml-10'}>
    {/* Content on the left side */}

    <h1 className={`${isSmallScreen ? 'mt-0' : ''} mb-4 top text-center text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl`}>
      <span
        style={{
          background: 'linear-gradient(to right, #BA9010, #352B2D)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        The Better
      </span>
      <span className="text-[#593228]"> ScoreAPP.</span>
    </h1>
    <p className="text-center text-lg font-normal text-rose-200 lg:text-xl dark:text-[#593228]">
      At BSCORE, we focus on making life easier
    </p>
    <p className="text-center text-lg font-normal text-rose-200 lg:text-xl dark:text-[#593228]">
      letting you check the latest results of all your favorite league.
    </p>
    <p className="text-center text-lg font-bold text-rose-200 lg:text-xl dark:text-[#593228]">
      in ONE place
    </p>
    <h2 className="text-center text-2xl font-extrabold text-[#593228]">
      Pick your league!
    </h2>
  </div>

  {/* Buttons on the right side */}
  <div className={`${isSmallScreen ? 'relative top-16 flex-row' : isMediumScreen ? 'MediumContainer' : 'SmallContainer'} ml-10 items-center`}>
    <div className="left-button mt-20">
      <button
        className={isSmallScreen ? 'custom-button nba' : 'button nba mt-0'}
        onClick={() => handleClick('NBA')}
        style={{ '--clr': '#FFF4F0' }}
      >
        <i></i>
      </button>
      <button
        className={isSmallScreen ? 'custom-button nfl' : 'button nfl'}
        onClick={() => handleClick('NFL')}
        style={{ '--clr': '#FFF4F0' }}
      >
        <i></i>
      </button>
    </div>
    <div className={`${isSmallScreen ? 'right-button mr-4' : isMediumScreen ? 'right-button ml-6 mr-4' : 'right-button ml-6 padding-16'} mb-14 `}>
      <button
        className={isSmallScreen ? 'custom-button nhl' : 'button nhl'}
        onClick={() => handleClick('NHL')}
        style={{ '--clr': '#FFF4F0' }}
      >
        <i></i>
      </button>
      <button
        className={isSmallScreen ? 'custom-button mlb' : 'button mlb'}
        onClick={() => handleClick('MLB')}
        style={{ '--clr': '#FFF4F0' }}
      >
        <i></i>
      </button>
    </div>
    {/* <div class="crosshair">
  <div class="vertical-line"></div>
  <div class="horizontal-line"></div>
</div> */}
  </div>
</div>
</div>
</div>
 )
};

export default LeagueSelector;