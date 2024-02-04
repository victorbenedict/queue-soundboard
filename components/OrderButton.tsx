'use client';

import { Button } from '@nextui-org/button';
import React from 'react';
import useSound from 'use-sound';

interface OrderButtonProps {
  orderNumber: string;
}

const OrderButton = ({ orderNumber }: OrderButtonProps) => {
  const audioPath = `../sounds/order${orderNumber}.mp3`;
  const [interrupt] = React.useState(true);
  const [play] = useSound(audioPath, { interrupt });

  const handlePress = () => {
    play();
    console.log('Button pressed');
  };

  return <Button onPress={handlePress}>{orderNumber}</Button>;
};

export default OrderButton;
