const scoreCard = ({ logo, teamName, score, result, location}) => {
  console.log(result);

    return (
  <div class={`flex p-0 ${result === 'win' ? 'bg-teal-300' : 'bg-red-300'} border-2 border-[#593228] w-128`}>
  <div class={`flex-none w-48 mb-4 relative z-10 before:absolute before:rounded-br-xl before:w-2/3 before:h-2/3 ${result === 'win' ? 'before:bg-teal-100' : 'before:bg-red-100'}`}>
    <img src={logo} alt="" class="absolute z-10 inset-0 w-2/3 h-2/3 object-contain rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto pl-4">
    <div class={`relative flex flex-wrap items-baseline pb-2 ${result === 'win' ? 'before:bg-teal-600' : 'before:bg-red-600'} before:absolute before:top-0 before:bottom-0 before:-left-20 before:-right-0`}>
      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        {teamName} 
      </h1>
      <div class="relative text-lg text-white">
        {score}
      </div>
    </div>
    <div class="flex space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-12">
        <button class={`px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black text-black ${result === 'win' ? 'bg-teal-200' : 'bg-red-200'}`}>
          <i> {result === 'win' ? 'Winner' : 'Loser'}</i>
        </button>
      </div>
    </div>
    <p class="text-xs leading-6 text-slate-500">
    </p>
  </form>
</div>
      // <div className="wrapper antialiased text-gray-900 rounded-lg" >
      //   <div>
      //     <div className='flex justify-center'>
      //       <img src={logo} alt="Team Logo" className="w-full  w-40vh h-30vh sm:w-8vh sm:h-5vh object-cover object-center rounded-lg shadow-md" />
      //     </div>
      //     <div className="relative px-4 -mt-16">
      //       <div className="justify-center bg-white p-5 rounded-lg shadow-lg h-40 w-60 sm:w-10vh sm:h-10vh">
      //         <div className="flex items-baseline justify-center">
      //           <span className={`text-[#352B2D] mt-1 text-center text-xs px-2 rounded-full uppercase font-semibold tracking-wide ${result === 'win' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
      //               {result === 'win' ? 'Winner' : 'Loser'}
      //           </span>
      //         </div>
      //         <h4 className={`${result === 'win' ? '200 text-green-800' : 'text-red-800'} mt-1 text-center text-xl font-semibold uppercase leading-tight`}>{teamName}</h4>
      //         <div className="text-[#593228] mt-1 text-center">
      //           {score}
      //           <span className="text-[#593228]text-sm"> pts</span>
      //         </div>
      //         <div className="mt-2 text-center">
      //           <span className='text-[#6FACD5] text-m font-semibold'>{location}</span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  };

export default scoreCard