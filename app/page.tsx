import AudioButton from '@/components/AudioButton';
export default function Home() {
  const orderButtons = [];

  for (let i = 1; i <= 20; i++) {
    const audioName = `order${i}`;
    orderButtons.push(<AudioButton key={i} audioName={audioName} />);
  }

  return (
    <>
      <div className='grid grid-cols-4 gap-2 m-2'>{orderButtons}</div>
      <div className='grid grid-cols-3 gap-2 m-2'>
        <AudioButton audioName='Welcome' />
        <AudioButton audioName='Thanks' />
        <AudioButton audioName='Claygo' />
      </div>
    </>
  );
}
