import { useCounter } from '../../hooks/useCounter';
import ReduxCounter from './ReduxCounter';

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(5);

  return (
    <>
      <section>
        <h1>Counter</h1>
        <p>Value of counter: {counter}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
      <ReduxCounter />
    </>
  );
};

export default Counter;
