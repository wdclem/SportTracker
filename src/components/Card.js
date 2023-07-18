import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Card = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;
    const body = document.querySelector('body');
    const btn = document.querySelector('.btn');

    const handleClick = () => {
      if (body.classList.contains('is-open')) {
        body.classList.remove('is-open');
        btn.innerHTML = 'View';
      } else {
        body.classList.add('is-open');
        btn.innerHTML = 'Close';
        gsap.set('.card', { clearProps: 'all' });
        gsap.to(cardElement, {
          duration: 2,
          onComplete: () => {
            navigate('/league-selector');
          },
        });
      }
    };

    const handleMouseMove = (event) => {
      if (body.classList.contains('is-open')) {
        event.preventDefault();
      } else {
        const halfW = cardElement.clientWidth / 2;
        const halfH = cardElement.clientHeight / 2;

        const coorX = halfW - (event.pageX - cardElement.offsetLeft);
        const coorY = halfH - (event.pageY - cardElement.offsetTop);

        const degX = `${(coorY / halfH) * 10}deg`; // max. degree = 10
        const degY = `${(coorX / halfW) * -10}deg`; // max. degree = 10

        cardElement.style.transform = `perspective(1600px) translate3d(0, 0px, 0) scale(0.6) rotateX(${degX}) rotateY(${degY})`;
        cardElement.querySelector('.card-title-wrap').style.transform = `perspective(1600px) translate3d(0, 0, 200px) rotateX(${degX}) rotateY(${degY})`;
      }
    };

    const handleMouseOut = () => {
      cardElement.style.transform = '';
      cardElement.querySelector('.card-title-wrap').style.transform = '';
    };

    cardElement.addEventListener('click', handleClick);
    cardElement.addEventListener('mousemove', handleMouseMove);
    cardElement.addEventListener('mouseout', handleMouseOut);

    return () => {
      cardElement.removeEventListener('click', handleClick);
      cardElement.removeEventListener('mousemove', handleMouseMove);
      cardElement.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="card" ref={cardRef}>
      <div className="card-title-wrap">
        <h1 className="title">
          <span className="copy-wrap">
            <div className="image-container">
            </div>
          </span>
        </h1>
        <button className="btn hide">View</button>
      </div>
      <div className="card-img"></div>
    </div>
  );
};

export default Card;
