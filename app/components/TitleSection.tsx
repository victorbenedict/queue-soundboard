import Image from 'next/image';
import React from 'react';

export default function TitleSection() {
  return (
    <div className='w-full h-auto item-center font-inter'>
      {/* <Image
        height={0}
        width={0}
        src='/sisbrewLogo.png'
        alt='logo'
        style={{ width: `100px`, height: 'auto' }}
      /> */}
      <Image src='/sisbrewLogo.png' height={250} width={500} alt='logo' />
    </div>
  );
}
