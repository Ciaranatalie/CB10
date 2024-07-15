import styles from './Counter.module.css'

import classNames from 'classnames';
import IconPlus from './components/icons/IconPlus';
import IconMinus from './components/icons/IconMinus';

function Counter () {
    return (
        <div className={classNames(styles.counter)}>
            <button>
                <IconMinus/>
            </button>
            <div>0</div>
            <button>
                <IconPlus/>
            </button>
        </div>
    );
}

export default Counter;