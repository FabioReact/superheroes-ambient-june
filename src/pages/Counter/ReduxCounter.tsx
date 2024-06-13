import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { decrement, increment, reset } from '../../redux/reducers/counterSlice';

const ReduxCounter = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <section>
      <h1>Redux Counter</h1>
      <p>Value of counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </section>
  );
};

export default ReduxCounter;
