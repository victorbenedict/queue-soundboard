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
    'w-full h-24 bg-green-950 font-bold'
  );

  const handleClick = (btnName: any) => {
    onClick(btnName);
  };

  return (
    <div className='w-full h-auto '>
      {/* <div className='h-auto w-full text-center text-2xl font-bold text-red-800'>
        NOTIFICATIONS
      </div> */}
      <div className='w-full h-auto inline-flex gap-4'>
        <Button
          key='btnWelcome'
          onPress={() => handleClick('welcome')}
          className={notificationButtonClass}
        >
          WELCOME
        </Button>
        <Button
          key='btnThanks'
          onPress={() => handleClick('thanks')}
          className={notificationButtonClass}
        >
          THANKS
        </Button>
        <Button
          key='btnClaygo'
          onPress={() => handleClick('claygo')}
          className={notificationButtonClass}
        >
          CLAYGO
        </Button>
      </div>
    </div>
  );
}
