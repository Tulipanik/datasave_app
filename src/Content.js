import styles from "./App.module.css";
import { useEffect, useRef } from "react";

export const Header = (props) => {
  return <h2>{props.title}</h2>;
};

export const DescriptionContent = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    const width = headerRef.current.getBoundingClientRect().width;
    console.log(width);
  });

  return (
    <div ref={headerRef}>
      <Header title="O nas" />
      <div className={styles.container}>
        <Description />
      </div>
    </div>
  );
};

const Description = () => {
  const descr =
    "Zajmujemy się profesjonalną obsługą serwisową urządzeń biurowych. Mamy 22-letnie doświadczenie w dziedzinie serwisu kserokopiarek, drukarek, oraz sieci komputerowych. Wykonujemy instalacje kamer monitoringu wizyjnego, oraz kontroli dostępu.";
  return <p className={styles.descr}>{descr}</p>;
};

export const SquareContent = () => {
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
    <div className={styles.squareContent}>
      <Header title="Oferta" />
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
    <div className={styles.square}>
      <p>{props.begin}</p>
      <ul>
        {arr.map((val, key) => {
          return <li key={key}>{val}</li>;
        })}
      </ul>
      <p className={styles.end}>{props.end}</p>
    </div>
  );
};
