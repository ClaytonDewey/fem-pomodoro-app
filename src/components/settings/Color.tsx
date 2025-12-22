import { Button } from '../.';

const Color = () => {
  return (
    <section className='settings__color'>
      <div className='settings__header'>
        <h3>Color</h3>
      </div>
      <div className='settings__content'>
        <div className='settings__content-buttons'>
          <Button type='button' className='btn btn-round red' aria-label='Red'>
            <div className='sr-only'>Red</div>
          </Button>
          <Button
            type='button'
            className='btn btn-round cyan'
            aria-label='Cyan'>
            <div className='sr-only'>Cyan</div>
          </Button>
          <Button
            type='button'
            className='btn btn-round purple'
            aria-label='Purple'>
            <div className='sr-only'>Purple</div>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Color;
