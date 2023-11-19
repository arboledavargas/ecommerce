import styles from "./menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  return (
    <div className={styles.menu_container}>
      <div className={styles.menu}>
        <FontAwesomeIcon icon={faHouse} className={styles.active} />
        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  );
}
