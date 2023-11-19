import styles from "./App.module.css";
import Menu from "./components/menu";
import HomePage from "./pages/home";

function App() {
  return (
    <div className={styles.app}>
      <HomePage />
      <Menu />
    </div>
  );
}

export default App;
