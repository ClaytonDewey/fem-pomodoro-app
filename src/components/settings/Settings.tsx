import { Button, Modal } from '../';
import { Icon } from '../../svg';
import { useModal } from '../../hooks/useModal';
import { Color, Font, Time } from '.';

const Settings = () => {
  const { isShown, show, hide } = useModal();

  const modalContent = (
    <section className='settings__wrapper'>
      <Time />
      <Font />
      <Color />
      <Button type='button' onClick={hide} className='btn btn-primary'>
        Apply
      </Button>
    </section>
  );
  return (
    <div>
      <Button
        type='button'
        onClick={show}
        className='btn btn-settings'
        aria-label='Settings'>
        <Icon name='settings' />
      </Button>
      <Modal
        isShown={isShown}
        hide={hide}
        modalContent={modalContent}
        headerText='Settings'
      />
    </div>
  );
};
export default Settings;
