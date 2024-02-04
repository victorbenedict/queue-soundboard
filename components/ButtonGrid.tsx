import { Button } from '@nextui-org/button';

export default function ButtonGrid() {
  const buttons = [];

  for (let i = 1; i <= 20; i++) {
    buttons.push(<Button key={i}>{i}</Button>);
  }

  const rows = [];
  for (let i = 0; i < 4; i++) {
    const cols = [];
    for (let j = 0; j < 5; j++) {
      cols.push(
        <div key={j} style={{ margin: '5px' }}>
          {buttons[i * 5 + j]}
        </div>
      );
    }
    rows.push(
      <div key={i} style={{ display: 'flex' }}>
        {cols}
      </div>
    );
  }

  return <>{rows}</>;
}
