import AudioButton from '@/components/AudioButton';
export default function Home() {
  const orderButtons = [];

  for (let i = 1; i <= 20; i++) {
    orderButtons.push(<AudioButton key={i} audioName={i.toString()} />);
  }

  return (
    <>
      <main className='MainContainer flex flex-col'>
        <section className='Title m-5 text-center'>
          <h1>SisBrew Number Caller</h1>
        </section>
        <section className='Order m-2 mb-5'>
          <h2>Order Number</h2>
          <div className='grid grid-cols-5 mt-2 gap-x-2 gap-y-5'>
            {orderButtons}
          </div>
        </section>
        <section className='Notice m-2'>
          <h2>Notice</h2>

          <div className='grid grid-cols-3 mt-2 gap-x-1 gap-y-5'>
            <AudioButton audioName='Welcome' />
            <AudioButton audioName='Thanks' />
            <AudioButton audioName='Claygo' />
          </div>
        </section>
      </main>
    </>
  );
}
