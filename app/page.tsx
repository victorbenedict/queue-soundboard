'use client';

import { useState } from 'react';
import AudioPlayer from './components/AudioPlayer';
import NotificationSoundboard from './components/NotificationSoundboard';
import NumberSoundboard from './components/NumberSoundboard';
import SettingsSection from './components/SettingsSection';
import TitleSection from './components/TitleSection';

export default function Home() {
  const maxOrderNumber = 20;
  const numberAudioURL: string[] = [];
  for (let index = 0; index <= maxOrderNumber; index++) {
    const url = `/sounds/${index}.mp3`;
    numberAudioURL.push(url);
  }
  const notificationAudioURL: { [key: string]: string } = {
    welcome: '/sounds/welcome.mp3',
    thanks: '/sounds/thanks.mp3',
    claygo: '/sounds/claygo.mp3',
  };

  const [number, setNumber] = useState('None');
  const [audioURL, setAudioURL] = useState('');
  const [playing, setPlaying] = useState(true);

  const handleNumberClick = (btnNumber: number) => {
    console.log(btnNumber);
    console.log('audioFiles[btnNumber]: ', numberAudioURL[btnNumber]);
    setPlaying(false);
    setNumber(btnNumber.toString());
    setAudioURL(numberAudioURL[btnNumber]);
    setPlaying(true);
  };

  const handleNotificationClick = (btnNotification: string) => {
    console.log('handleNotificationClick');
    console.log('handleNotificationClick', btnNotification);
    console.log('notificationAudioURL', notificationAudioURL[btnNotification]);
    setPlaying(false);
    setNumber(btnNotification);
    setAudioURL(notificationAudioURL[btnNotification]);
    setPlaying(true);
  };

  return (
    <main className='w-full items-start justify-center flex'>
      <div className='w-full h-auto bg-white flex-col inline-flex justify-start items-start gap-4 p-4 md:w-3/4 lg:w-1/2'>
        <TitleSection />
        <AudioPlayer display={number} url={audioURL} playing={playing} />
        <NumberSoundboard
          buttonCount={maxOrderNumber}
          onClick={(data) => handleNumberClick(data)}
        />
        <NotificationSoundboard
          onClick={(data) => handleNotificationClick(data)}
        />
      </div>
    </main>
  );
}
