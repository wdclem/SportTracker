import { useMediaQuery } from 'react-responsive';

const scoreCard = ({ logo, teamName, score, result, location}) => {
  // console.log(result);
  const isSmallScreen = useMediaQuery({ maxWidth: 1100});

    return (
  <div class={`${isSmallScreen ? 'h-[84px] w-[340px]' : 'max-h-[150px] min-h-[150px] min-w-[380px] max-w-[350px]'} flex p-0  rounded-lg border-[#593228] ${result === 'win' ? 'bg-[#0F672C]' : 'bg-rose-500'}`}>
  <div class={`${isSmallScreen ? 'w-[150px]' : 'w-[120px]'} mb-4 relative z-10 }`}>
    <img src={logo} alt="" className={`${isSmallScreen ? 'h-[20px] w-[20px]' : 'w-3/3 h-2/3'} absolute z-10 inset-0 object-contain rounded-lg shadow-lg shadow-black max-h-[100px] min-h-[100px]}`} loading="lazy"/>
  </div>
  <form class="flex-auto">
    <div class={`${isSmallScreen ? 'h-1/2 w-1/2' : 'max-h-[90px] min-h-[100px]'} relative  before:rounded-t-lg flex flex-wrap items-baseline pb-2 ${result === 'win' ? 'before:bg-[#38C968]' : 'before:bg-red-600'} before:absolute before:top-0 before:bottom-0 ${isSmallScreen ? 'before: w-1/2]' : 'before:min-w-[380px] max-w-[350px]'} before:-right-0`}>
      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        {teamName} 
      </h1>
      <div class="relative text-lg text-white">
        {score}
      </div>
    </div>
    <div class="space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-12">
        <sg class={`mr-4 mt-2 shadow-lg shadow-white px-10 h-12 uppercase rounded-xl font-semibold tracking-wider border-2 border-[#593228] text-black ${result === 'win' ? 'bg-teal-200' : 'bg-red-200'}`}>
          <i className="inline-block align-middle"> {result === 'win' ? 'Winner' : 'Loser'}</i>
        </sg>
      </div>
    </div>
    <p class="text-xs leading-6 text-slate-500">
    </p>
  </form>
</div>
    );
  }

export default scoreCard