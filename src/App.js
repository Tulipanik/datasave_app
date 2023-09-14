import styles from "./App.module.css";
import { Bar } from "./Bar.js";
import textLogo from "./images/text.png";

function App() {
  return (
    <div className={styles.App}>
      <Bar />
      <Start />
      <GetDescription />
      <GetHeader title="O nas" />
      <GetHeader title="Oferta" />
      <SquareMenu />
      <Footer />
    </div>
  );
}

const Start = () => {
  const startQuote = "Witamy w serwisie sprzętu biurowego";
  return (
    <div>
      {startQuote}
      <img src={textLogo} alt="text" />
    </div>
  );
};

const GetDescription = () => {
  const descr =
    "Zajmujemy się profesjonalną obsługą serwisową urządzeń biurowych. Mamy 22-letnie doświadczenie w dziedzinie serwisu kserokopiarek, drukarek, oraz sieci komputerowych. Wykonujemy instalacje kamer monitoringu wizyjnego, oraz kontroli dostępu.";
  return <p>{descr}</p>;
};

const GetHeader = (props) => {
  return <h2>{props.title}</h2>;
};

const SquareMenu = () => {
  const listOne = [
    "kserokopiarki",
    "drukarki (laserowe)",
    "telefaksy",
    "centrale telefoniczne",
  ];
  const listTwo = [
    "konserwacja i instalacja systemów operacyjnych",
    "konserwacja sprzętu komputerowego",
    "kopie zapasowe danych",
    "ogólna pomoc w zakresie obsługi komputera",
  ];
  const listThree = [
    "konserwacja",
    "modernizacja",
    "projektowanie i budowa nowych sieci",
  ];
  const listFour = [
    "konserwacja kamer",
    "bieżące naprawy systemów",
    "rozbudowa istniejących systemów",
    "projektowanie i budowa nowych systemów",
  ];
  return (
    <div>
      <Square
        begin="Sprzedaż, konserwacja, naprawa oraz instalacja sprzętu biurowego"
        list={listOne}
        end="Zajmujemy się sprzętem marek:
Konixa minolta, Sharp, Ricoh, Panasonic, Hewlett-Packard oraz Canon"
      />
      <Square
        begin="Sprzedaż, konserwacja oraz instalacja sprzętu klasy PC"
        list={listTwo}
        end=""
      />
      <Square begin="Obsługa sieci komputerowych" list={listThree} end="" />
      <Square begin="Systemy monitoringu" list={listFour} end="" />
    </div>
  );
};

const Square = (props) => {
  const arr = props.list;
  return (
    <div>
      {props.begin}
      <ul>
        {arr.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
      {props.end}
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <GetHeader title="Skontaktuj się z nami" />
      <Address />
      <Hours />
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

export default App;
