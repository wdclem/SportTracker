const smallScoreCard = ({ logo, teamName, score, result, location}) => {
    console.log(result);
  
      return (
    <div class={`{isSmallScreen ? 'custom-button NHL' : 'button NHL mt-0'}flex p-0 ${result === 'win' ? 'bg-lime-200' : 'bg-rose-500'} border-2 border-[#593228] max-h-[84px] min-h-[74px] min-w- max-w-[375px]`}>
    <div class={`w-[120px] mb-4 relative z-10 before:absolute before:rounded-br-xl before:shadow-lg before:shadow-black before:w-24 before:h-4/5 ${result === 'win' ? 'before:bg-teal-100' : 'before:bg-red-100'}`}>
      <img src={logo} alt="" class=" absolute z-10 inset-0 w-[20px] h-20[px] object-contain rounded-lg" loading="lazy" />
    </div>
    <form class="flex-auto">
      <div class={`relative max-h-[90px] min-h-[100px] flex flex-wrap items-baseline pb-2 ${result === 'win' ? 'before:bg-teal-600' : 'before:bg-red-600'} before:absolute before:top-0 before:bottom-0 before:-left-20 before:-right-0`}>
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
      )
}
export default smallScoreCard;