'use client';

import { Button } from '@nextui-org/button';
import React from 'react';
import useSound from 'use-sound';

interface AudioButtonProps {
  audioName: string;
}

const AudioButton = ({ audioName }: AudioButtonProps) => {
  const audioPath = `../sounds/${audioName}.mp3`;
  const [interrupt] = React.useState(true);
  const [play] = useSound(audioPath, { interrupt });

  const handlePress = () => {
    play();
    console.log('Button pressed');
  };

  return (
    <Button color='primary' radius='full' onPress={handlePress}>
      {audioName}
    </Button>
  );
};

export default AudioButton;
