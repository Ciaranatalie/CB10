function Counter () {
    return (
        <div className={classNames(styles.counter)}>
            <button>
                <IconMinus></IconMinus>
            </button>
            <button>0</button>
            <button>
                <IconPlus></IconPlus>
            </button>
        </div>
    );
}

export default Counter;