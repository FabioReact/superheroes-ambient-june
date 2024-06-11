import { useEffect, useRef, useState } from 'react';

const UseEffectComponent = () => {
  const [counter, setCounter] = useState(0);
  const mountedRef = useRef(false);
  const numberOfRendersRef = useRef(0);
  useEffect(() => {
    console.log("Après le premier rendu de l'UI");
    return () => {
      console.log('Destruction du composant - []');
    };
  }, []);

  useEffect(() => {
    console.log("Après le premier rendu de l'UI ET la mise à jour de counter");
    numberOfRendersRef.current++;
    console.log(numberOfRendersRef.current);
    if (mountedRef.current) {
      console.log('Uniquement lors des mise à jour de counter');
    }
    mountedRef.current = true;
    return () => {
      console.log(`Destruction du composant - [counter: ${counter}]`);
    };
  }, [counter]);

  console.log('Corps du composant');
  return (
    <section>
      <h1>Learn useEffect hook</h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>Counter: {counter}</button>
    </section>
  );
};

export { UseEffectComponent };
