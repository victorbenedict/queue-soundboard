'use client';

import { Slider } from '@nextui-org/react';

export default function SettingsSection() {
  return (
    <div className='w-full h-auto bg-green-300'>
      <div className='h-auto w-full text-center'>Settings</div>
      <div className='w-full h-auto bg-red-300 flex-col items-center justify-center flex gap-4'>
        <div className='w-full h-auto justify-center items-center inline-flex'></div>
        <div className='w-full h-auto justify-center items-center inline-flex'>
          <Slider
            label='Volume'
            step={1}
            maxValue={100}
            minValue={0}
            defaultValue={50}
            className='w-1/2'
            classNames={{ label: 'text-black text-center' }}
          />
        </div>
      </div>
    </div>
  );
}
