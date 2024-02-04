import OrderButton from '@/components/OrderButton';
export default function Home() {
  const orderButtons = [];

  for (let i = 1; i <= 20; i++) {
    orderButtons.push(<OrderButton key={i} orderNumber={i.toString()} />);
  }

  return <div className='grid grid-cols-4 gap-2'>{orderButtons}</div>;
}
