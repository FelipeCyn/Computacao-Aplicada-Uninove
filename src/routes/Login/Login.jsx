import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import Header from "../../components/Header/Header";
import { UserContainer } from "../../container/userContainer";
import styles from "./Login.module.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = UserContainer.useContainer();
  const navigation = useNavigate();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUser(storedUserData);
      navigation("/home");
    }
  }, [navigation, setUser]);

  const login = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUserData &&
      email === storedUserData.email &&
      password === storedUserData.password
    ) {
      setUser(storedUserData);
      navigation("/home");
    } else {
      setError(true);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.subContainer}>
        <div className={styles.leftSubContainer}></div>
        <div className={styles.rightSubContainer}>
          <label className={styles.title}>Acesse sua conta</label>
          <div className={styles.formContainer}>
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
            {error && (
              <label className={styles.error}>Credenciais inválidas</label>
            )}
          </div>
          <div style={{ justifyContent: "center" }}>
            <CustomButton onClick={login}>Acessar</CustomButton>
          </div>
          <div className={styles.registerContainer}>
            <label className={styles.title}>Não possui conta?</label>
            <label className={styles.title}>Crie uma agora</label>
          </div>
          <Link to='/register' className={styles.link}>
            <CustomButton>Criar</CustomButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
