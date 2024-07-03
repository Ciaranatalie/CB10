import React, { useState } from "react";
import randomData from "../../assets/random.json";
import { Button } from "./components/icons/button/Button";
import styles from "./Card.module.css";
import buttonStyle from "./components/icons/button/Button.module.css";
import dividerSVG from "./icons/divider.svg";
import icon from "./icons/icon.svg";

const getRandomAdvice = () => {
  const randomIndex = Math.floor(Math.random() * randomData.length);
    return adviceData[randomIndex];
};

const Card = () => {
    const [advice, setAdvice] = useState(getRandomAdvice());

    const handleNewAdvice = () => {
        setAdvice(getRandomAdvice());
    };

    return (
        <div className={styles.card}>
            <h1>ADVICE #{advice.id}</h1>
            <p>"{advice.advice}"</p>
            <img
                src={patternDividerSVG}
                alt="Pattern Divider"
                className={styles.patternDivider}
            />
            <Button onClick={handleNewAdvice}>
                <img src={iconDice} alt="icon dice" className={buttonStyle.iconDice} />
            </Button>
        </div>
    );
};

export default Card;