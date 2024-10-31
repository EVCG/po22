import React from 'react';
import styles from '../components/login.module.css'; 
import logo from '../img/logo.png';
import Image from "next/image";

export default function Login() {
  return (
  
      <div className={styles.login_container}>
        <div className={styles.login_box}>
          <div className={styles.logo_container}>
            <Image src={logo} alt="CEUB Logo" className={styles.logo} />
          </div>
          <form className={styles.login_form}>
            <input type="email" placeholder="E-mail" className={styles.input_field} />
            <input type="password" placeholder="Senha" className={styles.input_field} />
            <button type="submit" className={styles.login_button}>ENTRAR</button>
            <a href="#" className={styles.forgot_password}>Esqueci minha senha</a>
          </form>
          <div className={styles.logo_container2}>fdasfcsadcdascsd
            {/* <Image src={logo2} alt="CEUB Logo" className={styles.logo} /> */}
          </div>
        </div>
      </div>
  );
}
