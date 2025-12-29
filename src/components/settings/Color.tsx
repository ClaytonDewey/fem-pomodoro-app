import { Button } from '../.';
import { Icon } from '../../svg';
import { useTimerStore } from '../../store/useTimerStore';

const Color = () => {
  const { color, setColor } = useTimerStore();

  const handleColorChange = (selectedColor: 'red' | 'cyan' | 'purple') => {
    setColor(selectedColor);
  };

  return (
    <section className='settings__color'>
      <div className='settings__header'>
        <h3>Color</h3>
      </div>
      <div className='settings__content'>
        <div className='settings__content-buttons'>
          <Button
            onClick={() => handleColorChange('red')}
            type='button'
            className='btn btn-round red'
            aria-label='Red'>
            <div className='sr-only'>Red</div>
            {color === 'red' && <Icon name='check' />}
          </Button>
          <Button
            onClick={() => handleColorChange('cyan')}
            type='button'
            className='btn btn-round cyan'
            aria-label='Cyan'>
            <div className='sr-only'>Cyan</div>
            {color === 'cyan' && <Icon name='check' />}
          </Button>
          <Button
            onClick={() => handleColorChange('purple')}
            type='button'
            className='btn btn-round purple'
            aria-label='Purple'>
            <div className='sr-only'>Purple</div>
            {color === 'purple' && <Icon name='check' />}
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Color;
