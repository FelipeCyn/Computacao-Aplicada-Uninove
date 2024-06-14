import profile from "../../assets/loginBackground.jpg";
import styles from "./ProfileHeader.module.css";

export const ProfileHeader = ({ name, artsCount, image }) => {
  return (
    <div className={styles.container}>
      <img width={80} height={80} className={styles.profilePhoto} src={image} />
      <label className={styles.topics}>Nome: {name}</label>
      <label className={styles.topics}>Total de artes: {artsCount}</label>
    </div>
  );
};

export default ProfileHeader;
