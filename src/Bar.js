import { useState } from "react";
import logo from "./images/logo.png";
import styles from "./App.module.css";

export const Bar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownList = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div>
      <div className={styles.bar}>
        <button onClick={dropdownList}>
          <DropdownButton />
        </button>
        <img src={logo} alt="logo" />
      </div>
      <div>{showDropdown ? <DropdownList /> : ""}</div>
    </div>
  );
};

const DropdownButton = (props) => {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const DropdownList = () => {
  const elem = ["Start", "O nas", "Oferta", "Kontakt"];
  return (
    <ul className={styles.list}>
      {elem.map((value) => {
        return <li>{value}</li>;
      })}
    </ul>
  );
};
