import { ProgressBar } from '.';
import { Settings } from './settings/';

const TimerBox = () => {
  return (
    <div className='timer-box'>
      <ProgressBar />
      <Settings />
    </div>
  );
};
export default TimerBox;
