import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import Header from "../../components/Header/Header";
import ImageUploadCircle from "../../components/ImageUploadCircle/ImageUploadCircle";
import { UserContainer } from "../../container/userContainer";
import styles from "./Register.module.css";

const Register = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const { setUser } = UserContainer.useContainer();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUser(storedUserData);
      navigation("/home");
    }
  }, [navigation, setUser]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleSubmit = () => {
    const userData = {
      image,
      name,
      email,
      password,
    };
    saveUserDataToLocal(userData);
    setUser(userData);
    navigation("/");
  };

  const saveUserDataToLocal = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.subContainer}>
        <div className={styles.leftSubContainer}></div>
        <div className={styles.rightSubContainer}>
          <label className={styles.title}>Crie sua conta</label>
          <div className={styles.formContainer}>
            <ImageUploadCircle
              image={image}
              onImageUpload={handleImageUpload}
            />
            <CustomInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              title='Nome'
            />
            <CustomInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              title='Email'
            />
            <CustomInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              title='Senha'
            />
          </div>
          <div style={{ justifyContent: "center" }}>
            <CustomButton onClick={handleSubmit}>Criar</CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
