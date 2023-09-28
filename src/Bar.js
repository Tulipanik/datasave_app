import { useState } from "react";
import logo from "./images/logo.png";
import styles from "./assets/Bar.module.css";

export const Bar = () => {
  const [showDropdown, setShowDropdown] = useState(true);

  const dropdownList = () => {
    setShowDropdown(!showDropdown);
    console.log(showDropdown);
  };
  return (
    <div>
      <div className={styles.bar}>
        <button className={styles.button} onClick={dropdownList}>
          <DropdownButton />
        </button>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {showDropdown ? (
          <DropdownList />
        ) : (
          <div style={{ display: "none" }}></div>
        )}
      </div>
    </div>
  );
};

const DropdownButton = (props) => {
  return (
    <div>
      <div className={styles.strip1}></div>
      <div className={styles.strip}></div>
      <div className={styles.strip}></div>
    </div>
  );
};

const DropdownList = () => {
  const elem = ["Start", "O nas", "Oferta", "Kontakt"];
  const link = ["#start", "#oNas", "#oferta", "#kontakt"];
  return (
    <ul className={styles.dropdown}>
      {elem.map((value, key) => {
        return (
          <li key={key}>
            <a href={link[key]}>{value}</a>
          </li>
        );
      })}
    </ul>
  );
};
