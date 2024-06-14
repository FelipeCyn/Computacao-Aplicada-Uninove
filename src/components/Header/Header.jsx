import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.container}>
      <Link asChild to='/'>
        <img width={100} src={Logo} />
      </Link>
    </div>
  );
};

export default Header;
