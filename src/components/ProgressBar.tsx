import { CircularProgressbar } from 'react-circular-progressbar';

const ProgressBar = () => {
  const percentage = 82; // Example percentage value
  return (
    <div className='progress-wrapper'>
      <div className='progress-container-outer'>
        <div className='progress-container-inner'>
          <CircularProgressbar
            value={percentage}
            text='17:59'
            strokeWidth={3}
          />
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
