import { Button } from '../.';

const Font = () => {
  return (
    <section className='settings__font'>
      <div className='settings__header'>
        <h3>Font</h3>
      </div>
      <div className='settings__content'>
        <div className='settings__content-buttons'>
          <Button
            type='button'
            className='btn btn-round kumbh-sans active'
            aria-label='Kumbh Sans'>
            Aa
          </Button>
          <Button
            type='button'
            className='btn btn-round roboto-slab'
            aria-label='Roboto Slab'>
            Aa
          </Button>
          <Button
            type='button'
            className='btn btn-round space-mono'
            aria-label='Space Mono'>
            Aa
          </Button>
        </div>{' '}
      </div>
    </section>
  );
};
export default Font;
