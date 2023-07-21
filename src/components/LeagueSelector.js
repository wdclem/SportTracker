import React, { useContext, useState, useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { LeagueContext } from '../LeagueContext';
import {handleLeagueButton} from '../utilities/buttonhelpers';
import LoadingEffect from './LoadingEffect';
import LeagueButton from './leagueButton';
import NavBar from './navBar';
import  bleftBlob from '../assets/bleftblob.svg'
import '../styles/league.css';
import SocialLinks from './socialLinks';

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
    {/* {isLoading && (
      <LoadingEffect
        duration={3000}
        selectedBackgroundImage={selectedBackgroundImage}
        selectedBackgroundColor={selectedBackgroundColor}
      />
    )} */}
  <NavBar/>
  <div className="flex items-center justify-center z-1">
    <div className={isSmallScreen ? 'z-10 mt-4 pt-20 ml-10 row items-center' : 'LargeContainer items-center ml-10'}>
    {/* Content on the left side */}

    <h1 className={`${isSmallScreen ? 'mt-0' : ''} mb-4 top text-center text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl`}>
      <span
        style={{
          background: 'linear-gradient(to right, #BA9010, #000033)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        The Better
      </span>
      <span className="text-[#000033]"> ScoreAPP.</span>
    </h1>
    <p className="text-center text-lg font-normal lg:text-xl text-[#000033]">
      At BSCORE, we are making it simple
    </p>
    <p className="text-center text-lg font-normal lg:text-xl text-[#000033]">
      check the results your favorite leagues.
    </p>
    <h2 className="text-center text-lg font-bold lg:text-xl text-[#000033]">
      in ONE place
    </h2>
    <h2 className="text-center text-2xl font-extrabold text-[#000033]">
      Start now
    </h2>
    <h2 className="text-center text-2xl font-extrabold text-[#000033]">
    {'\u2192'}
    </h2>
  </div>

  {/* Buttons on the right side */}
  <div className={`${isSmallScreen ? 'relative top-16 flex-row' : isMediumScreen ? 'MediumContainer' : 'SmallContainer'} ml-10 items-center`}>
    <div className="left-button mt-20">
      <LeagueButton className={isSmallScreen ? 'custom-button NBA' : 'button NBA mt-0'} league="NBA" onClick={handleClick} />
      <LeagueButton className={isSmallScreen ? 'custom-button NFL' : 'button NFL mt-0'} league="NFL" onClick={handleClick} />
    </div>
    <div className={`${isSmallScreen ? 'right-button mr-4' : isMediumScreen ? 'right-button ml-6 mr-4' : 'right-button ml-6 padding-16'} mb-14 `}>
      <LeagueButton className={isSmallScreen ? 'custom-button NHL' : 'button NHL mt-0'} league="NHL" onClick={handleClick} />
      <LeagueButton className={isSmallScreen ? 'custom-button MLB' : 'button MLB mt-0'} league="MLB" onClick={handleClick} />
    </div>
    {/* <div class="crosshair">
  <div class="vertical-line"></div>
  <div class="horizontal-line"></div>
</div> */}
  </div>
</div>
</div>
<SocialLinks/>
</div>
 )
};

export default LeagueSelector;