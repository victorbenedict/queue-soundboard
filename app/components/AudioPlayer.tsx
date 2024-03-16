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
    <div>
      <p>{'Display number: ' + display}</p>
      <div className='w-full h-auto py-2.5 bg-slate-400 border border-slate-400'>
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
