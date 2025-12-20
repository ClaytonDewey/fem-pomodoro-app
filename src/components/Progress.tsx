const Progress = () => {
  return (
    <div className='progress-wrapper'>
      <div className='progress-container-outer'>
        <div className='progress-container-inner'>
          <div id='clock'></div>
        </div>
      </div>
      <svg width='400px' height='400px'>
        <defs>
          <linearGradient id='linearGradient'>
            <stop offset='0%' stop-color='darkorange' />
            <stop offset='100%' stop-color='yellow' />
          </linearGradient>
        </defs>
        <circle cx='200' cy='200' r='185' />
      </svg>
    </div>
    // <div className='progress-container-outer'>
    //   <div className='progress-container-inner'>
    //     <div className='progress-circular'>
    //       <svg width='339' height='339' viewBox='0 0 120 120'>
    //         Background track
    //         <circle
    //           className='track'
    //           cx='60'
    //           cy='60'
    //           r='54'
    //           fill='none'
    //           stroke='currentColor'
    //           strokeWidth='12'
    //         />
    //         Progress indicator
    //         <circle
    //           className='progress'
    //           cx='60'
    //           cy='60'
    //           r='54'
    //           fill='none'
    //           stroke='#4caf50'
    //           strokeWidth='12'
    //           strokeDasharray='339.29'
    //           strokeDashoffset='84.82'
    //           strokeLinecap='round'
    //         />
    //       </svg>
    //       <div className='percentage'>75%</div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default Progress;
// https://youtu.be/zSidP96d15U?si=u-1QJMpTB2SJNqOV
