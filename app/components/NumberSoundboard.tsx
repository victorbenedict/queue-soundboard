import { Button } from '@nextui-org/react';
import cx from 'classnames';
import { defaultButtonClass } from '../lib/classname';

interface NumberSoundboardProps {
  buttonCount: number;
  onClick: (data: any) => void;
}

export default function NumberSoundboard({
  buttonCount,
  onClick,
}: NumberSoundboardProps) {
  const numberButtonClass = cx(
    defaultButtonClass,
    'w-full h-20 text-3xl font-semibold bg-green-950'
  );

  const buttons = [];
  const handleClick = (index: any) => {
    onClick(index);
  };
  for (let index = 1; index <= buttonCount; index++) {
    buttons.push(
      <Button
        key={'btn' + index}
        className={numberButtonClass}
        onPress={() => handleClick(index)}
      >
        {index}
      </Button>
    );
  }

  return (
    <div className='w-full h-auto bg-transparent grid grid-cols-5 gap-1'>
      {buttons}
    </div>
  );
}
