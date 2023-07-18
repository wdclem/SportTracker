import React from 'react';
import Card from './Card';
import '../styles/style.css';

const LandingPage = () => {
  return (
  <div className="bg-gradient-to-r from-orange-200 via-yellow-200 to-yellow-100">
      <h1 className="name">
        <span className="copy-wrap">
          The better ScoreAPP 
        </span>
      </h1>

      <div className="square">
        <Card />
      </div>

      <div className="card-no-hover">
        <div className="card-title-wrap">
          <h1 className="title no-hover">
            <span className="copy-wrap">
              BScore 
            </span>
          </h1>
        </div>
      </div>
      <h2 className="copyright">
        <span className="copy-wrap">
          20&nbsp;&nbsp;&nbsp;&nbsp;23
        </span>
      </h2>
      <div className="card">
          <button className="btn hide">
            View
          </button>
      </div>
    </div>
  );
};

export default LandingPage;
