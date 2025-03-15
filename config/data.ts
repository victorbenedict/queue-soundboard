import { Howl } from 'howler';

type TSoundData = {
  id: number;
  label: string;
  filename: string;
  howlInstance: Howl;
};

export const soundData: TSoundData[] = Array.from({ length: 20 }, (_, i) => {
  const number: number = i + 1;

  return {
    id: number,
    label: number.toString(),
    filename: `order_${number}.mp3`,
    howlInstance: new Howl({ src: [`sounds/order_${number}.mp3`] }),
  };
});
