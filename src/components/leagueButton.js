import '../styles/league.css';

const LeagueButton = ({ className, league, onClick }) => {

    return (
      <button className={className} onClick={() => onClick(league)}/>
    );
  };
  
  export default LeagueButton;
  