import { memo, useCallback, useMemo, useState } from 'react';

// React.memo -> memoize les composants
// useCallback -> memoize les références à une fonction -> Obsolète avec React@19
// useMemo -> memoize le résultat d'une fonction -> Obsolète avec React@19

const Button = memo(({ onClick, children }: any) => {
  console.log('Render de Button', children);
  return <button onClick={onClick}>{children}</button>;
});

const Title = memo(({ children }: any) => {
  console.log('Render de Title');
  return <h1>{children}</h1>;
});

const expensiveCompute = (x: number, y: number) => {
  console.log('Calcul', x, y);
  let i = 2000000000;
  while (i > 0) {
    i--;
  }
  return x * y;
};

const Optimizations = () => {
  const [number, setNumber] = useState(5);
  console.log('Render de Optimizations');
  const [counter, setCouter] = useState(0);
  const incrementBy = useCallback(() => setCouter((c) => c + number), [number]);
  const increment = useCallback(() => setCouter((c) => c + 1), []); // A8C2 -> D2E4
  const decrement = useCallback(() => setCouter((c) => c - 1), []);
  const result = useMemo(() => expensiveCompute(2, number), [number]);
  return (
    <section>
      <Title>Optimizations</Title>
      <p>Counter: {counter}</p>
      <label htmlFor='incrementBy'>Value</label>
      <input
        type='number'
        id='incrementBy'
        name='incrementBy'
        value={number}
        onChange={(e) => setNumber(+e.target.value)}
      />
      <Button onClick={incrementBy}>Increment by value</Button>
      <br />
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <p>Result of expensiveCompute: {result}</p>
    </section>
  );
};

export default Optimizations;
