import React, { useState } from 'react';

const LeaguePageAnimation = ({ onAnimationComplete }) => {
  const [page, setPage] = useState('start');

  const onChangePage = (to) => {
    setPage(to);
  };

  return (
    <div id="app">
      <transition name="page" duration="1300">
        {page === 'start' ? (
          <Start onChangePage={onChangePage} />
        ) : (
          <Next onChangePage={onChangePage} />
        )}
      </transition>
    </div>
  );
};

const Start = (props) => {
  return (
    <div className="start">
      <div className="inner">
        <h1 className="title enter-1">Page Transition Demo</h1>
        <div className="button-wrapper enter-2">
          <button
            className="button button-start"
            type="button"
            onClick={() => props.onChangePage('next')}
          >
            <span className="button-text">Start!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Next = (props) => {
  return (
    <div className="next">
      <div className="inner">
        <h1 className="title enter-1">You may want </h1>
        <ul className="next-list">
          <li className="enter-3">CSS</li>
        </ul>
        <div className="button-wrapper enter-5">
          <button
            className="button button-next"
            type="button"
            onClick={() => props.onChangePage('start')}
          >
            <span className="button-text">Back</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaguePageAnimation;
