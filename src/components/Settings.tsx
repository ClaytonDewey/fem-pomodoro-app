import { Button, Modal } from '.';
import { Icon } from '../svg';
import { useModal } from '../hooks/useModal';

const Settings = () => {
  const { isShown, show, hide } = useModal();

  const modalContent = (
    <div>
      <p>This is dynamic content passed to the reusable modal component.</p>
      <Button type='button' onClick={hide} className='btn btn-primary mt-4'>
        Close from inside
      </Button>
    </div>
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
