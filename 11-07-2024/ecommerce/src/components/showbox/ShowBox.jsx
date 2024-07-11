import classNames from "classnames";
import styles from "./ShowBox.module.css";

export default function ShowBox ({imgUrl}) {
    return (
        <div className={classNames(styles.showBox)}>
            <img src="./src/assets/images/image-product-1.jpg"></img>
        </div>
    )
}