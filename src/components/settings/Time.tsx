import { Input } from '../';

const Time = () => {
  return (
    <section className='settings__time'>
      <div className='settings__header'>
        <h3>Time (Minutes)</h3>
      </div>

      <div className='settings__content'>
        <div className='settings__item'>
          <label htmlFor='pomodoro' className='form-label'>
            pomodoro
          </label>
          <Input
            className='form-control'
            type='number'
            id='pomodoro'
            name='pomodoro'
            min='1'
            defaultValue='25'
            max='180'
          />
        </div>

        <div className='settings__item'>
          <label htmlFor='short-break' className='form-label'>
            short break
          </label>
          <Input
            className='form-control'
            type='number'
            id='short-break'
            name='short-break'
            min='1'
            defaultValue='5'
            max='180'
          />
        </div>

        <div className='settings__item'>
          <label htmlFor='long-break' className='form-label'>
            long break
          </label>
          <Input
            className='form-control'
            type='number'
            id='long-break'
            name='long-break'
            min='1'
            defaultValue='15'
            max='180'
          />
        </div>
      </div>
    </section>
  );
};
export default Time;
