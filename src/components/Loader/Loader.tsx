import classNames from './loader.module.css'

export function Loader() {
    return (
        <div>
            <div className={classNames.loader}></div>
        </div>
    )
}