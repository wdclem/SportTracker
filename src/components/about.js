import React from 'react';
import SmallLogo from '../assets/Homepagelogo.png'
import NavBar from './navBar';
import '../styles/league.css';

const AboutSection = ({ selectedBackground, selectedBackgroundColor }) => {
  const bgColor = selectedBackgroundColor;
  return (
    <body className="font-size-12 bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100"> 
      <div className='bg-image'></div>
    <NavBar/>
    <div className='content-container'>
    <div className={`mx-auto leading-normal ${bgColor}`} style={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-blue-500 sm:text-lg dark:text-[#593228]">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              About <span className="font-extrabold">BScore</span>
            </h2>
            <p className="mb-4 font-light">BScore is a web application created as a personal project to learn React, Tailwind CSS, and Cheerio.</p>
            <p className="mb-4 font-light">The goal of this project is to provide a convenient way to find sports results all in the same place.</p>
            <p className="mb-4 font-light">Especially for those living in different time zones, like me in Finland, where US sports are often played during the night.</p>
            <p className="mb-4 font-medium">The results are sourced from sport-reference.com, while the artworks used in the app are from Pixel Hall of Fame (www.pixelhalloffame.com). Please note that BScore is not intended for commercial purposes.</p>
            <p className="mb-4 font-medium">As I continue working on this project, I may add more features, additional leagues, or even develop a mobile app version in the future.</p>
          </div>
        </div>
      </div>
      </div>
      </body>
  );
};

  
  export default AboutSection;
  