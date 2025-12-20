import { Progress } from '.';
import { Settings } from './settings/';

const TimerBox = () => {
  return (
    <div className='timer-box'>
      <Progress />
      <Settings />
    </div>
  );
};
export default TimerBox;
