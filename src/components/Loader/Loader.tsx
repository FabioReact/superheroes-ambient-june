import classNames from './loader.module.css';

export function Loader() {
  return (
    <div className='text-center'>
      <div className={classNames.loader}></div>
    </div>
  );
}
