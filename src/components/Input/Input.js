import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.formControl}>
      <label className={`${styles.label} ${props.remainder >= 50 && styles.red}`} htmlFor={props.id}>
        {props.label} ~ {`${props.remainder}/50`}
      </label>
      <input className={styles.input} {...props} />
    </div>
  );
};

const Textarea = (props) => {
  return (
    <div className={styles.formControl}>
      <label className={styles.label} htmlFor={props.id}>
        {props.label}
      </label>
      <textarea className={styles.textarea} {...props} />
    </div>
  );
};

export { Textarea, Input };
