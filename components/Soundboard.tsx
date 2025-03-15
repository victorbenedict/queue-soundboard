'use client';
import { Button } from '@heroui/button';
import { Progress } from '@heroui/progress';
import { Howl, Howler } from 'howler';
import { useState } from 'react';
import { FaRegStopCircle } from 'react-icons/fa';

import { soundData } from '@/config/data';

function DefaultStatus() {
  return <p className='animate-pulse p-4'>Tap a number to play</p>;
}

function PlayingStatus(label: string) {
  return (
    <>
      <p className='p-4'>{`Playing order number ${label}`}</p>
      <Progress
        isIndeterminate
        aria-label='Loading...'
        className='absolute bottom-0'
        size='sm'
      />
    </>
  );
}

export default function Soundboard() {
  const [status, setStatus] = useState(DefaultStatus);
  const handleStopClick = () => {
    Howler.stop();
    setStatus(DefaultStatus);
  };
  const handleNumberClick = (sound: Howl, label: string) => {
    Howler.stop();
    sound.play();
    sound.on('play', () => setStatus(PlayingStatus(label)));
    sound.on('end', () => setStatus(DefaultStatus));
  };

  return (
    <section className='flex flex-col gap-4'>
      <div className='text-lg relative flex flex-col items-center justify-center text-center border shadow-sm rounded text-nowrap overflow-hidden h-[70px] transition-opacity duration-300 ease-in-out'>
        {status}
      </div>
      <Button
        className='min-h-14 font-semibold text-xl'
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
