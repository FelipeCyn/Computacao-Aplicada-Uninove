import styles from "./CustomInput.module.css";

export const CustomInput = ({ title, onChange, value, type }) => {
  return (
    <div className={styles.container}>
      <label className={styles.title}>{title}</label>
      <input
        type={type === "password" ? "password" : "text"}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default CustomInput;
