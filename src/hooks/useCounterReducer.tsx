import { useEffect, useReducer } from 'react';

type State = {
  counter: number;
  stop: boolean;
};

const initialState: State = {
  counter: 0,
  stop: false,
};

enum ActionTypeEnum {
  increment = 'increment',
  stopCounter = 'stopCounter',
  resumeCounter = 'resumeCounter',
}

type Action = {
  type: ActionTypeEnum;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypeEnum.increment: {
      const newState = structuredClone(state);
      newState.counter = newState.counter + 1;
      return newState;
    }
    case ActionTypeEnum.stopCounter: {
      const newState = structuredClone(state);
      newState.stop = true;
      return newState;
    }
    case ActionTypeEnum.resumeCounter: {
      const newState = structuredClone(state);
      newState.stop = false;
      return newState;
    }
    default:
      throw new Error('Unhandled type action');
  }
};

const useCounter = () => {
  //   const [isStopped, setIsStopped] = useState(false)
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const id = setInterval(() => {
      if (!state.stop) {
        // setCounter((prevCounter) => prevCounter + 1)
        dispatch({ type: ActionTypeEnum.increment });
      }
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [state.stop]);

  const start = () => {
    // setIsStopped(false)
    dispatch({ type: ActionTypeEnum.resumeCounter });
  };

  const stop = () => {
    // setIsStopped(true)
    dispatch({ type: ActionTypeEnum.stopCounter });
  };

  const increment = () => {
    // setCounter((prevCounter) => prevCounter + 1)
    dispatch({ type: ActionTypeEnum.increment });
  };

  return { counter: state.counter, start, stop, increment };
};

export { useCounter };
