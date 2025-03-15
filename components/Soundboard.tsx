'use client';
import { Button } from '@heroui/button';
import { Howl, Howler } from 'howler';
import { useState } from 'react';
import { FaRegStopCircle } from 'react-icons/fa';

import { soundData } from '@/config/data';

export default function Soundboard() {
  const [status, setStatus] = useState('default');
  const handleStopClick = () => Howler.stop();
  const handleNumberClick = (sound: Howl, label: string) => {
    Howler.stop();
    sound.play();
    sound.on('play', () => setStatus(`Playing order number ${label}`));
    sound.on('end', () => setStatus('Tap number to play'));
  };

  return (
    <section className='flex flex-col gap-4'>
      <div className='p-4 text-lg text-center border rounded-lg text-nowrap'>
        {status}
      </div>
      <Button
        className='min-h-14 font-bold text-2xl'
        color='danger'
        startContent={<FaRegStopCircle />}
        variant='ghost'
        onPress={handleStopClick}
      >
        STOP
      </Button>
      <div className='grid grid-cols-5 gap-1 w-full' id='soundboard'>
        {soundData.map((props) => {
          return (
            <Button
              key={props.id}
              className='min-h-14 min-w-14 font-bold text-2xl'
              color='primary'
              radius='none'
              onPress={() => handleNumberClick(props.howlInstance, props.label)}
            >
              {props.label}
            </Button>
          );
        })}
      </div>
    </section>
  );
}
