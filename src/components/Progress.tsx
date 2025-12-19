const Progress = () => {
  return (
    <div className='progress-circular'>
      <svg width='120' height='120' viewBox='0 0 120 120'>
        {/* Background track */}
        <circle
          className='track'
          cx='60'
          cy='60'
          r='54'
          fill='none'
          stroke='#e6e6e6'
          strokeWidth='12'
        />
        {/* Progress indicator */}
        <circle
          className='progress'
          cx='60'
          cy='60'
          r='54'
          fill='none'
          stroke='#4caf50'
          stroke-width='12'
          stroke-dasharray='339.29'
          stroke-dashoffset='84.82'
          stroke-linecap='round'
        />
      </svg>
      <div className='percentage'>75%</div>
    </div>
  );
};
export default Progress;
// https://youtu.be/zSidP96d15U?si=u-1QJMpTB2SJNqOV
