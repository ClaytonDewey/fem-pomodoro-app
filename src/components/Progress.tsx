const Progress = () => {
  return (
    <div className='progress-wrapper'>
      <div className='progress-container-outer'>
        <div className='progress-container-inner'>
          <div id='clock'>17:59</div>
          <svg
            width='339'
            height='339'
            className='progress-circular'
            viewBox='0 0 339 339'>
            <circle cx='169.5' cy='169.5' r='165' />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Progress;
// https://youtu.be/zSidP96d15U?si=u-1QJMpTB2SJNqOV
