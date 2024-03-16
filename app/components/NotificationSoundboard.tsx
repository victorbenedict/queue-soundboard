import { Button } from '@nextui-org/react';
import cx from 'classnames';
import { defaultButtonClass } from '../lib/classname';

interface NotificationSoundboardProps {
  onClick: (data: any) => void;
}

export default function NotificationSoundboard({
  onClick,
}: NotificationSoundboardProps) {
  const notificationButtonClass = cx(
    defaultButtonClass,
    'w-full h-24 bg-secondary'
  );

  const handleClick = (btnName: any) => {
    onClick(btnName);
  };

  return (
    <div className='w-full h-auto bg-green-300'>
      <div className='h-auto w-full text-center'>Notification</div>
      <div className='w-full h-auto bg-red-300 inline-flex gap-4'>
        <Button
          key='btnWelcome'
          onPress={() => handleClick('welcome')}
          className={notificationButtonClass}
        >
          Welcome
        </Button>
        <Button
          key='btnThanks'
          onPress={() => handleClick('thanks')}
          className={notificationButtonClass}
        >
          Thanks
        </Button>
        <Button
          key='btnClaygo'
          onPress={() => handleClick('claygo')}
          className={notificationButtonClass}
        >
          Claygo
        </Button>
      </div>
    </div>
  );
}
