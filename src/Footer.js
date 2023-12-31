import { Header } from "./Content";
import styles from "./assets/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Header id="kontakt" title="Skontaktuj się z nami" />
      <div className={styles.footerContainer}>
        <div className={styles.contact}>
          <Address />
          <Hours />
        </div>
        <Form />
      </div>
      <Copyright />
    </div>
  );
};

const Address = () => {
  const addr =
    "Adres serwisu: \n Ul. Kwaitowa 24 \n 06-400 Ciechanów \n tel. 604485 827";

  return (
    <div className={styles.address}>
      {addr.split("\n").map((line, key) => {
        return <p key={key}>{line}</p>;
      })}
    </div>
  );
};

const Hours = () => {
  const hours =
    "Godziny pracy: \n 8:00 - 16:00 \n W razie poważnych awarii godziny serwisu są ustalane indywidualnie.";

  return (
    <div className={styles.hours}>
      {hours.split("\n").map((line, key) => {
        return <p key={key}>{line}</p>;
      })}
    </div>
  );
};

const Form = () => {
  const arr = ["Imię i Nazwisko", "Telefon", "E-mail"];
  return (
    <div className={styles.formContainer}>
      <form>
        {arr.map((val, key) => {
          return <Input id={Number(key) + 1} name={val} />;
        })}
        <div>
          <label htmlFor={4}>Wiadomość</label>
          <textarea name={4} id={4} />
        </div>
        <button>Wyślij</button>
      </form>
    </div>
  );
};

const Input = (props) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.name}</label>
      <input name={props.name} id={props.id} />
    </div>
  );
};

const Copyright = () => {
  const copyright =
    "Copyright ©2016 DATA SAVE Serwis kserokopiarek, All Rights Reserved.";
  return <p className={styles.copyright}>{copyright}</p>;
};
