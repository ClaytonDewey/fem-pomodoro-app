import {
  IconCheck,
  IconArrowDown,
  IconArrowUp,
  IconClose,
  Logo,
  IconSettings,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'check':
      return <IconCheck />;
    case 'arrow-down':
      return <IconArrowDown />;
    case 'arrow-up':
      return <IconArrowUp />;
    case 'close':
      return <IconClose />;
    case 'logo':
      return <Logo />;
    case 'settings':
      return <IconSettings />;
    default:
      return null;
  }
};

export default Icon;
