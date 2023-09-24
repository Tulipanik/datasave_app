import styles from "./App.module.css";
import textLogo from "./images/text.png";
import { Bar } from "./Bar.js";
import { SquareContent, DescriptionContent, Header } from "./Content.js";

function App() {
  return (
    <div className={styles.App}>
      <Bar />
      <Start />
      <DescriptionContent />
      <SquareContent />
      <Footer />
    </div>
  );
}

const Start = () => {
  const startQuote = "Witamy w serwisie <br /> sprzętu biurowego";
  return (
    <div className={styles.startBackground}>
      <div className={styles.start}>
        <div className={styles.background}></div>
        <h1 dangerouslySetInnerHTML={{ __html: startQuote }}></h1>
        <img src={textLogo} alt="text" />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Header title="Skontaktuj się z nami" />
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

  return <p>{addr}</p>;
};

const Hours = () => {
  const hours =
    "Godziny pracy: \n 8:00 - 16:00 \n W razie poważnych awarii godziny serwisu są ustalane indywidualnie.";

  return <p>{hours}</p>;
};

const Form = () => {
  const arr = ["Imię i Nazwisko", "Telefon", "E-mail"];
  return (
    <div className={styles.formContainer}>
      <form>
        {arr.map((val, key) => {
          console.log(key);
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
  return <p>{copyright}</p>;
};

export default App;
