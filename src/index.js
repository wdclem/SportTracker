import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SocialLinks from './components/socialLinks';
import { LeagueProvider } from './LeagueContext';
import ColorCarousel from './components/ColorCarousel';
import ali from './assets/ali.png';
import big from './assets/bigdav.jpg';
import ichiro from './assets/ichi.jpg';
import jordan from './assets/jordan.jpg';
import lebron from './assets/lbj.jpg';
import mia from './assets/mia.jpg';
import rickey from './assets/rick.jpg';
import serena from './assets/sere.jpg';
import steph from './assets/steph.jpg';
import usain from './assets/ubolt.jpg';


const colorOptions = [
  {
    backgroundImage: ali,
    textColorClass: 'text-red-500',
    backgroundColor: '#C72E2C',
  },
  {
    backgroundImage: big,
    textColorClass: 'text-red-500',
    backgroundColor: '#D01F35',
  },
  {
    backgroundImage: ichiro,
    textColorClass: 'text-red-500',
    backgroundColor: '#4D7DDB',
  },
  {
    backgroundImage: jordan,
    textColorClass: 'text-red-500',
    backgroundColor: '#3C3C3C)',
  },
  {
    backgroundImage: lebron,
    textColorClass: 'text-red-500',
    backgroundColor: '#B61936',
  },
  {
    backgroundImage: mia,
    textColorClass: 'text-red-500',
    backgroundColor: '#5175CC',
  },
  {
    backgroundImage: rickey,
    textColorClass: 'text-white-500',
    backgroundColor: '#FFC502',
  },
  {
    backgroundImage: serena,
    textColorClass: 'text-white-500',
    backgroundColor: '#4DAB55',
  },
  {
    backgroundImage: steph,
    textColorClass: 'text-white-500',
    backgroundColor: '#FFC314',
  },
  {
    backgroundImage: usain,
    textColorClass: 'rgba(, 0, 0, 0.5)',
    backgroundColor: '#38C968',
  },
  // Add more options as needed
];


ReactDOM.render(
  <React.StrictMode>
    <LeagueProvider>
      <ColorCarousel options={colorOptions}>
        {({ selectedBackgroundImage, selectedBackgroundColor }) => (
          <div
            className="bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              zIndex: 0,
              width: '100%',
              height: '100%',
            }}
          >
          <App
              selectedBackgroundImage={selectedBackgroundImage}
              selectedBackgroundColor={selectedBackgroundColor}
            />
          <SocialLinks/>
          </div>
        )}
      </ColorCarousel>
    </LeagueProvider>
  </React.StrictMode>,
  document.getElementById('root')
);