import { Button } from '../.';
import { useTimerStore } from '../../store/useTimerStore';

const Font = () => {
  const { font, setFont } = useTimerStore();

  const handleFontChange = (fontChoice: 'kumbh' | 'roboto' | 'space') => {
    setFont(fontChoice);
  };

  return (
    <section className='settings__font'>
      <div className='settings__header'>
        <h3>Font</h3>
      </div>
      <div className='settings__content'>
        <div className='settings__content-buttons'>
          <Button
            type='button'
            className={`btn btn-round kumbh ${
              font === 'kumbh' ? 'active' : ''
            }`}
            aria-label='Kumbh Sans'
            onClick={() => handleFontChange('kumbh')}>
            Aa
          </Button>
          <Button
            type='button'
            className={`btn btn-round roboto ${
              font === 'roboto' ? 'active' : ''
            }`}
            aria-label='Roboto Slab'
            onClick={() => handleFontChange('roboto')}>
            Aa
          </Button>
          <Button
            type='button'
            className={`btn btn-round space ${
              font === 'space' ? 'active' : ''
            }`}
            aria-label='Space Mono'
            onClick={() => handleFontChange('space')}>
            Aa
          </Button>
        </div>{' '}
      </div>
    </section>
  );
};
export default Font;
