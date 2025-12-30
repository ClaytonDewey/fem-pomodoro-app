import { Icon } from '../svg';
import { useTimerStore } from '../store/useTimerStore';

const Header = () => {
  const { activeTimer, setActiveTimer } = useTimerStore();
  const timers = ['pomodoro', 'short break', 'long break'];

  const handleTimerSelect = (timer: string) => {
    setActiveTimer(timer as 'pomodoro' | 'short break' | 'long break');
  };

  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='sr-only'>Pomodoro</h1>
        <Icon name='logo' />
      </div>
      <div className='header__buttons'>
        {timers.map((timer) => (
          <button
            onClick={() => handleTimerSelect(timer)}
            key={timer}
            className={`btn btn-pill ${activeTimer === timer ? 'active' : ''}`}>
            {timer}
          </button>
        ))}
      </div>
    </header>
  );
};
export default Header;
