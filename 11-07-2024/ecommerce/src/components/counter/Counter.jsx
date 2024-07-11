import IconPlus from './components/icons/IconPlus';
import IconMinus from './components/icons/IconMinus';

function Counter () {
    return (
        <div className={classNames(styles.counter)}>
            <button>
                <IconMinus/>
            </button>
            <button>0</button>
            <button>
                <IconPlus/>
            </button>
        </div>
    );
}

export default Counter;