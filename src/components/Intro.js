import React, { useState, useEffect } from 'react';
import IntroVideo from '../assets/intro.mp4';

const IntroEffect = ({ duration, onVideoComplete}) => {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  console.log('IntroEffect rendered');

  return (
    <div className="animation-intro">
      {showVideo && (
        <video autoPlay={true} src={IntroVideo} alt="Video" className="video" />
      )}
    </div>
  );
};

export default IntroEffect;
