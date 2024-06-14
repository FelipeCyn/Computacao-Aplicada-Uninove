import CustomButton from "../CustomButton/CustomButton";
import styles from "./ArtCard.module.css";

export const ArtCard = ({
  art,
  name,
  description,
  download,
  remove,
  index,
}) => {
  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = art;
    link.download = name || "image";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className={styles.container}>
      <div>
        <img width={300} src={art} />
      </div>
      <div className={styles.subContainer}>
        <label className={styles.titulo}>Titulo</label>
        <label className={styles.name}>{name}</label>
        <label className={styles.titulo}>Descrição</label>
        <label className={styles.description}>{description}</label>
        <div className={styles.actionsContainer}>
          <CustomButton onClick={downloadImage}>Baixar</CustomButton>
          <CustomButton onClick={() => remove(index)}>Excluir</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
