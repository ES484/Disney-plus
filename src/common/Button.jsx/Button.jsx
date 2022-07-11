import React from 'react';
import styles from './Button.module.css';

function Button({text}) {
  return (
    <div>
        <button className={styles.buttonStyle} text={text}>{text}</button>
    </div>
  )
}

export default Button