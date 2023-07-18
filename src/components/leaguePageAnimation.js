import React, { useEffect } from 'react';

const LeaguePageAnimation = () => {
  useEffect(() => {
    const section = document.querySelectorAll('section');
    const up = document.querySelectorAll('button')[0];
    const down = document.querySelectorAll('button')[1];
    let page = 4;
    let coolTime = true;

    const setPage = (isUp) => {
      if (coolTime) {
        coolTime = false;
        setTimeout(() => {
          coolTime = true;
        }, 1000);

        if (isUp) page = (page + 1) % 4;
        else page = (page + 3) % 4;

        for (let i = 0; i < section.length; i++) {
          if (i === page) {
            if (isUp) section[i].classList.add('up');
            else section[i].classList.add('down');
            section[i].style.zIndex = 99;
          } else {
            section[i].style.zIndex = -100;
            setTimeout(() => {
              section[i].classList.remove('up');
              section[i].classList.remove('down');
            }, 1000);
          }
        }
      }
    };

    const init = () => {
      section[0].style.display = 'grid';
    };

    up.addEventListener('click', () => setPage(true));
    down.addEventListener('click', () => setPage(false));

    init();

    return () => {
      up.removeEventListener('click', () => setPage(true));
      down.removeEventListener('click', () => setPage(false));
    };
  }, []);

  return null;
};

export default leaguePageAnimation;
