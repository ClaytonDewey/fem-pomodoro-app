import { useEffect } from 'react';
import { Header, TimerBox } from './components';
import { useTimerStore } from './store/useTimerStore';

const App = () => {
  const { color, font } = useTimerStore();

  useEffect(() => {
    document.body.classList.add(`color-${color}`);
    document.body.classList.add(`font-${font}`);

    return () => {
      document.body.classList.remove(`.color-${color}`);
      document.body.classList.remove(`font-${font}`);
    };
  }, [color, font]);

  return (
    <div>
      <Header />
      <TimerBox />
    </div>
  );
};
export default App;
