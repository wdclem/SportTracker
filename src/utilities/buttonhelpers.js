import { gsap } from 'gsap';

export const handleLeagueButton = (league, navigate, setIsLoading, setSelectedLeagues, containerRef) => {
    const containerElement = containerRef;
  
    gsap.to(containerElement, {
      onComplete: () => {
        setIsLoading(true);
  
        setTimeout(() => {
          setIsLoading(false);
          setSelectedLeagues([league]);
          navigate(`/league-results/${league}`)
        }, 2300);
      },
    });
}
    export const handleGameButton = (league, navigate) => {
        navigate(`/league-results/${league}`)
    } 