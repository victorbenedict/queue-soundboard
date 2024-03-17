import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface AudioPlayerProps {
  display: string;
  url: string;
  playing?: boolean;
}

export default function AudioPlayer({
  display,
  url,
  playing = true,
}: AudioPlayerProps) {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className='h-auto w-full'>
      <p className='px-1 bg-white text-black font-semibold text-xl border-4 border-green-950 rounded'>
        {'Playing: ' + display}
      </p>
      <div className='w-full h-auto py-2.5 bg-slate-400 border border-slate-400 hidden'>
        {hasWindow && (
          <ReactPlayer
            url={url}
            width='100%'
            height='100%'
            controls={true}
            playing={playing}
          />
        )}
      </div>
    </div>
  );
}
