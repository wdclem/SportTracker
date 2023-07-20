import { useMediaQuery } from 'react-responsive';

const scoreCard = ({ logo, teamName, score, result, location}) => {
  // console.log(result);
  const isSmallScreen = useMediaQuery({ maxWidth: 1100});

    return (
  <div class={`${isSmallScreen ? 'h-[40px] w-[300px] ' : 'max-h-[130px] min-h-[130px] min-w-[380px] max-w-[350px] rounded-lg'} flex p-0   border-[#593228] ${result === 'win' ? 'bg-[#38C968]' : 'bg-rose-500'}`}>
  <div class={`${isSmallScreen ? 'w-[150px] h-[30px]' : 'w-[120px]'} mb-4 relative z-10 }`}>
    <img src={logo} alt="" className={`${isSmallScreen ? 'h-[35px] w-[35px]' : 'w-[80px] h-[80px'} absolute z-10 inset-0 object-contain rounded-lg shadow-lg shadow-black max-h-[100px] min-h-[100px]}`} loading="lazy"/>
  </div>
  <form class="flex-auto">
    <div class={`${isSmallScreen ? 'h-[24px] w-[200px]' : 'max-h-[85px] min-h-[85px]'} relative  before:rounded-t-lg flex flex-wrap items-baseline pb-2 ${result === 'win' ? 'before:bg-[#0F672C]' : 'before:bg-red-600'} before:absolute before:top-0 before:bottom-0 ${isSmallScreen ? 'before: w-1/2]' : 'before:min-w-[380px] max-w-[350px]'} before:-right-0`}>
      <h1 class= {`${isSmallScreen ? 'text-sm' : 'text-2xl mb-2'} relative w-full flex-1 font-semibold text-[#EBEBEB]`}>
        {teamName} 
      </h1>
      <div class={`${isSmallScreen ? 'flex justify-end text-sm' : 'relative text-lg'} mr-4 text-[#EBEBEB]`}>
        {score}
      </div>
    </div>
    {isSmallScreen ? null : (
    <div class="space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-12">
        <sg class={`mr-4 mt-2 shadow-md shadow-[#F5F5F5] px-10 h-12 uppercase rounded-xl font-semibold tracking-wider border-2 border-[#593228] text-black ${result === 'win' ? 'bg-teal-200' : 'bg-red-200'}`}>
          <i className="inline-block align-middle"> {result === 'win' ? 'Winner' : 'Loser'}</i>
        </sg>
      </div>
    </div> )}
    {isSmallScreen && (<p class="text-xs space-y-1 text-[#EBEBEB]">{result === 'win' ? 'Winner' : 'Loser'}</p> )}
  </form>
</div>
    );
  }

export default scoreCard