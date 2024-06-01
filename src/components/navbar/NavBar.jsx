import {
  Cart,
  ChevronDown,
  Heart,
  PersonIcon,
  Search,
} from "../../icons/icons";
import Button from "../ui/Button";
import styles from "./nav.module.css";
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h3>Bandage</h3>
      </div>
      <div className={styles.listMenu}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <button className={styles.btnSM20} style={{ padding: "0px" }}>
              <a href="#" style={{ color: "var(--yankee-blue)" }}>
                Shop
              </a>
              <ChevronDown />
            </button>
            <div className={styles.dropdownContent}>
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </li>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
        </ul>
        <div>
          <ul className={styles.ulButton}>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <PersonIcon />
                  Login / Register
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <Search />
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <Cart />
                  <small>1</small>
                </button>
              </a>
            </li>
            <li>
              <a href="#">
                <button className={styles.btnSM20}>
                  <Heart />
                  <small>1</small>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
