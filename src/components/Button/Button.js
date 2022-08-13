import styles from "./Button.module.css";

const ButtonWrapper = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
};

const BlockButton = ({ children, type = 'button', onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${styles.blockButton}`}>
      {children}
    </button>
  );
};

const SuccessButton = ({ children, type = 'button', onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${styles.successButton}`}>
      {children}
    </button>
  );
};

const ErrorButton = ({ children, type = 'button', onClick}) => {
  return (
    <button type={type} onClick={onClick} className={`${styles.button} ${styles.errorButton}`}>
      {children}
    </button>
  );
};

export { ButtonWrapper, BlockButton, SuccessButton, ErrorButton };
