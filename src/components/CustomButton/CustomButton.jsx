import styles from "./CustomButton.module.css";

export const CustomButton = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {children}
    </button>
  );
};

export default CustomButton;
