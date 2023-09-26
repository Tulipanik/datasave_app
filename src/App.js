import styles from "./assets/App.module.css";
import textLogo from "./images/text.png";
import { Bar } from "./Bar.js";
import { Footer } from "./Footer";
import { SquareContent, DescriptionContent } from "./Content.js";

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

export default App;
