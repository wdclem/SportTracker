import React from 'react';
import twitterLogo from '../assets/twitterlogo.png';
import githubLogo from '../assets/githublogo.png';
import linkedinLogo from '../assets/linkedinlogo.png';

const SocialLinks = () =>{
    return(
        <div className='relative'>
        <div className='fixed flex bottom-2 gap-3 left-1/2 transform -translate-x-1/2'>
          <a href="/">
            <img src={linkedinLogo} className="w-5 h-5" alt="linkedin" />
          </a>
          <a href="/">
            <img src={githubLogo} className="w-5 h-5 opacity-70" alt="github" />
          </a>
          <a href="/">
            <img src={twitterLogo} className="w-5 h-5" alt="twitter" />
          </a>
        </div>
      </div>
    )
}

export default SocialLinks;