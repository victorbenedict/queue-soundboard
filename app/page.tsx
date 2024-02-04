import OrderButton from '@/components/OrderButton';
import { Button } from '@nextui-org/button';
export default function Home() {
  const orderButtons = [];

  for (let i = 1; i <= 20; i++) {
    orderButtons.push(<OrderButton key={i} orderNumber={i.toString()} />);
  }

  return (
    <>
      <Button>1x</Button>
      <Button>2x</Button>
      <Button>3x</Button>
      <div className='grid grid-cols-4 gap-2'>{orderButtons}</div>
    </>
  );
}
