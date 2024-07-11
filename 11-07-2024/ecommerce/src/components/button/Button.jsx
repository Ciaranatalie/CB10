import classNames from "classnames";
import styles from './button.module.css';

function Button({children, text="Add to cart"}) {

    return (
        <button className={classNames(styles.button)}>
            {children}
            {text}
        </button>
    )
}

export default Button;