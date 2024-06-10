import { useRef } from 'react';

const Search = () => {
  const heroNameRef = useRef<HTMLInputElement>(null);
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // Optionnal Chaining
    console.log(heroNameRef.current?.value);
    // document.querySelector('#hero-name').value
  };
  return (
    <section>
      <h1>Search Hero</h1>
      <form onSubmit={onSubmitHandler}>
        <fieldset>
          <label htmlFor='hero-name'>Hero:</label>
          <input ref={heroNameRef} type='text' id='hero-name' name='hero-name' />
        </fieldset>
        <button>Search</button>
      </form>
    </section>
  );
};

export default Search;
