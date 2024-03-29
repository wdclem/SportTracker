import React from 'react';
import SmallLogo from '../assets/Homepagelogo.png'
import NavBar from './navBar';
import SocialLinks from './socialLinks';
import '../styles/league.css';

const AboutSection = ({ selectedBackground, selectedBackgroundColor }) => {
  const bgColor = selectedBackgroundColor;
  return (
  <div className="font-size-12 bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100"> 
      <div className='bg-image'></div>
    <NavBar/>
    <div className='flex max-w-[640px] max-h-[600px] mx-auto'>
      <div className={`mx-auto leading-normal ${bgColor}`}> 
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-lg max-h-[66vh] overflow-y-auto sm:text-lg text-[#003333]">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 text-center">
              About <span className="font-extrabold">BScore</span>
            </h2>
            <p className="mb-4 font-light">BScore is a web application created as a personal project to learn React, Tailwind CSS, and Cheerio.</p>
            <p className="mb-4 font-light">The goal of this project is to provide a convenient way to find sports results all in the same place.</p>
            <p className="mb-4 font-light">Especially for those living in different time zones, like me in Finland, where US sports are often played during the night.</p>
            <p className="mb-4 font-medium">The results are sourced from sport-reference.com. Please note that BScore is not intended for commercial purposes.</p>
          </div>
        </div>
      </div>
    </div>
    <SocialLinks/>
  </div>
  );
};

  
  export default AboutSection;
  
