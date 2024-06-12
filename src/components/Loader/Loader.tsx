import classNames from './loader.module.css';

export function Loader() {
  return (
    <div className='text-center' role='status' aria-busy='true'>
      <div className={classNames.loader}></div>
    </div>
  );
}
