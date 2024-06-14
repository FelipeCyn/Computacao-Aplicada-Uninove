import CustomButton from "../../components/CustomButton/CustomButton";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import styles from "./Home.module.css";
import emoji from "../../assets/sademoji.png";
import ArtCard from "../../components/ArtCard/ArtCard";
import { UserContainer } from "../../container/userContainer";
import { useEffect, useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import ImageUploadCircle from "../../components/ImageUploadCircle/ImageUploadCircle";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [open, setOpen] = useState(false);
  const [artName, setArtName] = useState("");
  const [artDescription, setArtDescription] = useState("");
  const [artImage, setArtImage] = useState(null);
  const [arts, setArts] = useState([]);
  const { user } = UserContainer.useContainer();
  const navigation = useNavigate();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (!storedUserData) {
      navigation("/");
    } else {
      if (storedUserData.arts) {
        setArts(storedUserData.arts);
      }
    }
  }, [navigation]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setArtImage(URL.createObjectURL(file));
    }
  };

  const sendArt = () => {
    const newArt = {
      name: artName,
      description: artDescription,
      image: artImage,
    };
    const updatedArts = [...arts, newArt];
    setArts(updatedArts);
    setOpen(false);
    setArtName("");
    setArtDescription("");
    setArtImage(null);

    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedUserData = {
      ...userData,
      arts: updatedArts,
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  const removeArt = (index) => {
    const updatedArts = [...arts];
    updatedArts.splice(index, 1);
    setArts(updatedArts);

    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    const updatedUserData = {
      ...userData,
      arts: updatedArts,
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
  };

  return (
    <div className={styles.container}>
      <Header />
      <ProfileHeader
        image={user.image}
        artsCount={arts.length}
        name={user.name}
      />
      <div className={styles.subContainer}>
        {arts.length < 1 ? (
          <div className={styles.emptyArtContainer}>
            {open ? (
              <div className={styles.uploadContainer}>
                <ImageUploadCircle
                  image={artImage}
                  onImageUpload={handleImageUpload}
                />
                <CustomInput
                  value={artName}
                  onChange={(e) => setArtName(e.target.value)}
                  title='Nome da Arte'
                />
                <CustomInput
                  value={artDescription}
                  onChange={(e) => setArtDescription(e.target.value)}
                  title='Descrição da Arte'
                />
                <CustomButton onClick={() => sendArt()}>Enviar</CustomButton>
                <CustomButton onClick={() => setOpen(false)}>
                  Desistir
                </CustomButton>
              </div>
            ) : (
              <>
                <img width={50} src={emoji} alt='Sad emoji' />
                <label>
                  Parece que você não possui nenhuma arte no momento
                </label>
                <CustomButton onClick={() => setOpen(true)}>
                  Fazer upload de arte
                </CustomButton>
              </>
            )}
          </div>
        ) : (
          <div className={styles.artContainer}>
            {arts.map((art, index) => (
              <ArtCard
                key={index}
                index={index}
                description={art.description}
                name={art.name}
                art={art.image}
                remove={() => removeArt(index)}
              />
            ))}
            <div className={styles.uploadContainer}>
              <ImageUploadCircle
                image={artImage}
                onImageUpload={handleImageUpload}
              />
              <CustomInput
                value={artName}
                onChange={(e) => setArtName(e.target.value)}
                title='Nome da Arte'
              />
              <CustomInput
                value={artDescription}
                onChange={(e) => setArtDescription(e.target.value)}
                title='Descrição da Arte'
              />
              <CustomButton onClick={() => sendArt()}>Enviar</CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
