import { ButtonProps } from "./Button.interface";
import styles from "./Button.module.scss"

const Button = ({text, size}: ButtonProps) => {

  return (
    <button className={`${styles.button} ${size === 'small' ? styles.buttonSmall : ''}`}>{text}</button>
  );
}

export default Button;