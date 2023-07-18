import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import '../styles/loading-effect.css';
import aliGif from '../assets/ali.png';
import bigGif from '../assets/big.gif';
import ichiroGif from '../assets/ichiro.gif';
import jojo from '../assets/jojo.gif';
import lebronGif from '../assets/lebron.gif';
import miaGif from '../assets/mia-gif.gif';
import rickeyGif from '../assets/rickey.gif';
import serenaGif from '../assets/serena.gif';
import stephGif from '../assets/stephgif.gif';
import usainGif from '../assets/usain.gif';
import dunkSound from '../assets/dunk.m4a';
import homeRun from '../assets/homerun.mp3';
import oui from '../assets/oui.mp3';
import switchSound from '../assets/switch.m4a';

const LoadingEffect = ({ duration, selectedBackgroundImage, selectedBackgroundColor, muteSound }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (showAnimation) {
      tl.fromTo('.animation-container', { x: '100%', y:'-100%' }, { x: '0%', y:'0%', duration: 1, ease: 'power1.out' });
    }
  }, [showAnimation]);

  let animationGif = null;
  let animationSound = null;

  if (selectedBackgroundImage) {
    const backImage = selectedBackgroundImage.split('/').pop().split('.')[0];

    if (backImage === 'mia') {
      animationGif = miaGif;
    } else if (backImage === 'ali') {
      animationGif = aliGif;
      animationSound = dunkSound;
    } else if (backImage === 'bigdav') {
      animationGif = bigGif;
      animationSound = homeRun;
    } else if (backImage === 'ichi') {
      animationGif = ichiroGif;
      animationSound = homeRun;
    } else if (backImage === 'jordan') {
      animationGif = jojo;
      animationSound = dunkSound;
    } else if (backImage === 'lbj') {
      animationGif = lebronGif;
      animationSound = dunkSound;
    } else if (backImage === 'rick') {
      animationGif = rickeyGif;
      animationSound = dunkSound;
    } else if (backImage === 'sere') {
      animationGif = serenaGif;
      animationSound = dunkSound;
    } else if (backImage === 'steph') {
      animationGif = stephGif;
      animationSound = switchSound;
    } else if (backImage === 'ubolt') {
      animationGif = usainGif;
      animationSound = oui;
    }
  }

  const containerStyle = {
    backgroundColor: selectedBackgroundColor,
    backgroundImage: 'none', // Override background image
  };

  return (
    <div className="animation-container" style={containerStyle}>
      {showAnimation && animationGif && (
        <>
          <img src={animationGif} alt="Animation" className="animation" />
          <audio src={animationSound} autoPlay={!muteSound} />
        </>
      )}
    </div>
  );
};

export default LoadingEffect;
