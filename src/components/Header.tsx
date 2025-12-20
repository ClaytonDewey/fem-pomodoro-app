import { Icon } from '../svg';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <h1 className='sr-only'>Pomodoro</h1>
        <Icon name='logo' />
      </div>
      <div className='header__buttons'></div>
    </header>
  );
};
export default Header;
